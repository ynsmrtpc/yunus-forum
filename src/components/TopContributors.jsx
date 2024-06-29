const contributors = [
    { name: 'Kullanıcı 1', points: 150 },
    { name: 'Kullanıcı 2', points: 120 },
    // Add more contributors as needed
];

const TopContributors = () => (
    <section>
        <h2 className="text-2xl font-semibold mb-4">En İyi Katkı Sağlayanlar</h2>
        <ul className="space-y-4">
            {contributors.map(contributor => (
                <li key={contributor.name} className="bg-secondary text-secondary-content p-6 rounded shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{contributor.name}</span>
                        <span>{contributor.points} puan</span>
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default TopContributors;
