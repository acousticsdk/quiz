
import { useState } from 'react'

import './scss/App.scss'
import Header from "./components/Header";
import SimpleAnswers from "./components/SimpleAnswers";
import AllQuestions from "./db.json"
import MultipleAnswers from "./components/MultipleAnswers";
import AlmostDone from "./components/AlmostDone";
import AiBlock from "./components/AiBlock";
import PhoneBlock from "./components/PhoneBlock";
import DataPicker from "./components/DataPicker";
import LocalStorageApi from "./api/LocalStorageApi";
import Result from "./components/Result";
import {motion,AnimatePresence} from "framer-motion";


function App() {

    const [step, setStep] = useState(1)
    const [next, setNext] = useState(step) //state for motion

    const simpleAnswers = AllQuestions.filter((el) => el.type === 'simple')
    const multipleAnswers = AllQuestions.filter((el) => el.type === 'multiple')
    const currentQuestion = AllQuestions[step - 1]



    const goNextStep = () => {
        setStep(step + 1)
        setNext(step + 1)
    }

    const onClickAnswer = (question, answer ) => {
        LocalStorageApi.save(question, answer)
        setTimeout(function () {

            setNext(step + 1)
            setStep(step + 1)

        },350)
    }

    const backStep = () => {
        setStep(step - 1)
    }

    const questionsCount = AllQuestions.length + 5 // 5 screens

  return (
    <div className="wrapper">

        <Header setStep={setStep}
                step={step}
                backStep={backStep}
                questionsCount={questionsCount} />

        <AnimatePresence>
            <motion.div
                key={next}
                initial={{ x: 300,opacity:0 }}
                animate={{ x: 0,opacity:1}}
                exit={{opacity:0}}
                transition={{
                    ease: "easeInOut",
                    duration: 0.25,

                }}

            >

        {step <= simpleAnswers.length &&
            <SimpleAnswers question={currentQuestion} onClickAnswer={onClickAnswer}/>}

        {step === simpleAnswers.length+1 && <
            AlmostDone goNextStep={goNextStep}/>
        }

        {step === multipleAnswers.length + simpleAnswers.length + 1 &&
            <MultipleAnswers
                goNextStep={goNextStep}
                question={multipleAnswers[0]}
                onClickAnswer={onClickAnswer}/>
        }

        {step === 7 && <AiBlock goNextStep={goNextStep} />}

        {step === 8 && <PhoneBlock goNextStep={goNextStep}/>}

        {step === 9 && <DataPicker goNextStep={goNextStep}/>}

        {step === 10 && <Result/>}

            </motion.div>
        </AnimatePresence>

    </div>
  )
}

export default App
