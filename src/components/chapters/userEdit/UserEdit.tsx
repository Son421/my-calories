import React from "react";
import './userEdit.css';
import { useAppSelector } from "../../../hooks";

export default function UserEdit(){
    const user =  useAppSelector(state => state.userInfo.value);
    
    return(
        <div>
            
        </div>
    );
}