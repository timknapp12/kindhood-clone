import React, { Component } from "react";
import contact from "../assets/Contact.jpg";

export default class Contact extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="main-container">
          <div className="main-container__column">
            <img src={contact} className="main-image" />
            <div className="faq-section">
                <h3 className="faq-section__subheadings" id="first-subheading">
                    WHOLESALE INQUIRES
                </h3>
                <p
                className="faq-section__icons-description"
                id="faq-section__secondondary-paragraphs">
                We love wholesalers--big or little, we'd love to do business with you! Send your request and questions to <a>wholesale@kindhood.co</a>.
                </p>
                <h3 className="faq-section__subheadings">
                COLLAB INQUIRES
                </h3>
                <p
                className="faq-section__icons-description"
                id="faq-section__secondondary-paragraphs">
                Want to be a brand rep or Ambassador?  Let us know!  We are always looking for strong social media partners 
                that match our brand to help us spread the word. Contact us at collabs@kindhood.co and let's chat!.
                </p>
                <h3 className="faq-section__subheadings">
                CONTACT US
                </h3>
                <p
                className="faq-section__icons-description"
                id="faq-section__secondondary-paragraphs">
                If you have general questions about the company or product, please send an email to info@kindhood.co. 
                If you have a question about returns, please send us a note at returns@kindhood.co and we promise to take care of you to the best of our ability.
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
