import s from "./Card.module.css"
/**
 * Card component 
*/
export default function Card({ children, ...props }) {
    return <div className={s.Card} {...props}>{children}</div>
}
