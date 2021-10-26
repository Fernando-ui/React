import {firebaseApp} from '../firebase/firebase-config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';



export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const firestore = getFirestore(firebaseApp);
        const uid = getState().auth.uid;
        console.log(uid,'El uid');
        
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const docuRef = doc(firestore,`usuarios/${uid}/`);
        await setDoc(docuRef,newNote);
        dispatch(activeNote(docuRef.parent.id,newNote));
    }
}

export const activeNote = (id, note) => ({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
});

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes) )
    }
}



export const setNotes = ( notes ) => ({
    type:types.notesLoad,
    payload:notes
})



