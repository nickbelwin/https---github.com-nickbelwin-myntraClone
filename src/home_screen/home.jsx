import Header from "../components/header/header";
import "./home.css";

const Home= ()=>{
    return(
        <div id="main" style={{height:"150vh"}}>
            <Header/>
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