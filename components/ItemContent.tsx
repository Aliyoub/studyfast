

import React, { useState, useEffect, useRef, PropsWithChildren } from "react";


import { useSelector, useDispatch } from "react-redux";
// import {
//   PanGestureHandler,
//   GestureHandlerRootView,
//   HandlerStateChangeEvent,
//   State,
//   TapGestureHandler,
//   TapGestureHandlerEventPayload,
//   LongPressGestureHandler,
// } from "react-native-gesture-handler";

import { useDrag } from '@use-gesture/react';
import { useInView } from 'react-intersection-observer';

import { Progress } from "@gluestack-ui/themed";
import { useRouter } from "next/router";
import { RootState, AppDispatch } from "../store/store";
// import Button from "@/components/Button";

type Props = PropsWithChildren<{
  itemContentId: number;
  itemContentTitle: any;
  itemContentText: any;
  itemBackgroundColor: string;
}>;

const ItemContent = ({
  itemContentId,
  itemContentTitle,
  itemContentText,
  itemBackgroundColor,
}: Props) => {
  const selectedItemsState = useSelector((state: any) => state.selectedItems);
  const globalStateInSelectionMode = useSelector(
    (state: any) => state.inSelectionMode
  );


  const [startOfText, setStartOfText] = useState(0);
  const [endOfText, setEndOfText] = useState(undefined);

  const [progress, setProgress] = useState(undefined);

 

  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#FFF");

  const [currentDate, setCurrentDate] = useState("");

  // const handleSingleTap = (
  //   e: HandlerStateChangeEvent<TapGestureHandlerEventPayload>
  // ) => {
  //   if (e.nativeEvent.state === State.ACTIVE) handleSinglePress();
  // };
  const doubleTapRef = useRef();

  const router = useRouter();
  
  // Access router information
  const { query, pathname } = router;

  // Pour éditer
  const handledoublePress = () => {
    router.push({
      pathname: "/Edit",
      query: { itemContentText },
      // params: { itemContentText },
    });
  };

  // Pour Sélectionner ou désélectionner l'item
  // const handleLongPress = () => {
  //   if (selectedItemsState.includes(itemContentId)) {
  //     deleteItemFromSelectedItems(itemContentId);
  //   } else if (!selectedItemsState.includes(itemContentId)) {
  //     addItemInSelectedItems(itemContentId);
  //   }

  //   if (selectedItemsState.length > 0) {
  //     inSelectionMode(true);
  //   } else if (selectedItemsState.length === 0) {
  //     inSelectionMode(false);
  //   }
  // };

  // Pour lire le contenu
  const [Playing, setPlaying] = useState(false);
  const handleSinglePress = () => {
    let numberOfLoops: number = 0;
 

    const dispatch = useDispatch<AppDispatch>();

  const addItemInSelectedItems = (itemContentId: number) => {
    dispatch({
      type: "selectedItems/addItemInSelectedItems",
      payload: itemContentId,
    });
  };


  const deleteItemFromSelectedItems = (itemContentId: number) => {
    dispatch({
      type: "selectedItems/deleteItemFromSelectedItems",
      payload: itemContentId,
    });
  };

  const inSelectionMode = (inSelectionMode: boolean) => {
    dispatch({
      type: "inSelectionMode/setInSelectionMode",
      payload: inSelectionMode,
    });
  };

  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: "#FCA4F0",
        borderLeftWidth: 3,
        borderRightColor: "#663E94",
        marginBottom: 3,
        width: 370,
        height: 70,
        // height: (globalState.selectedItem[0].id===88) ? 0 : 70,
        color: "#000",
      }}
    >
      {/* <GestureHandlerRootView> */}
        {/* <LongPressGestureHandler
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              handleLongPress();
            }
          }}
          minDurationMs={800}
        > */}
          {/* <TapGestureHandler
            onHandlerStateChange={handleSingleTap}
            waitFor={doubleTapRef}
          > */}
            {/* <TapGestureHandler
              numberOfTaps={2}
              ref={doubleTapRef}
              onActivated={handledoublePress}
            > */}
              <div
                style={{
                  fontSize: 12,
                  backgroundColor: itemBackgroundColor,
                  // backgroundColor: selectedBackgroundColor,
                  padding: 5,
                  height: "100%",
                }}
                // onLongPress={handleLongPress}
                numberOfLines={5}
              >
                {itemContentText}
                {"\n"}
                {"\n"}
                <div
                  style={{
                    color: "#CCC",
                    fontSize: 11,
                    marginBottom: 0,
                    alignSelf: "flex-end",
                  }}
                >
                  {currentDate}
                </div>
              </div>
            {/* </TapGestureHandler> */}
          {/* </TapGestureHandler> */}
        {/* </LongPressGestureHandler> */}
      {/* </GestureHandlerRootView> */}
    </div>
  );
};
}
export default ItemContent
