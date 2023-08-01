import { CountrySize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Country Text  
*/
export default function CountryText({children, color}) {
    return <p style={
        {
            fontSize: CountrySize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </p>
}
