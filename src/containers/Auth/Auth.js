// modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Auth = (props) => {
    const { authenticateUserAction } = props;

    const [values, setValues] = useState({
        name: '',
        password: ''
    });
    //valid state
    const [isValidName, setIsValidName] = useState(true);
    const [isValidPass, setIsValidPass] = useState(true);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value.trim() });
    };

    const onValidate = () => {
        const {
            name, password
        } = values;

        setIsValidName(name.length >= 6 && name.length <= 100);
        setIsValidPass(password.length >= 6 && password.length <= 100);
    };

    const handleSubmitAuthenticate = (event) => {
        event.preventDefault();
        const { password, name } = values;

        const isValidForm = isValidName && isValidPass

        if (isValidForm) {
            authenticateUserAction({
                data: { name, password },
            });
        }
    };

    const renderField = (name, value, valid) => (
        <div>
            <input onChange={handleChange(name)} type="text" value={value}/>
            { !valid && <p style={{color: 'red'}}>Required</p>}
        </div>
    );

    const renderButton = (text) => (
        <button onClick={onValidate}>{ text }</button>
    );

    return (
        <form onSubmit={handleSubmitAuthenticate}>
            {renderField('name', values.name, isValidName)}
            {renderField('password', values.password, isValidPass)}
            {renderButton('login')}
        </form>
    )
}

Auth.propTypes = {
    authenticateUserAction: PropTypes.func
}

export default Auth;
