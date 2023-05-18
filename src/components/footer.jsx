import React from 'react'
import "../CSS/footer.css"

export default function footer() {
  return (
    <>
      <div className='contain'>
        <div className="foot-info">
          <div>
            <h5>Host Events</h5>
            <ul className='footer-links'>
              <a href=""><li>Publish Your Events</li></a>
              <a href=""><li>Promote Your Events</li></a>
              <a href=""><li>Event Mangaer App</li></a>
            </ul>
          </div>
          <div>
            <h5>Discover Events</h5>
            <ul className='footer-links'>
              <a href=""><li>Events for You</li></a>
              <a href=""><li>Get Event Updates</li></a>
              <a href=""><li>Event Discovery App</li></a>
            </ul>
          </div>
          <div>
            <ul className='footer-links'>
              <a href=""><li>email : AllEvents@gmail.com</li></a>
              <a href=""><li>Subscribe for further updates</li></a>
              <a href=""><li>M-no : 8765489398</li></a>
              <a href=""><li>Event Discovery App</li></a>
            </ul>
          </div>
          
        </div>
        <div className="footer-country">
          <h4>Country</h4>
          <table className="country">
            <tr>
              <a href=""><td>Argentina</td></a>
              <a href=""><td>Australia</td></a>
              <a href=""><td>Brazil</td></a>
              <a href=""><td>Belgium</td></a>
              <a href=""><td>Canada</td></a>
              <a href=""><td>France</td></a>
              <a href=""><td>Germany</td></a>
              <a href=""><td>India</td></a>
              <a href=""><td>Ireland</td></a>
            </tr>
            <tr>
              <a href=""><td>Italy</td></a>
              <a href=""><td>Malaysia</td></a>
              <a href=""><td>Mexico</td></a>
              <a href=""><td>Netherlands</td></a>
              <a href=""><td>South Africa</td></a>
              <a href=""><td>Spain</td></a>
              <a href=""><td>Singapore</td></a>
              <a href=""><td>United Kingdom</td></a>
              <a href=""><td>United States</td></a>
            </tr>
          </table>
        </div>
      </div>
      <div className='footer-end'>
        <div className="foot-end">
          <i class="fa-regular fa-copyright"><p>copywrite 2022 All Rights Reserved |</p><a>Powered by Amitech.co</a></i>
        </div>
      </div>
    </>
  )
}
