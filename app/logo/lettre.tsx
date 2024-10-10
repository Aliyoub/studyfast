const Lettre = () => {
  return (
    <div style={{ backgroundColor: "transparent" }}>
      <div style={{ fontSize: 700, fontWeight: "900", color: "#FFFFFF" }}>
        <span
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: "35%",
            top: "19%",
          }}
        >
          S
        </span>
        <span
          style={{
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: "52%",
            top: "40%",
          }}
        >
          F
        </span>
      </div>
      {/* <div style={{fontSize: 100,fontWeight:'bold', color: '#FFFFFF', padding:0, margin:0 }}>
            F
        </div> */}
    </div>
  );
};

export default Lettre;
