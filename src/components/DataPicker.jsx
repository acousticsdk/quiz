import {useState} from "react";
import Select from 'react-select';
import Timezone from "./Timezone";
// import ICONS from "./icons"
import LocalStorageApi from "../api/LocalStorageApi";

function getNext7Days() {
    const today = new Date();
    const next7Days = [];

    for (let i = 1; i < 8; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        next7Days.push(date);
    }
    return next7Days;
}

const next7Days = getNext7Days();

const timeArray = [
    { label: '13:00', value: '13:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' },
    { label: '17:00', value: '14:00' },
    { label: '18:00', value: '18:00' },
];

const DataPicker = ({goNextStep}) => {

const [activeButtonIndex,SetActiveButtonIndex] = useState(0)

    const toggleHandler = (index) => {
        SetActiveButtonIndex(index)
    }

    const [timezoneIsOpened, setTimezoneIsOpened] = useState(false)
    const [currentTimezone, setCurrentTimezone] = useState('Kyiv UTC +3')
    const [time, setTime] = useState(timeArray[0].label)

    const changeTimezone = (value, data) => {
       setTimezoneIsOpened(value)
       setCurrentTimezone(data)
    }

    const saveDataPickerData = () => {
        LocalStorageApi.save('Lesson date:', parseInt(document.querySelectorAll('.active.day')[0].textContent))
        LocalStorageApi.save('Lesson time:',time)
        LocalStorageApi.save('User UTC:',currentTimezone)
    }

    return(
        <div className="data-picker">
            <h3>Choose the date and time of your free lesson</h3>
           <div className="inner">
               {next7Days.map((el, index) => (
                   <div onClick={() => toggleHandler(index)} className={activeButtonIndex === index ? 'active day' : 'day' } key={index}>
                       <div className="date">{el.toLocaleDateString('en-US',  { day: 'numeric' })}</div>
                       <div  className="name">{el.toLocaleDateString('en-US',  { weekday: 'short' }).toLocaleLowerCase()}</div>
                   </div>
                   )
               )}

           </div>

            <Select
                options={timeArray}
                defaultValue={{label: '13:00', value: time}}
                onChange={opt => setTime(opt.value)}
            />

            {!timezoneIsOpened
                ?   <span className="utc" onClick={() => setTimezoneIsOpened(true)}>
                        {currentTimezone}
                        <img src="assets/icons/pen.svg"/>
                    </span>
                : <Timezone changeTimezone={changeTimezone}/>
            }

            <div className={'continueButton gradientOrange'} onClick={() => {goNextStep();saveDataPickerData()}}>
                Book a lesson
            </div>

        </div>
    )
}

export default DataPicker