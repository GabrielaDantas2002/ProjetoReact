import firebase from "firebase/compat/app"; //firebase
import 'firebase/compat/auth'; //autenticação de login e senha
import 'firebase/compat/database'; //banco de dados
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyAmvhwKiQrSvbiySaavEXyqt7SVdz1_cKc",
  authDomain: "teste-reguera.firebaseapp.com",
  databaseURL: "https://teste-reguera-default-rtdb.firebaseio.com",
  projectId: "teste-reguera",
  storageBucket: "teste-reguera.appspot.com",
  messagingSenderId: "549143275793",
  appId: "1:549143275793:web:87aa8575ebfb663c8384b0",
  measurementId: "G-WHWEB1VGF2"
};
//abrir estancia do banco que só pode estar aberta 1 vez
if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
}
export default firebase;