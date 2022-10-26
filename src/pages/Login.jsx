//==========IMORT HOOKS,LIBRARIES AND GLOBAL STATES===========
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

//==========IMPORT CSS STYLES===========
import '../styles/login/login.css'


const Login = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const [isLogged, setIsLogged] = useState(false)
    const navigate = useNavigate()

    //==========SET TOKEN IN THE LOCAL STORAGE==============
    const submit = data => {

        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'

        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })  //local storage only acepted stings
            .catch(err => console.log(err))
    }

    //==========GET TOKEN FROM LOCAL STORAGE==============
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(true)
        }
        else {
            setIsLogged(false)
        }
    }, [])

    //==========FUNCTIONS - LOG OUT - CANCEL==============
    const handleLogOut = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }
    const handleCancel = () => {
        navigate('/')
    }

    //==========CHECK IF YOU ARE LOGGED IN==============
    if (isLogged) {
        return (
            <div className='login-true'>
                <i class="fa-solid fa-user"></i>
                <h2>User logged</h2>
                <button className='button-logOut' onClick={handleLogOut}>Log out</button>
                <button className='button-logOut' onClick={handleCancel}>Cancel</button>
            </div>

        )
    }


    return (
        <div className='container-form' onSubmit={handleSubmit(submit)}>

            <form className='form' >
                <h2>Welcome!</h2>
                <h2>Enter your email and password to continue</h2>
                <div className='form-test-container'>
                    <h2>Test data</h2>
                    <div className='test-email'>
                        <i class="fa-solid fa-envelope"></i>
                        mason@gmail.com
                    </div>

                    <div className='test-pass'>
                        <i class="fa-solid fa-lock"></i>
                        mason1234
                    </div>
                </div>

                <div className='form_input_container'>
                    <label className='form_label' htmlFor="email">Email</label>
                    <input className='form_input' placeholder='Enter your email' type="email" id='email' {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <i >Must be an email</i>}
                </div>

                <div className='form_input_container'>
                    <label className='form_label' htmlFor="password">Password</label>
                    <input className='form_input' placeholder='Password' type="password" id='password' {...register('password', {
                        required: true
                    })} />
                    {errors.password?.type === 'required' && <i style={{ fontSize: '15px', color: '#f85555' }}>Password is required</i>}
                </div>

                <button className='form-button-login'>Login</button>
                {/*<p>Don't have an account? <i onClick={handleSignUp}>Sign up</i></p>*/}

            </form>
        </div>
    )
}

export default Login