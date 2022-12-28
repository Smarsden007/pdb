import React from 'react';
import { useState } from 'react'
import { onLogin } from '../api/auth'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../redux/slices/authSlice'
export const LoginPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(false)

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    //onsubmit
    const dispatch = useDispatch()
    const onSubmit = async (e) => {
        e.preventDefault()

        try {
           const loginValues = await onLogin(values)
           console.log('######',loginValues)
            dispatch(authenticateUser({ fullName: 'john doe' }));

            localStorage.setItem('isAuth', 'true')
        } catch (error) {
            console.log(error.response.data.errors[0].msg)
            setError(error.response.data.errors[0].msg)
        }
    }
    return (
        <div> <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3">
                    <div class="flex items-center h-full px-20 bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-white">Pouncy.</h2>

                            <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Pouncy</h2>

                            <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your Pouncy Dashboard</p>
                        </div>

                        <div class="mt-8">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                    <input
                                        onChange={(e) => onChange(e)}
                                        required
                                        value={values.email}
                                        type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        {/* <a href="forgot" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a> */}
                                    </div>

                                    <input 
                                    onChange={(e) => onChange(e)}
                                    required
                                    value={values.password}
                                    type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
                                <div class="mt-6">
                                    <button
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>

                            </form>

                            {/* <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="signup" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
