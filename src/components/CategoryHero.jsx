const CategoryHero = ({ title, description, route }) => {
  return (
    <section className="relative pt-40 pb-20 bg-linear-to-r from-green-50 to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <span className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium">
          Premium Collection
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 text-gray-800">
          {title}
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
        <div className="mt-8 inline-block bg-white shadow-md px-6 py-3 rounded-full text-sm text-gray-700">
          {route}
        </div>

      </div>
    </section>
  );
};

export default CategoryHero;