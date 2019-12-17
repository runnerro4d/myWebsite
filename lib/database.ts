const firebaseConfig = {
    apiKey: "AIzaSyBXBOT7NW8rUf0oxP_gMgU-2GE-oHeNOzQ",
    authDomain: "mywebsite-aaditya.firebaseapp.com",
    databaseURL: "https://mywebsite-aaditya.firebaseio.com",
    projectId: "mywebsite-aaditya",
    storageBucket: "mywebsite-aaditya.appspot.com",
    messagingSenderId: "996972185147",
    appId: "1:996972185147:web:f08084f4aa0b27f0533e1e"
  };
  export default async function loadFirebase() {
    const firebase = await import('firebase/app');
    await import('firebase/firestore');
    try {
      const app = firebase.initializeApp(firebaseConfig);
      firebase.firestore(app);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      console.log(err);
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }
    return firebase;
  }