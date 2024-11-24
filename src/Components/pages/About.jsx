import React from "react";
import '../../App.css';
import './pagesCSS/About.css';

function About(){
    return(
        <div className="AboutPage">
            <div className='AboutHead'>
                <h1>ABOUT</h1>
            </div>
            <div className="AboutBody">
                <div className="AboutThetaTau">
                    <h1 style={{color: 'rgb(139, 0, 0)'}}>About Theta Tau</h1>
                    <p style={{fontSize: '1.25rem', color: 'rgb(65, 65, 65)'}}>
                        Theta Tau is the oldest, largest, and 
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
                        <div className="grid-container" style={{marginTop: '1rem'}}>
                            <div className="grid-item">
                                <h1>About Eta Gamma</h1>
                                <p style={{fontSize: '1.25rem', color: 'rgb(65, 65, 65)'}}>
                                    A chapter of the Theta Tau Fraternity that was established in 
                                    the Spring of 1997. We are based at the University
                                    of Colorado - Boulder for all engineers. We are also 
                                    a co-ed Fraternity at this chapter so we curate to all men
                                    and women engineers.</p>
                            </div>
                            <div className="grid-item aboutImg">
                                <img src="images/AboutUs.png" alt="About Us Picture" />
                            </div>
                        </div>
                </div>
                <div className="AboutPillars">

                </div> 
            </div>
        </div>
        
    )
}

export default About