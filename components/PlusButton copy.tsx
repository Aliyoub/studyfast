import { useMemo, GestureResponderEvent, StyleSheet } from "react";
import { screenWidth, screenHeight } from "../myConstants/dimensions";
import { AntDesign } from "@expo/vector-icons";
import { myColors } from "../myConstants/colors/index";

export default function PlusButton(props: {
  onClick: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return useMemo(
    () => (
      <button onClick={props.onClick} style={styles.buttonContainerStyle}>
        <div style={styles.buttonTitleStyle}>+</div>
        {/* <AntDesign name="plus" color="white" style={styles.buttonTitleStyle} /> */}
      </button>
    ),
    []
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    position: "absolute",
    bottom: screenWidth * 0.05,
    right: screenWidth * 0.05,
    width: screenWidth * 0.14,
    height: screenWidth * 0.14,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: screenWidth * 0.07,
    backgroundColor: myColors.lightPink, // 'lightblue'
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonTitleStyle: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF", // PRIMARY_COLOR_LIGHT,
  },
});
