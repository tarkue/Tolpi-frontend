/**
 * Span  
*/
export default function Span({children, color}) {
    return <span style={ {color: color} }>
        { children }
    </span>
}
