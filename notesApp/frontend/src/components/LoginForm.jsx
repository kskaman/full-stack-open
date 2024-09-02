import { useState } from 'react'

const LoginForm = ({
  handleLogin
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event) => setUsername(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  const onSubmit = (event) => {
    event.preventDefault()
    handleLogin({
      username, password
    })

    setUsername('')
    setPassword('')
  }
  
  return (
    <div>
      <h2>Login</h2>
 
      <form onSubmit={onSubmit}>
        <div>
          username
          <input
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
        password
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}
 
export default LoginForm