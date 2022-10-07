import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ContactList({contact, handleDelete}) {
  
  return (
      <div className='contact-card' key={contact.id}>
      <div className="contact-info">
        <label id="name">
          Name:<span className='contact-name'>{contact.name}</span>
        </label>
        <label id='phone'>
          Phone:<span className='contact-number'>{contact.phone}</span>
        </label>
      </div>
      <div className='contact-buttons'>
        <i className="material-icons" onClick={(e) => handleDelete(contact.id)}>delete</i>
        <Link className='nav-links' to='/viewContact'>
          <i className="material-icons">edit</i>
        </Link>
      </div>
      <Outlet/>
      </div>
  )
}

export default ContactList