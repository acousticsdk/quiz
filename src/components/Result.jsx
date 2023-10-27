import LocalStorageApi from "../api/LocalStorageApi";

const Result = () => {

    const originalObject = LocalStorageApi.read();
    const keyValueArray = Object.entries(originalObject);
    keyValueArray.sort().reverse();
    const answers = keyValueArray.map(el => {
        el = el[1].split('=')
        return el
    })

    return(
        <>
            <div className="result">
                <h3>Results:</h3>
                {
                    answers.map(el => (<div>
                            <div className="question"><span>{el[0]}</span></div>
                            <div> {el[1]}</div>
                        </div>)

                    )
                }
            </div>
        </>
    )
}

export default Result