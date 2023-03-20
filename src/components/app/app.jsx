import React, {useState, useEffect} from 'react'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import {DataContext} from '../../services/data-context'
import {HTML5Backend} from 'react-dnd-html5-backend'

import styles from './app.module.css'
import MainPage from '../../pages/main/main-page'
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Layout from '../layout/layout'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentUser, getUser} from '../../services/slices/userSlice'
import {Profile} from '../../pages/profile/profile'
import ProtectedRoute from '../protected-route/protected-route'
import {LoginPage} from '../../pages/login/login'
import {Register} from '../../pages/registration/register'
import {resetActiveIngredient} from '../../services/slices/ingredient'
import Modal from '../modal/modal'
import {ForgotPassword} from '../../pages/forgot-password/forgot-password'
import {ResetPassword} from '../../pages/reset-password/reset-password'


function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const state = location.state

    const user = useSelector(getCurrentUser)

    useEffect(()=> {
        if(!user) {
            dispatch(getUser());
        }
    }, [dispatch, user])

    const handleClose = () => {
        navigate(-1);
        dispatch(resetActiveIngredient())

    }



    return (
        <>
        <Routes >

            <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/profile'}  element={<ProtectedRoute element={<Profile/>}/>}/>
                <Route path={'/login'} element={<ProtectedRoute element={<LoginPage/> } />}/>
                <Route path={'/register'} element={<ProtectedRoute element={<Register/> } />} />
                <Route path={'/forgot-password'} element={<ProtectedRoute element={<ForgotPassword/>} />}  />
                <Route path={'/reset-password'} element={<ProtectedRoute element={<ResetPassword/>}/> }/>
                <Route path={'/ingredients/:id'} element={<IngredientDetails outsideModal/>}/>
                <Route />
            </Route>


        </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route
                        path="/ingredients/:id"
                        element={
                            <Modal onClose={handleClose} title="Детали ингредиента">
                                <IngredientDetails />
                            </Modal>
                        }
                    />
                </Routes>
            )}

        </>


    )
}

export default App
