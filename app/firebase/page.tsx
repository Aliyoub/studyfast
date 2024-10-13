'use client'

import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";


const page = () => {

    const [firebaseConfig, setFirebaseConfig] = useState(null);
    const [contents, setContents] = useState<any[]>([]);

    useEffect(()=>{

      fetch("/api/firebase")
      .then((res) => res.json())
      .then((data) => {
        setContents(data.contents);
        console.log("all data", data);
      });
  
    // async function fetchFirebaseConfig() {
    //   try {
    //     const res = await fetch('/api/firebase');
    //     const { firebaseConfig_ } = await res.json();
    //     console.log('firebaseConfig_', firebaseConfig_)
    //     setFirebaseConfig(firebaseConfig_);
  
    //     if (!firebase.apps.length && firebaseConfig) {
    //       firebase.initializeApp(firebaseConfig);
    //     }
    //   } catch (error) {
    //     console.error('Error loading Firebase config:', error);
    //   }
    // }
    // fetchFirebaseConfig();

  }, []);
  return (
    <div>
      
      <div style={{
        background: 'linear-gradient(135deg, #bcb4ff, #DCACF8, #c0e1f7)', height:"100vh", padding:100
        // backgroundColor: 'linear-gradient(to top, 135deg, #bcb4ff, #f2c9f1, #c0e1f7)', width: 222, height: 333,
        // background: 'linear-gradient(to top, #264BC0, #FCA4F0)',
      }}>
      </div>

    </div>
  )
}

export default page