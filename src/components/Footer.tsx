import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-primary font-bold text-2xl mb-4">СладКо</h3>
            <p className="text-muted-foreground mb-4">
              Кондитерская с изысканными десертами ручной работы из натуральных ингредиентов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Меню</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Торты</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Эклеры</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Макаруны</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Пирожные</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@sladko.ru</span>
              </li>
              <li className="flex">
                <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                <span>ул. Кондитерская, д. 15, Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} СладКо. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;