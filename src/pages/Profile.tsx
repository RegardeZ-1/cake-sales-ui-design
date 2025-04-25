import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Package, Heart, CreditCard, Settings, LogOut } from "lucide-react";
import { format } from "date-fns";

// Типы для данных о заказах
type OrderStatus = "completed" | "processing" | "delivered" | "cancelled";

type Order = {
  id: string;
  date: Date;
  total: number;
  status: OrderStatus;
  items: string[];
};

const Profile = () => {
  // Имитация данных пользовательского профиля
  const [user] = useState({
    firstName: "Анна",
    lastName: "Смирнова",
    email: "anna.smirnova@example.com",
    phone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Пушкина, д. 10, кв. 5",
  });

  // Имитация данных о заказах пользователя
  const [orders] = useState<Order[]>([
    {
      id: "ORD-2023-001",
      date: new Date(2023, 9, 15),
      total: 2450,
      status: "delivered",
      items: ["Шоколадный торт", "Ассорти макарун"],
    },
    {
      id: "ORD-2023-002",
      date: new Date(2023, 10, 2),
      total: 1850,
      status: "completed",
      items: ["Медовик", "Классический эклер (×2)"],
    },
    {
      id: "ORD-2023-003",
      date: new Date(2023, 10, 20),
      total: 3200,
      status: "processing",
      items: ["Красный бархат", "Фисташковый рулет", "Ваниль макарун (×5)"],
    },
  ]);

  // Функция для отображения статуса заказа на русском языке
  const getStatusLabel = (status: OrderStatus): string => {
    const statusMap: Record<OrderStatus, string> = {
      completed: "Завершен",
      processing: "В обработке",
      delivered: "Доставлен",
      cancelled: "Отменен",
    };
    return statusMap[status];
  };

  // Функция для определения цвета статуса
  const getStatusColor = (status: OrderStatus): string => {
    const colorMap: Record<OrderStatus, string> = {
      completed: "text-green-600 bg-green-50",
      processing: "text-blue-600 bg-blue-50",
      delivered: "text-purple-600 bg-purple-50",
      cancelled: "text-red-600 bg-red-50",
    };
    return colorMap[status];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Личный кабинет</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Боковое меню */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </div>
                <div>
                  <h2 className="font-semibold">{user.firstName} {user.lastName}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <nav className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#orders" className="flex items-center">
                    <Package className="mr-2 h-4 w-4" />
                    Мои заказы
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#favorites" className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Избранное
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#payment" className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Способы оплаты
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <a href="#settings" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Настройки
                  </a>
                </Button>
                <Separator className="my-2" />
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Выйти
                </Button>
              </nav>
            </div>
          </div>

          {/* Основное содержимое */}
          <div className="md:col-span-9">
            <Tabs defaultValue="personal">
              <TabsList className="mb-6">
                <TabsTrigger value="personal">Личные данные</TabsTrigger>
                <TabsTrigger value="orders">История заказов</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
              </TabsList>

              {/* Вкладка с личными данными */}
              <TabsContent value="personal" className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Личная информация</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Имя</Label>
                        <Input id="firstName" defaultValue={user.firstName} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Фамилия</Label>
                        <Input id="lastName" defaultValue={user.lastName} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" defaultValue={user.phone} />
                    </div>
                    <Button type="submit">Сохранить изменения</Button>
                  </form>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Адрес доставки</h2>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Адрес</Label>
                      <Input id="address" defaultValue={user.address} />
                    </div>
                    <Button type="submit">Сохранить адрес</Button>
                  </form>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Изменить пароль</h2>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Текущий пароль</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button type="submit">Изменить пароль</Button>
                  </form>
                </div>
              </TabsContent>

              {/* Вкладка с историей заказов */}
              <TabsContent value="orders">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">История заказов</h2>
                  {orders.length > 0 ? (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                            <div>
                              <div className="font-medium">{order.id}</div>
                              <div className="text-sm text-muted-foreground">
                                {format(order.date, "dd.MM.yyyy")}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <div className="font-semibold">{order.total} ₽</div>
                              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                                {getStatusLabel(order.status)}
                              </span>
                            </div>
                          </div>
                          <div className="text-sm">
                            <div className="font-medium mb-1">Товары:</div>
                            <ul className="list-disc list-inside text-muted-foreground">
                              {order.items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-3 flex justify-end">
                            <Button variant="outline" size="sm">Подробнее</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">У вас еще нет заказов</h3>
                      <p className="text-muted-foreground mb-4">
                        Когда вы сделаете заказ, он появится здесь
                      </p>
                      <Button asChild>
                        <a href="/catalog">Перейти в каталог</a>
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Вкладка с избранным */}
              <TabsContent value="favorites">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">Избранное</h2>
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">У вас еще нет избранных товаров</h3>
                    <p className="text-muted-foreground mb-4">
                      Добавляйте товары в избранное, чтобы быстро находить их в будущем
                    </p>
                    <Button asChild>
                      <a href="/catalog">Перейти в каталог</a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;