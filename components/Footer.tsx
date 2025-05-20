import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Sultan Tosun</h3>
            <p>Profesyonel psikolojik danışmanlık hizmetleri</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Hızlı Bağlantılar</h3>
            <ul>
              <li>
                <Link href="/hakkinda">Hakkında</Link>
              </li>
              <li>
                <Link href="/hizmetler">Hizmetler</Link>
              </li>
              <li>
                <Link href="/randevu">Randevu</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/iletisim">İletişim</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/psikologsultantosun/" aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/psikologsultantosun/" aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="https://www.instagram.com/psikologsultantosun/" aria-label="Twitter" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Sultan Tosun. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
