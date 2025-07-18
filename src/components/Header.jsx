import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img
                    className="logo-ghost"
                    src="/destiny2solar/img/logo.png"
                    alt="Destiny 2 Solar Index Logo"
                />
            </Link>
            <h1>DESTINY 2 SOLAR INDEX</h1>
        </header>
    );
}
