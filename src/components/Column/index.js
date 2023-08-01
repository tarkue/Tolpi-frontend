import s from "./Column.module.css"


/**
 * Column 
*/
export default function Column({ children, ...props }) {
    return <>
        <div className={s.Column} {...props}>
            { children}
        </div>
    </>
}