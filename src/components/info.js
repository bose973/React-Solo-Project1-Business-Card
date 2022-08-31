import React from 'react'
import '../style.css'
import myImage from '../images/profilepic.jpg'
import linkedLogo from '../images/linkedin_logo.png'
import emailLogo from '../images/email_logo.png'

export default function Info(){
    return (
        <>
            <img src ={myImage} className ="imaged"/>
            <div className = "info">
                <h3>Siddhartha Bose</h3>
                <h5>API Developer</h5>
                <h6>@LegatoHealthTech</h6>
                <button id = "email"><img src = {emailLogo}/>Email</button>
                <button id = "linked"><img src = {linkedLogo}/>LinkedIn</button>

            </div>
        </>
    );
}