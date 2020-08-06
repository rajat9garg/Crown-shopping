import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6SBh8fhY6UsRKNxuryMkdzHgp_jX7820",
  authDomain: "crwn-db-d6496.firebaseapp.com",
  databaseURL: "https://crwn-db-d6496.firebaseio.com",
  projectId: "crwn-db-d6496",
  storageBucket: "crwn-db-d6496.appspot.com",
  messagingSenderId: "442993214295",
  appId: "1:442993214295:web:0615ad2a5cd7fab3517412",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionsAndDocuments = async (collectionKey,ObjectsToAdd) =>{

  const collectionRef = firestore.collection(collectionKey)
  
  const batch = firestore.batch()

  ObjectsToAdd.forEach(obj =>{
    const newDocRef = collectionRef.doc()
    console.log(newDocRef)
    batch.set(newDocRef,obj)
  })

  return await batch.commit()

}

export const convertCollectionsSnapshotToMap = (collection) =>{
  const transformedCollection = collection.docs.map(doc =>{
    const {title,items} = doc.data();
    return {
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  },{})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
