import {  getFirestore,getDocs, collection } from 'firebase/firestore'
import { firebaseApp } from '../firebase/firebase-config'

const firestore = getFirestore( firebaseApp);

export const loadNotes = async() => {

    const querySnapshot = await getDocs(collection(firestore,`usuarios/`));
    const notes = [];
    querySnapshot.forEach( (doc ) =>{
        notes.push({
            id:doc.id,
            ...doc.data(),
        });
        
    })

    return notes;
}

