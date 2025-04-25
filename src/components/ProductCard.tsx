import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  category: string;
};

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden relative group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="rounded-full" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" /> В корзину
          </Button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-primary font-medium uppercase">{category}</span>
        <h3 className="font-medium text-lg mt-1 mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="font-bold">{price} ₽</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★★★★</span>
            <span className="text-yellow-200">★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;