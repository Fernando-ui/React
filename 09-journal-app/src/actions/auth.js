import { types } from '../types/types';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import {firebaseApp, googleProvider} from '../firebase/firebase-config';
 
export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{

    const auth = getAuth();

    // return ( dispatch ) => {

    //     firebase.auth().createUserWithEmailAndPassword(auth,email, password )
    //     .then( async({user}) =>{
    //         // dispatch(login(user.uid, user.displayName))
    //     await user.updateProfile({displayName: name})
            
            
    //     })
    // }

}



export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth(firebaseApp);

        signInWithPopup(auth, googleProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
                console.log(user);
                
            });
    }
}
 
export const login = (uid, displayName) =>(
    {
        type:types.login,
        payload: {
            uid,
            displayName
        }
    }
)