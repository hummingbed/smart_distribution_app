import { ChevronLeft, Plus, X } from 'react-bootstrap-icons';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Nav = (props) => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const navHandler = async (event) => {
        event.preventDefault();
        if (location.pathname === '/request') {
            navigate("/");
        }
        if (location.pathname === '/request') {
            navigate("/scan");
        }
        // if (location.pathname === '/scan') {
        //     navigate("/request");
        // }
    };

    
    if (location.pathname === '/delivery') {
        var hideIcon = props.hidePlusIcon;
    }
    else if (location.pathname === '/details') {
        var hideIcon = props.hidePlusIcon;
    }
    else if (location.pathname === '/pagetransfer') {
        var hideIcon = props.hidePlusIcon;
    }
    else if (location.pathname === '/confirmdelivery') {
        var hideIcon = props.hidePlusIcon;
    }
    else if (location.pathname === '/scan') {
        var hideIcon = props.hidePlusIcon;
    }


    return (
        <div className="double-nav">
            {location.pathname === '/delivery' || location.pathname === '/details' 
            || location.pathname === '/pagetransfer' || location.pathname === '/confirmdelivery' 
            || location.pathname === '/scan' ? <div onClick={navHandler}> <X className='left-arrow'/>
            </div> : <div onClick={navHandler}> <ChevronLeft className='left-arrow' /> </div> }
            <div onClick={navHandler}> <Plus className='left-arrow' style={{ display: `${hideIcon}` }} /> </div>
        </div>
    );
}

export default Nav;