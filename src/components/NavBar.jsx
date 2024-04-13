import logo from "../assets/images/logo-negro.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black p-3">
                <div className="col"></div>
                <div className="col-md text-center">
                    <a href="#">
                        <img src={logo} alt="NEGRO" width={320} />
                    </a>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Ropa</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Mate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Café y Té</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;