import React from "react";
import '../styles/footer.css'

function Footer (){
    return (
        <div>
        <div className="list-container">
        <div>
        <h3>GET HELP</h3>
        <ul>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">PowerUp Rewards Credit Card</a></li>
            <li><a href="#">Recall Notices</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Store Feedback</a></li>
        </ul>
    </div>
    <div>
        <h3>LEGAL & PRIVACY</h3>
        <ul className="footer-list">
            <li><a href="#">CA Privacy Rights</a></li>
            <li><a href="#">CA Transparency Act</a></li>
            <li><a href="#">Conditions of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GameStop Pro Terms & Conditions</a></li>
        </ul>
    </div>
    <div>
        <h3>ABOUT US</h3>
        <ul>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Game Informer</a></li>
        </ul>
    </div>
    <div className="sign-up-item-container">
        <div>
        <h3>Sign up</h3>
        <div>Get Exclusive Promotions, Coupons, and the Latest Events</div>
        </div>
        <div>
            <h2>GET THE APP</h2>
           <img src='https://www.gamestop.com/on/demandware.static/Sites-gamestop-us-Site/-/default/v1688255502977/images/play-store.png' alt="google-play-banner" style={{
            width: '137px',
            height: '40px'
           }}/>
            <img src='App_Store_Badge.webp' style={{
                width: "137px", 
                height: "40px"
            }}/>

        </div>
        <div>
        <h2>CONNECT WITH US</h2>
            Social media tags
            <img src='facebook-icon.png' alt="facebook-icon" style={{height:'32px',width:'32px'}}/>
            <img src='youtube-icon.png' alt="youtube-icon" style={{height:'32px',width:'32px'}}/>
            <img src='twitter-icon.png' alt="twitter-icon" style={{height:'32px',width:'32px'}}/>
            <img src='instagram-icon.png' alt="instagram-icon" style={{height:'32px',width:'32px'}}/>

        </div>
    </div>
    <div className="languages">
        <h4>© 1999-2023 GameStop</h4>
        <h5>Australia & New Zealand 
            Austria 
            Canada 
            France 
            Germany 
            Italy
        </h5>
    </div>
        </div>

    </div>
    )
}

export default Footer