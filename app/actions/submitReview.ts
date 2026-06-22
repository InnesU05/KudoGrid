'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function submitReviewAction(
  formData: FormData, 
  workspaceSlug: string, 
  rating: number
) {
  const name = (formData.get('name') as string)?.trim();
  const role = (formData.get('role') as string)?.trim();
  const reviewText = (formData.get('review') as string)?.trim();

  if (!name || !reviewText || rating < 1 || rating > 5) {
    return { error: 'Invalid input' };
  }

  if (name.length > 100 || (role && role.length > 100) || reviewText.length > 2000) {
    return { error: 'Input too long. Please keep reviews under 2000 characters.' };
  }

  const supabase = await createClient();

  // 1. Find user_id
  const { data: userData, error: userError } = await supabase
    .from('users')
    .select('id')
    .eq('workspace_slug', workspaceSlug)
    .single();

  if (userError || !userData) {
    return { error: 'Workspace not found' };
  }

  // 2. Insert Review
  const { error } = await supabase
    .from('reviews')
    .insert({
      user_id: userData.id,
      customer_name: name,
      customer_role: role,
      rating,
      review_text: reviewText,
      is_approved: false
    });

  if (error) {
    return { error: 'Failed to submit review' };
  }

  revalidatePath('/dashboard');
  return { success: true };
}
