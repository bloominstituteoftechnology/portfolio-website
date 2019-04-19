import React from 'react'
import './contact.scss'

const Contact = props => {
    console.log(props)
    const form = e => {
        e.persist();
    }

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <form method='post' dataSet={{ netlify: 'true' }} onSubmit={form}>
                <div className="info">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='John' />
                </div>
                <div className="info">
                    <label for="email">Email</label>
                    <input type="email" required='true' name="email" id="email" placeholder='someone@something.com' />
                </div>
                <div className="message">
                    <label for="message">Message</label>
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
