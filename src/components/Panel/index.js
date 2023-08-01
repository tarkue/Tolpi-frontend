import s from "./Panel.module.css"


/**
 * Return active Panel 
 *
 * 
 * @param {string} ActivePanel id активной панели.
 */
export default function Panel({ children, ActivePanel }) {
    var panelList = new Object();
    if (children.length) { 
        children.forEach( (child, key) => {
            if (child.props.panelId === undefined) return;
            panelList[child.props.panelId] = key
        });
    } else return <div className={s.Panel}>{ children }</div>

    return <div className={s.Panel}> 
        {children[ panelList[ActivePanel] ]} 
    </div>
}
