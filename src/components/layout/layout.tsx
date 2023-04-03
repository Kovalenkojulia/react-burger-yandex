import AppHeader from '../app-header/app-header'
import {Outlet} from 'react-router-dom'
import { FC } from 'react'

const Layout: FC = () => {
    return (
        <>
            <AppHeader/>
            <Outlet/>
        </>
    )
}

export default Layout
