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
    <div className="sign-up-item">
<h3>Sign up</h3>
<h5>Get exclusive promotions, coupons, and the latest events</h5>
<h2>GET THE APP</h2>
<h2>CONNECT WITH US</h2>
</div>
        </div>

    </div>
    )
}

export default Footer