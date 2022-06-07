import react from 'react'
import '../styles/Nav.css'
import icon from "./soc.jpg"
import Places from '../components/Places'

export default function Nav() {
  return(
    <div className="rectangle">
      <div>
        <img src={icon} className="icon" alt=""  />
      </div>

        <p className="nav_text">my travel journal.</p>
    </div>
  )
}
