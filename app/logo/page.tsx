"use client";

import Lettre from "./lettre";

function page() {
  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        // backgroundColor: "#EEE",
        height: '100%',
        padding: 42
      }}
    >
      <div className="shiny-background">
        <Lettre />
      </div>
      <style jsx>{`
        .shiny-background {
          background: linear-gradient(
            135deg,
            #fca4f0 25%,
            #0175ff 25%,
            #27caf7 50%,
            #0175ff 75%,
            #fca4f0 75%
          );
          background-size: 200% 200%;
          animation: shine 2s infinite linear;
          border-radius: 50%;
          width: 600px;
          height: 600px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        // @keyframes shine {
        //   0% {
        //     background-position: 0% 50%;
        //   }
        //   100% {
        //     background-position: 100% 50%;
        //   }
        // }
      `}</style>
    </div>
  );
}

export default page;
