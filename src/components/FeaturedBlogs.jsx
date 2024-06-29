const blogs = [
    { title: 'Öne Çıkan Blog 1', link: '#' },
    { title: 'Öne Çıkan Blog 2', link: '#' },
    // Add more blogs as needed
];

const FeaturedBlogs = () => (
    <section>
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Bloglar</h2>
        <ul className="space-y-4">
            {blogs.map(blog => (
                <li key={blog.title} className="bg-secondary text-secondary-content p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
                    <a href={blog.link} className="text-lg font-medium">{blog.title}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default FeaturedBlogs;
