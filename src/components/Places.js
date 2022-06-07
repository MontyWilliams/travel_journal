import react from 'react';
import '../styles/Places.css'


export default function Places(props) {

  return(
    <div className="place_container">   
      <div className="place_info">
        <div className="place_L">
        <img className="place_img" src={props.img} alt="" />
        </div>
        <div className="place_R">
        <div className="place_info_up">
            <span className="map"></span>
            <span className="location">{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <span className="proptitle">{props.title}</span>
        <div className="place_info_mid">
          <span>{props.start}</span>-
          <span>{props.endDate}</span> 
        </div>
        <div className="place_info_lower">
          {props.description} 
        </div>
      </div>
      </div>
    </div>
  )
} 
