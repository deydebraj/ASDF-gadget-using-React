import React from "react"
import './App.css'

function App2(){
    return(
        
    <header class="v-header container">
        <div class="fullscreen-video-wrap">
            <video src="myvideo.mp4" autoplay="true" loop="true" muted></video>
        </div>
        <div class="header-overlay">
            <div class="header-content">
                <h1>ASDF GADGET</h1>
                <p>We Compare Phones</p>
                <a href="https://www.linkedin.com/in/deydebraj/" class="btn">About Me</a>
            </div>
        </div>
    </header>
    )
}
export default App2;