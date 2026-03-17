import { TypedNavigator } from "@react-navigation/native";
import { configureStore } from "@reduxjs/toolkit";


export const store  = configureStore({ 
reducer: { 


}}); 

//retorna el tipo del estado 
export type RootState = ReturnType<typeof store.getState> 

export type AppDispatch = typeof store.dispatch