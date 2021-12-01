import React from 'react';
import styles from './contact.module.css';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';

export default function ContactMe(props)  {
        return (
            <React.Fragment>
                <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <h2>Our Social Handles</h2>
                            <p>Feedback is really appreciated!</p>
                        </div>
                        <div className={styles.details}>
                            <div><CallIcon /><p>+91 9686662439</p></div>
                            <div><EmailIcon /><p>localstocks@gmail.com</p></div>
                            <div><LocationOnIcon /><p>XYZ Street, MNO Street, UVW</p></div>
                        </div>
                    </div>
                    <form className={styles.right}>
                        <div className={styles.rightContainer}>
                            <div>
                                <div>
                                    <label htmlFor='fname'>Your Name</label>
                                    <input type="text" name='name' id="name" placeholder='John Doe' required/>
                                </div>
                                <div>
                                    <label htmlFor='email'>Email Address</label>
                                    <input type="email" name='email'id="email" placeholder='example@gmail.com' required/>
                                </div>
                                <div>
                                    <label htmlFor='phone'>Phone Number</label>
                                    <input type="phone" name='phone'id="phone" placeholder='+91 XXXXXXXXXX' required/>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label htmlFor='message'><p>Your interests & Expectations</p></label>
                                <textarea type="text" name='message' placeholder='Your message' id="message" required/>
                            </div>
                        </div>
                        <p className={styles.q}>How would you like to contribute to us</p>
                            <div className={styles.query}>
                                <div>
                                    <label htmlFor='c1'><input type="radio" name='category' id='c1' value="Feedback"/>Conduct workshops</label>
                                </div>
                                <div>
                                    <label htmlFor='c2'> <input type="radio" name='category' id='c2' value="Queries"/>Participate in farm activities</label>
                                </div><div>
                                    <label htmlFor='c3'><input type="radio" name='category' id='c3' value="Hiring Purposes"/>Help in supply chain activities</label>
                                </div><div>
                                    <label htmlFor='c4'><input type="radio" name='category' id='c3' value="Others"/>Others</label>
                                </div>
                            </div>
                            <button type="submit" className={styles.send}>Send<SendIcon /></button>
                    </form>
                </div>
                </div>
            </React.Fragment>
    )
}