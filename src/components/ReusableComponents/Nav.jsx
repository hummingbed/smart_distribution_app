import { ChevronLeft, Plus, X } from 'react-bootstrap-icons';
import { useLocation } from "react-router-dom";
const Nav = (props) => {

    

    const location = useLocation();
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
            || location.pathname === '/scan' 
            ? <X className='left-arrow'/> : <ChevronLeft className='left-arrow' />}
            <Plus className='left-arrow' style={{ display: `${hideIcon}` }} />
        </div>
    );
}

export default Nav;