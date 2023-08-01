
import { useState } from "react"
import Column from "../Column"
import BackHeader from "../Header/Back"
import Input from "../Input"
import SelectText from "../Typography/SelectText"
import { blackTextColor } from "../colors"
import s from "./SelectCountry.module.css"


/**
 * Select Country 
*/
export default function SelectCountry({setPopupView, ...props}) {
    const [value, setValue] = useState()
    return <div className={s.SelectCountry} {...props}>
        <BackHeader title={"Город"} onClick={setPopupView}/>
        <Input 
            style={{height: "var(--select--input--height)"}} 
            placeholder={"Поиск по городам"}
            setValue={setValue}
        />
        <div className={s.Content}>
            <Column>
                <SelectText 
                    color={blackTextColor}
                    width={"calc(100dvw - 2*var(--indent-40))"}
                >
                    Челябинск
                </SelectText>
            </Column>
        </div>
    </div>
}