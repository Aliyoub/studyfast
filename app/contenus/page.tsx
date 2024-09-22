
"use client";

import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";



function Home() {
  const [users, setUsers] = useState([])
  const content = useSelector((state: RootState) => state.content);


  const createUser = async (name: any, email: any) => {
    fetch("/api/users", {
    // const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email
      }),
    },)
  }
  
  const updateUser = async (id: any, name: any) => {
    fetch("/api/users", {
    // const res = await fetch("/api/users", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        name
      }),
    },)
    console.log('name', name)
  }

  const deleteUser = async (id: any) => {
    fetch("/api/users", {
    // const res = await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id
      }),
    },)
  }
  useEffect(() => {
    console.log('content', content)

    // createUser("gohou19", "g.michel19@example.com")
    // deleteUser(3)
    updateUser(7, "myname")
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);



  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  const volumeFromStore = useSelector(
    (state: RootState) => state.ttsVolume.value
  );

  const pitchFromStore = useSelector(
    (state: RootState) => state.ttsPitch.value
  );
  const rateFromStore = useSelector((state: RootState) => state.ttsRate.value);

  return (
    <>
     <div>
       <h1>Users List</h1>
       {/* {console.log('users', users)}
       <ul>
         {users.map((user, key) => (
           <li key={user.id}>
             {user.name} - {user.email}
           </li>
         ))}
       </ul> */}
       ok
     </div>
    </>
  );
}

export default Home;
