import { useLocation } from "react-router-dom";
const ButtonComponent = (props) => {

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

    console.log(props)

    return (<input className='button' type="button" value={btnText} />);
}

export default ButtonComponent;