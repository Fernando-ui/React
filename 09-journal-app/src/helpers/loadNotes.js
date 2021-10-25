import { doc, getDoc, getFirestore,getDocs, query, collection } from 'firebase/firestore'
import { firebaseApp } from '../firebase/firebase-config'

const firestore = getFirestore( firebaseApp);

export const loadNotes = async() => {

    const querySnapshot = await getDocs(collection(firestore,`usuarios/`));
    const notes = [];
    querySnapshot.forEach( (doc ) =>{
        console.log(doc);
        
    })
    return notes;
}

