import {Navigate, useLocation} from 'react-router-dom'
import {getAuthChecked, getCurrentUser, isUserLoading} from '../../services/slices/userSlice'
import { FC, ReactElement } from 'react'
import {useAppSelector} from '../../hooks/hook'

interface IProtectedRouteProps {
    onlyUnAuth?: boolean
    element: ReactElement
}

const ProtectedRoute: FC<IProtectedRouteProps> =({onlyUnAuth, element})=>{
    const user = useAppSelector(getCurrentUser)
    const isLoading = useAppSelector(isUserLoading)
    const authChecked = useAppSelector(getAuthChecked)
    const location = useLocation()

    if(!authChecked || isLoading){
        return <div>Loading...</div>
    }




    if (user && onlyUnAuth) {
        return <Navigate to={location?.state?.form || '/'} />
    }

    if (!user && !onlyUnAuth) {
        return <Navigate to={'/login'} state={{target: location}} />

    }

    return element;

}

export default ProtectedRoute;
