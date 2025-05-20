import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sultan Tosun</h1>
        <p className="text-xl text-muted-foreground">Uzman Klinik Psikolog</p>
      </section>

      <section className="flex flex-col md:flex-row gap-8">
        <div className="flex justify-center md:justify-start bg-gray-100 p-2 rounded-lg shadow-lg">
          <Image
            src="/images/profile_no_bg.png?height=300&width=200"
            alt="Dr. Sultan Tosun"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl font-semibold">Merhaba, ben Sultan Tosun</h2>
          <p className="text-lg">
                Lefke Avrupa Üniversitesi’nde
                Psikoloji Lisans Programını tam burslu ve yüksek onur derecesi ile tamamladım. 
                BDT odaklı çocuk, genç, yetişkin, yas ve oyun terapisti olarak çalışmaktayım. Yüz yüze ve online danışmanlık hizmeti için aranızdayım.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Depresyon', 'Anksiyete', 'İlişki Sorunları', 'Travma', 'Stres Yönetimi'].map((specialty) => (
              <Badge key={specialty} variant="secondary">{specialty}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Eğitim ve Deneyim</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Doktora - Klinik Psikoloji</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lefke Üniversitesi, 2005-2010</p>
              <p>Tez: "Travma Sonrası Stres Bozukluğunda Bilişsel Davranışçı Terapinin Etkinliği"</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Deneyim - Çalışılan yer</CardTitle>
            </CardHeader>
            <CardContent>
              <p></p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Yaklaşımım</h2>
        <p className="text-lg mb-4">
          Terapötik yaklaşımımda, her bireyin benzersiz olduğuna ve kişiye özel bir tedavi planı gerektiğine inanıyorum. 
          Bilişsel Davranışçı Terapi, EMDR ve Mindfulness tekniklerini bütünleştirerek, danışanlarımın ihtiyaçlarına en uygun 
          yöntemleri kullanıyorum.
        </p>
        <p className="text-lg">
          Amacım, danışanlarımın içsel güçlerini keşfetmelerine, zorluklarla başa çıkma becerilerini geliştirmelerine ve 
          daha doyumlu bir yaşam sürmelerine yardımcı olmaktır.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Sertifikalar ve Üyelikler</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Türk Psikologlar Derneği Üyesi</li>
          <li>EMDR Derneği Sertifikalı Uygulayıcı</li>
          <li>Avrupa Bilişsel Davranışçı Terapiler Birliği (EABCT) Üyesi</li>
          <li>Mindfulness Temelli Stres Azaltma (MBSR) Eğitimi</li>
          <li>Çift Terapisi İleri Düzey Eğitimi</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Medya ve Yayınlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Kitap: "Stresle Başa Çıkma Sanatı"</CardTitle>
            </CardHeader>
            <CardContent>
              <p>2018 yılında yayınlanan bu kitapta, günlük yaşamda stresi yönetmek için pratik teknikler sunuyorum.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TRT 2 - Psikoloji Programı</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aylık olarak yayınlanan "Ruh Hali" programında uzman konuk olarak yer alıyorum.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Makale: "Pandemi Döneminde Ruh Sağlığı"</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Türk Psikiyatri Dergisi'nde yayınlanan bu makalede, COVID-19'un ruh sağlığı üzerindeki etkilerini inceliyorum.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Podcast: "İyi Yaşam"</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Haftalık yayınlanan bu podcast'te, ruh sağlığı ve kişisel gelişim konularında bilgiler paylaşıyorum.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

