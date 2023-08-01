import { MarkSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Mark Text  
*/
export default function Mark({children, color}) {
    return <h6 style={
        {
            fontSize: MarkSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </h6>
}
