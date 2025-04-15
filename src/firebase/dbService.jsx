import {
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
  } from "firebase/firestore";
  import { db } from "./config";
  
  // Save user interest
  export const saveUserInterest = async (uid, interest) => {
    await setDoc(doc(db, "users", uid), {
      interest,
    }, { merge: true });
  };
  
  // Get user interest
  export const getUserInterest = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().interest : null;
  };
  
  // Send chat message
  export const sendMessage = async (name, text) => {
    await addDoc(collection(db, "messages"), {
      name,
      text,
      timestamp: serverTimestamp(),
    });
  };
  
  // ✅ Listen to messages in realtime, ordered by timestamp
  export const listenToMessages = (callback) => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    return onSnapshot(q, callback);
  };
  