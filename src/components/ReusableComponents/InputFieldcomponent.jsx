import { useLocation } from "react-router-dom";
const InputFieldcomponent = (props) => {

    const location = useLocation();
    if (location.pathname === '/confirmdelivery') {
        var inputHeader = props.inputHeader;
    }
    else if (location.pathname === '/pagetransfer') {
        var inputHeader = 'Driver`s ID';
    }

    return (
        <div class="col-md-6 input-field-component">
            <label for="inputEmail4" class="form-label">{inputHeader} </label>
            <input type="text" class="form-control" placeholder="xxx-xxx-xxx" id="inputEmail4" />
        </div>
    );
}

export default InputFieldcomponent;