import React from 'react'
import { useDispatch } from 'react-redux'
import {  onLogout } from '../api/auth'
import { unauthenticateUser } from '../redux/slices/authSlice'
export const LogoutButton = () => {
    const dispatch = useDispatch()
  // const [protectedData, setProtectedData] = useState(null)

  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  // const protectedInfo = async () => {
  //   try {
  //     const { data } = await fetchProtectedInfo()

  //     setProtectedData(data.info)
  //     console.log(protectedData)
  //     setLoading(false)
  //   } catch (error) {
  //     logout()
  //   }
  // }
  // useEffect(() => {
  //   protectedInfo()
  // }, [])
  return (
     
    <div> <button onClick={() => logout()} className='btn btn-primary'> Logout
    </button></div>
  )
}
