import React from "react";
// import {useAppDispatch, useAppSelector} from "../../hooks";
import UserForm from "../chapters/userForm/UserForm";
import UserInfo from "../chapters/userInfo/UserInfo"

export default function UserPage(){
    
    return(
        <div>
            <UserForm/>
            {/* <UserInfo/> */}
        </div>
    );
}