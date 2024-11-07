import React from "react";
import '../App.css';
import './AboutHead.css';

function AboutHead(){
    return(
        <div className="AboutPage">
            <div className='AboutHead'>
                <h1>ABOUT</h1>
            </div>
            <div className="AboutBody">
                <div className="AboutThetaTau">
                    <h1>About Theta Tau</h1>
                    <p>Theta Tau is the oldest, largest, and 
                        foremost Fraternity for Engineers. 
                        Since its founding at the University 
                        of Minnesota in 1904, over 40,000 brothers 
                        have been initiated over the years. With 
                        emphasis on quality and a strong fraternal 
                        bond, the Fraternity has chapters only at ABET 
                        (American Board for Engineering & Technology) 
                        accredited schools.</p>
                </div>
                <div className="AboutEtaGamma">
                    <h1>About Eta Gamma</h1>
                </div>    
            </div>
        </div>
        
    )
}

export default AboutHead