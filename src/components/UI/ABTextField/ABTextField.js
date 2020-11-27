import React from "react";
import classes from './ABTextField.scss';
import TextField from "@material-ui/core/TextField";

function isInvalid({valid, touched, shouldValidate}, error) {
    return (!valid && shouldValidate && touched) && error;
}

const ABTextField = props => {
    const textFieldType = props.type || 'text';
    const classesMy = [classes.TextField];
    var valid = false;
    const htmlFor = `${textFieldType}-${Math.random()}`;

    // if (isInvalid(props)) {
    //     classesMy.push()
    // }
    // props.error = isInvalid(props);

    return(
        <div className={classesMy.join(' ')}>
            <TextField
                id={htmlFor}
                variant="outlined"
                style={props.style}
                label={props.label}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                error={isInvalid(props, props.error)}
                required
                fullWidth
                autoFocus
            />
        </div>
    )
};

export default ABTextField
