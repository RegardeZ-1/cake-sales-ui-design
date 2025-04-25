import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">О нашей кондитерской</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Мы создаем изысканные десерты, которые радуют глаз и дарят настоящее наслаждение вкусом.
              Каждое наше изделие — это маленькое произведение искусства.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Наша история" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Наша история</h2>
                <p className="text-muted-foreground mb-4">
                  Кондитерская «СладКо» была основана в 2015 году с простой идеей: создавать вкусные и красивые десерты из натуральных ингредиентов. 
                  Начав с маленькой пекарни, мы постепенно расширялись, сохраняя нашу приверженность качеству и ручной работе.
                </p>
                <p className="text-muted-foreground">
                  Сегодня мы предлагаем широкий ассортимент тортов, пирожных, эклеров, макарунов и других сладостей, 
                  которые завоевали любовь наших клиентов. Каждый день мы экспериментируем с новыми вкусами и 
                  техниками, чтобы удивлять вас и делать ваши особые моменты еще более запоминающимися.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Натуральные ингредиенты</h3>
                <p className="text-muted-foreground">
                  Мы используем только натуральные продукты высочайшего качества, без искусственных красителей и добавок.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Мастерство и творчество</h3>
                <p className="text-muted-foreground">
                  Каждое наше изделие создается с любовью и вниманием к деталям, сочетая традиционные техники и инновации.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Клиентоориентированность</h3>
                <p className="text-muted-foreground">
                  Мы стремимся превзойти ожидания наших клиентов, создавая индивидуальные десерты для особых случаев.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Алена Смирнова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Алена Смирнова</h3>
                <p className="text-primary font-medium">Шеф-кондитер</p>
                <p className="text-muted-foreground mt-2">
                  Выпускница престижной кулинарной школы с 10-летним опытом работы
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Иван Петров" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Иван Петров</h3>
                <p className="text-primary font-medium">Кондитер-декоратор</p>
                <p className="text-muted-foreground mt-2">
                  Специалист по созданию уникальных дизайнерских тортов
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 aspect-square overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Мария Козлова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Мария Козлова</h3>
                <p className="text-primary font-medium">Шоколатье</p>
                <p className="text-muted-foreground mt-2">
                  Мастер по работе с шоколадом и карамелью
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;