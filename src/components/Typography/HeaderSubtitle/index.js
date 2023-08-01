import { HeaderSubtitleSize } from "../sizes"
import { Regular } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Header Subtitle  
*/
export default function HeaderSubtitle({children, color}) {
    return <p style={
        {
            fontSize: HeaderSubtitleSize, fontFamily: Regular, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </p>
}
