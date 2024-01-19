import React from "react";
import './userInfo.css'
import {SlUser, SlUserFemale} from "react-icons/sl";
import { FaRegEdit } from "react-icons/fa";
import { useAppSelector } from "../../../hooks";

export default function UserInfo(){
    const user =  useAppSelector(state => state.userInfo.value);

    const age = Math.trunc((new Date().getTime() - user.birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

    return(
        <div className="user--flex">
            <div className="user--wrapper" >    
                <div>
                    {user.sex == 'm'? <SlUser className="userpic"/>: <SlUserFemale className="userpic"/>}
                </div>
                <div className="user--text--wrapper">
                    <span> {user.userName} </span> 
                </div>
            </div>
            <div>
                <div className="user__parameter--wrapper">  
                    <div className="user__parameter">
                        <span> Age: {age} </span>
                    </div>
                </div>
                <div className="user__parameter--wrapper" >
                    <div className="user__parameter">
                        <span> Weight: {user.weight} kg </span>
                    </div>
                    <div className="user__parameter">
                        <span> Height: {user.height} cm </span>
                    </div>
                </div>
                <div className="user__parameter--wrapper">  
                    <div className="user__parameter">
                        <span> Lifestyle: {user.lifeStyle} </span>
                    </div>
                </div>
            </div>
            <div className="user--edit--wrapper">
                <FaRegEdit className="user--edit"/>
            </div>
        </div>
    )
}