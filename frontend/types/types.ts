export interface UsernameDialogState {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface UsernameState {
  username: string
  setUsername: (username: string) => void
}

export interface BookReview {
  username: string
  title: string
  author: string
  review: string
}

export interface BookReviewsState {
  reviews: BookReview[]
  setReviews: (reviews: BookReview[]) => void
  fetchReviews: (username: string) => Promise<void>
}

export interface CurrentReviewState {
  currentReview: BookReview | null
  setCurrentReview: (currentReview: BookReview | null) => void
}

export interface IsAddDialogOpenState {
  isAddDialogOpen: boolean
  setIsAddDialogOpen: (isAddDialogOpen: boolean) => void
}

export interface IsEditDialogOpenState {
  isEditDialogOpen: boolean
  setIsEditDialogOpen: (isEditDialogOpen: boolean) => void
}