'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission here
    alert('Mesajınız alındı. En kısa sürede size geri dönüş yapılacaktır.')
  }

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-6">İletişim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>İletişim Bilgileri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><strong>Adres:</strong> Burç Mahallesi, Nur Cami Sokak, Kat:2, Daire:10, Merkez/Burdur</p>
            <p className="mb-2"><strong>Telefon:</strong> +90 (212) 123 45 67</p>
            <p className="mb-2"><strong>E-posta:</strong> psikologsultantosun@gmail.com</p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.25584290349155!2d30.281499425761247!3d37.71748343086742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c42c2469f4dd33%3A0xf70822a8f690a030!2sBurdur%20Polis%20Evi!5e0!3m2!1str!2str!4v1734782169432!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bize Ulaşın</CardTitle>
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
                <Label htmlFor="subject">Konu</Label>
                <Input id="subject" required />
              </div>
              <div>
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea id="message" required />
              </div>
              <Button type="submit">Mesaj Gönder</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

