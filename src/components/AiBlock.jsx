import RoundProgressBar from "./roundProgressBar";
import {useEffect, useState} from "react";
import Testimonials from "./Testimonials";



const AiBlock = ({goNextStep}) => {

    const [ position, setPosition ] = useState(0); // 0% y position

    const [perc, setPerc] = useState(0)

    const percentsArray = [13,39,64,88,100]

    const text = [
        "Analysis of the child's interests",
        "Evaluation of interesting topics",
        "Personalization of the program",
        "Teacher selection",
        "Planning the class schedule"
    ]

    if (perc === 100) {
        setTimeout(function () {
            goNextStep()
        },1500)
    }

   useEffect(() => {
            setPerc(percentsArray[0])
           let index = 1;
           const loop = setInterval(() => {
               if (index === percentsArray.length - 1) clearInterval(loop)
               setPosition(index)
               setPerc(percentsArray[index++])
           },2000);

   },[])

return (
       <>

           <div className="ai-block-wrapper">
               <h3>We are preparing a personal plan for you</h3>
                <div>
                    <RoundProgressBar percent={perc}/>

                    <div className="doingList" >
                        {text.map((el, i) =>
                            <div key={i} style={{translate:`0 -${position}00%`}}
                                 className="element ">
                                {el}</div>
                        )}
                    </div>
                </div>

           </div>
           <Testimonials/>

       </>
    )
}

export default AiBlock

