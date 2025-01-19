import React, {useState} from "react";
import '../../App.css';
import './pagesCSS/Contact.css';

function Contact(){
    return(
        <div className="ContactPage">
            <div className='ContactHead'>
                <h1>Contact Us</h1>
            </div>
            <div className="ContactBody">
                <div className="ContactInfo columns-2 grid">
                    <div className="EtaGammaContact grid-flow-row">
                        <h2>Eta Gamma Chapter</h2>
                        <div className="columns-1">
                            <p>email:</p>
                            <p>School Address:</p>
                        </div>
                    </div>
                    <div className="NationalsContact grid-flow-row">
                        <h2>Nationals</h2>
                        <div className="columns-1">
                            <p>Phone:</p>
                            <p>email:</p>
                            <p>Mailing Address:</p>

                        </div>
                    </div>
                </div>
                <div className="ContactPhotos">

                </div>
            </div>
        </div>
    )
}

export default Contact