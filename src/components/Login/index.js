import './index.css'
import {useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const onClickStart = () => {
    history.replace('/todo')
  }
  return (
    <div className="loginDiv">
      <img
        onClick={onClickStart}
        className="loginBtn"
        src="https://cdn.dribbble.com/users/995553/screenshots/2589741/4.gif"
        alt="start"
      />
      <h1 className="loginH1">TASK's Mania</h1>
    </div>
  )
}

export default Login
