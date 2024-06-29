import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.setAttribute("data-theme", newTheme);
    };

    return (
        <header className="bg-base-200 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                <Link to="/">Forum</Link>
            </h1>
            <nav>
                <Link to="/" className="btn btn-ghost mx-2">Home</Link>
                <Link to="/forum" className="btn btn-ghost mx-2">Forum</Link>
                <Link to="/profile/1" className="btn btn-ghost mx-2">Profile</Link>
            </nav>
            <button onClick={toggleTheme} className="btn btn-ghost">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
        </header>
    );
};

export default Header;
