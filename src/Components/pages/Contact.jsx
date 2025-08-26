import React from "react";
import '../../App.css';
import './pagesCSS/Contact.css';
import Gallery from "../modules/gallery";

function Contact(){
    return(
        <div className="ContactPage">
            <div className='ContactHead'>
                <h1 className='font-bold'>CONTACT</h1>
            </div>
            <div className="ContactBody">
                <div className="MainContact columns-1">
                    <div className="ContactInfo columns-1">
                        <h1 className="font-semibold">Eta Gamma Chapter</h1>
                        <div className="EtaGammaEmail columns-2 flex items-center gap-x-4" style={{ marginTop: "1rem", borderBottom: "solid", paddingBottom: ".5rem", borderColor: "#CFB87C" }}>
                            <i className="fa fa-envelope fa-2x bg-thetaTauRed rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14" 
                            aria-hidden="true"></i>
                            <p className="whitespace-nowrap">
                                <a href="mailto:regent@etagamma.org">regent@etagamma.org</a>
                            </p>
                        </div>
                        <div className="EtaGammaAddress columns-2 flex items-center gap-x-4" style={{marginTop: "1rem", borderBottom: "solid", paddingBottom: ".5rem", borderColor: "#CFB87C"}}>
                            <i class="fa fa-map-marker fa-2x bg-thetaTauRed rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 aspect-square shrink-0" 
                            aria-hidden="true"></i>
                            <p className="whitespace-normal sm:whitespace-nowrap">
                            1111 Engineering Dr,
                            Boulder, CO 80309</p>
                        </div>
                        <h1 className="font-semibold">Nationals</h1>
                        <div className="NationalsPhone columns-2 flex items-center gap-x-4" style={{marginTop: "1rem", borderBottom: "solid", paddingBottom: ".5rem", borderColor: "#CFB87C"}}>
                            <i class="fa fa-phone fa-2x bg-thetaTauRed rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14" 
                            aria-hidden="true"></i>
                            <p className="whitespace-nowrap">(512) 472-1904</p>
                        </div>
                        <div className="NationalsEmail columns-2 flex items-center gap-x-4" style={{marginTop: "1rem", borderBottom: "solid", paddingBottom: ".5rem", borderColor: "#CFB87C"}}>
                            <i class="fa fa-envelope fa-2x bg-thetaTauRed rounded-full flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14" 
                            aria-hidden="true"></i>
                            <p className="whitespace-nowrap">
                                <a href="mailto:central.office@thetatau.org">central.office@thetatau.org</a>
                            </p>
                        </div>
                        <div className="NationalsMailAdd columns-2 flex items-center gap-x-4 border-b" style={{marginTop: "1rem"}}>
                            <h2 className="text-thetaTauRed font-semibold">Mailing Address:</h2>
                            <p className="whitespace-normal tablet-portrait:whitespace-nowrap">2131 W. Republic Road #528
                            Springfield, MO 65807</p>
                        </div>
                    </div>
                    <Gallery />
                    {/* <div className="EtaGammaImage justify-center" style={{display: "flex"}}>
                        <img src="images/EtaGamma_Contact.png" alt="Nationals"/> 
                    </div>*/}
                </div>
            </div>
        </div>
    )
}

export default Contact