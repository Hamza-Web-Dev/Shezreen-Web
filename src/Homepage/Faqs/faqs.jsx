import React from "react";
import "./Faqs.css"
const FAQs = () => {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-item">
        <h2>Do I need to set up an account to place an order?</h2>
        <p>
          You can shop at Shezreen by Amina Shah without creating an account. However, registering
          with us allows you to enjoy the following benefits:
        </p>
        <ul>
          <li>Track your orders and review past purchases</li>
          <li>Preview our new collections and register your interest through our seasonal Lookbook</li>
          <li>Save your address and card details for faster shopping next time</li>
        </ul>
      </div>

      <div className="faq-item">
        <h2>Is my personal information kept private?</h2>
        <p>
          Please be assured that your personal information is kept private and confidential, and at no
          point will we share it with a third party. For more information, please read our privacy
          policy in full.
        </p>
      </div>

      <div className="faq-item">
        <h2>How long does delivery take, and how much will it cost?</h2>
        <p>
          For information on delivery and shipping charges to your destination, view our Shipping
          options.
        </p>
      </div>

      <div className="faq-item">
        <h2>Is my package insured and do I need to sign for my order?</h2>
        <p>
          All your purchases are insured against theft and accidental damage whilst in transit from @
          by Amina Shah to your shipping address. Once your package has been delivered and signed for
          at your specified address, it is no longer covered.
        </p>
        <p>
          A signature requirement can be waived for packages delivered by FedEx and BlueEx;
          however, you will still be required to sign for all international orders.
        </p>
      </div>

      <div className="faq-item">
        <h2>How do I return or exchange an item?</h2>
        <p>
          At @ by Amina Shah, we are committed to providing the highest quality workmanship. Whilst we
          hope you are delighted with your order, we do not offer any return or exchange under normal
          conditions.
        </p>
        <p>
          A conditional exchange may be offered in the form of store credit for future purchases if
          the product you received is found to be faulty in terms of its quality or workmanship;
          provided that you inform us within 48 hours of receipt. After you generate a query, our
          Quality Assurance Department will review your case and provide a solution. Customized orders
          or orders where a discount code has been applied are not eligible for a return, refund, or
          chargeback.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
