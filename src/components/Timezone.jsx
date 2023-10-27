import {useRef} from "react";

const Timezone = ({changeTimezone}) => {

        const selectRef = useRef()

        return(
        <select ref={selectRef}
                onChange={()=>changeTimezone(false, selectRef.current.selectedOptions[0].text)}
                defaultValue="3"
                name="timezone"
                id="timezone">
            <option value="-10">Hawaii UTC -10</option>
            <option value="-9">Alaska UTC -9</option>
            <option value="-7">Baja California UTC -8</option>
            <option value="-7">Arizona UTC -7</option>
            <option value="-6">Central America UTC -6</option>
            <option value="-5">Monterrey UTC -5</option>
            <option value="-4">Cuiaba UTC -4</option>
            <option value="-3">Brasilia UTC -3</option>
            <option value="-2">Universal Time-02 UTC -2</option>
            <option value="1">London UTC +1</option>
            <option value="2">Kyiv UTC +2</option>
            <option value="3">Kuwait UTC +6</option>
            <option value="4">Abu Dhabi UTC +4</option>
            <option value="5">Tashkent UTC +5</option>
            <option value="6">Dhaka UTC +6</option>
            <option value="7">Bangkok UTC +7</option>
            <option value="8">Hong Kong UTC +8</option>
            <option value="9">Tokyo UTC +9</option>
            <option value="10">Melbourne UTC +10</option>
            <option value="11">New Caledonia UTC +11</option>
            <option value="12">Magadan UTC +12</option>
            <option value="13">Samoa UTC +13</option>
        </select>
    )
}

export default Timezone