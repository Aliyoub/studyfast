

import { configureStore, createSlice } from "@reduxjs/toolkit";

const ttsSettingsSlice = createSlice({
  name: "ttsSettings",
  initialState: [
    {
      ttsRate: 1.0,
      ttsPitch: 1.0,
      ttsVolume: 0.5,
      // numberOfLoops: 1,
      // voiceIdentifier: "fr-FR-default",
    },
  ],
  reducers: {
    ttsSettings: (state: any, action) => {
      // Ici, je n'utilise pas state.push ...
      // ... pour éviter d'ajouter les valeurs initiales aux nouvelles
      // j'utilise donc le return; en effet, il s'agit ici d'une mise à jour et non d'un ajout de valeurs
      return [
        {
          ttsRate: action.payload.ttsRate,
          ttsPitch: action.payload.ttsPitch,
          ttsVolume: action.payload.ttsVolume,
          // numberOfLoops: action.payload.numberOfLoops,
          // voiceIdentifier: action.payload.voiceIdentifier,
        },
      ];
    },
  },
});

const textToSpeechSlice = createSlice({
  name: "textToSpeech",
  initialState: [{ startOfTextIndex: 0 }],
  reducers: {
    textToSpeech: (state: any, action) => {
      return [
        {
          startOfTextIndex: action.payload.startOfTextIndex,
        },
      ];
    },
  },
});

export const store = configureStore({
  reducer: {
    ttsSettings: ttsSettingsSlice.reducer,
    textToSpeech: textToSpeechSlice.reducer,
  },
});
