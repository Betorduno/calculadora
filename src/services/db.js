import vuefire from 'vuefire'
import firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyB-AAdWFndUN4xMHcyUIAr_3NazkheF8PY",
    authDomain: "adagio-1e49a.firebaseapp.com",
    databaseURL: "https://adagio-1e49a.firebaseio.com",
    projectId: "adagio-1e49a",
    storageBucket: "adagio-1e49a.appspot.com",
    messagingSenderId: "235488889198"
 };

let app = firebase.initializeApp(config)

export const db = app.database()
