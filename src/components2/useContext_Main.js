import React from "react";
import UseContextChild from '../components2/useContext_Child';
import ThemeContext from "../components2/ThemeContext_Global";

export default function UseContext_Main(){
    return (
        <div>
            {/*1. decare and assign value to global component (ThemeContext)*/}
            <ThemeContext.Provider value="green">
                {/*2. decare and reference value inside child component*/}
                <UseContextChild/>
            </ThemeContext.Provider>
        </div>
    )
}