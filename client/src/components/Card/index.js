import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { 
    faClock,
    faPhone,
    faLocationArrow
} from "@fortawesome/free-solid-svg-icons";
import './style.css';

function Card(props) {
    return (
        <div className=" col-md-6 col-sm-12 col-12 custom-grid">
            <div className="location-wrap">
                <div className="location-content">
                    <div className="location-info">
                        <h2>{props.location}</h2>
                        <br/>
                        <a href={props.href} target={"_blank"} rel="noreferrer" style={{ textDecoration: "none" }}><li><FontAwesomeIcon icon={faLocationArrow} /> {props.address}</li></a>
                        <ul>
                            <li><FontAwesomeIcon icon={faClock} /> Store Hours</li>
                            <li>Monday {props.mon}</li>
                            <li>Tuesday {props.tue}</li>
                            <li>Wednesday {props.wed}</li>
                            <li>Thursday {props.thu}</li>
                            <li>Friday {props.fri}</li>
                            <li>Saturday {props.sat}</li>
                            <li>Sunday {props.sun}</li>
                        </ul>
                        <br/>
                        <a href={props.phonehref}><li><FontAwesomeIcon icon={faPhone} />{props.phone}</li></a>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}



export default Card;