import react from 'react';
import '../styles/Places.css'
import map from './map.png'

export default function Places(props) {

  return(
    <div className="place_container">   
      <div className="place_info">
        <div className="place_L">
        <img className="place_img" src={props.img} alt="" />
        </div>
        <div className="place_R">
        <div className="place_info_up">
            <img src={map} alt="" className="map" />
            <span className="location">{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <span className="proptitle">{props.title}</span>
        <div className="place_info_mid">
          {props.start} {props.endDate}
        </div>
        <div className="place_info_lower">
          {props.description} 
        </div>
      </div>
      </div>
    </div>
  )
} 
