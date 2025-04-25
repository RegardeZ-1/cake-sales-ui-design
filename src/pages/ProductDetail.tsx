import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Имитация данных о продукте (в реальном приложении данные будут загружаться по id)
  const allProducts = [
    { id: 1, name: "Шоколадный торт", price: 1200, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Нежный шоколадный бисквит с кремом" },
    { id: 2, name: "Красный бархат", price: 1500, image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Классический красный бархат с кремом" },
    { id: 3, name: "Медовик", price: 1100, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Традиционный медовый торт" },
    { id: 4, name: "Наполеон", price: 1300, image: "https://images.unsplash.com/photo-1551404973-761c81f4ad8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Слоеный торт с заварным кремом" },
    { id: 5, name: "Классический эклер", price: 190, image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "С заварным кремом" },
    { id: 6, name: "Шоколадный эклер", price: 210, image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "С шоколадной начинкой" },
    { id: 7, name: "Карамельный эклер", price: 220, image: "https://images.unsplash.com/photo-1613650328855-01c918e31942?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "С карамельным кремом" },
    { id: 8, name: "Ваниль макарун", price: 80, image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Ванильный макарун" },
    { id: 9, name: "Малина макарун", price: 90, image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Малиновый макарун" },
    { id: 10, name: "Фисташка макарун", price: 95, image: "https://images.unsplash.com/photo-1634118520179-0c78b72df69a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", description: "Фисташковый макарун" },
  ];

  const product = allProducts.find(p => p.id === parseInt(id || "0"));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Товар не найден</h1>
          <p className="text-muted-foreground">К сожалению, запрашиваемый товар не существует.</p>
          <Button className="mt-8" asChild>
            <a href="/catalog">Вернуться в каталог</a>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  // Получаем связанные товары (в реальном приложении это будет логика рекомендаций)
  const relatedProducts = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  // Подробное описание (для примера)
  const detailedDescription = `
    ${product.description}
    
    Наши десерты готовятся из натуральных ингредиентов высшего качества.
    Каждое изделие создается вручную нашими опытными кондитерами с особым вниманием к деталям.
    
    Ингредиенты: мука высшего сорта, сливочное масло, натуральные яйца, бельгийский шоколад, 
    свежие сливки, натуральные экстракты ванили.
    
    Срок годности: 48 часов при температуре от +2 до +6 °C.
  `;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Изображение товара */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Информация о товаре */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-2xl font-semibold text-primary mb-4">{product.price} ₽</div>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <Separator className="my-6" />

            {/* Выбор количества */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Количество:</span>
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-wrap gap-4">
              <Button className="flex-1" size="lg">
                <ShoppingCart className="h-5 w-5 mr-2" /> Добавить в корзину
              </Button>
              <Button variant="outline" size="icon" className="rounded-md">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-md">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Информация о доставке */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Информация о доставке</h3>
              <p className="text-sm">
                Доставка по городу - бесплатно при заказе от 2000 ₽<br />
                Самовывоз из наших магазинов<br />
                Стандартная доставка: 1-2 дня
              </p>
            </div>
          </div>
        </div>

        {/* Tabs с описанием и отзывами */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList>
            <TabsTrigger value="description">Описание</TabsTrigger>
            <TabsTrigger value="nutrition">Состав и калории</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="whitespace-pre-line">{detailedDescription}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition" className="mt-6">
            <div className="prose max-w-none">
              <h3>Состав на 100г:</h3>
              <ul>
                <li>Белки: 6.5г</li>
                <li>Жиры: 22г</li>
                <li>Углеводы: 50г</li>
                <li>Калорийность: 420 ккал</li>
              </ul>
              <p>
                <strong>Аллергены:</strong> Может содержать глютен, яйца, молоко, орехи.
                Пожалуйста, сообщите нам о любых аллергиях при оформлении заказа.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Анна</h4>
                  <div className="flex">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Очень вкусный десерт! Заказывала на день рождения, все гости были в восторге.
                  Доставка была вовремя, десерт выглядел точно как на фото.
                </p>
              </div>
              
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Михаил</h4>
                  <div className="flex">
                    {'★'.repeat(4)}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Вкусно, но немного дороговато. Качество на высоте, буду заказывать снова.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Елена</h4>
                  <div className="flex">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Прекрасный десерт! Нежный, в меру сладкий, отличное украшение стола.
                  Рекомендую всем любителям сладкого!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Похожие товары */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Вам также может понравиться</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;