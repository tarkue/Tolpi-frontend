import { TimeSize } from "../sizes"
import { Regular } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Time  
*/
export default function Time({children, color, ...add}) {
    return <p style={
        {
            fontSize: TimeSize, fontFamily: Regular, 
            color: color, lineHeight: NormalLineHeight
        }
    } {...add}>
        { children }
    </p>
}
