import { ChevronLeft, Plus, X } from 'react-bootstrap-icons';
import { useLocation } from "react-router-dom";
const Nav = (props) => {

    const location = useLocation();
    if (location.pathname === '/delivery') {
        var hideIcon = props.hidePlusIcon;
    }

    return (
        <div className="double-nav">
            {location.pathname === '/delivery' ? <X className='left-arrow'/> : <ChevronLeft className='left-arrow' />}
            <Plus className='left-arrow' style={{ display: `${hideIcon}` }} />
        </div>
    );
}

export default Nav;