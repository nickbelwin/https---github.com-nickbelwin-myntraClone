import "./index.css";
import { useState } from "react";
import { womenCatagorys } from "../../constants/constants";
const WomenCatagory=(props)=>{
    const [womenListInfo, setWomenListInfo]= useState(womenCatagorys);
    return(
        <div className="catagoryBox2" >
            {
                womenListInfo?.map((val)=>{
                    return(
                        <div className={val.classname}>
                            <div>
                                <h3>{val.heading1}</h3>
                                <div className="list">
                                    {val.list1?.map((val)=>{
                                        return <p>{val}</p>
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

export default WomenCatagory;