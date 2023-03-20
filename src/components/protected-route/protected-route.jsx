import {useSelector} from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
import {getAuthChecked, getCurrentUser, isUserLoading} from '../../services/slices/userSlice'



const ProtectedRoute =({onlyUnAuth=false, element})=>{
    const user = useSelector(getCurrentUser)
    const isLoading = useSelector(isUserLoading)
    const authChecked = useSelector(getAuthChecked)
    const location = useLocation()

    if(!authChecked || isLoading){
        return <div>Loading...</div>
    }




    if (user && onlyUnAuth) {
        return <Navigate to={ '/'} />
    }

    if (!user && !onlyUnAuth) {
        return <Navigate to={'login'}  />

    }

    return element;

}

export default ProtectedRoute;
