import { ArrowLeft } from "../Icons";

import Title from "../Typography/Title";
import { blackTextColor } from "../colors";

import s from "./Header.module.css"


/**
 * Default Header 
*/
export default function BackHeader({ title, ...props }) {
    return <header className={s.HeaderBack} >
        <ArrowLeft {...props}/>
        <Title color={blackTextColor}>{title}</Title>
    </header>
}