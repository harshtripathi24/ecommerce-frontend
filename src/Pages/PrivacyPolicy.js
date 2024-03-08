import React, { useEffect } from "react";

import "./PrivacyPolicy.css";
import { useGlobalContext } from "../Utilities/Context/Context";
const PrivacyPolicy = () => {
  const { closeNav } = useGlobalContext();

  useEffect(() => {
    closeNav();
  }, []);

  return (
    <>
      <div className="PrivacyPolicyMain">
        <div className="container">
          <h1 className="heading">Smart Books Privacy Policy</h1>

          <p>
            <span>Effective Date:</span>
            [Today's Date]
          </p>

          <p>
            Smart Books ("we," "us," or "our") respects the privacy of our users
            ("you" or "your"). This Privacy Policy describes how we collect,
            use, and disclose your personal information when you use our website
            ([website address]) (the "Website").
          </p>

          <h2>Information We Collect</h2>

          <p>We collect the following information when you use the Website:</p>

          <ul>
            <li>
              <span>Information you provide:</span>
            </li>
            <ul>
              <li>
                This includes information you provide when you create an
                account, place an order, subscribe to our newsletter, or contact
                us. This may include your name, billing and shipping address,
                email address, phone number, and payment information.
              </li>
            </ul>
            <li>
              <span>Information collected automatically:</span>
            </li>
            <ul>
              <li>
                We automatically collect certain information when you visit the
                Website, such as your IP address, browser type, operating
                system, referring URL, and the pages you visit on our Website.
              </li>
            </ul>
          </ul>

          <h2>How We Use Your Information</h2>

          <p>We use your information for the following purposes:</p>

          <ul>
            <li>
              To fulfill your orders and provide you with the products and
              services you request.
            </li>
            <li>To create and manage your account.</li>
            <li>
              To send you marketing and promotional communications (you can opt
              out of these at any time).
            </li>
            <li>To improve the Website and our services.</li>
            <li>To personalize your experience on the Website.</li>
            <li>To prevent fraud and protect the security of the Website.</li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>

          <h2>Sharing Your Information</h2>

          <p>
            We may share your information with third-party service providers who
            help us operate the Website and provide our services. These service
            providers are contractually obligated to keep your information
            confidential and secure.
          </p>

          <p>
            We may also disclose your information if we are required to do so by
            law or if we believe it is necessary to protect the rights or safety
            of ourselves or others.
          </p>

          <h2>Your Choices</h2>

          <p>
            You can opt out of receiving marketing and promotional
            communications from us by following the unsubscribe instructions in
            those communications.
          </p>
          <p>
            You can also access, update, or delete your personal information by
            logging into your account or contacting us.
          </p>

          <h2>Data Security</h2>

          <p>
            We take reasonable steps to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no website or internet transmission is completely secure.{" "}
          </p>

          <h2>Children's Privacy</h2>

          <p>
            The Website is not intended for children under the age of 18. We do
            not knowingly collect personal information from children under 18.
          </p>

          <h2>Changes to this Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. We will post
            any changes on the Website.{" "}
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions about this Privacy Policy, please contact
            us at [your email address].
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
