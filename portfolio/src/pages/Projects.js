/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

export default function NavBarLanding() {
  return (
    <div className="images-all">
      <div className='image1'>
      <img className="pics" src="https://i.ibb.co/X3NLj9V/soup-3.png" alt="soup-3" border="0" width="50%" height="150" ></img>
      <a className="h1-project" href="https://illservesoup23.netlify.com/"><h1 className="h1-project">I'll Server Soup</h1></a>
      <p>Inventory website that keeps track what you have in stock</p>
      <p>Built: React.js, Node.js, HTML, CSS</p>
      </div>

      <div className='image2'>
      <img className="pics" src="https://i.ibb.co/z6LHgcd/spilt-3.png" width="50%" height="150" alt="split" border="0"></img>
      <a className="h1-project" href="https://theappofsplit.netlify.com/"><h1 className="h1-project">Split the bill</h1></a>
      <p>It track of who owns you money at the last restaurant you visited.</p>
      <p>Built: React.js, Node.js, HTML, CSS</p>
      </div>
      
      <div className='image3'>
      <img className="pics"  src="https://i.ibb.co/92cxYFF/staging-3.png" width="50%" height="150" alt="staging" border="0"></img>
      <a className="h1-project" href="https://staging.swaap.co/"><h1 className="h1-project">Confence Contacts</h1></a>
      <p>An app that lets you contact with people that you meet at a conference. Getting there information from a QR code and becoming friends with them.</p>
      <p>Built: React.js, GraphQL, Node.js, tailwind</p>
      </div>
    </div>
  );
}