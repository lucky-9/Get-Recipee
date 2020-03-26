import React,{Component} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className="footer d-flex flex-column justify-content-center">
                <div>
                    <h1  style={{textAlign:"center"}}>GET RECIPEE</h1>
                </div>
               <div style={{textAlign:"center"}}>
                    <a target="_blank" href="https://material-ui.com/components/material-icons/#material-icons">
                        <FacebookIcon color="action"/>
                        </a> 
                    <a target="_blank" href="https://www.instagram.com/pa.v_an/">
                        <InstagramIcon color="action"/>
                        </a>
                    <a target="_blank" href="https://material-ui.com/components/material-icons/#material-icons">
                        <TwitterIcon color="action"/>
                        </a>
                    <a target="_blank" href="https://material-ui.com/components/material-icons/#material-icons">
                        <MailIcon color="action"/>
                        </a>
               </div> 
          </div>
          );
    }
}
 
export default Footer;