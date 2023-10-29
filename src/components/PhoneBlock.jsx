
import {useEffect, useRef, useState} from "react";
import { PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';

import { PhoneNumberUtil } from 'google-libphonenumber';
// import ICONS from "./icons";
import LocalStorageApi from "../api/LocalStorageApi";
const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
        return false;
    }
};

const PhoneBlock = ({goNextStep}) => {
    const inputRef = useRef(null);

    const [phone, setPhone] = useState('');
    const isValid = isPhoneValid(phone);

    useEffect(function () {
        LocalStorageApi.save('Phone number',phone)
    },[isValid])

    return(
        <div className="phone-block">
            <h3>Enter your phone number</h3>
            <p >This is necessary to receive notifications</p>

            <PhoneInput ref={inputRef}
                        autoFocus={true}
                        className="phone-input"
                        placeholder="(00) 000 00 00"
                        defaultCountry="ua"
                        value={phone}
                        disableDialCodeAndPrefix={true}
                        showDisabledDialCodeAndPrefix={true}
                        onChange={(phone) => setPhone(phone)}
                        dialCodePreviewStyleProps={{"className":"dial3"}}
            />

            <div className={!isValid ? 'continueButton disabled' : 'continueButton gradientOrange'} onClick={() => goNextStep()}>
                Let's go!
            </div>

            <div className="privacy-block">
                <img src="assets/icons/privacy.svg"/>
                <p >We respect your privacy and are committed to protecting your personal data.</p>
            </div>

        </div>
    )
}

export default PhoneBlock