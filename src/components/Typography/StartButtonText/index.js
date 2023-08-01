import { StartButtonTextSize } from "../sizes"
import { SemiBold } from "../family"


/**
 * Select Text  
*/
export default function StartButtonText({children, color}) {
    return <p style={
        {
            fontSize: StartButtonTextSize, fontFamily: SemiBold, 
            color: color
        }
    }>
        { children }
    </p>
}
