import React from "react";
export default function Contact() {
  return (
    <div className="contact-top">
    <h1 className="form-title">Contact Form</h1>
<form class="cf" id="contact">
  <div class="half left cf">
    <div className="name-last">
      <div className="first-name">
    <input type="text" id="input-name" placeholder="Name"/>
    </div>
    </div>
    <input type="email" id="input-email" placeholder="Email address"/>
    <input type="text" id="input-subject" placeholder="Subject"/>
  </div>
  <div class="half right cf">
    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
  </div>  
  <input type="submit" value="Submit" id="input-submit"/>
</form>
</div>
  );
}
