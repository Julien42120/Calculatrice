import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Calculatrice from './components/Calculatrice';
import store from "./store/index";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <Calculatrice />
    </Provider>
  );
}

