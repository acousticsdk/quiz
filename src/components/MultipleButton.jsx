// import ICONS from "./icons";
import {useEffect, useState} from "react";

const MultipleButton = ({obj, index, setData}) => {
    const [isActive, setActive] = useState(false);

    let activeArrayText = [];

    useEffect(()=>{
        let activeArray = document.getElementsByClassName("button active");
        for (let i = 0; i < activeArray.length; i++) {
            let text = activeArray[i].innerText;
            activeArrayText.push(text)
        }
        setData(activeArrayText)
    },[isActive])

    const toggleClass = () => {
        setActive(!isActive);
    };

    return(
            <div key={index} className={isActive ? 'button active' : 'button'} onClick={toggleClass}>
                {obj.icon && <img  src={"assets/icons/"+obj.icon}/>}
                <span  className="answer">{obj.text}</span>
            </div>
    )
}
 export default MultipleButton
