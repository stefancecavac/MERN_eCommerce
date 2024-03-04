import { useState } from "react"


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className="flex justify-center my-32">
            <form className="flex flex-col p-5   shadow-lg">
                <h1 className="text-5xl text-purple-500 font-bold mb-10">Login</h1>

                <label className="text-gray-600 mb-5">Name:</label>
                <input className="border-b-2 border-purple-500"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}></input>

                <label className="text-gray-600">Email:</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}></input>

                <label className="text-gray-600">Password:</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}></input>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register