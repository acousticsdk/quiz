
import {useState} from "react";


const SimpleAnswers = ({question, onClickAnswer}) => {

    const handleClick = (question,obj, index) => {
        onClickAnswer(question.title, obj.text)
        setActive(index)
    }
    const [isActive, setActive] = useState(false);

    return(
        <>
                <div className={'questionCard ' + question.type}>
                    <h3>{question.title}</h3>
                    {question.description && <p>{question.description}</p>}
                    {
                        question.answers.map((obj,index) =>
                            <div key={index} className={isActive === index ? 'button active' : 'button'} onClick={() => handleClick(question,obj, index)}>

                                {obj.icon && <img src={"assets/icons/"+obj.icon}/>}
                                <span  className="answer">{obj.text}</span>
                            </div>)
                    }

                </div>
        </>

    )
}
export default SimpleAnswers