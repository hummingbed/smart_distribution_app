import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ButtonComponent = (props) => {

    const navigate = useNavigate();

    const location = useLocation();
    if (location.pathname === '/transfer') {
        var btnText = props.btnText;
    }
    else if (location.pathname === '/delivery') {
        var btnText = props.btnText;
    }
    else if (location.pathname === '/pagetransfer') {
        var btnText = props.btnText;
    }
    else if (location.pathname === '/confirmdelivery') {
        var btnText = props.btnText;
    }

    const navHandler = async (event) => {
        event.preventDefault();
        if (location.pathname === '/delivery') {
            navigate("/request/tab2");
        } 
        if (location.pathname === '/confirmdelivery') {
            navigate("/details");
        }
        if (location.pathname === '/transfer') {
            navigate("/pagetransfer");
        }
    };

    console.log(props)

    return (<input onClick={navHandler} className='button' type="button" value={btnText} />);
}

export default ButtonComponent;