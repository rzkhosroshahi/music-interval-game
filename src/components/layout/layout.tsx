import { Outlet } from "react-router"
import style from './layout.module.css';
import { Link } from "react-router-dom";

export const Layout = () => {
    return (
        <div className={style.container}>
            <nav className={style.nav}>
                <h4>Games</h4>
                <ul>
                    {/* <li><Link to="/">Intervals</Link></li> */}
                    <li><Link to="/">Note Difference</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}