import { useCallback, useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBpyim9sbl8js1sdR5Umj3TuCl_4MoBNSo",
  authDomain: "react-tutorial-278e4.firebaseapp.com",
  databaseURL: "https://react-tutorial-278e4-default-rtdb.firebaseio.com",
  projectId: "react-tutorial-278e4",
  storageBucket: "react-tutorial-278e4.appspot.com",
  messagingSenderId: "746752113318",
  appId: "1:746752113318:web:1ef4923ff27a85ac741267"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};