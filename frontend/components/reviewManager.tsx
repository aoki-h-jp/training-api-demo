'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"
import { BookReview } from '@/types/types'

export default function BookReviewManager() {
  const [reviews, setReviews] = useState<BookReview[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState<BookReview | null>(null)

  const handleAddReview = (review: BookReview) => {
    // ここでAPIを呼び出してレビューを追加します
    setReviews([...reviews, { ...review, reviewId: Date.now().toString() }])
    setIsAddDialogOpen(false)
    toast.success("レビューが追加されました", {
      description: "APIを呼び出してレビューを追加しました。",
    })
  }

  const handleUpdateReview = (review: BookReview) => {
    // ここでAPIを呼び出してレビューを更新します
    setReviews(reviews.map(r => r.reviewId === review.reviewId ? review : r))
    setIsEditDialogOpen(false)
    toast.success("レビューが更新されました", {
      description: "APIを呼び出してレビューを更新しました。",
    })
  }

  const handleDeleteReview = (reviewId: string) => {
    // ここでAPIを呼び出してレビューを削除します
    setReviews(reviews.filter(r => r.reviewId !== reviewId))
    toast.success("レビューが削除されました", {
      description: "APIを呼び出してレビューを削除しました。",
    })
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>書籍レビュー管理</CardTitle>
          <CardDescription>APIデモサイト: レビューの追加、更新、削除ができます</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ユーザー名</TableHead>
                <TableHead>タイトル</TableHead>
                <TableHead>著者</TableHead>
                <TableHead>レビュー</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.reviewId}>
                  <TableCell>{review.username}</TableCell>
                  <TableCell>{review.title}</TableCell>
                  <TableCell>{review.author}</TableCell>
                  <TableCell>{review.review.substring(0, 50)}...</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="mr-2" onClick={() => {
                      setCurrentReview(review)
                      setIsEditDialogOpen(true)
                    }}>
                      編集
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDeleteReview(review.reviewId)}>
                      削除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsAddDialogOpen(true)}>新しいレビューを追加</Button>
        </CardFooter>
      </Card>

      <ReviewDialog
        isOpen={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onSubmit={handleAddReview}
        title="新しいレビューを追加"
      />

      <ReviewDialog
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onSubmit={handleUpdateReview}
        title="レビューを編集"
        initialData={currentReview}
      />
    </div>
  )
}

type ReviewDialogProps = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onSubmit: (review: BookReview) => void
  title: string
  initialData?: BookReview | null
}

function ReviewDialog({ isOpen, onOpenChange, onSubmit, title, initialData }: ReviewDialogProps) {
  const [review, setReview] = useState<BookReview>(
    initialData || { reviewId: '', username: '', title: '', author: '', review: '' }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(review)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            レビュー情報を入力してください。すべてのフィールドが必須です。
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">ユーザー名</Label>
              <Input
                id="username"
                value={review.username}
                onChange={(e) => setReview({ ...review, username: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="title">書籍タイトル</Label>
              <Input
                id="title"
                value={review.title}
                onChange={(e) => setReview({ ...review, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="author">著者</Label>
              <Input
                id="author"
                value={review.author}
                onChange={(e) => setReview({ ...review, author: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="review">レビュー</Label>
              <Textarea
                id="review"
                value={review.review}
                onChange={(e) => setReview({ ...review, review: e.target.value })}
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">保存</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}