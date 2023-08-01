import { StartTitleSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Start Title  
*/
export default function StartTitle({children, color, width}) {
    return <h1 style={
        {
            fontSize: StartTitleSize, fontFamily: SemiBold,
            color: color
        }
    }>
        { children }
    </h1>
}
