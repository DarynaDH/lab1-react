import React from "react";
import './style.css'

function Contact(){
    return(
     <div className="bgContact">
        <div className="wrapContact">
         <h2 className="h2Contact">Get in Touch</h2>
         <p className="textContact">Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, 
         vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur
         est at lobortis. Fusce dapibus,tellus ac cursus commodo, tortor mauris condimentum nibh,
          ut fermentum massa justo sit amet risus.</p>
         <p className="textContact">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada
         magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. 
         Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
         <h3 className="h3Contact">Name</h3>
         <div className="input1Contact">Enter your name</div>
         <h3 className="h3Contact">Email Address</h3>
         <div className="input1Contact">Enter your email adress</div>
         <h3 className="h3Contact">Message</h3>
         <div className="input2Contact">Enter your message</div>
         <button className="btSContact">SUBMIT</button>


        



        </div>

    </div>
    );
}

export default Contact;