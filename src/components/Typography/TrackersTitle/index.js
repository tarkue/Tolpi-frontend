import { TrackersTitleSize } from "../sizes"
import { Regular } from "../family"
import { NormalLineHeight } from "../lineHeight"


/**
 * Trackers Title  
*/
export default function TrackersTitle({children, color}) {
    return <p style={
        {
            fontSize: TrackersTitleSize, fontFamily: Regular, 
            color: color, lineHeight: NormalLineHeight
        }
    }>
        { children }
    </p>
}
