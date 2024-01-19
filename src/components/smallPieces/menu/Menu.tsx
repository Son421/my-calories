import React, {useState} from "react";
import './menu.css'
import Select from "./select/Select";
import {TiArrowSortedDown} from "react-icons/ti";

interface menuType{
    arr: (number[] | string[]);
    name: string;
}

export default function Menu(props: menuType){
    const [menuVisibility, setMenuVisibility] = useState(false);

    function openMenu(){
        setMenuVisibility(!menuVisibility);
    }

    if(!menuVisibility){
        return(
            <div>
                <div className="menu--button" onClick={openMenu}> {props.name} <TiArrowSortedDown className="arrow__down"/> </div>
            </div>
        );
    }else{
        return(
            <div>
                <div className="menu--button--active" onClick={openMenu}> {props.name} <TiArrowSortedDown className="arrow__up"/> </div>
                <div className="select--wrapper">
                    {props.arr.map(item =>(
                        <Select item={item}/>
                    ))}
                </div>
            </div>
        );
    }
  
}