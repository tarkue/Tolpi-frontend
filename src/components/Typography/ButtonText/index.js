import { ButtonTextSize } from "../sizes"
import { SemiBold } from "../family"


/**
 * Button Text  
*/
export default function ButtonText({children, color}) {
    return <p style={
        {
            fontSize: ButtonTextSize, fontFamily: SemiBold, 
            color: color, 
        }
    }>
        { children }
    </p>
}
