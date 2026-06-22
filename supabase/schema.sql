-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Users Table (matches Supabase Auth)
create table public.users (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  workspace_slug text unique not null,
  stripe_customer_id text,
  subscription_status text default 'active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Reviews Table
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  customer_name text not null,
  customer_role text,
  rating integer not null check (rating >= 1 and rating <= 5),
  review_text text not null,
  is_approved boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Performance Indexes
create index reviews_user_id_idx on public.reviews(user_id);
create index reviews_is_approved_idx on public.reviews(is_approved);

-- Security: Enable Row Level Security (RLS)
alter table public.users enable row level security;
alter table public.reviews enable row level security;

-- Policies for Users Table
create policy "Users can view own data" on public.users
  for select using (auth.uid() = id);

-- Note: UPDATE policy removed to prevent users from spoofing subscription_status via the REST API.
-- Updates to user profiles should be handled strictly via secure Server Actions.

-- Policies for Reviews Table
-- Workspace owners can fully manage their own reviews
create policy "Users can view own reviews" on public.reviews
  for select using (auth.uid() = user_id);

create policy "Users can update own reviews" on public.reviews
  for update using (auth.uid() = user_id);

create policy "Users can delete own reviews" on public.reviews
  for delete using (auth.uid() = user_id);

-- Anonymous users can ONLY insert unapproved reviews. 
create policy "Anyone can insert reviews" on public.reviews
  for insert with check (is_approved = false);

-- The public can read approved reviews for the iframe widget
create policy "Public can view approved reviews" on public.reviews
  for select using (is_approved = true);

-- 3. Trigger to auto-create public.users row from auth.users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
declare
  base_slug text;
  final_slug text;
begin
  base_slug := lower(regexp_replace(coalesce(new.email, 'workspace'), '@.*$', ''));
  final_slug := base_slug || '-' || substr(md5(random()::text), 1, 6);

  insert into public.users (id, email, workspace_slug)
  values (new.id, new.email, final_slug);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
