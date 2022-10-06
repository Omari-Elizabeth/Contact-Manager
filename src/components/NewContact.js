import React from 'react'

function NewContact() {
  return (
    <form id="form">
      <label >Name</label>
      <input type="text" name="name"/>
      <label >Phone</label>
      <input type="tel" name="phone"/>
      <label >Email</label>
      <input type="text" name="email"/>
      <label >Company</label>
      <input type="text" name="company"/>
      <label >Location</label>
      <input type="text" name="location"/>
      <label >Description</label>
      <input type="text" name="description"/>
      <button type="submit">Save</button>
    </form>
)
  }

export default NewContact;