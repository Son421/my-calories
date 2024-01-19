import React, {useState} from "react";
import './userForm.css'
import Menu from "../../smallPieces/menu/Menu";

let currentYear = new Date().getFullYear();

export default function UserForm(){
    const [stat, setStat] = useState({
        weight: 35,
        height: 120,
    });

    let yearsArr: (number[] & string[]) = [];

    for(let i = 1953; i <= currentYear - 16; i++){
        yearsArr.push(i);
    }

    function handlechange(e: any){
        const value = e.target.value;
        setStat({
            ...stat,
            [e.target.name]: value
        });
    }

    const lifestyleArr = ['sedentary lifestyle', 'low activity', 'medium activity', 'high activity'];

    return(
        <div className="from--wrapper">
            <form>
                <input type="text" className="form--input" name="field1" placeholder="Your Name"></input>    
                <div className="title--wrapper">
                    <span>Sex</span>
                </div>
                <div className="ratio--wraapper">
                    <div>
                        <label className="container">
                            <input className="ratio--style" type="radio" id="male" name="sex" value="male" checked />
                            <div className="checkmark"></div>
                            <span className="text--ratio">Male</span>
                        </label>
                    </div>
                    <div>
                        <label className="container">
                            <input className="ratio--style" type="radio" id="Female" name="sex" value="female" />
                            <div className="checkmark"></div>
                            <span className="text--ratio">Female</span>
                        </label>    
                    </div>
                </div>  
                <Menu name={'Date of birth'} arr={yearsArr}/>    
                <div>
                    <div className="title--wrapper">
                        <span>Weight</span>
                    </div>
                    <div className="range--wrapper">
                        <input className="range" type="range" id="weight" value={stat.weight} onChange={handlechange} name="weight" min="35" max="200" />
                        <span className="num"> {stat.weight} </span>
                    </div>
                </div>  
                <div>
                    <div className="title--wrapper">
                        <span>Height</span>
                    </div>
                    <div className="range--wrapper">
                        <input className="range" type="range" id="height" value={stat.height} onChange={handlechange} name="height" min="120" max="220" />
                        <span className="num"> {stat.height} </span>
                    </div>
                </div>
                <div>
                    <Menu name={'lifestyle'} arr={lifestyleArr}/> 
                </div>
            </form>
        </div>
    );
}