"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/navigation";
import LongPressDoublePressComponent from "../../components/LongPressDoublePressComponent";

 const Page = () =>{
// export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [contents, setContents] = useState([]);
  const [contentsLength, setContentsLength] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // On récupère les données depuis la base de données dès le premier montage du composant
    // et on ne recupère plus les données depuis la base de données, on gère la suite avec le state,
    // le but étant de limiter les accès à la base données
    // Par contre, on devra accéder à la base de données pour
    // un ajout, une mise à jour, une suppression

    fetch("/api/contents")
      .then((res) => res.json())
      .then((data) => {
        // Pour récupérer l'id du dernier enregistrement dans la table contents,
        // on en a besoin lors de l'ajout de data dans le state contents.
        // Voir plus bas dans la fonction addContent
        setContentsLength(data.contents[data.contents.length - 1].id);
        setContents(data.contents);
        console.log("data from database", data.contents);
      });
  }, []);

  const insertContent = async (contentTitle: any, contentDescription: any) => {
    fetch("/api/contents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contentTitle,
        contentDescription,
      }),
    });
  };
  const deleteContent = async (id: number) => {
    fetch("/api/contents", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };
  const descriptionHandleChange = (e: any) => {
    const value = e.target.value;
    setDescription(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };
  const titleHandleChange = (e: any) => {
    const value = e.target.value;
    setTitle(value);

    // Le champ doit être renseigné
    setIsValid(value.trim().length > 0);
  };

  // On récupère les valeurs d'un item après un clic dessus
  const getItemValues = (item) => {
    setSelectedItem(item);
    console.log("getItemValues", item);
  };

  const addContent = (e: any) => {
    e.preventDefault();
    if (isValid) {
      setContentsLength(contentsLength + 1);
      setContents([
        ...contents,
        {
          id: contentsLength + 1,
          contentTitle: e.target[0].value,
          contentDescription: e.target[1].value,
        },
      ]);
      // insertContent(e.target[0].value, e.target[1].value);
      setTitle("");
      setDescription("");

      console.log("content!!", contents);
    } else {
      console.log("Input is invalid");
    }
  };

  const router = useRouter();

  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        width: "100%",
      }}
    >
      <div>
        <h1>contents List</h1>
        <List>
          {contents.map((content) => (
            <LongPressDoublePressComponent>
            <ListItem
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "#EEE",
                  color: "#B2B8C1",
                  fontWeight: "bold",
                }}
                key={content.id}
                // onClick={() => {
                //   router.push("/edit");
                //   getItemValues(content);
                // }}
              >
                {content.contentTitle}
              </ListItem>
                </LongPressDoublePressComponent>
          ))}
        </List>
      </div>

      <form
        style={{ position: "fixed", bottom: "50px" }}
        onSubmit={addContent}
        className="flex flex-col items-center"
      >
        <input
          type="text"
          value={title}
          onChange={titleHandleChange}
          placeholder="Titre"
          className={`p-2 border ${
            isValid ? "border-gray-300" : "border-red-500"
          } rounded mb-4 focus:outline-none focus:ring focus:border-blue-300`}
        />

        <input
          type="text"
          value={description}
          onChange={descriptionHandleChange}
          aria-multiline={true}
          placeholder="Description"
          className={`p-2 border ${
            isValid ? "border-gray-300" : "border-red-500"
          } rounded mb-4 focus:outline-none focus:ring focus:border-blue-300`}
        />
        {!isValid && (
          <p className="text-red-500 mb-4">Le champ ne peut être vide!</p>
        )}
        {title}
        {description}
        <button
          type="submit"
          className="bg-blue-500 text-white py-1.5 px-12 rounded"
        >
          Valider
        </button>
        {/* <button
          type="submit"
          className="bg-blue-500 text-white mt-1 py-1.5 px-12 rounded"
        >
          Annuler
        </button> */}
      </form>
    </div>
  );
}

export default Page;

