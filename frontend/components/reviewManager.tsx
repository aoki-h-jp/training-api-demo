'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "sonner"
import { BookReview } from '@/types/types'
import {
  useUsernameStore,
  useBookReviewsStore,
  useCurrentReviewStore,
  useIsAddDialogOpenStore,
  useIsEditDialogOpenStore,
} from '@/hooks/hooks'

export default function BookReviewManager() {
  const { reviews, setReviews } = useBookReviewsStore()
  const { currentReview, setCurrentReview } = useCurrentReviewStore()
  const { isAddDialogOpen, setIsAddDialogOpen } = useIsAddDialogOpenStore()
  const { isEditDialogOpen, setIsEditDialogOpen } = useIsEditDialogOpenStore()
  const { username } = useUsernameStore()

  const [isLoading, setIsLoading] = useState(true)

  // GET
  useEffect(() => {
    if (!username) {
      const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_LAMBDA_URL}/get-reviews?username=${username}`)
        if (!response.ok) {
          console.error("Failed to fetch reviews", response);
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json()
        setReviews(data)
        setIsLoading(false)
      }
      fetchData()
    }
  }, [username])

  // POST
  const handleAddReview = async (review: BookReview) => {
    try {
      toast.info("レビューを追加しています...", {
        description: "APIを呼び出してレビューを追加します。",
      });
      const response = await fetch(`${process.env.NEXT_PUBLIC_LAMBDA_URL}/add-review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://training-api-demo.vercel.app',
          'Access-Control-Request-Method': 'POST',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('Failed to add review');
      }

      const responseText = await response.text();
      console.log('Response Text:', responseText);

      const newReview = JSON.parse(responseText);
      console.log("newReview", newReview);
      setReviews([...reviews, newReview]);
      setIsAddDialogOpen(false);
      toast.success("レビューが追加されました", {
        description: "APIを呼び出してレビューを追加しました。",
      });
    } catch (error) {
      console.error('Error adding review:', error);
      toast.error("レビューの追加に失敗しました", {
        description: "API呼び出し中にエラーが発生しました。",
      });
    }
  };

  // PUT
  const handleUpdateReview = (review: BookReview) => {
    setReviews(reviews.map(r => r.title === review.title ? review : r))
    setIsEditDialogOpen(false)
    toast.success("レビューが更新されました", {
      description: "APIを呼び出してレビューを更新しました。",
    })
  }

  // DELETE
  const handleDeleteReview = (title: string) => {
    setReviews(reviews.filter(r => r.title !== title))
    toast.success("レビューが削除されました", {
      description: "APIを呼び出してレビューを削除しました。",
    })
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading ? ( // ローディング中の表示
        <p>レビューを読み込んでいます...</p>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>書籍レビュー管理</CardTitle>
            <CardDescription>書籍レビューの追加 (POST)、更新 (PUT)、削除 (DELETE) ができます</CardDescription>
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
                {reviews.map((review: BookReview) => (
                  <TableRow key={review.title}>
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
                      <Button variant="destructive" size="sm" onClick={() => handleDeleteReview(review.title)}>
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
      )}

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
  const { username } = useUsernameStore()
  const [review, setReview] = useState<BookReview>(
    initialData || { username: username, title: '', author: '', review: '' }
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
                disabled
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