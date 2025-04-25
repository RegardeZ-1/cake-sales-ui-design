import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  // Защита от undefined
  if (!product) {
    return null;
  }
  
  const { id, name, price, image, description } = product;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden relative group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button className="rounded-full" size="sm">
              Подробнее
            </Button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mt-1 mb-2 hover:text-primary transition-colors">{name}</h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">{price} ₽</span>
          <Button variant="outline" size="sm" className="rounded-full">
            <ShoppingCart className="h-4 w-4 mr-2" /> В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;