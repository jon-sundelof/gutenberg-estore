import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/* import { FirebaseConfig } from './FirebaseConfig';

firebase.initializeApp(FirebaseConfig); */

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }
    const { uid } = userAuth;

    const userRef = firestore.doc(`user/${uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exist) {
        const { displayName, email } = userAuth;
        const timestamp = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            })
        } catch (err) {
            console.log(err)
        }
    }
    return userRef;
}