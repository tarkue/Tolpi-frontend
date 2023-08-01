import { ScreenTitleSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Screen Title  
*/
export default function ScreenTitle({children, color, width}) {
    return <p style={
        {
            fontSize: ScreenTitleSize, fontFamily: SemiBold, 
            color: color, lineHeight: NormalLineHeight,
            width: width
        }
    }>
        { children }
    </p>
}
