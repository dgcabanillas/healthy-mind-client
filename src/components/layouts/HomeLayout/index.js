import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'

const HomeLayout = ({ children }) => {
  return (
    <div className='home-layout'>
      {/* <Header /> */}
      <div>
        { children }
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default HomeLayout;
