import React, { useEffect } from 'react';
import '../../App.css';
import './pagesCSS/Rush.css';
import RushOver from './RushOver';

function Rush() {
    // Set this to false when Rush is active
    const isRushOver = false;
    // const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Scroll handling logic can be added here if needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen relative">
            {/* Animated Star Background - Full Page */}
            <div className="fixed inset-0 z-0 bg-gradient-to-b from-gray-900 to-black">
                <div className="stars-container">
                    {[...Array(100)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`star star-${i % 3 + 1}`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {isRushOver ? <RushOver /> : (
                <>
                    {/* Hero Section */}
                    <section id="hero" className="rush-section relative h-screen flex items-center justify-center overflow-hidden">
                        {/* Orbital Paths - Hero Section Only */}
                        <div className="absolute inset-0 z-5">
                            <div className="orbital-paths">
                                <div className="orbit orbit-1"></div>
                                <div className="orbit orbit-2"></div>
                                <div className="orbit orbit-3"></div>
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="relative z-10 text-center text-white px-4">
                            {/* Rocket Ship SVG */}
                            <div className="rocket-container mb-8">
                                <svg className="rocket-ship" width="120" height="120" viewBox="0 0 120 120" fill="none">
                                    <path d="M60 10L70 40H50L60 10Z" fill="#FFB500" />
                                    <rect x="50" y="40" width="20" height="40" fill="#E0E0E0" />
                                    <path d="M45 80L50 70H70L75 80H45Z" fill="#FFB500" />
                                    <circle cx="60" cy="55" r="8" fill="#1A2B42" />
                                    <text x="60" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ΘT</text>
                                    {/* Flame */}
                                    <path d="M55 80L60 95L65 80" fill="#FF6B35" className="rocket-flame" />
                                </svg>
                            </div>
                            
                            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wide">
                                <span className="text-thetaTauGold">THETA TAU</span>
                            </h1>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-thetaTauGold">
                                BLAST OFF TO BROTHERHOOD
                            </h2>
                            <p className="text-2xl md:text-3xl mb-8 text-gray-300">
                                2025 Fall Rush - Where Engineering Meets Brotherhood
                            </p>
                            
                            {/* Mission Stats */}
                            <div className="flex flex-wrap justify-center gap-8 mb-12">
                                <div className="mission-stat">
                                    <div className="text-3xl font-bold text-thetaTauGold">50,000+</div>
                                    <div className="text-lg text-gray-400">Active Members</div>
                                </div>
                                <div className="mission-stat">
                                    <div className="text-3xl font-bold text-thetaTauGold">15+</div>
                                    <div className="text-lg text-gray-400">Engineering Majors</div>
                                </div>
                                <div className="mission-stat">
                                    <div className="text-3xl font-bold text-thetaTauGold">1904</div>
                                    <div className="text-lg text-gray-400">Founded</div>
                                </div>
                            </div>
                            
                            <button 
                                onClick={() => scrollToSection('mission-timeline')}
                                className="launch-button bg-thetaTauGold hover:bg-yellow-400 text-black font-bold py-5 px-10 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                            >
                                🚀 START YOUR LAUNCH SEQUENCE
                            </button>
                        </div>
                    </section>

                    {/* Mission Timeline Section */}
                    <section id="mission-timeline" className="rush-section relative z-10 py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold text-white mb-4">
                                    <span className="text-thetaTauGold">MISSION</span> TIMELINE
                                </h2>
                                <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                                    Your journey to brotherhood follows a carefully planned launch sequence. 
                                    Each stage brings you closer to joining our engineering crew.
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="relative">
                                {/* Rocket Path */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-thetaTauGold to-orange-500 hidden md:block"></div>
                                
                                {/* Mission Stages */}
                                <div className="space-y-16">
                                    {/* Stage 1 */}
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                                            <div className="mission-stage-card bg-gray-800 p-8 rounded-lg border-2 border-thetaTauGold">
                                                <div className="flex items-center mb-4">
                                                    <div className="stage-number bg-thetaTauGold text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-4">1</div>
                                                    <h3 className="text-4xl font-bold text-white">PRE-FLIGHT</h3>
                                                </div>
                                                <h4 className="text-thetaTauGold font-bold mb-3 text-2xl">Get to Know Us!</h4>
                                                <div className="space-y-4 text-gray-300">
                                                    <div>
                                                        <p className="font-bold text-thetaTauGold">Mission Briefing: Crew Speed-Dating</p>
                                                        <p className="text-sm">Monday, 9/8 at 7:30 PM | ECCR 1B40</p>
                                                        <p>Meet your fellow astronauts, discover your crew, and get ready to chart the course for the week ahead.</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-thetaTauGold">Zero-Gravity Training: Field Day</p>
                                                        <p className="text-sm">Tuesday, 9/9 at 6:00 PM | Duane Physics Field</p>
                                                        <p>Strengthen your team's orbit with fun, fast-paced challenges and cosmic camaraderie.</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-thetaTauGold">Alumni Galaxy: Panel of Commanders</p>
                                                        <p className="text-sm">Wednesday, 9/10 at 7:00 PM | ECCR 1B40</p>
                                                        <p>Learn from veterans who have navigated the galaxy before you—gather star-tested tips and mission wisdom.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8">
                                            <div className="rocket-stage-icon">
                                                🛠️
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage 2 */}
                                    <div className="flex flex-col md:flex-row-reverse items-center">
                                        <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
                                            <div className="mission-stage-card bg-gray-800 p-8 rounded-lg border-2 border-orange-500">
                                                <div className="flex items-center mb-4">
                                                    <div className="stage-number bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-4">2</div>
                                                    <h3 className="text-4xl font-bold text-white">SYSTEMS CHECK</h3>
                                                </div>
                                                <h4 className="text-orange-400 font-bold mb-3 text-2xl">Interview</h4>
                                                <p className="text-gray-300">Chat with current crew members in a mission compatibility assessment! We'll discuss your engineering goals, interests, and how you'll contribute to our brotherhood during our Field Day event on Tuesday, 9/9 at 6:00 PM at the Duane Physics Field.</p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pr-8">
                                            <div className="rocket-stage-icon">
                                                🔍
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stage 3 */}
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                                            <div className="mission-stage-card bg-gray-800 p-8 rounded-lg border-2 border-green-500">
                                                <div className="flex items-center mb-4">
                                                    <div className="stage-number bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl mr-4">3</div>
                                                    <h3 className="text-4xl font-bold text-white">BLAST OFF</h3>
                                                </div>
                                                <h4 className="text-green-400 font-bold mb-3 text-2xl">Bid Night</h4>
                                                <p className="text-gray-300">Final mission prep to confirm launch readiness and finalize crew selection on Friday, 9/12. This is when we will confirm your admittance to the crew and fuel you up with some yummy pancakes!</p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8">
                                            <div className="rocket-stage-icon">
                                                🚀
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="rush-section relative z-10 py-20 px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold text-white mb-4">
                                    <span className="text-thetaTauGold">MISSION CONTROL</span> BRIEFING
                                </h2>
                                <p className="text-2xl text-gray-300">
                                    Frequently Asked Questions About Rush
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">🎓 Do I have to be an engineering major to rush?</h3>
                                    <p className="text-gray-300">Yes, you must be pursuing an engineering-related degree to rush Theta Tau. We welcome all engineering disciplines including mechanical, electrical, civil, computer science, aerospace, chemical, etc.</p>
                                </div>

                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">🤝 Can I be in other clubs or organizations too?</h3>
                                    <p className="text-gray-300">Absolutely! Theta Tau complements your other activities. You can participate in other clubs, professional societies, and even other Greek organizations as long as they're not competing engineering organizations (Triangle/Phi Sigma Rho)</p>
                                </div>

                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">📅 Do I need to attend every rush event?</h3>
                                    <p className="text-gray-300">While not mandatory, attending multiple events helps you understand our culture and allows us to get to know you better. We recommend attending at least 2-3 events to make an informed decision on our organization!</p>
                                </div>

                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">🌟 What are the benefits of joining Theta Tau?</h3>
                                    <p className="text-gray-300">Friendship, Professional development, networking events, and resume workshops are just a taste of the benefits of joining our fraternity!</p>
                                </div>

                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">⏱️ What's the time commitment like?</h3>
                                    <p className="text-gray-300">Rush week requires about 10-15 hours total. As a member, expect 3-5 hours weekly for meetings, events, and brotherhood activities that enhance your engineering career.</p>
                                </div>

                                <div className="faq-card bg-gray-800 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-colors">
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">💼 What about academic standards?</h3>
                                    <p className="text-gray-300">We maintain high academic standards for our members. A minimum GPA requirement ensures all members stay focused on engineering excellence.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section id="benefits" className="rush-section relative z-10 py-20 px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-bold text-white mb-4">
                                    <span className="text-thetaTauGold">MISSION</span> OBJECTIVES
                                </h2>
                                <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                                    Crew Advantages & Mission Benefits
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-thetaTauGold hover:border-yellow-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">🚀</div>
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-3">Professional Development</h3>
                                    <p className="text-gray-300">Mission training workshops, career navigation prep, resume building, and industry networking opportunities.</p>
                                </div>

                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-orange-500 hover:border-orange-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">👥</div>
                                    <h3 className="text-orange-400 font-bold text-2xl mb-3">Brotherhood</h3>
                                    <p className="text-gray-300">Lifelong crew connections with engineers across all sectors and industries throughout your career journey.</p>
                                </div>

                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-blue-500 hover:border-blue-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">⭐</div>
                                    <h3 className="text-blue-400 font-bold text-2xl mb-3">Leadership</h3>
                                    <p className="text-gray-300">Command positions and mission management opportunities to develop leadership skills valued in engineering.</p>
                                </div>

                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-green-500 hover:border-green-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">🌐</div>
                                    <h3 className="text-green-400 font-bold text-2xl mb-3">Alumni Network</h3>
                                    <p className="text-gray-300">Access to successful engineers at top organizations across the galaxy of engineering disciplines.</p>
                                </div>

                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-purple-500 hover:border-purple-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">🎉</div>
                                    <h3 className="text-purple-400 font-bold text-2xl mb-3">Social Events</h3>
                                    <p className="text-gray-300">Crew mixers, formal galas, brotherhood expeditions, and engineering-focused social activities.</p>
                                </div>

                                <div className="benefit-module bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-pink-500 hover:border-pink-400 transition-all transform hover:scale-105">
                                    <div className="text-4xl mb-4">📚</div>
                                    <h3 className="text-pink-400 font-bold text-2xl mb-3">Academic Support</h3>
                                    <p className="text-gray-300">Study groups, technical support, tutoring, and academic achievement recognition programs.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="rush-section relative z-10 py-20 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="mb-16">
                                <h2 className="text-5xl font-bold text-white mb-4">
                                    <span className="text-thetaTauGold">STAY IN OUR</span> ORBIT
                                </h2>
                                <p className="text-2xl text-gray-300">
                                    Mission Control Contact
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="contact-card bg-gray-800 p-8 rounded-lg border-2 border-thetaTauGold">
                                    <div className="text-4xl mb-4">👨‍🚀</div>
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-2">Rush Chair</h3>
                                    <p className="text-white font-semibold mb-2">Aaron Nong</p>
                                    <a href="mailto:aaron.nong@colorado.edu" className="text-blue-400 hover:text-blue-300 transition-colors text-2xl cursor-pointer underline hover:underline">
                                        aaron.nong@colorado.edu
                                    </a>
                                </div>

                                <div className="contact-card bg-gray-800 p-8 rounded-lg border-2 border-thetaTauGold">
                                    <div className="text-4xl mb-4">👨‍🚀</div>
                                    <h3 className="text-thetaTauGold font-bold text-2xl mb-2">Rush Chair</h3>
                                    <p className="text-white font-semibold mb-2">Riley Lanziner</p>
                                    <a href="mailto:riley.lanziner@colorado.edu" className="text-blue-400 hover:text-blue-300 transition-colors text-2xl cursor-pointer underline hover:underline">
                                        riley.lanziner@colorado.edu
                                    </a>
                                </div>
                            </div>

                            {/* Additional Contact Info */}
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h4 className="text-thetaTauGold font-bold mb-2">Chapter Leadership</h4>
                                    <p>Regent: <a href="mailto:regent@etagamma.org" className="text-blue-400 hover:text-blue-300 cursor-pointer underline hover:underline">regent@etagamma.org</a></p>
                                    <p>Vice Regent: <a href="mailto:vice@etagamma.org" className="text-blue-400 hover:text-blue-300 cursor-pointer underline hover:underline">vice@etagamma.org</a></p>
                                </div>
                                
                                <div>
                                    <h4 className="text-thetaTauGold font-bold mb-2">Connect With Us</h4>
                                    <p>Instagram: <a href="https://instagram.com/boulderthetatau" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noreferrer">@boulderthetatau</a></p>
                                    <p>Website: <a href="https://etagamma.org" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noreferrer">etagamma.org</a></p>
                                    <p>National: <a href="https://thetatau.org" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noreferrer">thetatau.org</a></p>
                                </div>

                                <div>
                                    <h4 className="text-thetaTauGold font-bold mb-2">Eta Gamma Chapter</h4>
                                    <p>University of Colorado Boulder</p>
                                    <p>Founded 1904 - Engineering Excellence Since Day One</p>
                                </div>
                            </div>

                            {/* Final CTA */}
                            <div className="mt-16">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfCjodag0_8wh_pVPmrtyEjEZuZhwGVS_sC-p9QOzWEWu0u0A/viewform"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="launch-button bg-thetaTauGold hover:bg-yellow-400 text-black font-bold py-5 px-10 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                                >
                                    🚀 BEGIN YOUR MISSION
                                </a>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
}

export default Rush;