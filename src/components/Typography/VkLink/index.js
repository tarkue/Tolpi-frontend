import { VKLinkSize } from "../sizes"
import { SemiBold } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * VK Link  
*/
export default function VKLink({children, color, href}) {
    return <a style={
            {
                fontSize: VKLinkSize, fontFamily: SemiBold, 
                color: color, lineHeight: NormalLineHeight,
            }
        } 
        href={href}
        target="_blank"
    >
        { children }
    </a>
}
