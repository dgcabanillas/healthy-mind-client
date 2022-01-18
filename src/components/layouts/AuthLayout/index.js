import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className='auth-layout' style={{ displa: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      { children }
    </div>
  )
}

export default AuthLayout;
