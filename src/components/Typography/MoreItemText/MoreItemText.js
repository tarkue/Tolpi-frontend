import { MoreItemTextSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * More Item Text  
*/
export default function MoreItemText({children, color}) {
    return <p style={
        {
            fontSize: MoreItemTextSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </p>
}
