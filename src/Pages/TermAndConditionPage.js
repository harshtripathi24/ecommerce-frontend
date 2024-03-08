import React, { useEffect } from "react";

import "./TermAndCondition.css";
import { useGlobalContext } from "../Utilities/Context/Context";
const TermAndConditionPage = () => {
  const { closeNav } = useGlobalContext();

  useEffect(() => {
    closeNav();
  }, []);
  return (
    <>
      <div className="TermAndConditionMain">
        <div className="container">
          <h1 className="heading">Smart Books Terms and Conditions</h1>

          <p>
            Welcome to Smart Books! By accessing or using our website, you agree
            to be bound by these Terms and Conditions ("Terms").
          </p>

          <h2>1. User Eligibility</h2>
          <p>
            This website is intended for users who are 18 years of age or older.
            If you are under 18, you may only use this website with the
            supervision of a parent or legal guardian.
          </p>

          <h2>2. Orders and Payment</h2>
          <ul>
            <li>
              You agree to provide accurate and complete information for your
              order, including your name, shipping address, and payment details.
            </li>
            <li>
              All prices are listed in [currency] and are subject to change. We
              will inform you of any price changes before processing your order.
            </li>
            <li>
              Payment can be made through secure online methods offered on the
              website.
            </li>
            <li>Your order will be confirmed once payment is authorized.</li>
          </ul>

          <h2>3. Shipping and Delivery</h2>
          <ul>
            <li>
              We offer various shipping options with estimated delivery times.
              These are estimates and actual delivery times may vary.
            </li>
            <li>
              Shipping costs will be calculated at checkout based on your order
              weight and chosen shipping method.
            </li>
            <li>
              You are responsible for any import duties, taxes, or other charges
              that may be incurred upon receiving your order.
            </li>
          </ul>

          <h2>4. Returns and Refunds</h2>
          <ul>
            <li>
              You may return unused and undamaged books within [number] days of
              receipt for a full refund.
            </li>
            <li>Returned books must be shipped in their original packaging.</li>
            <li>You are responsible for the cost of return shipping.</li>
            <li>
              Refunds will be processed within [number] business days of
              receiving the returned items.
            </li>
            <li>
              We reserve the right to deny returns for used, damaged, or altered
              books.
            </li>
          </ul>

          <h2>5. Content and Intellectual Property</h2>
          <ul>
            <li>
              All content on this website, including text, images, logos, and
              designs, is the intellectual property of Smart Books or its
              licensors.
              <li>
                You may not copy, distribute, modify, transmit, or commercially
                exploit any content without our written permission.
              </li>
            </li>
          </ul>
          <h2>6. User Conduct</h2>
          <p>
            By using this website, you acknowledge that you have read and
            understood these Terms and agree to be bound by them.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermAndConditionPage;
