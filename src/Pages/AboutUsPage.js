import React, { useEffect } from "react";

import "./AboutUsPage.css";
import { useGlobalContext } from "../Utilities/Context/Context";
const AboutUsPage = () => {
  const { closeNav } = useGlobalContext();

  useEffect(() => {
    closeNav();
  }, []);

  return (
    <>
      <div className="AboutUsMain">
        <div className="container">
          <h3 className="heading">About Us</h3>

          <p className="quote">
            About Smart Books: Where Curiosity and Knowledge Converge
          </p>

          <p>
            Smart Books is more than just an online bookstore; it's a community
            for lifelong learners and passionate readers. We believe that
            knowledge is the key to unlocking potential, fueling creativity, and
            enriching lives. That's why we curate a diverse selection of
            high-quality books that cater to a wide range of interests and
            intellectual pursuits.
          </p>

          <h5 className="subHeader">Our Mission:</h5>

          <p>
            Our mission is to empower readers of all ages and backgrounds to
            embark on their own journeys of discovery. We strive to provide:
          </p>

          <ul>
            <li>
              A curated selection of books: We hand-pick titles that are
              informative, engaging, and thought-provoking. From the latest
              bestsellers to timeless classics, we offer a variety of genres to
              ignite your curiosity.
            </li>
            <br />
            <li>
              A seamless shopping experience: Our user-friendly website makes it
              easy to find the perfect book, whether you're browsing by
              category, author, or keyword.
            </li>
            <br />
            <li>
              Exceptional customer service: Our dedicated team is passionate
              about books and committed to helping you find the resources you
              need.
            </li>
          </ul>

          <h5 className="subHeader">What Makes Us Different</h5>
          <p>
            Smart Books goes beyond simply selling books. We are committed to
            fostering a love of reading and creating a vibrant community for
            book lovers. Here's how we set ourselves apart:
          </p>

          <ul>
            <li>
              Expert recommendations: Our team of book enthusiasts is here to
              provide personalized recommendations based on your interests.
            </li>
            <li>
              Engaging content: We regularly publish blog posts, author
              interviews, and book reviews to keep you informed and inspired.
            </li>
            <li>
              Special offers and rewards: We offer exclusive discounts, loyalty
              programs, and special events to make your reading experience even
              more rewarding.
            </li>
          </ul>

          <h5 className="subHeader">Join the Smart Books Community:</h5>
          <p>
            Whether you're a seasoned bibliophile or just starting to explore
            the world of literature, we invite you to join the Smart Books
            community. With our curated selection, exceptional service, and
            commitment to fostering a love of reading, we're here to help you
            find the perfect book to ignite your imagination and expand your
            horizons.
          </p>

          <h5 className="subHeader">
            Start exploring today and discover the power of Smart Books!
          </h5>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
