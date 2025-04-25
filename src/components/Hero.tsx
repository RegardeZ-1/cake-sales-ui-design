import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
              Изысканные десерты <span className="text-primary">ручной работы</span>
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              Мы создаем нежные и восхитительные сладости из натуральных ингредиентов, 
              которые подарят вам настоящее наслаждение.
            </p>
            <div className="flex space-x-4">
              <Button className="rounded-full px-6">Заказать сейчас</Button>
              <Button variant="outline" className="rounded-full px-6">Наше меню</Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-square rounded-full bg-accent absolute -right-20 -top-20 w-64 h-64"></div>
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Торт"
              className="rounded-lg shadow-lg relative z-10 mx-auto"
            />
            <div className="aspect-square rounded-full bg-muted absolute -left-16 -bottom-16 w-48 h-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;