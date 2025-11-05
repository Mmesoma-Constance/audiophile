import CategoryCard from "@/components/CategoryCard";
const CategoryComponent = () => {
  return (
    <section className="py-20 container mx-auto px-4 md:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CategoryCard name="Headphones" slug="headphones" />
        <CategoryCard name="Speakers" slug="speakers" />
        <CategoryCard name="Earphones" slug="earphones" />
      </div>
    </section>
  );
};

export default CategoryComponent;
