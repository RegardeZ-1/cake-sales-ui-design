import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Catalog = () => {
  // Данные о товарах (в реальном приложении они будут загружаться с сервера)
  const products = {
    cakes: [
      { id: 1, name: "Шоколадный торт", price: 1200, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Нежный шоколадный бисквит с кремом" },
      { id: 2, name: "Красный бархат", price: 1500, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Классический красный бархат с кремом" },
      { id: 3, name: "Медовик", price: 1100, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Традиционный медовый торт" },
      { id: 4, name: "Наполеон", price: 1300, image: "https://images.unsplash.com/photo-1551404973-761c81f4ad8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Слоеный торт с заварным кремом" },
    ],
    eclairs: [
      { id: 5, name: "Классический эклер", price: 190, image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "С заварным кремом" },
      { id: 6, name: "Шоколадный эклер", price: 210, image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "С шоколадной начинкой" },
      { id: 7, name: "Карамельный эклер", price: 220, image: "https://images.unsplash.com/photo-1613650328855-01c918e31942?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "С карамельным кремом" },
    ],
    macarons: [
      { id: 8, name: "Ваниль", price: 80, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Ванильный макарун" },
      { id: 9, name: "Малина", price: 90, image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Малиновый макарун" },
      { id: 10, name: "Фисташка", price: 95, image: "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", description: "Фисташковый макарун" },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Каталог продукции</h1>
        <p className="text-muted-foreground mb-8">
          Откройте для себя наш широкий ассортимент свежих кондитерских изделий, приготовленных с любовью и 
          вниманием к каждой детали. Все наши десерты готовятся из натуральных ингредиентов высшего качества.
        </p>

        <Tabs defaultValue="all" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Все товары</TabsTrigger>
            <TabsTrigger value="cakes">Торты</TabsTrigger>
            <TabsTrigger value="eclairs">Эклеры</TabsTrigger>
            <TabsTrigger value="macarons">Макаруны</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Торты</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {products.cakes.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-semibold mb-4">Эклеры</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
                {products.eclairs.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-semibold mb-4">Макаруны</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.macarons.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cakes">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.cakes.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="eclairs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.eclairs.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="macarons">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.macarons.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;