import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Шоколадный торт",
    price: 2800,
    category: "Торты",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
  },
  {
    id: "2",
    name: "Набор макарунов",
    price: 1200,
    category: "Макаруны",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
  },
  {
    id: "3",
    name: "Эклеры с заварным кремом",
    price: 950,
    category: "Эклеры",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
  },
  {
    id: "4",
    name: "Торт Наполеон",
    price: 2400,
    category: "Торты",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
  },
];

const ProductSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Популярные десерты</h2>
          <p className="text-muted-foreground mt-2">Самые популярные сладости нашей кондитерской</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;