import CountryText from "../Typography/CountryText";
import HeaderSubtitle from "../Typography/HeaderSubtitle";

import { blackTextColor } from "../colors";
import { ArrowHeader } from "../Icons";

import s from "./SelectCountryHeader.module.css"


/**
 * Select Country Header
*/
export default function SelectCountryHeader({subtitle, country, ...props}) {
    return <div className={s.SelectCountryHeader} {...props}>
        <div className={s.Subtitle}>
            <HeaderSubtitle color={blackTextColor}>
                { subtitle }
            </HeaderSubtitle>
            <ArrowHeader />
        </div>
        <CountryText color={blackTextColor}>
            { country }
        </CountryText>
    </div>
}