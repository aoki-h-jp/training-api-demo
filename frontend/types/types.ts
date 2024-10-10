export interface DialogState {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export interface UsernameState {
  username: string
  setUsername: (username: string) => void
}

export interface BookReview {
  reviewId: string
  username: string
  title: string
  author: string
  review: string
}
