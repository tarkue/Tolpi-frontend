import { AlertTitleSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Alert Title  
*/
export default function AlertTitle({children, color}) {
    return <h1 style={
        {
            fontSize: AlertTitleSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </h1>
}
