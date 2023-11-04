import "./index.css";
import { useState } from "react";
import { kidsCatagorys } from "../../constants/constants";
const KidsCatagory=(props)=>{
    
    const [kidsListInfo, setWomenListInfo]= useState(kidsCatagorys);
    return(
        <div className="catagoryBox3" >
            {
                kidsListInfo?.map((val)=>{
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

export default KidsCatagory;