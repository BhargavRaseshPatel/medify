import { FaSearch } from "react-icons/fa";
import Button from "../ui/Button";
import InputField from "../ui/InputField";

const HomeSearch = () => {
        return (
                <div style={{ background: 'white', borderRadius: '16px', display: 'flex', padding: '48px', justifyContent :'space-between', zIndex: '2', paddingTop :'0px' }}>
                        <div style={{display : 'flex',width : '100%', justifyContent: 'space-around' }}>
                                <InputField icon={'Search'} placeholder={'State'} width={'285px'} id={'state'}/>
                                <InputField width={'285px'} icon={'Search'} placeholder={'City'} id={'city'}/>
                        </div>
                        <div>
                                <Button name={'Search'} />
                        </div>
                </div>
        )
}

export default HomeSearch