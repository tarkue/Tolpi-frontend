import { TextSize } from "../sizes"
import { Regular } from "../family"
import { TextLineHeight } from "../lineHeight"


/**
 * Text  
*/
export default function Text({children, color, ...add}) {
    return <p style={
        {
            fontSize: TextSize, fontFamily: Regular,
            color: color, lineHeight: TextLineHeight
        }
    } {...add}>
        { children }
    </p>
}
