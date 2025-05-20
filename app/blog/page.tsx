import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const blogPosts = [
  {
    id: 1,
    title: 'Stresle Başa Çıkma Yöntemleri',
    excerpt: 'Günlük hayatın stresini azaltmak için etkili yöntemler...',
    date: '2023-06-01'
  },
  {
    id: 2,
    title: 'İlişkilerde İletişimin Önemi',
    excerpt: 'Sağlıklı bir ilişki için etkili iletişim teknikleri...',
    date: '2023-05-15'
  },
  {
    id: 3,
    title: 'Çocuklarda Kaygı Bozuklukları',
    excerpt: 'Çocuklarda görülen kaygı bozuklukları ve tedavi yöntemleri...',
    date: '2023-04-28'
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                  Devamını Oku
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

