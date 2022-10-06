import React from 'react'

function ContactList({contact}) {
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
        <i className="material-icons">delete</i>
        <i className="material-icons">edit</i>
      </div>
      </div>
  )
}

export default ContactList