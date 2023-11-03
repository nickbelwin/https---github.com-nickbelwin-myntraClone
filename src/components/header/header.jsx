import SearchBar from "../searchBar/searchBar";
import Dropdown from "../dropdown";
import "./header.css";

const Header = (props)=>{
    const {headClass,searchEvent}= props;

    const men= ()=>{

    }

    const searchProducts= ()=>{

    }

    return(
        <header>
            <header className="header">
                <nav className="icon">
                    <img src="img/myntra-logo.png" alt="myntra Logo" />
                </nav>
                <ul className="navList">
                    <li onMouseOver={men}>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                    <li className="studiobtn">STUDIO<span>NEW</span></li>
                </ul>
                <nav className="searchbar">
                    <span>
                    <img src="img/search-icon.png" alt="search button" />
                    </span>
                    <input type="text" placeholder="Search for products, brands and more" />
                </nav>
                <ul className="header-left-icon">
                    <li>
                        <img src="img/account-icon.png" alt="" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <img id="whishlist" src="img/love-icon.png" alt="" />
                        <span>Whishlist</span>
                    </li>
                    <li>
                        <img src="img/cart-icon.png" alt="" />
                        <span>Bag</span>
                    </li>
                </ul>
            </header>
            <header className="header2">
                <nav className="icon2">
                    <img src="img/hamburger_icon.png" alt="myntra Logo" />
                    <p>Myntra</p>
                </nav>
                <ul className="navList2">
                    <li><img className="searchicon" src="img/search-icon.png" alt="" /></li>
                    <li><img className="loveicon" src="img/love-icon.png" alt="" /></li>
                    <li className="cart">
                    <img className="carticon" src="img/cart-icon.png" alt="" />
                    <div className="cartItemsCount"><span>1</span></div>
                    </li>
                </ul>
            </header>
        </header>
        
    )
}

export default Header;