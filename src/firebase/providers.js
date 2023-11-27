import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid} = result.user;
        
        return {
            ok: true,
            // User Info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        
        const errorMessage = error.message

        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailAndPassword = async ({ email, password, displayName}) => {
    try {
        
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        await updateProfile(firebaseAuth.currentUser, {
            displayName
        });
        
        return {
            ok: true, 
            uid, photoURL, email, displayName
        }

    } catch (error) {
        
        let errorMessage;
        if(error.message === 'Firebase: Error (auth/email-already-in-use).'){
            errorMessage = 'El email que has usado ya ha sido registrado anteriormente';
        } else{
            errorMessage = 'Ha ocurrido un error al registrarte en la aplicación.';
        }

        return {
            ok: false,
            errorMessage,
        }
    }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
    try {
        
        const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true, 
            uid, photoURL, displayName
        }

    } catch (error) {
        let errorMessage;
        if(error.message === 'Firebase: Error (auth/invalid-login-credentials).'){
            errorMessage = 'No existe ningun usuario con ese correo o contraseña.';
        } else{
            errorMessage = 'Ha ocurrido un error al loguearse en la aplicación.';
        }

        return {
            ok: false,
            errorMessage,
        }
    }
}

export const logoutFirebase = async () => {
    return await firebaseAuth.signOut();
}