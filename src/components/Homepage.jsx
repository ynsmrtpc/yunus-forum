// src/components/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="container mx-auto pt-20">
            {/* Öne Çıkan Konular */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Öne Çıkan Konular</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <article className="p-4 bg-secondary text-base-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Konu Başlığı 1</h3>
                        <p className="mt-2">Bu, forumdaki en popüler konulardan biridir.</p>
                    </article>
                    <article className="p-4 bg-secondary text-base-100 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Konu Başlığı 2</h3>
                        <p className="mt-2">Bu, forumdaki en popüler konulardan biridir.</p>
                    </article>
                    {/* Daha fazla konu eklenebilir */}
                </div>
            </section>

            {/* Kategoriler */}
            <aside className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Kategoriler</h2>
                <ul className="space-y-2">
                    <li><Link to="/category/tech" className="block p-2 bg-neutral text-base-100 rounded-lg shadow-md">Teknoloji</Link></li>
                    <li><Link to="/category/life" className="block p-2 bg-neutral text-base-100 rounded-lg shadow-md">Yaşam</Link></li>
                    <li><Link to="/category/sports" className="block p-2 bg-neutral text-base-100 rounded-lg shadow-md">Spor</Link></li>
                    {/* Daha fazla kategori eklenebilir */}
                </ul>
            </aside>
        </div>
    );
};

export default Homepage;
