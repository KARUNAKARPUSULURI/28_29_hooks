import { createContext } from "react";

const token = JSON.parse(localStorage.getItem("loggedIn"))
export const myContext = createContext(token)

export const colorChangeContext = createContext()
