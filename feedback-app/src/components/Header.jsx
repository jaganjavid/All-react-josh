import React from 'react'

const Header = ({text}) => {

  const headerStyle = {
    background:"rgba(0,0,0,0.5)"
  }
    
  return (
    <header style={headerStyle}>
         <div className='container'>
            <h2>{text}</h2>
         </div>
    </header>
  )
}


Header.defaultProps = {
    text: "Feedback App"
}

export default Header