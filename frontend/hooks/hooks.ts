import { create } from 'zustand'
import { DialogState, UsernameState } from '@/types/types'

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}))

export const useUsernameStore = create<UsernameState>((set) => ({
  username: '',
  setUsername: (username: string) => set({ username }),
}))