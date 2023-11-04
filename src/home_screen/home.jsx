import { useState } from "react";
import Header from "../components/header/header";
import MenCatagorys from "../components/navListCatagorys";
import "./home.css";

const Home= ()=>{

    const [menList, setMenList]= useState("none");
    const [displayCat, setDisplayCat]= useState("none");
    const [showCatProducts, setShowCatProducts]=useState([]);
    

    const menCatagory=()=>{
        setMenList("men")
        setDisplayCat("menCatBox");
        // document.querySelector(".catagoryBox").style.display="flex";
    }
    const catagoryLeave=()=>{
        setDisplayCat("");
        // document.querySelector(".catagoryBox").style.display="none";
        document.querySelector(".catagoryBox2").style.display="none";
        document.querySelector(".catagoryBox3").style.display="none";
        document.querySelector(".catagoryBox4").style.display="none";
    }
    const womenCatagory=()=>{
        setMenList("women");
        setDisplayCat("menCatBox");
        document.querySelector(".catagoryBox2").style.display="flex";
    }
    const kidsCatagory=()=>{
        setMenList("women");
        setDisplayCat("menCatBox");
        document.querySelector(".catagoryBox3").style.display="flex";
    }

    const homeCatagory=()=>{
        setMenList("women");
        setDisplayCat("menCatBox");
        document.querySelector(".catagoryBox4").style.display="flex";
    }

    const onClickMen= async(e)=>{
        console.log(e);
        let getData= await fetch("https://dummyjson.com/products");
        let data= await getData.json();
        setShowCatProducts(data.products);
    }
    window.onclick=()=>{
        setShowCatProducts([]);
    }

    return(
        <div id="main"  style={{height:"150vh"}}>
            <Header
            menOnMouseOver={menCatagory}
            menOnMouseLeave={catagoryLeave}
            womenOnMouseOver={womenCatagory}
            womenOnMouseLeave={catagoryLeave}
            kidsOnMouseOver={kidsCatagory}
            kidsOnMouseLeave={catagoryLeave}
            homeOnMouseOver={homeCatagory}
            homeOnMouseLeave={catagoryLeave}
            mens={menList}
            catTtype={displayCat}
            womenCat={displayCat}
            onClickMen={onClickMen}
            />
            <div>
                {showCatProducts?.map((val)=>{
                    return <div><img src={val.thumbnail} alt="" /></div>
                })}
            </div>
            <div className="banner1">
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/b4109b95-e678-434d-b54b-074261528a2d1698752121691-MSB-Coupon--copy-3.jpg" alt="" />
            </div>
            <div className="banner2">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/9780a1fe-4fd3-42c6-a33e-6090e3ea07691698764168633-Desktop-banner_01.jpg" alt="" />
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/2d6b7a55-6816-4bc1-8907-0149286141c51698764168626-Desktop-banner_02--1-.jpg" alt="" />
            </div>
        </div>
    );
}

export default Home;