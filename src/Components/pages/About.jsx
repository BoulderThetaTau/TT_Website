import React, {useState} from "react";
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
                                <div className="grid-item EtaGammaDesc">
                                    <h1>About Eta Gamma</h1>
                                    <p style={{fontSize: '1.25rem', color: 'rgb(65, 65, 65)'}}>
                                        A chapter of the Theta Tau Fraternity that was established in 
                                        the Spring of 1997. We are based at the University
                                        of Colorado - Boulder for all engineers. We are also 
                                        a co-ed Fraternity at this chapter so we curate to all men
                                        and women engineers.</p>
                                </div>
                            <div className="grid-item aboutImg">
                                <img src="images/AboutUs.png" className="shadow-xl" alt="About Us Picture" />
                            </div>
                        </div>
                </div>
                <div className="MoreAboutUs" style={{paddingBottom: "1rem"}}>
                    <div className="grid grid-cols-1 mobile:grid-cols-2">
                        <div className="grid-item NotJustAFrat">
                            <h1>Being a Fraternity is Only Part of It</h1>
                            <p style={{fontSize: '1.25rem', color: 'rgb(65, 65, 65)'}}>
                                Everyone knows that going to top tier engineering school,
                                it ain't going to be easy. That's where members of Theta Tau
                                can bond over the hardships of the curriculum or the upper-classmen
                                can help the lower-classmen on their path. 
                            </p>
                        </div>
                        <div className="grid-item">
                            <h1>Our Purpose</h1>
                            <p style={{fontSize: '1.25rem', color: 'rgb(65, 65, 65)'}}>
                            The purpose of Theta Tau is to develop and maintain a high standard
                            of professional interest among its members, and to unite them in a 
                            strong bond of fraternal fellowship.
                            </p>
                        </div>
                        <div className="grid-item AboutPics">
                            <img src="images/CampFire.png" className="shadow-xl" style={{width: "25rem"}} alt="CampFire"/>
                        </div>
                        <div className="grid-item AboutPics" style={{paddingTop: ".5rem"}}>
                            <img src="images/White_Lies.png" className="shadow-xl" style={{width: "25rem"}} alt="CampFire"/>
                        </div>
                    </div>
                </div>
                <div className="CoreValues">
                    <h1>Our Core Pillars</h1>
                    <div className="flex items-center justify-center">
                        <FusionBox />
                    </div>
                </div> 
            </div>
        </div>
        
    )
}

function FusionBox() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const goals = [
      {
        title: 'Brotherhood:',
        content:
          'Theta Tau works to create a close-knit community of engineering students - both at the undergraduate and graduate levels. Through events like retreat, campfire, formal, intermural sports, study sessions, and more, Theta Tau has created many strong, long-lasting friendships.',
      },
      {
        title: 'Professional Development:',
        content:
          'Members have the ability to interact with alumni already in the workforce, gain advice for finding internships, create and improve resumés and social network profiles (i.e. LinkedIn, Handshake), practice interviewing, and hold various leadership positions.',
      },
      {
        title: 'Community Service:',
        content:
          'Theta Tau frequently hosts and participates in service events. We enjoy giving back to the University and greater Boulder community. Theta Tau is also partners with Habitat for Humanity!',
      },
    ];
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-5xl sm:w-[80%] lg:w-[70%] mx-auto">
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left font-semibold text-lg p-4 bg-gray-100 hover:bg-thetaTauRed hover:text-white rounded-md transition-colors duration-300"
                >
                  {goal.title}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  <p className="p-4 text-gray-700">{goal.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};    

export default About