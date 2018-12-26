import React from 'react';

const Privacy = () =>(
  <div className='container' style={{marginTop:50,marginBottom:50}}>
    <h3 className='sectionTitle text-center'>Privacy &amp; Security Policy</h3>
    <div className='card'>
      <div className='card-body'>
        <p className='card-text'>
          We would like to take this opportunity to both thank you for visiting our website and to share with you the importance <span className='title-name'>Canine Liability</span> places upon protecting your private information.
        </p>
      </div>
    </div>
    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Collection of information:</h4>
        <p className='card-text'>
          While you are visiting our website, we may or may not collect personal.confidential information - written, in-person, telephone, facsimile, electronically and online - that may assist us in preparing a quote for you and in helping us to negotiate with our carriers on your behalf. The personal information we collect may include your name, address, policy or claim information, financial or other information as may be required by our underwriters.
        </p>
        <p>We also collect personal information about you from the following sources:</p>
        <ul className='list-group' style={{fontSize:13,width:'75%'}}>
          <li className='list-group-item'>Applications or other forms such as claims forms or underwriting questionnaires that you submit to us and others:</li>
          <li className='list-group-item'>Information about your transactions with us, our affiliates or others; and</li>
          <li className='list-group-item'>Third party information from public sources such as the internet or governmental agencies.</li>
        </ul>
      </div>
    </div>

    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Disclosure of Information:</h4>
        <p className='card-text'>
          We assure you that is not our policy to share your private information with non-affiliated third parties other than as permitted or required by law. For example, we may share all of the information listed above with non-affiliated third parties for, including but not limited to, the following reasons:
        </p>
        <ul className='list-group' style={{fontSize:13,width:'75%'}}>
          <li className='list-group-item'>The information is essential in servicing or processing the insurance needs of our clients in a way that is customary and necessary among independent insurance agents in our indursty. Our services and processes might include, for example, but are not limited to, underwriting, obtaining renewal terms, rating, placement and providing quotes for insurance that is germane to the coverage the customer places with our company.</li>
          <li className='list-group-item'>Information necessary to protect the confidentiality or security of our client's records.</li>
          <li className='list-group-item'>Information necessary to resolve client disputes or inquiries.</li>
          <li className='list-group-item'>Information required by individuals or entities who are assessing our legal compliance.</li>
          <li className='list-group-item'>Information required for us to comply with the law.</li>
          <li className='list-group-item'>Information necessary to protect against or prevent fraud, unauthorized transactions, claims or other liability.</li>
        </ul>
      </div>
    </div>

    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Protection of Information:</h4>
        <p className='card-text'>
          Our Company maintains physical, electronic and procedural safeguards that comply with state and federal regulations to protect the confidentiality of your personal information.
        </p>
        <p className='card-text'>
          We appreciate your business and in order to continue building upon that relationship, believe it is necessary not only from a legal standpoint but also as a sound business practice that you, our customer, understand the care our agency uses in handling your information. Our Company will continue to monitor the effectiveness of this privacy policy.
        </p>
      </div>
    </div>
  </div>
);

export default Privacy;
