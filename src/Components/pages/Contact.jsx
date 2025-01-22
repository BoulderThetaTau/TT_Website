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
                <div className="ContactInfo columns-2">
                    <h1>Eta Gamma Chapter</h1>
                    <div className="EtaGammaEmail columns-2" style={{marginTop: "1rem"}}>
                        <i class="fa fa-envelope fa-2x bg-thetaTauRed" aria-hidden="true"></i>
                        <p>regent@etagamma.org</p>
                    </div>
                    <div className="EtaGammaAddress columns-2" style={{marginTop: "1rem"}}>
                        <i class="fa fa-map-marker fa-2x bg-thetaTauRed" aria-hidden="true"></i>
                        <p>1111 Engineering Dr, <br/>
                        Boulder, CO 80309</p>
                    </div>
                    <h1>Nationals</h1>
                    <div className="NationalsPhone columns-2" style={{marginTop: "1rem"}}>
                        <i class="fa fa-phone fa-2x bg-thetaTauRed" aria-hidden="true"></i>
                        <p>(512) 472-1904</p>
                    </div>
                    <div className="NationalsEmail columns-2" style={{marginTop: "1rem"}}>
                        <i class="fa fa-envelope fa-2x bg-thetaTauRed" aria-hidden="true"></i>
                        <p>central.office@thetatau.org</p>
                    </div>
                    <div className="EtaGammaImage">
                        <img src="images/EtaGamma_Contact.png" alt="Nationals"/>
                    </div>
                    {/* <div className="NationalsMailAdd">
                        <h2 className="text-thetaTauRed">Mailing Address:</h2>
                        <p>2131 W. Republic Road #528 <br />
                        Springfield, MO 65807</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact