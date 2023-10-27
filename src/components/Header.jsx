import backArrow from "../assets/backArrow.svg";
import allRightLogo from "../assets/logo.svg";
import { useState} from "react";

function Header({backStep, step, setStep, questionsCount}) {

    console.log("step:",step)

    const percentage = (step ) / parseInt(questionsCount) * 100

    return (
        <div className="header">
            <div className="headerInner">
                <div>
                    <img className={(step !== 1) ? 'backArrow active' : 'backArrow disabled'}
                         onClick={() => backStep() }
                         src={backArrow}/>
                </div>
                <div className="logo">
                    <img onClick={() => {setStep(1)}} src={allRightLogo}/>
                </div>
                <div className="questionCounter">
                    <div><span className="currentQuestion">{step}</span> / <span className="totalQuestions">{questionsCount}</span></div>
                </div>
            </div>
            <div className="progressBar">
                <div className="progressBarFill" style={{width:`${percentage}%`}}/>

            </div>
        </div>
    )
}

export default Header