'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateReviewStatus(reviewId: string, isApproved: boolean) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Unauthorized');
  }

  const { error } = await supabase
    .from('reviews')
    .update({ is_approved: isApproved })
    .eq('id', reviewId)
    .eq('user_id', user.id);

  if (error) {
    throw new Error('Failed to update status');
  }

  revalidatePath('/dashboard');
}
