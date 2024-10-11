import { create } from 'zustand'
import {
  UsernameDialogState,
  UsernameState,
  BookReview,
  BookReviewsState,
  CurrentReviewState,
  IsAddDialogOpenState,
  IsEditDialogOpenState,
} from '@/types/types'

export const useUsernameDialogStore = create<UsernameDialogState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))

export const useUsernameStore = create<UsernameState>((set) => ({
  username: '',
  setUsername: (username: string) => set({ username }),
}))

export const useBookReviewsStore = create<BookReviewsState>((set) => ({
  reviews: [],
  setReviews: (reviews: BookReview[]) => set({ reviews }),
  fetchReviews: async (username: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LAMBDA_URL}/get-reviews?username=${username}`);
    const data = await response.json();
    set({ reviews: data });
  },
}))

export const useCurrentReviewStore = create<CurrentReviewState>((set) => ({
  currentReview: null,
  setCurrentReview: (currentReview: BookReview | null) => set({ currentReview })
}))

export const useIsAddDialogOpenStore = create<IsAddDialogOpenState>((set) => ({
  isAddDialogOpen: false,
  setIsAddDialogOpen: (isAddDialogOpen: boolean) => set({ isAddDialogOpen }),
}))

export const useIsEditDialogOpenStore = create<IsEditDialogOpenState>((set) => ({
  isEditDialogOpen: false,
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => set({ isEditDialogOpen }),
}))
