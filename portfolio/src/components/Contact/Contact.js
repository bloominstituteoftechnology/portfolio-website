import React from 'react'
import './contact.scss'

const Contact = props => {

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <form method='post' name='contact'>
                <input type='hidden' name='form-name' value='contact' />
                <div className="info">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='John' />
                </div>
                <div className="info">
                    <label htmlFor="email">Email</label>
                    <input type="email" required={true} name="email" id="email" placeholder='someone@something.com' />
                </div>
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4" placeholder='Hey, I really liked your site and wanted to leave some feedback for you!' />
                </div>
                <div className='submit'>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Contact
