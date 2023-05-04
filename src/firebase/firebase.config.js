// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// console.log('envaroment variabk', import.meta.env.VITE_apiKey)
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app


// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('envaroment variabk', import.meta.env.VITE_apiKey)
const firebaseConfig = {

    apiKey: "AIzaSyCyLu3swa-u4F_puwAUXMt2z3NfsGMCxGg",
    authDomain: "chef-recipe-6022f.firebaseapp.com",
    projectId: "chef-recipe-6022f",
    storageBucket: "chef-recipe-6022f.appspot.com",
    messagingSenderId: "323468439895",
    appId: "1:323468439895:web:00eb2b7c065f5c3191ce12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app