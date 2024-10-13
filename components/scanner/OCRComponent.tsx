import { useEffect, useState } from "react";
// import Tesseract from "tesseract.js";

let Tesseract

export default function OCRComponent() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);



  useEffect(() => {
    // Import Tesseract.js uniquement côté client
    import("tesseract.js").then((module) => {
      Tesseract = module.default;
    });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  

  const handleExtractText = () => {
    if (image) {
      setLoading(true);
      setText("");
      Tesseract.recognize(
        image,
        'eng',
        {
          logger: (m) => {
            if (m.status === "recognizing text") {
              setProgress(parseInt(m.progress * 100));
            }
          },
        }
      ).then(({ data: { text } }) => {
        setText(text);
        setLoading(false);
      });
    }
  };

  return (
    <div>
      <h1>OCR avec Tesseract.js</h1>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <img src={image} alt="Document" width={400} />
          <button onClick={handleExtractText}>Extraire le texte</button>
        </div>
      )}
      {loading && (
        <div>
          <p>Progression : {progress}%</p>
        </div>
      )}
      {text && (
        <div>
          <h3>Texte extrait :</h3>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}