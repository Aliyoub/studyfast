import { useState, useEffect } from 'react';
import { firestore, auth, storage } from '../firebase/firebase';
import {useDocumentData, useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import {useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';
// import { getFirestore, doc, collection, query, where, orderBy } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// import { initializeApp, applicationDefault, cert } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  Timestamp,
  FieldValue,
  setDoc,
  onSnapshot,
  QuerySnapshot,
  query,
  where
} from "firebase/firestore";

// import { updateTaskFromSqlite, deleteTaskFromSqlite, tasksList } from "../app/database/sqlRequests";




// export const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyBjtorAy3y49SEBFxVVP5VLOiu4aAPTa5A",
//   authDomain: "myhelper-48867.firebaseapp.com",
//   projectId: "myhelper-48867",
//   storageBucket: "myhelper-48867.appspot.com",
//   messagingSenderId: "188320909621",
//   appId: "1:188320909621:web:981d3dd2dd26cdf6d0e47c",
//   measurementId: "G-V46LCR0L55",
// });

export const db = getFirestore();



// export const exportToFirestore = () => {
//   // const todolists = doc(db, "todolists/mestaches");
//   // const docData = {
//   //   fruits: tasksList()[0],
//   // };
//   // setDoc(todolists, docData);
//   console.log('tasksList', tasksList)
// }



export const todolistsCoursesRef = doc(db, "messages/courses");
// export const todolistsCoursesRef = doc(db, "todolists/courses");
// const childDoc = doc(todolists, 'childDoc/2023-09-12')
const docData = {
  fruts: ["orange", "mangue"],
  toilette: ["savon", "champooing"],
  boisson: {
    sucrerie: ["jus d'orange", "jus de mangue"],
    gazeuse: ["coca", "schweppez"],
  },
};

// export const writeData = () => {
//   setDoc(todolists, docData);
// };




let unsubscribeCourses;
export async function queryForCoursesDocuments(){
  const coursesQuery = query(
    collection(db, 'todolists'),
    // where('todolists', '==', 'courses')
  );
  const coursesData = [];
  unsubscribeCourses = onSnapshot(
    coursesQuery,
    (QuerySnapshot) => {
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs))
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs.map((e) => e.data())[0].courses))
      // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs.map((e) => e.data())))
      // coursesData.push({ ...QuerySnapshot.docs.map((e) => e.data()['toilette'])});
      // console.log('coursesData', Object.values(coursesData[0][1]))
      // coursesData.push({ ...QuerySnapshot.docs.map((e) => e.data())[0].courses})
      QuerySnapshot.docs.map((e) => coursesData.push({...e.data()}))
      console.log('coursesDataok', coursesData)
      return coursesData
    }
  )
  // unsubscribeCourses = onSnapshot(
  //   coursesQuery,
  //   (QuerySnapshot) => {
  //     // console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs))
  //     console.log('JSON.stringify', JSON.stringify(QuerySnapshot.docs.map((e) => e.data()['toilette'])))
  //     coursesData.push({ ...QuerySnapshot.docs.map((e) => e.data()['toilette'])});
  //     // console.log('coursesData', Object.values(coursesData[0][1]))
  //     coursesData.push({ ...Object.values(coursesData[0][1])})
  //     console.log('coursesData', coursesData)
  //   }
  // )

}


export async function readAsingleDocument(){
  const mySnapshot = await getDocs(todolistsCoursesRef)
  if (mySnapshot.exists()){
    const docData = mySnapshot.data();
    console.log('docData', JSON.stringify(docData))
  }
}

// export const todolistsCourses = getDocs(todolistsCoursesRef).then((snapshot) => {
//   let collection = [];
//   snapshot.docs.forEach((doc) => {
//     collection.push({ ...doc.data(), id: doc.id });
//     console.log('collection!!!', collection)
//   });
// });




export const colRef = collection(db, "todolists")
// export const querySnapshot = getDocs(colRef).then((snapshot) => {
//   let collection = [];
//   snapshot.docs.forEach((doc) => {
//     collection.push({ ...doc.data(), id: doc.id });
//   });
//   return collection
  
// });

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
