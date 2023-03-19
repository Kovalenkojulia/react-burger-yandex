import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import { getCurrentUser} from '../../services/slices/userSlice'



const ProtectedRoute =({onlyUnAuth, element})=>{
    const user = useSelector(getCurrentUser)


    if (user && onlyUnAuth) {
        return <Navigate to="/" />;
    }

    if (!user && !onlyUnAuth) {
        return <Navigate to="/login" />;
    }

    return element;

}

export default ProtectedRoute;
