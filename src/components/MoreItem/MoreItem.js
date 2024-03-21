import classNames from '@/plugins/classNames';
import { MontSemiBold } from '@/styles/fonts';
import { MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import s from "./MoreItem.module.css"
import MoreItemText from '../Typography/MoreItemText/MoreItemText';

/**
 * More Item component 
 *
 */
export default function MoreItem({children, icon, color}) {
    return <MenuItem 
        className={classNames(s.MoreItem, MontSemiBold.className)}
        style={{"--color": color}}
    >
        {icon}
       <MoreItemText>{children}</MoreItemText>
    </MenuItem>
        
}
