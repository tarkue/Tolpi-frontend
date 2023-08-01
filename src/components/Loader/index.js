import Spinner from "@/components/Spinner"
import { LargeSpinner } from "@/components/Spinner/sizes"

import s from "./Loader.module.css"
import { accentColor } from "@/components/colors"

/**
 * Loader  
*/
export default function Loader() {

    return <div className={s.Loader}>
        <Spinner size={LargeSpinner} color={accentColor}/>
    </div>
}
