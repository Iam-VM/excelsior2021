import React from 'react';
import * as faqStyles from "./faq.module.css";
import { StaticImage } from "gatsby-plugin-image"

import faqBackImg from "../../images/faq-back.svg";


const FAQ = ({faqRef, setSideNavBarStatus}) => {
  return (
    <div ref={faqRef} className={faqStyles.container} onClick={() => setSideNavBarStatus(false)}>
      <div className={faqStyles.headerContainer}>
        <img
          src={faqBackImg}
          alt={"faq"}
          className={faqStyles.headerBack}
        />
        <div className={faqStyles.headerText}>FAQ</div>
      </div>
      <div className={faqStyles.faqContainer}>
        <div className={faqStyles.faqLeft}>
          <div className={faqStyles.faqHead}>Who all can participate in the event ?</div>
          <div className={`${faqStyles.answerLeft} ${faqStyles.faqAnswer} `}>There is no specific criteria for participation. Anyone interested can participate in the event.</div>
        </div>
        <div className={faqStyles.faqRight}>
          <div className={faqStyles.faqHead}>Should I register for each event separately ?</div>
          <div className={`${faqStyles.answerRight} ${faqStyles.faqAnswer} `}>It is your preference that matters. You can join for more than an event in Excelsior'21 provided you abide by the terms and conditions. For the same reason we have provided packages which is a mixture of events. You can choose package according to your taste and preference.</div>
        </div>
        <div className={faqStyles.faqLeft}>
          <div className={faqStyles.faqHead}>Will I be refunded if I decide to cancel my registration ?</div>
          <div className={`${faqStyles.answerLeft} ${faqStyles.faqAnswer} `}>Oops! There is no provision for refund. But you'll avail the benefit of refund in case if you have registered yourself twice for the same event by some technical issues. The technical issues must be informed to the Excelsior'21 team as soon as possible. Genuine reasons with evidences will be accepted and refunded.</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
