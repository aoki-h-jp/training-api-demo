import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDialogStore, useUsernameStore } from "@/hooks/hooks"

export default function UsernameDialog() {
  const { isOpen, setIsOpen } = useDialogStore()
  const { username, setUsername } = useUsernameStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      // ここでユーザー名を保存したり、他の処理を行ったりします
      console.log('Username submitted:', username)
      setIsOpen(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ユーザー名を入力してください</DialogTitle>
          <DialogDescription>
            続行するにはユーザー名を入力してください。
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">ユーザー名</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ユーザー名を入力"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            送信
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
