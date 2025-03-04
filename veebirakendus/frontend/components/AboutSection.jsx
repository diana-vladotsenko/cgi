import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section" id="about">
          <div className="heading2-text">
            <h2 className="h2">About</h2>
          </div>
          <div className="about-container">
            <div className="paragraphs-container">
              <p style={{ fontWeight: 300 }} className="about-text">
                Hi there! I&apos;m Diana, a 22-year-old creative soul passionate
                about design and all things cute. Welcome to my digital sticker
                shop!
              </p>
              <p style={{ fontWeight: 200 }} className="about-text">
                I started this journey to share my love for art and creativity
                with people like you who enjoy adding a personal, playful touch
                to their lives. Each sticker in my collection is thoughtfully
                designed to bring a little bit of joy and inspiration to your
                day.
              </p>
              <p style={{ color: "#8B8B8B" }} className="about-text">
                Whether you&apos;re looking to decorate your planner, style your
                laptop, or make a gift extra special, my stickers are here to
                help you express yourself in unique and fun ways. Thank you for
                supporting my small business and being a part of my creative
                journey!
              </p>
              <p style={{ fontWeight: 300 }} className="about-text">
                ps. i made this website from scratch. Hope you are enjoying it!
              </p>
            </div>
            <div className="image-container">
              <img
                src="/images/elipse_about.svg"
                alt="elipse-decoration"
                className="elipse-4"
              />
              <img src="/images/me.jpg" alt="me" className="image-of-me" />
              <img
                src="/images/line_about.svg"
                alt="elipse-decoration"
                className="line-1"
              />
            </div>
          </div>
        </div>
  );
};

export default AboutSection;
