import Swal from 'sweetalert2';
import {firebaseApp} from '../firebase/firebase-config';
import { getFirestore, doc, setDoc, collection, updateDoc, deleteDoc} from 'firebase/firestore';
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';



export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const firestore = getFirestore(firebaseApp);
        const uid = getState().auth.uid;
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime(),
        }
        const docuRef = doc(collection(firestore,`${uid}/journal/notes`));        
        await setDoc(docuRef,newNote);
        dispatch(activeNote(docuRef.parent.id,newNote));
        dispatch(addNewNote( doc.id, newNote ) );
    }
};
export const activeNote = (id, note) => ({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
});

export const  addNewNote = ( id, note ) => ({
    type:types.notesAddNew,
    payload:{
        id,
        ...note,
    }
})

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes) )
    }
};

export const setNotes = ( notes ) => ({
    type:types.notesLoad,
    payload:notes
});

export const startSaveNote = ( note ) => {
    return async( dispatch, getState) =>{
        if( !note.url ){
            delete note.url;
            console.log(note.url);
            
        }
        const firestore = getFirestore( firebaseApp );
        const { uid } = getState().auth;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        const docuRef = doc(firestore, `${uid}/journal/notes/${note.id}`);
        await updateDoc(docuRef,noteToFirestore);
        // forma de actualizar
        dispatch( refreshNote( note.id, noteToFirestore ));
        Swal.fire('Saved',note.title, 'success')
    }
};

export const refreshNote = ( id, note) => ({
    type: types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
});
export const startUploading = (file) => {
    return async(dispatch, getState)=>{
        const { active:activeNotes } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
        
        const fileUrl = await fileUpload( file );    
            
        activeNotes.url = fileUrl;        
        dispatch(startSaveNote( activeNotes));

        Swal.close();
    };
};

export const startDeleting = ( id ) => {
    return async(dispatch, getState )=>{
        const firestore = getFirestore( firebaseApp );
        const uid = getState().auth.uid;
        const docuRef = doc(firestore, `${ uid }/journal/notes/${id}`);
        await deleteDoc(docuRef);
        console.log('Pasamos por aqui');
        
        dispatch( deleteNote( id ) );       
        console.log('Pasamos por aqui2');
    };
};

export const deleteNote = ( id ) =>( {
    type:types.notesDelete,
    payload:id
});

export const noteLogout = () => ({
    type:types.notesLogoutCleaning,
})

