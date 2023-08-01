import s from "./Row.module.css"


/**
 * Row 
*/
export default function Row({ children }) {
    return <>
        <div className={s.Row}>
            { children}
        </div>
    </>
}