'use client'

import { useEffect } from 'react'
import UsernameDialog from '@/components/usernameDialog'
import { useDialogStore, useUsernameStore } from '@/hooks/hooks'

export default function UsernameModal() {
  const { isOpen, setIsOpen } = useDialogStore()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <title>training-api-demo</title>
      {isOpen ? <UsernameDialog /> : null}
    </>
  )
}