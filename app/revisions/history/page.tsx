"use client";

import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { HistoryCards } from "./historyCards";
import { useRouter } from "next/navigation";

const FlippingCards = () => {
  const router = useRouter();

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <h2 style={{ marginTop: 27 }} onClick={() => router.back()}>
        Retour
      </h2>
      <div className="card-container">
        {HistoryCards.map((historyCard) => (
          <ReactCardFlip
            key={historyCard.id}
            isFlipped={isFlipped}
          >
            <div className="card front" key="front" onClick={handleFlip}>
              {historyCard.front}
            </div>

            <div className="card back" key="back" onClick={handleFlip}>
              {historyCard.back}
            </div>
          </ReactCardFlip>
        ))}

        <style jsx>{`
          .card-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .card {
            width: 300px;
            height: 400px;
            background-color: #61dafb;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.6s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
          .front {
            background-color: #264bc0;
          }
          .back {
            background-color: #f39c12;
          }
        `}</style>
      </div>
    </>
  );
};

export default FlippingCards;
