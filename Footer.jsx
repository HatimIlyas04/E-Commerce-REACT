import './Footer.css'
import { IonIcon } from '@ionic/react';
import { logoFacebook , logoTwitter , logoSnapchat , logoInstagram } from 'ionicons/icons';
function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Legacy</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li><a href="#">Job openings</a></li>
                <li><a href="#">Employee success</a></li>
                <li><a href="#">Benefits</a></li>
              </ul>
            </div>
            <div className="col-lg-3 item social">

              <a href="https://www.facebook.com/profile.php?id=100009365554967&mibextid=ZbWKwL"><IonIcon  icon={logoFacebook} /></a>
              <a href="https://instagram.com/ilyas_hatim_10?igshid=YTQwZjQ0NmI0OA=="><IonIcon icon={logoTwitter} /></a>
              <a href="https://www.snapchat.com/add/hatim_ilyayich?share_id=SXmDDD1Xkng&locale=en-MM"><IonIcon icon={logoSnapchat} /></a>
              <a href="https://instagram.com/ilyas_hatim_10?igshid=YTQwZjQ0NmI0OA=="><IonIcon icon={logoInstagram} /></a>
              <p className="copyright">Company Name © 2018</p>
            </div>
          </div>

        </div>
      </footer> 
    </div>         

  );
}

export default Footer;
