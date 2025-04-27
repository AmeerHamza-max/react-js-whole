import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Featured Movie"
          className="about-image"
        />
        <p className="about-paragraph">
          Welcome to <strong className="about-strong">Our HAMZAFLIX  E-Commerce Store</strong>, your one-stop shop for all your needs. We are
          dedicated to providing you with the best shopping experience, offering high-quality
          products at unbeatable prices.
        </p>
        <p className="about-paragraph">
          Our mission is to make your life easier by bringing the world of shopping right to your
          fingertips. From the latest trends in fashion to the best deals on electronics, we’ve got
          it all covered.
        </p>
        <p className="about-paragraph">
          Founded in [Year], our passion for excellence drives us to constantly improve and innovate.
          We’re committed to ensuring your satisfaction with every purchase.
        </p>
        <p className="about-paragraph">
          Thank you for choosing us. We’re excited to serve you and look forward to making your
          shopping journey seamless and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default About;
