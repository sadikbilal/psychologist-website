import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const services = [
  {
    title: 'Bireysel Terapi',
    description: 'Kişisel sorunlarınızı çözmek ve kendinizi daha iyi anlamak için bireysel terapi seansları.',
    forWhom: ['Yetişkinler', 'Ergenler']
  },
  {
    title: 'Çift Terapisi',
    description: 'İlişkinizi güçlendirmek ve iletişim becerilerinizi geliştirmek için çift terapisi.',
    forWhom: ['Evli Çiftler', 'Birlikte Yaşayan Çiftler']
  },
  {
    title: 'Çocuk Terapisi',
    description: 'Çocukların duygusal ve davranışsal sorunlarını ele almak için özel tasarlanmış terapi seansları.',
    forWhom: ['Çocuklar (3-12 yaş)']
  },
  {
    title: 'Aile Terapisi',
    description: 'Aile içi iletişimi güçlendirmek ve sorunları çözmek için aile terapisi seansları.',
    forWhom: ['Tüm Aile Üyeleri']
  },
  {
    title: 'Stres Yönetimi',
    description: 'Günlük yaşamın stresini azaltmak ve baş etme becerilerini geliştirmek için özel programlar.',
    forWhom: ['Yetişkinler', 'İş Profesyonelleri']
  },
  {
    title: 'Anksiyete Tedavisi',
    description: 'Anksiyete ve panik bozukluklarıyla başa çıkmak için etkili terapi yöntemleri.',
    forWhom: ['Tüm Yaş Grupları']
  }
]

export default function Services() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-6">Hizmetlerim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.title}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <h3 className="font-semibold mb-2">Hedef Kitle:</h3>
              <ul className="list-disc list-inside">
                {service.forWhom.map((target) => (
                  <li key={target}>{target}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

