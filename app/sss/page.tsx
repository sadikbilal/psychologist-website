import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Terapi seansları ne kadar sürüyor?",
    answer: "Terapi seansları genellikle 50 dakika sürmektedir. İlk seans tanışma ve değerlendirme amaçlı olduğu için 60-90 dakika sürebilir."
  },
  {
    question: "Terapi ücretleri nedir?",
    answer: "Terapi ücretleri, hizmet türüne ve süresine göre değişiklik göstermektedir. Detaylı bilgi için lütfen bizimle iletişime geçin."
  },
  {
    question: "Online terapi hizmeti veriyor musunuz?",
    answer: "Evet, online terapi hizmeti sunmaktayız. Zoom veya benzer bir platform üzerinden güvenli bir şekilde seanslarımızı gerçekleştirebiliyoruz."
  },
  {
    question: "Terapi süreci ne kadar devam eder?",
    answer: "Terapi süreci kişiye ve sorunun doğasına göre değişiklik gösterir. Bazı danışanlar için birkaç seans yeterliyken, bazıları için daha uzun süreli bir terapi gerekebilir."
  },
  {
    question: "Gizlilik politikanız nedir?",
    answer: "Danışan gizliliği bizim için çok önemlidir. Yasal zorunluluklar dışında, danışan bilgileri ve seans içerikleri kesinlikle gizli tutulur ve üçüncü şahıslarla paylaşılmaz."
  }
]

export default function FAQ() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold mb-6">Sıkça Sorulan Sorular</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

