"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hoş Geldiniz</h1>
        <p className="text-xl mb-6">Profesyonel psikolojik danışmanlık hizmetleri</p>
        <Button asChild size="lg">
          <Link href="/randevu">Ücretsiz Danışma Planla</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div animate={{ y: 100}}>
          {['Bireysel Terapi', 'Çift Terapisi', 'Çocuk Terapisi'].map((service) => (
            <Card key={service}>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur a</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href={`/hizmetler#${service.toLowerCase().replace(' ', '-')}`}>Detaylar</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
            </motion.div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Hakkımda</h2>
        <p className="mb-4">
          Uzman psikolog olarak, bireylerin ruh sağlığını iyileştirmek ve yaşam kalitelerini artırmak için çalışıyorum.
          Uzmanlık alanlarım arasında stres yönetimi, anksiyete tedavisi ve ilişki danışmanlığı bulunmaktadır.
        </p>
        <Button asChild variant="outline">
          <Link href="/hakkinda">Daha Fazla Bilgi</Link>
        </Button>
      </section>
    </div>
  )
}

