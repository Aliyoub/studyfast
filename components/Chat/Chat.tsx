import { useState, useEffect } from "react";
import { auth, getFirestore } from "../firebase/firebase";

import { addMessageToFirestore } from "../firebase/firestoreDatabase";

export const db = getFirestore();


const Chat = () => {
  const [text, setText] = useState("");
  // const messagesRef = firestore.collection("messages");
  // const query: any = messagesRef.orderBy("timestamp").limit(25);
  // const [messages] = useCollectionData(query, { idField: "id" });

  //   const [messages, loadingMessages, error] = useCollectionData(query(
  //     collection(firestore, "messages"),
  //     where("accountUid", "==", "bUkVeJsuZwWEJ3kRjVtYzVCrW9N2")
  //     // where("accountUid", "==", accountId)
  // ));

  const ChatMessage = ({ message }) => {
    const { text, sender } = message;
    const messageClass = sender === auth.currentUser.uid ? "sent" : "received";
  
    return (
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
        <p>Message en dure</p>
      </div>
    );
  };

  const { uid, photoURL, displayName } = auth.currentUser;
  const sendMessage = async () => {

    // await messagesRef.add({
    //   text,
    //   sender: uid,
    //   receiver: 'bUkVeJsuZwWEJ3kRjVtYzVCrW9N2', // Placeholder, should be dynamic
    //   // receiver: 'receiver_user_id', // Placeholder, should be dynamic
    //   displayName,
    //   photoURL,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    // await addMessageToFirestore({
    //   text: text,
    //   sender: uid,
    //   receiver: "bUkVeJsuZwWEJ3kRjVtYzVCrW9N2", // Placeholder, should be dynamic
    //   // receiver: 'receiver_user_id', // Placeholder, should be dynamic
    //   displayName:displayName,
    //   photoURL:photoURL,
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });
    console.log('testons uid', uid)
    setText("");
  };

  return (
    <div>
      {/* <div className="chat-box">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div> */}
      <form onSubmit={(e: any) => e.preventDefault() && sendMessage()}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={!text}>
          Send
        </button>
      </form>
    </div>
  );
};


export default Chat;
