import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';






export const RegistrerScreen = () => {
    
    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );
    console.log( msgError);
    


    const [formValues, handleInputChange] = useForm({

        name:'ferna',
        email:'fer@fer.com',
        password:'123456',
        password2:'123456',
    });
    
    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        
        if( isFormValid()){
            dispatch(startRegisterWithEmailPasswordName(email,password,name))
            console.log('algo');
                        
        }
        
    
    }
    
    
const isFormValid = () => {

    if( name.trim().length === 0){

        console.log('Name is required');
        

        dispatch(setError('Name is required'))

        return false;

    }else if( !validator.isEmail(email)){

        console.log('El email no es valido');
        dispatch(setError('El email no es valido'))

        return false;

    }else if( password !== password2 || password.length < 5){
        console.log('Password should be at least 6 chatacteres and match each other');
        dispatch(setError('Password should be at least 6 characteres and match each other'))
        return false;
    }

    dispatch(removeError());
    
    return true;

}

    return (
        <>
        <h3 className="auth__title">Register</h3>
        <form onSubmit={handleRegister}>

           {   
            msgError && 
                (<div className="auth__alert-error">
                    {msgError}
                </div>)
            
            }
            <input 
            type="text"
            placeholder="Nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="auth__input"
            autoComplete="off"
            />
            <input 
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="auth__input"
            autoComplete="off"
            />
            <input 
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="auth__input"
            />
            <input 
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
            className="auth__input"
            />
            <button 
            type="submit"
            className="btn btn-primary btn-block mb-5"
            >
                Register
            </button>

            
                <Link 
                to="/auth/login"
                className="link "
                >
                    Already register
                </Link>
            
        </form>
    </>
    )
}
