import { types } from '../types/types';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import {firebaseApp, googleProvider} from '../firebase/firebase-config';
import { uiFinishLoading, uiStartLoading } from './button';
 
export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        // signIn email passwors
        dispatch(uiStartLoading());
        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth,email,password).then(async({user})=>{
            dispatch(login(user.uid,user.displayName));
            dispatch(uiFinishLoading());
            console.log(user);
        }).catch(console.error);
    };
};

export const startRegisterWithEmailPasswordName =  (email, password, name) =>{

    return ( dispatch ) => {
        const auth = getAuth(firebaseApp);
        createUserWithEmailAndPassword(auth,email,password )
            .then( async ({user}) => {
                await updateProfile(user,{displayName:name})
                dispatch(
                    login(user.uid, user.displayName)
                )
                
            })
            .catch((err)=> console.error(err));
    }

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


export const login = (uid, displayName) =>({

        type:types.login,
        payload: {
            uid,
            displayName
        }
});