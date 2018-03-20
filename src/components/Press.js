import React, {Component} from "react";

export default class Press extends Component {
    
    state={
        blogs: ['Baby Cubby', 'Small Fry', 'Destination Nursery', 'Splash Magazine', 'Mini Style Mag', 'Winter Daisy', 'The Kirsty Files', 'Miami Crowd', 'Good 4 Utah']
    }

    render() {

    
    
        return(
            <div className='press-body' >
                <div className='press-container' > 
                    <h3 className="press-container__heading" >
                        KINDHOOD IN THE PRESS
                    </h3>
                    <p className='press-container__paragraph' >As the word of Kindhood’s soft, hooded baby towels and kids’ hooded poncho towels spreads, we’ve been lucky enough to be featured in a variety of blogs, magazines, and more. See what all the hype is about in the links below.</p>

                    <h5>
                        BLOGS
                    </h5>
                    <p>
                    Kindhood has been highlighted in an array of blogs, from Miami Crowd to everyone’s favorite mini lifestyle blog, Mini Style Mag.
                    </p>
                    <ul>
                        <li className=''></li>
                    </ul>
                </div> 
            </div> 
        )
    }
}
