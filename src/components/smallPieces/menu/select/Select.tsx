import React from "react";
import './select.css';
import {useAppDispatch} from "../../../../hooks";

export default function Select(props: {item: number | string}){

    
    return(
        <div>
            <div className="select"> {props.item}</div>
        </div>
    );
}