import React from "react";
import faq_photo from "../assets/Kindhood_Facts_Hero.jpg";
import soft from "../assets/Soft_Towel_Icon.png";
import anti from "../assets/Antibacterial_Icon.png";
import uv from "../assets/UV_Protection_Icon.png";
import sensitive from "../assets/Sensitive_Icon.png";
import moisture from "../assets/Moisture_Icon.png";
import temp from "../assets/Temperature_Control_Icon.png";

export default function FAQ(props) {
  return (
    <div className="main-body">
      <div className="main-container">
        <div className="main-container__column">
          <img alt="faqphoto" src={faq_photo} className="main-image" />
          <div className="faq-section">
            <h3 className="faq-section__subheadings" id="first-subheading">
              WHAT ARE THE BENEFITS OF BAMBOO COTTON?
            </h3>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={soft}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">Soft:</strong> The most surprising aspect
                of our bamboo cotton material is how soft and delicate it feels
                against your child’s skin.
              </div>
            </div>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={anti}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">Antibacterial:</strong> One of the most
                amazing aspects of bamboo is that bacteria doesn’t survive well
                in this fabric; most towels tend to smell and bacteria can grow
                quickly, but bamboo dries quickly so bacteria can’t thrive. Our
                bamboo and cotton hooded towel ponchos continually smell fresh
                and clean.
              </div>
            </div>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={uv}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">UV Protection:</strong> Bamboo fabric
                cuts out 97.5% of harmful UV rays. Your littles can keep playing
                without the need of extra sunblock.
              </div>
            </div>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={sensitive}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">Sensitive:</strong> Towels can be harsh
                and abrasive against many delicate skin types, but because our
                bamboo cotton material is so soft, it doesn’t affect sensitive
                skin.
              </div>
            </div>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={moisture}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">Moisture Wicking:</strong> Bamboo cotton
                is super absorbent – your little one won’t get that soggy towel
                feeling when wearing a poncho - it wicks away moisture and dries
                pretty quickly, making it more comfortable to wear.
              </div>
            </div>
            <div className="faq-section__icons">
              <img
                className="faq-section__icons-image"
                alt="soft_icon"
                src={temp}
              />
              <div className="faq-section__icons-description">
                <strong id="bold_type">Temperature Control:</strong> Bamboo is a
                hollow microfiber, which makes it warm yet very breathable. Your
                child won’t overheat while wearing one of our cover-ups.
              </div>
            </div>
            <h2 className="faq-elipses">
              .........................................................................................................
            </h2>
            <h3 className="faq-section__subheadings">
              WHAT IS EACH PONCHO MADE OF?
            </h3>
            <p
              className="faq-section__icons-description"
              id="faq-section__secondondary-paragraphs"
            >
              Each Kindhood poncho is made from 70% sustainable bamboo fiber and
              30% cotton blend. Ponchos feature an ultra-soft, absorbent, and
              quick-drying terrycloth interior; a hood for warmth and
              protection; and a pouch pocket for your littles to keep their
              hands warm, snacks safe, and seashell collections secure.
            </p>

            <h3 className="faq-section__subheadings">
              ARE PONCHOS MACHINE WASHABLE?
            </h3>
            <p
              className="faq-section__icons-description"
              id="faq-section__secondondary-paragraphs"
            >
              These bamboo and cotton hooded towel ponchos are machine washable.
              We recommend you wash once before first use to maximize
              absorbency.
            </p>
            <br />
            <br />
            <p
              className="faq-section__icons-description"
              id="faq-section__secondondary-paragraphs"
            >
              Machine wash separately in cold water. Tumble dry on medium heat.
              Do not bleach.
            </p>

            <h3 className="faq-section__subheadings">
              WHAT ARE THE DIMENSIONS OF EACH SIZE
            </h3>
            <h3
              className="faq-section__subheadings"
              id="faq-section__last-heading"
            >
              {" "}
              AND WHAT AGE RANGES DOES EACH FIT?
            </h3>
            <ul type="square" className="faq-section__sizes">
              <li className="">
                <strong id="bold_type">Large</strong> - 26” x 26” ages 7-8
              </li>
              <li className="">
                <strong id="bold_type">Medium</strong> - 24” x 24” ages 4-6
              </li>
              <li className="">
                <strong id="bold_type">Small</strong> - 20” x 20” ages 2-3
              </li>
              <li className="">
                <strong id="bold_type">Extra-Small</strong> - 20” x 18” ages
                12-24 months
              </li>
              <li className="">
                <strong id="bold_type">Infant towel</strong> - 27" x 27" ages
                0-12 months
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
