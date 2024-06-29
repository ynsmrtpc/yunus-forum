const categories = ['Genel Tartışma', 'Yardım ve Destek', 'Duyurular'];

const CategoryList = () => (
    <section>
        <h2 className="text-2xl font-semibold mb-4">Kategoriler</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
                <li key={category} className="bg-secondary text-secondary-content p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
                    <a href="#" className="text-lg font-medium">{category}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default CategoryList;
