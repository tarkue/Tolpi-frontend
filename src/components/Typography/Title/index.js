import { TitleSize } from "../sizes"
import { SemiBold } from "../family"
import { TitleLineHeight } from "../lineHeight"


/**
 * Title  
*/
export default function Title({children, color, width}) {
    return <h1 style={
        {
            fontSize: TitleSize, fontFamily: SemiBold, 
            color: color, lineHeight: TitleLineHeight,
            width: width
        }
        
    }>
        { children }
    </h1>
}
