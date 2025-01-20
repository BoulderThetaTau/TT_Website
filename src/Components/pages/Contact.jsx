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
                    <div className="NationalsContact grid">
                        <h1>Nationals</h1>
                        <div className="NatContactInfo columns-2 grid-flow-col">
                            <i class="fa fa-phone fa-2x bg-thetaTauRed" aria-hidden="true"></i><br />
                            <i class="fa fa-envelope fa-2x bg-thetaTauRed" aria-hidden="true"></i>
                            <p>(512) 472-1904</p>
                            <p>central.office@thetatau.org</p>
                        </div>
                        <h2 className="text-thetaTauRed">Mailing Address:</h2>
                        <p>2131 W. Republic Road #528 <br />
                        Springfield, MO 65807</p>
                    </div>
                </div>
                <div className="ContactPhotos">

                </div>
            </div>
        </div>
    )
}

export default Contact