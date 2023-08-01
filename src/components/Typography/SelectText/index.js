import { SelectSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Select Text  
*/
export default function SelectText({children, color, width, padding}) {
    return <p style={
        {
            fontSize: SelectSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight,
            width: width, padding: padding
        }
    }>
        { children }
    </p>
}
