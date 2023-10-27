import {useEffect, useMemo, useState} from "react";

const RoundProgressBar = ({percent}) => {

    const [percentText, setPercentText] = useState(percent)

    let counter = percentText

    const percentage = Math.round(565*((100-percent)/100)) + 'px'

    useEffect(function () {
        let loop = setInterval(draw, 25, percent);
        function draw(percent){
            if (counter > percent) clearInterval(loop)
            else {
                document.getElementById('percentData').textContent = counter + "%";
                counter++;
            }
        }

        setPercentText(percent)

        return () => { // component unmount
            clearInterval(loop)
        }
    },[percent])

    return (
        <div   className="roundProgressBar" style={{position:'relative'}}>
            <svg width="88" height="88" viewBox="0 0 202 202" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{transform:"rotate(-90deg)"}}>
                <circle r="90" cx="100" cy="100" fill="transparent" stroke="#ffe5cd" strokeWidth="18" strokeDasharray="565.2px" strokeDashoffset="0"></circle>
                <circle r="90" cx="100" cy="100" stroke="#fa9234" strokeWidth="18" strokeLinecap="round" strokeDashoffset={percentage} fill="transparent" strokeDasharray="565.2px"></circle>
            </svg>
            <span id="percentData">{percentText}%</span>
        </div>
    )
}

export default RoundProgressBar

