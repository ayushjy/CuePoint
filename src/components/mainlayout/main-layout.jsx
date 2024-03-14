import React from 'react'
import Headerpage from '../header/header-page'
import Footerpage from '../footer/footer-page'

const Mainlayout = ({children}) => {
  return (
    <div>
      <Headerpage/>
      {children}
      <Footerpage/>
    </div>
  )
}

export default Mainlayout
