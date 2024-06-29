const recentDiscussions = [
    { title: 'Son Tartışma 1', link: '#' },
    { title: 'Son Tartışma 2', link: '#' },
    // Add more discussions as needed
];

const RecentDiscussions = () => (
    <section>
        <h2 className="text-2xl font-semibold mb-4">Son Tartışmalar</h2>
        <ul className="space-y-4">
            {recentDiscussions.map(discussion => (
                <li key={discussion.title} className="bg-secondary text-secondary-content p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
                    <a href={discussion.link} className="text-lg font-medium">{discussion.title}</a>
                </li>
            ))}
        </ul>
    </section>
);

export default RecentDiscussions;
