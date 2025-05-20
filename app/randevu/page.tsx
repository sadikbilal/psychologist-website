'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Appointment() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    alert('Randevu talebiniz alındı. En kısa sürede size geri dönüş yapılacaktır.')
  }

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-6">Randevu Al</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Randevu Tarihi Seçin</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Kişisel Bilgiler</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="message">Mesajınız (Opsiyonel)</Label>
                <Textarea id="message" />
              </div>
              <Button type="submit">Randevu Talebi Gönder</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

