import { getProductsByCategory } from "@/server";
import { Menu } from "@/components/food-order";

async function MenuPage() {
  const categories = await getProductsByCategory();

  return (
    <main>
      {categories.length > 0 ? (
        categories.map((category) => (
          <section key={category.id} className="section-gap">
            <div className="container text-center">
              <h1 className="text-primary font-bold text-4xl italic mb-16">
                {category.name}
              </h1>
              <Menu items={category.products} />
            </div>
          </section>
        ))
      ) : (
        <p className="text-accent text-center py-20">No categories found.</p>
      )}
    </main>
  );
}

export default MenuPage;
