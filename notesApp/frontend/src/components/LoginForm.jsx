import { useState, usestate } from 'react'

const LoginForm = ({
  handleSubmit
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (target) => setUsername(target.value)
  const handlePasswordChange = (target) => setPassword(target.value)

  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit({
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