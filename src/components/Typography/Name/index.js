import { NameSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Name Text  
*/
export default function Name({children, color}) {
    return <p style={
        {
            fontSize: NameSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </p>
}
