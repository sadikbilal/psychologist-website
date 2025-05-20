import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <div>
            <img
              src="/images/t_s_bg_no.png"
              alt="Logo"
              className="h-10 w-7 mr-2"
            />
          </div>
          Sultan Tosun
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link href="/hakkinda">Hakkımda</Link>
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
        <Button asChild>
          <Link href="/randevu">Randevu Al</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
