import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import axios from "axios"

const UserLogin = () => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    const history = useHistory()

    const handleChange = e => {
        e.preventDefault();
        setUserLogin({
            ...userLogin, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`http://localhost:4000/api/loginuser`, userLogin)
            .then(res => {
                console.log(res);
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('id', res.data.id)
                setTimeout(() => {
                history.push("/user/profile")
                }, 2000)
            })
            .catch(err => {
                console.log(err.message, "Login Error")
            })
    }
    return (
        <div>
            <div className="loginContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text"
                        name="email"
                        label="email"
                        value={userLogin.email}
                        onChange={handleChange}
                        className="input"
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        label="password"
                        value={userLogin.password}
                        onChange={handleChange}
                        className="input"
                    />
                    <button type="submit">Submit</button>
                </form>
            <h6>Don't have an account yet? <Link to="/user/register">Sign up here!</Link></h6>
            </div>
        </div>
    )
}

export default UserLogin