import React from 'react';
import '../styles/Footer.css'

import icon from "../images/63moneyt.jpg"

export default function Footer() {
  return (
    <div className="footer">
    <div className="rectangle">
      <div className="foot">
        <img src={icon} alt="" className="icon" />
        <ul>
          <li>
        <a href="https://twitter.com/63MontyWilliams">Follow me on twitter</a>
          </li>
          <li>
        <a href="https://github.com/MontyWilliams/travel_journal.git">Check out the code</a>

          </li>
        </ul>
      </div>

    </div>
    </div>

  )
}
