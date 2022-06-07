import {useContext} from 'react'
import {AuthContext} from './AuthContext'

function UserData() {
    const { user } = useContext(AuthContext);

  return (
    <>
    <h1>
        email:{user.email}
    </h1>
    </>
  )
}

export default UserData