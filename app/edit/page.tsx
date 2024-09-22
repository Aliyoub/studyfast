'use client';

import { addContent } from "@/store/slices/content/contentSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";

export default function InputComponent() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [contents, setContents] = useState([])


  const dispatch = useDispatch<AppDispatch>();

  const insertContent = async (contentTitle: any, contentDescription: any) => {
    fetch("/api/contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription
      }),
    },)
  }
  const updateContent = async (contentTitle: any, contentDescription: any, id: number) => {
    fetch("/api/contents", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription,
        id
      }),
    },)
  }

  const deleteContent = async (id: number) => {
    fetch("/api/contents", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id
      }),
    },)
  }


  useEffect(() => {
    // insertContent("Ceci est le titre", "Ceci est la description");
    // updateContent("contentTitle", "contentDescription", 27);
    // deleteContent(19);
  
  
    
    fetch("/api/contents")
    .then((res) => res.json())
    // .then((data) => setContents(data));
    .then((data) => console.log("content", data))
    console.log("content", contents);
  },[]);



  return (
    <div>ok
      {/* <ul>
         {contents.map((content, id) => (
           <li key={content.id}>
             {content.contentTitle}
           </li>

         ))}
       </ul> */}
    </div>
  );
}
