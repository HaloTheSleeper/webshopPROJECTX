import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';


import useStyles from './styles';
import logo from '../../assets/mainlogo.png';
import scrollDownButton from '../../assets/scrolldownbutton.png';
import homeButton from '../../assets/homebutton.png';
import youtubeLogo from '../../assets/youtubelogo.png';
import tiktokLogo from '../../assets/tiktoklogo.png';
import styles from "./Sidepage.css";


const Sidepage = () => {
    const classes = useStyles();

	const scrollRef = useRef();
     
    function buttonClick(){
		scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	};


    return( 
        <>
            <header className={classes.header}>
		        <div className={classes.headerText}>
				    <img src={logo} alt="logo" className={classes.headerPicImg}/>
			        <h1>ABOUT PROJECT X</h1>
		     	</div>
	        </header>
            
			<main>
			    <section className={classes.backToHome}>
		            <div className={classes.backToHome2}>
                        <div type="button" className={classes.backToHome3} onClick={buttonClick} >  
						    <img src={scrollDownButton}  className={classes.scrollButtonImg} />
				            <h2>ONTO THE <br/> PAGE</h2>    
			            </div>
						<Link className={classes.backToHome3} to="/" style={{textDecoration: "none"}}>
						    <img src={homeButton} className={classes.homeButtonImg}/>
		                    <h2>BACK TO <br/> MAIN PAGE</h2>  
			            </Link>
			        </div>
	            </section>

                <div className={classes.divider}>
	                <hr/>
                </div>
                
				<section>
				    <div className={classes.tutorial}>
		                <div className={classes.video1}>
			                <h3 ref={scrollRef}>How our platform works:</h3>
					        <iframe className={classes.video11} src="https://www.youtube.com/embed/Dp32kfaEWew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; fullscreen; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
		            </div>

                    <article className={classes.welcomingText}>
		                <p>
                            Project X offers creators a chance to give their fans personalized content no matter the genre or sex. We use X
		                    payment processor and don't collect any information about our customers (only necceseary billing data, which is necessary to make sure the payment isn't fraudulent). 
                            With us Your safety and anonymity is guaranteed. Find out more down below.
					    </p>
                    </article>
				</section>
                

                <div className={classes.divider2} >
	                <hr/>
                </div>

                <section className={classes.menu}>
		            <section className={classes.workWithUs}>
			            <header className={classes.menuHeader}>
			                <h3>Work With Us</h3>
			            </header>
			            <article className={classes.menuText}>
			                <p>
								Yes we are hiring, click here to find out more.
				                AAAAA AAAAAAAAAA AAAAAA aaaaa aaaaaaaaaaaaa aaa BBB 
                                BBBBBB BBBBBB BBbbbbb bbbbbbb bbbbbbbbbb bb bbbb
							</p>
			            </article>
			        </section>
		
					<section className={classes.termsAndConditionsOfUse}>
						<header className={classes.menuHeader}>
							<h3>Terms and Conditions <br/> of Use</h3>
						</header>
						<article className={classes.menuText}>
							<p>
								Our Terms and Conditions of Use, if You wish to have
								the best time possible on our platform consider reading them. 
								AAAAAAAAAA AAAaaa aaaaaaa aaaaaaaaaa aaBBBBBBB BBBBB BBBBBbb 
								bbbbbb bbbbbbbbCCC CCCCCCCCC CCCCCCC CCCCCC CCCc ccccccc cccccc 
								ccccc cccccc cDDDDDDD DDDDD DDDDDD DDDDDD ddddddddd ddddddddd ddddddd
							</p>
						</article>
					</section>
		
					<section className={classes.safetyGuarantee}>
						<header className={classes.menuHeader}>
							<h3>Safety Guarantee</h3>
						</header>
						<article className={classes.menuText}>
							<p>
								Our website uses SSL encryption to protect Your data being harvested, 
								also no accounts are used and minimal cookies collected, providing the customer 
								the best safety and anonymity guarantee on the market. AAAAAAAAA AAAAAAA AAAAAAA AAAAAAA 
								aaaa aaaaaaa aaaaaaaaa aaa bbbbbbb bbbbbbbbb bbbbbbb BBB BBBBBBBB BBBBB 
								ccccccc ccccccccc CCCCCC CCCCC CCCCCC ccccc ccccccc cccc dddddd dddddddddd
							</p>
						</article>
					</section>
		
					<section className={classes.socialMedia}>
						<header className={classes.menuHeader}>
							<h3>Social Media</h3>
						</header>
						<p>Follow along on our activities on our social media.</p>
						<div className={classes.logos}>
							<img src={youtubeLogo} className={classes.youtubeLogo}/>
							<img src={tiktokLogo} className={classes.tiktokLogo}/>
						</div>
					</section>
	            </section>
		    </main>
        </>
    )
}

export default Sidepage;