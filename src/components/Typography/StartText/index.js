import { StartTextSize } from "../sizes"
import { Regular } from "../family"
import { StartTextLineHeight } from "../lineHeight"


/**
 * Start Text  
*/
export default function StartText({children, color}) {
    return <p style={
        {
            fontSize: StartTextSize, fontFamily: Regular, 
            color: color, lineHeight: StartTextLineHeight
        }
    }>
        { children }
    </p>
}
