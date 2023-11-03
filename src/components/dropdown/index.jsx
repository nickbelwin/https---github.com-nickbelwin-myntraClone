function Dropdown(props){
    const {classname, onchange, options,text,child}=props

    return(
        <select className={classname} onChange={onchange}>
            {/* <option selected disabled>Check Products</option> */}
            <option value="allEvent">{child || text}</option>
            {Array.isArray(options) &&
            options?.map((product)=>{
                return <option value={product}>{product}</option>;
            })}
        </select>
    );
}

export default Dropdown;