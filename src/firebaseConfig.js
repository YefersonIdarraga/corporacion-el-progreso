import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2wjLEigH2ynmgl12tGfA_heOvhq8y2hg",
    authDomain: "corporacion-el-progreso.firebaseapp.com",
    projectId: "corporacion-el-progreso",
    storageBucket: "corporacion-el-progreso.appspot.com",
    messagingSenderId: "1068440446412",
    appId: "1:1068440446412:web:027a6f48aaf4756db72969",
    measurementId: "G-WK3TCJWSDY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
