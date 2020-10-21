import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const LoginForm = () => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    const history = useHistory([])

    const changeHandler = (event) => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const loginHandler = (event) => {
        event.preventDefault()
        axiosWithAuth()
            .post(`/api/login`, login)
            .then((response) => {
                window.localStorage.setItem('token', response.data.payload)
            })
            .catch(error => console.log("Login Error!:", error))
    }

    return (
        <div>
            <form onSubmit={loginHandler}>
                <input 
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    value={login.username}
                    placeholder="enter username"
                />
                <input 
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    value={login.password}
                    placeholder="enter password"
                />
                <button>log in</button>
            </form>
        </div>
    )
}

export default LoginForm
