import {firebaseApp} from '../firebase/firebase-config';
import { getFirestore, doc,  setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const firestore = getFirestore(firebaseApp);
        
        const uid = getState().auth.uid;
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        console.log(uid);
        
        let docuRef = doc(firestore,`${uid}/notes/`);
        console.log(docuRef);
        
        const algo = await setDoc(docuRef,newNote);
        console.log(algo);
        
        
    }
}

