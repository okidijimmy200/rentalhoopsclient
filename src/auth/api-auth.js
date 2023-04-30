import { URL } from '../base'
const signin = async (user) => {
  try {
    let response = await fetch(`${URL}/api/auth/signin/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const signout = async () => {
  try {
    let response = await fetch( `${URL}/api/auth/signout/`, { method: 'GET' })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}



export {
  signin,
  signout
}