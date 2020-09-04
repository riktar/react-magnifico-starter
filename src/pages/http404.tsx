import React from 'react'
import {Link} from 'react-router-dom'

const Http404: React.FC = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-5xl text-primary-500 text-center">Ops... not Found</h1>
      <p className="text-gray-700">Are you lost? Go to <Link to={'/'}><span className="text-secondary-500">Home</span></Link></p>
    </div>
  )
}

export default Http404
