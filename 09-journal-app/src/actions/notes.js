import Swal from 'sweetalert2';
import {firebaseApp} from '../firebase/firebase-config';
import { getFirestore, doc, setDoc, collection, updateDoc} from 'firebase/firestore';
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
        const docuRef = doc(collection(firestore,`${uid}/journal/notes`));        
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

export const startSaveNote = ( note ) => {
    return async( dispatch, getState) =>{

        if( !note.url ){

            delete note.url;
        }
        const firestore = getFirestore( firebaseApp );
        const { uid } = getState().auth;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        const docuRef = doc(firestore, `${uid}/journal/notes/${note.id}`);
        await updateDoc(docuRef,noteToFirestore);
        // forma de actualizar
        // dispatch( startLoadingNotes( uid ) );
        dispatch( refreshNote( note.id, noteToFirestore ));
        Swal.fire('Saved',note.title, 'success')
    }
}

export const refreshNote = ( id, note) => ({
    type: types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
})

