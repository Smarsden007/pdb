import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(
    'https://pdb-backend-production.up.railway.app/api/register',
    registrationData
  )
}

export async function onLogin(loginData) {
  return await axios.post('https://pdb-backend-production.up.railway.app/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('https://pdb-backend-production.up.railway.app/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('https://pdb-backend-production.up.railway.app/api/protected')
}
