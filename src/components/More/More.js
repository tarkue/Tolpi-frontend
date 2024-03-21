import { Menu, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import s from './More.module.css'

import { Dots } from "../Icons"


/**
 * More menu component 
 *
 */
export default function More({children}) {
    return <Menu 
        direction={"left"} 
        menuButton={<MenuButton><Dots className={s.Dots}/></MenuButton>} 
        menuClassName={s.moreMenu}
        transition
    >
        {children}
    </Menu>

}
