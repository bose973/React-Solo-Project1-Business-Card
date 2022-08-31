import React from 'react'
import '../style.css'
import tweet from '../images/twitter.png'
import fb from '../images/facebook.png'
import github from '../images/github.png'
import inst from  '../images/instagram.png'

export default function Footer(){
    return (
        <div className = "footer">
            <img src={tweet}/><img src={fb}/><img src={inst}/><img src={github}/>
        </div>
    );
}