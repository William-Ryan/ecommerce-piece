import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const UserRegister = () => {
    const [signUp, setSignUp] = useState({
        email: "",
        password: "",
        name: "",
    })

    const history = useHistory();

    const handleChange = e => {
        e.preventDefault();
        setSignUp({
            ...signUp, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
            axios
                .post("http://localhost:4000/api/createuser", signUp)
                .then(res => {
                    console.log(res)
                    history.push("/user/login")
                })
                .catch(err => {
                    console.log(err.message, "Register Error")
                })
            }
            
    return (
        <div>
            <div className="registerContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">First and Last name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={signUp.name} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="email" >Email:</label>
                    <input 
                    type="text" 
                    id="email" 
                    name="email"
                    value={signUp.email} 
                    onChange={handleChange} 
                    required
                    />

                    <label htmlFor="password" required>Password:</label>
                    <input 
                    type="password"
                    id="password"
                    name="password" 
                    value={signUp.password} 
                    onChange={handleChange}
                    required
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserRegister