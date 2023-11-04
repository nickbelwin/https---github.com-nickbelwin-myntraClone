import { useState } from "react";
import { mensCatagory, womenCatagorys } from "../../constants/constants";
import "./index.css";


const NavCatagorys=(props)=>{
    const {catOnMouseLeave,catOnMouseOver, check,catType="",onClickMen}=props;
    const [listInfo, setListInfo]= useState(mensCatagory);
    const [womenListInfo, setWomenListInfo]= useState(womenCatagorys);
    // setListInfo(mensCatagory.check);

    return(
       <div className="catagoryBox" id={catType} style={{transition:"1s"}}>
            {
                listInfo?.map((val)=>{
                    return(
                        <div className={val.classname} >
                            <div>
                                <h3>{val.heading1}</h3>
                                <div className="list">
                                    {val.list1?.map((val)=>{
                                        return <p onClick={onClickMen}>{val}</p>
                                    })}
                                </div>
                            </div>
                            <div>
                                <h3>{val.heading2}</h3>
                                <div className="list">
                                    {val.list2?.map((val)=>{
                                        return <p>{val}</p>
                                    })}
                                </div>
                            </div>
                            <>
                            {val.heading3? <div>
                                <h3>{val.heading3}</h3>
                                <div className="list">
                                    {val.list3?.map((val)=>{
                                        return <p>{val}</p>
                                    })}
                                </div>
                            </div>: ""}
                            </>
                            <>
                            {val.heading4? <div>
                                <h3>{val.heading4}</h3>
                                <div className="list">
                                    {val.list4?.map((val)=>{
                                        return <p>{val}</p>
                                    })}
                                </div>
                            </div>: ""}
                            </>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NavCatagorys;