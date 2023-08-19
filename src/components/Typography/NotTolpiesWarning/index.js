import { NameSize } from "../sizes"
import { Regular } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Name Text  
*/
export default function NotTolpiesWarning({children, color}) {
    return <p style={
        {
            fontSize: NameSize, fontFamily: Regular, 
            color: color, lineHeight: NormalLineHeight,
            opacity: "var(--opacity-40)", textAlign: "center"
        }
    }>
        { children }
    </p>
}
