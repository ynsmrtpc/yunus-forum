const discussions = [
    { title: 'Popüler Tartışma 1', link: '#' },
    { title: 'Popüler Tartışma 2', link: '#' },
    // Add more discussions as needed
];

const PopularDiscussions = () => (
    <section>
        <h2 className="text-2xl font-semibold mb-4">Popüler Tartışmalar</h2>
        <ul className="space-y-4">
            {discussions.map(discussion => (
                <li key={discussion.title} className="bg-secondary text-secondary-content p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
                    <a href={discussion.link} className="text-lg font-medium">{discussion.title}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default PopularDiscussions;
