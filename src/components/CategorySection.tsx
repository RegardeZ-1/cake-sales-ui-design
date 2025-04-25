type CategoryProps = {
  id: string;
  name: string;
  image: string;
  count: number;
};

const CategoryCard = ({ name, image, count }: CategoryProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg group cursor-pointer">
      <div className="aspect-square md:aspect-[4/3]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-xl">{name}</h3>
        <p className="text-white/70 text-sm">{count} видов</p>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories: CategoryProps[] = [
    {
      id: "cakes",
      name: "Торты",
      image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
      count: 15,
    },
    {
      id: "eclairs",
      name: "Эклеры",
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
      count: 8,
    },
    {
      id: "macarons",
      name: "Макаруны",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80",
      count: 12,
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Наши категории</h2>
          <p className="text-muted-foreground mt-2">Выберите то, что вам по вкусу</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;