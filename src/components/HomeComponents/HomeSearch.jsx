import { FaSearch } from "react-icons/fa";
import Button from "../ui/Button";

const HomeSearch = () => {
return (
    <div style={{backgroundColor : 'white', borderRadius : '16px', display: 'grid', gridTemplateColumns : '3fr 2fr 1fr', zIndex :'2'}}>
            <div style={{border : '1px solid gray', alignItems : 'center', display : 'flex', padding : '10px'}}>
                    <FaSearch />
                    <input placeholder="State" style={{border : '0px', marginLeft : '8px'}}/>
            </div>
            <div style={{border : '1px solid gray', alignItems : 'center', display : 'flex', padding : '10px'}}>
                    <FaSearch />
                    <input placeholder="State" style={{border : '0px', marginLeft : '8px'}}/>
            </div>
            <div>
                <Button name={'Search'} />
            </div>
    </div>
)
}

export default HomeSearch