
function SearchBar(props){
    const {classes, searchEvent, text}=props;
    return(
            <input type="text" className={classes} onChange={searchEvent} placeholder="Search Amazon.in" />
    );
}
export default SearchBar;