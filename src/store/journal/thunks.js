import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection(firebaseDB, `${uid}/journal/notes`) );
        const resp = await setDoc(newDoc, newNote);

        
    }
} 