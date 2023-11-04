import SearchBar from "../searchBar/searchBar";
import { useState } from "react";
import Dropdown from "../dropdown";
import "./header.css";
import NavCatagorys from "../navListCatagorys";
import WomenCatagory from "../navListCatagorys/womenCatagory";
import KidsCatagory from "../navListCatagorys/kidsCatagory";
import HomeLivingCatagory from "../navListCatagorys/home&livingCatagory";

const Header = (props)=>{
    const {catOnMouseOver,catOnMouseLeave,menOnMouseOver,menOnMouseLeave,womenOnMouseOver,womenOnMouseLeave,kidsOnMouseOver,kidsOnMouseLeave,homeOnMouseOver,homeOnMouseLeave,beautyOnMouseOver,studioOnMouseOver,profileOnMouseOver, mens,catTtype,onClickMen}= props;
    

   


    return(
        <header>
            <header className="header">
                <div className="headDiv">
                <nav className="icon">
                    <img src="img/myntra-logo.png" alt="myntra Logo" />
                    
                </nav>
                
                <div className="navCat">
                {/* <MenCatagorys className={mens}/> */}
                <ul className="navList">
                    <li onMouseLeave={menOnMouseLeave} onMouseOver={menOnMouseOver} className="men">MEN
                    <NavCatagorys check={mens} catType={catTtype} onClickMen={()=>{onClickMen();}}/>
                    </li>
                    <li onMouseLeave={womenOnMouseLeave} onMouseOver={womenOnMouseOver}>WOMEN <WomenCatagory check={mens}/></li>
                    <li onMouseLeave={kidsOnMouseLeave} onMouseOver={kidsOnMouseOver}>KIDS <KidsCatagory catType={catTtype}/></li>
                    <li onMouseLeave={homeOnMouseLeave} onMouseOver={homeOnMouseOver}>HOME&LIVING <HomeLivingCatagory catType={catTtype}/> </li>
                    <li onMouseOver={beautyOnMouseOver}>BEAUTY</li>
                    <li className="studiobtn" onMouseOver={studioOnMouseOver}>STUDIO<span>NEW</span></li>
                    
                </ul>
                </div>
                
                <nav className="searchbar">
                    <span>
                    <img src="img/search-icon.png" alt="search button" />
                    </span>
                    <input type="text" placeholder="Search for products, brands and more" />
                </nav>
                <ul className="header-left-icon">
                    <li onMouseOver={profileOnMouseOver}>
                        <img src="img/account-icon.png" alt="" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <img id="whishlist" src="img/love-icon.png" alt="" />
                        <span>Wishlist</span>
                    </li>
                    <li>
                        <img src="img/cart-icon.png" alt="" />
                        <span>Bag</span>
                    </li>
                </ul>
                </div>
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