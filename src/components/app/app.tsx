import React, { useState, useEffect, Dispatch, FC } from 'react'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
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

import { fetchIngredients } from '../../services/slices/ingredientsSlice'
import Feed from '../../pages/feed/feed'
import OrdersPage from '../../pages/orders/orders-page'
import UserOrderPage from '../../pages/user-order/user-order-page'
import OrderPage from '../../pages/order/order-page'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { getActiveOrder } from '../../services/slices/feedSlice'
import { getUserActiveOrder } from '../../services/slices/user-feed'



export const App: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const location = useLocation()
    const state = location.state

    const user = useAppSelector(getCurrentUser)
    const order = useAppSelector(getActiveOrder)
    const userOrder = useAppSelector(getUserActiveOrder)

    useEffect(()=> {
        dispatch(fetchIngredients())
    }, [])

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
        <Routes location={state?.backgroundLocation || location} >

            <Route path={'/'} element={<Layout/>}>
            <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/profile'}  element={<ProtectedRoute element={<Profile/>}/> }/>
                <Route path={'/profile/orders'} element={<ProtectedRoute element={<OrdersPage/>}/>} />
                <Route path={'/profile/orders/:id'} element={<ProtectedRoute element={<UserOrderPage outsideModal/>}/>} />
                <Route path={'/login'}  element={<ProtectedRoute onlyUnAuth element={<LoginPage/>} /> }/>
                <Route path={'/register'} element={<ProtectedRoute onlyUnAuth element={<Register/> } />} />
                <Route path={'/forgot-password'} element={<ProtectedRoute onlyUnAuth element={<ForgotPassword/>} />}  />
                <Route path={'/reset-password'} element={<ProtectedRoute onlyUnAuth element={<ResetPassword/>}/> }/>
                <Route path={'/feed'} element={<Feed/>}/>
                <Route path={'/feed/:id'} element={<OrderPage outsideModal/>} />
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
                                <IngredientDetails/>
                            </Modal>
                        }
                    />
                    <Route
                        path="/feed/:id"
                        element={
                            <Modal onClose={handleClose} title={order?.number}>
                                <OrderPage />
                            </Modal>
                        }
                    />
                    <Route
                        path="/profile/orders/:id"
                        element={
                            <ProtectedRoute
                                element={
                                    <Modal onClose={handleClose} title={userOrder?.number}>
                                        <UserOrderPage />
                                    </Modal>
                                }
                            />
                        }
                    />

                </Routes>
            )}

        </>


    )
}

export default App
