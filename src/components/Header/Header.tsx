import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header-nav">
            <nav>
                {/* <Link to="/">App</Link> */}
                <Link to="/home">Home</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}

export default Header;