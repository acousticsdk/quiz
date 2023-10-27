import {useEffect, useState} from "react";
import MultipleButton from "./MultipleButton";
import LocalStorageApi from "../api/LocalStorageApi";
const MultipleAnswers = ({question, goNextStep}) => {

    const [data, setData] = useState([]);

    useEffect(function () {
        LocalStorageApi.save(question.title, data)
    },[data])

    return(
        <>
                <div className={'questionCard ' + question?.type}>
                    <h3>{question.title}</h3>

                    {question.description && <p>{question.description}</p>}
                    {
                        question.answers.map((obj,index) =>
                            <MultipleButton key={index} setData={setData} obj={obj}/>
                        )
                    }
                </div>

                <div className="continueButton-wrapper">
                    <div className={data.length ? 'continueButton gradientOrange' : 'continueButton disabled'} onClick={() => goNextStep()}>
                    Continue
                </div>
                </div>

        </>
    )
}
export default MultipleAnswers