import { useState } from "react";
import Button from "../Button";
import BackHeader from "../Header/Back";
import Input from "../Input";
import { Primary } from "../Button/types";
import { accentColor } from "../colors";

import s from "./CreateTolpi.module.css"
import { useAppStore } from "@/store/appStore";


/**
 * Create Tolpi 
*/
export default function CreateTolpi({ setPopupView }) {
    const [value, setValue] = useState()
    
    return <div className={s.CreateTolpiWrapper}>
        <div className={s.CreateTolpi}>
            <BackHeader title={"Толпи"} onClick={setPopupView}/>
            <Input 
                placeholder={"Расскажите, что будет на встрече"} 
                setValue={setValue}
                style={{height: "var(--create--input--height)"}}
            />
            <Button type={Primary} color={accentColor}>
                Опубликовать
            </Button>
        </div>
    </div>
}