import React from 'react'
import './App.css'


function section(){
    return(
        <section class="section section-a">
        <div class="container">
            <h1> OUR PRODUCTS</h1>
            <p>APPLE SANSUNG GOOGLE</p>
            </div>
            <div class="row">
                <div class="column">
                    <img src="apple.gif" width="350" height="510"></img>  
                </div>
                <div class="column">
                    <img src="google.gif" width="350" height="510"></img>
                </div>            
                <div class="column">
                    <img src="samsung.gif" width="350" height="510"></img>         
                </div>            
            </div>
        </section>
   )
}

export default section;