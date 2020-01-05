import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="footer">
      <Link  to='/home'>Home</Link>
      <Link  to='/book'>book</Link>
    </div>
  )
}