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
                        <div className="grid-container" style={{marginTop: '1rem'}}>
                            <div className="grid-item">
                                <p>A chapter of the Theta Tau Fraternity that was established in 
                                    the Spring of 1997. We are based at the University
                                    of Colorado - Boulder for all engineers. We are also 
                                    a co-ed Fraternity at this chapter so we curate to all men
                                    and women engineers.</p>
                            </div>
                            <div className="grid-item">
                                <img src="images/AboutUs.png" alt="About Us Picture" style={{height: '15rem', alignItems: 'start'}} />
                            </div>
                        </div>
                </div> 
            </div>
        </div>
        
    )
}

export default AboutHead