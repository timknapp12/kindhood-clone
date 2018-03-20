import React, {Component} from "react";

export default class Press extends Component {
    
    state={
        blogs: ['Baby Cubby', 'Small Fry', 'Destination Nursery', 'Splash Magazine', 'Mini Style Mag', 'Winter Daisy', 'The Kirsty Files', 'Miami Crowd', 'Good 4 Utah']
    }

    render() {

    // rather than listing a bunch of li items in the JSX, I created an array and mapped through them to list them in the UI
        const bloglist = this.state.blogs.map((item, i) => {
           return <li key={i} className='press-container__list'><a>{item}</a></li>
        })
        return(
            <div className='press-body' >
                <div className='press-container' > 
                    <h3 className="press-container__heading" >
                        KINDHOOD IN THE PRESS
                    </h3>
                    <p className='press-container__paragraph' >As the word of Kindhood’s soft, hooded baby towels and kids’ hooded poncho towels spreads, we’ve been lucky enough to be featured in a variety of blogs, magazines, and more. See what all the hype is about in the links below.</p>

                    <h5 className='press-container__subheading' >
                        BLOGS
                    </h5>
                    <p className='press-container__paragraph' >
                    Kindhood has been highlighted in an array of blogs, from Miami Crowd to everyone’s favorite mini lifestyle blog, Mini Style Mag.
                    </p>
                    <ul>
                        {bloglist}
                    </ul>
                    <h5 className='press-container__subheading' >
                        MAGAZINES
                    </h5>
                    <ul>
                        <li className='press-container__list' >
                            British Vogue, November 2017
                        </li>
                    </ul>
                </div> 
            </div> 
        )
    }
}
