import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <ProductSection />
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ждем вас в нашей кондитерской!</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приходите к нам, чтобы насладиться свежими десертами и уютной атмосферой.
              Также вы можете заказать наши сладости онлайн с доставкой на дом.
            </p>
            <div className="inline-block bg-white p-4 rounded-lg shadow-md">
              <div className="font-medium mb-1">Часы работы:</div>
              <div className="text-muted-foreground">
                Пн-Пт: 9:00 - 20:00 <br />
                Сб-Вс: 10:00 - 18:00
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;