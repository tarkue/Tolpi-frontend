import Spinner from "@/components/Spinner"
import { LargeSpinner } from "@/components/Spinner/sizes"

import s from "./Loader.module.css"
import { accentColor } from "@/components/colors"

/**
 * Loader  
*/
export default function Loader({ panel }) {

    return <div className={s.Loader} style={{"--padding": panel ? "calc(2 * var(--indent-60))" : "0px"}}>
        <Spinner size={LargeSpinner} color={accentColor}/>
    </div>
}
