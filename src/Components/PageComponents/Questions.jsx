import React from 'react';

const Questions = () =>(
  <div className='container'>
    <h3 className='sectionTitle'>Frequently Asked Questions</h3>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'><a href='#allBreeds'>Do you cover all breeds</a></li>
      <li className='list-group-item'><a href='#HowDoI'>How do I do this:</a></li>
      <li className='list-group-item'><a href='#whatIs'>What is a <span className='title-name'>Canine Liability Policy</span></a></li>
      <li className='list-group-item'><a href='#quote'>How do I get a quote:</a></li>
      <li className='list-group-item'><a href='#paymentPlans'>Do you have payment plans:</a></li>
      <li className='list-group-item'><a href='#limits'>What limits are available</a></li>
      <li className='list-group-item'><a href='#behaviorHistory'>What if my dog has a behavior history or has been labeled dangerous by a governing body:</a></li>
      <li className='list-group-item'><a href='#dogWorks'>I need coverage because my dog works with me or comes to work with me:</a></li>
      <li className='list-group-item'><a href='#additionalInsured'>What is "Additional Insured":</a></li>
      <li className='list-group-item'><a href='#endorsement'>What does the "Additional Insured" endorsement do:</a></li>
      <li className='list-group-item'><a href='#diligent'>Explain diligent effort form or surplus lines disclosure statement:</a></li>
      <li className='list-group-item'><a href='#changes'>What if I need to make changes during the year:</a></li>
      <li className='list-group-item'><a href='#cancel'>What happens if I cancel before the end of the year:</a></li>
      <li className='list-group-item'><a href='#cancelPolicy'>How do I cancel a policy:</a></li>
      <li className='list-group-item'><a href='#noPay'>What happens if I do not pay my installments:</a></li>
      <li className='list-group-item'><a href='#renewing'>Renewing your policy:</a></li>
      <li className='list-group-item'><a href='#lower'>Why are our premiums lower than other companies:</a></li>
    </ul>

    <div className='card' id='allBreeds'>
      <div className='card-body'>
        <h5 className='card-title'>Do you cover all breeds:</h5>
        <p className='card-text'>
          Yes, we cover all breeds, including those normally considered dangerous such as Pit Bulls, Rottweilers, German Shepherds, Saint Bernard's, Great Danes, Dobermans and Huskies, whether pure or mixed breeds.
        </p>
      </div>
    </div>

    <div className='card' id='HowDoI'>
      <div className='card-body'>
        <h5 className='card-title'>How do I do this:</h5>
        <p className='card-text'>
          This is policy is just like any other policy, you get your quote, decide if you want to purchase and conclude the process. this is a FULLY automated program, it is designed to be easy , quick and convenient. It is also the reason the premium is less than most other policies.
        </p>
      </div>
    </div>

    <div className='card' id='whatIs'>
      <div className='card-body'>
        <h5 className='card-title'>What is a <span className='title-name'>Canine Liability Policy</span>:</h5>
        <p className='card-text'>
          It is a standalone policy that coers injuries or damages which are caused by your dog. Most people think only of dog bites; however, bites are just one reason people are suing dog owners. If your dog scratches, scares, causes a person to fall or if your dog injures another animal, it is likely you will hear from a lawyer. Coverage is provided on and off your premises anywhere in the United States. Many landlords and municipalities are requesting to be added as "Additional Insureds" providing them with liability coverage for injuries or damages caused by your dog and so they can be notified of any changes or cancellations.
        </p>
      </div>
    </div>

    <div className='card' id='quote'>
      <div className='card-body'>
        <h5 className='card-title'>How do I get a quote:</h5>
        <p className='card-text'>
          Hit the "Get a Quote" button on the website. You will be asked to answer primarily drop down questions, then hit "calculate" at the bottom of the page. If you have more than one dog, there is an "Add Dog" button at the top left corner of the quote. You will need to answer the same questions for each dog. Please note that you are Never under any <b>OBLIGATION TO PURCHASE ANYTHING!</b>
        </p>
      </div>
    </div>

    <div className='card' id='paymentPlans'>
      <div className='card-body'>
        <h5 className='card-title'>Do you have payment plans:</h5>
        <p className='card-text'>
          Payment options and plans will vary depending on the amount of the premium they will appear on the page with your quote. The <b>QUOTE</b> you will reveive is for an annual policy which is 12 months or one year. All payments must be received and authorized by either a debit or credit card processing company. The charges will appear on your statement from "Dual Commercial" they are assisting us. The only Rip Off reports about the program are the result of cancellation due to nonpayment of premiums, only the insurer can reinstate coverage we do not have the authority to without their approval. <b>There is no Deductible!</b>
        </p>
      </div>
    </div>

    <div className='card' id='limits'>
      <div className='card-body'>
        <h5 className='card-title'>What limits are available:</h5>
        <p className='card-text'>
          We have four options for coverage $25,000, $50,000, $100,000 and $300,000. At this time we are unable to assist with higher limits such as $500,000 and up.
        </p>
      </div>
    </div>

    <div className='card' id='behaviorHistory'>
      <div className='card-body'>
        <h5 className='card-title'>What if my dog has a behavior history or has been labeled dangerous by a governing body:</h5>
        <p className='card-text'>
          We are willing to review all dogs. You will be asked to give us information on the incident or incidents leading to the label. If your quote comes back as a "referral", that means the underwriters want to review your application closer. You will receive the final decision in a separate email.
        </p>
      </div>
    </div>

    <div className='card' id='dogWorks'>
      <div className='card-body'>
        <h5 className='card-title'>I need coverage because my dog works with me or comes to work with me:</h5>
        <p className='card-text'>
          If your dog goes to work with you but does not assist you, other than greeting customers or visiting with staff or employees, we can include coverage.
        </p>
      </div>
    </div>

    <div className='card' id='additionalInsured'>
      <div className='card-body'>
        <h5 className='card-title'>What is "Additional Insured":</h5>
        <p className='card-text'>
          You may be asked to name your landlord, employer, a governmental entity or other interested parties on the policy in the event your dog injures someone or causes damage. You may add one or more, but you mush have their name, address, and contact information (either phone or email). There is a $50 charge per separate address to add them to your policy. You do not need to add a spouse, significant other or family member as an "Additional Insured", if they reside at the same address as you, as they are already covered under the policy.
        </p>
      </div>
    </div>

    <div className='card' id='endorsement'>
      <div className='card-body'>
        <h5 className='card-title'>What does the "Additional Insured" endorsement do:</h5>
        <p className='card-text'>
          If your dog injures a person or another animal and your landlord or other "Additional Insured" is sued, this policy will protect you and your landlord (and any other "Additional Insured") for medical costs for the injured pary, defense costs and settlement costs, if any.
        </p>
      </div>
    </div>

    <div className='card' id='diligent'>
      <div className='card-body'>
        <h5 className='card-title'>Explain diligent effort form or surplus lines disclosure statement:</h5>
        <p className='card-text'>
          The coverage is available through the Excess and Surplus marketplace. These types of policies are often callend non-admitted or non-licensed. The primary difference between this policy and an admitted policy is that if the insurance company were to go out of business, there would be no protection under your State Guaranty Fund. However, this policy is through one of the largest syndicates at Lloyd's of London is one of the oldest insurance providers in the world. To prove that you have been made aware that the policy is non-admitted, you may have to sign a form predetermined by your state.
        </p>
      </div>
    </div>

    <div className='card' id='changes'>
      <div className='card-body'>
        <h5 className='card-title'>What if I need to make changes during the year:</h5>
        <p className='card-text'>
          There is a tab for "Changes". Simply complete the information and it will be sent for processing. If there are additional charges, we will be in touch. Changes are not automated yet, so it will take some time to get proof of changes to you. Normally, this should take about 1 - 2 weeks to process. If it is urgent, please let us know.
        </p>
        <p className='card-text'>
          We can update your address, email or phone number. The policy, however, cannot be assigned or transferred to a new owner. The new owner would need to purchase their own policy your policy would be canceled and any return premium returned.
        </p>
      </div>
    </div>

    <div className='card' id='cancel'>
      <div className='card-body'>
        <h5 className='card-title'>What happens if i cancel before the end of the year:</h5>
        <p className='card-text'>
          The policy can be canceled at any time. If there are any "Additional Insureds", we have an obiligation to notify them of the cancellation. After the first ninety days, the return premium is determined by your individual states'lawsand regulations; however, no fees are ever returned. Should you purchase the policy and decide to cancel for any reason (even minutes later), 25% of the premium is nonrefundable.
        </p>
      </div>
    </div>

    <div className='card' id='cancelPolicy'>
      <div className='card-body'>
        <h5 className='card-title'>How do I cancel a policy:</h5>
        <p className='card-text'>
          There is a tab for "Policy Changes" or "Cancelations". Complete the information you will receive a form to sign, <b>WE </b>can Not start the cancellation without it. This will be handled manually and it can take 4 - 6 weeks for the cancellation to be processed. If you have chosen a payment plan, there may be additional payments collected before processing is complete; however, we will return every penny we owe you.
        </p>
      </div>
    </div>

    <div className='card' id='noPay'>
      <div className='card-body'>
        <h5 className='card-title'>What happens if I do not pay my installments:</h5>
        <p className='card-text'>
          All installments will be drawn directly from the debit or credit card uses to purchase the policy without additional action by you. If you are canceled for nonpayment of premium or insufficient funds in your account we will return any premium that has been paid but not earned (meaning used up). Fees will not be refunded and we cannot reinstate your coverage. Again, we are obligated to notify any and all "Additional Insureds" of cancellation.
        </p>
      </div>
    </div>

    <div className='card' id='renewing'>
      <div className='card-body'>
        <h5 className='card-title'>Renewing your policy:</h5>
        <p className='card-text'>
          Starting at about 6 weeks prior to policy expiration, you will receive a series of emails. If you want to renew, all current information will be included for you to review, including information on your dog and your contact information. Once you sign your state required documents, you go directly to the final page, select your payment option and enter your card information. If your do not want to renews, simply opt out. If your policy was canceled during the year, we will not contact you further.
        </p>
      </div>
    </div>

    <div className='card' id='lower'>
      <div className='card-body'>
        <h5 className='card-title'>Why are our premiums lower than other companies:</h5>
        <p className='card-text'>
          This policy was designed with a unique rating and underwriting process. The questions you answer give us the information we need to determine if we can offer you a quote and for what price. Automation is necessary to readily assist as many owners as possible at the lowest cost and to do so in the most efficient and timely manner.
        </p>
      </div>
    </div>
  </div>
);

export default Questions;
