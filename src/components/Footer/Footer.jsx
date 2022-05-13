import React from 'react';
import playstore from "../../assets/logos/playstore.png";
import appstore from "../../assets/logos/appstore.png";
import "./footer.css"

export default function Footer() {
  return <div className='footer-container'>
      <div className='download-app'>
          <h4>Download Our App</h4>
          <img src={playstore} alt="playstore"/>
          <img src={appstore} alt="appstore"/>
      </div>
      <div className='copyright'>
          <h2>Copyright © CompfyCouch.com</h2>
          <p>Made With ❤️ by HK</p>
      </div>
      <div className='follow-us'>
          <h4>Follow Us</h4>
          <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
          </ul>
      </div>
  </div>;
}
