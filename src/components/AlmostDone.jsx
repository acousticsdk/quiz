import ICONS from "../assets/icons/icons"

const AlmostDone = ({goNextStep}) => {
    return (
        <div className="almost-done ">
            <h3 >Almost done</h3>
            <img src={ICONS['charlie.svg']}/>
            <p>Answer a few questions so we can find the best offer for you</p>
            <div className="continueButton gradientOrange" onClick={() => goNextStep()}>
                Let's go!
            </div>
        </div>
    )
}

export default AlmostDone