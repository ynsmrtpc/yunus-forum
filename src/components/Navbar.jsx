const Navbar = () => (
    <nav className="p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-bold">Forum</a>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-secondary">Anasayfa</a></li>
                <li><a href="#" className="hover:text-secondary">Kategoriler</a></li>
                <li><a href="#" className="hover:text-secondary">Popüler Tartışmalar</a></li>
                <li><a href="#" className="hover:text-secondary">Son Tartışmalar</a></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
