import React from 'react';
import debbie from '../Images/debbie.jpg';

const About = () =>{
  return(
    <div className='container' style={{marginTop:50,marginBottom:50}}>
      <h3 className='sectionTitle text-center'>About Canine Liability Insurance</h3>
      <div className='card'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-9'>
              <p className='card-text'>
                It's likely that the seed to become a champion for man's best friend was planted in Deborah Tyrner years ago when, as a child, she witnessed an act of animal abuse yet was powerless to stop it. Fast forward to today, when Debbie has parlayed her love of dogs, a deep understanding of their behavior, and a strong background in insurance to replace coverage that is being removed from homeowners and rental policies with <span className='title-name'>Canine Liability Insurance</span>.
              </p>
              <p className='card-text'>
                While doing research for a paper for the prestigious Society of Chartered Property and Casualty Underwriters (aka CPCU), it occurred to her that there is a gross misunderstanding by the incurance industry as to which dogs to insure for dog bite liability. Finding that breed is only one small part in the process, Debbie looked at developing a rating modality that incorporates identifiable factors as to the likelihood a dog will bite regardless of the breed. the most often asked is will she insure on of the so-called dangerous breeds, and the answer is YES! The <span className='title-name'>Canine Liability Policy</span> is designed for any and ALL Breeds of dogs.
              </p>
            </div>
            <div className='col-sm-3'>
              <img src={debbie} alt='Debbie Turner' className='card-image-right'></img>
            </div>
          </div>
        </div>
      </div>

      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>Inside the <span className='title-name'>Canine Liability Insurance Policy</span></h4>
          <p className='card-text'>
            Debbie developed the <span className='title-name'>Canine Liability Policy</span> offering protection for dog owners in the event their dog(s) injures a person or another animal. Each dog is individually underwritten examining those characteristics that play a part in the propensity for dog biting. Policy limits range from $25,000 - $300,000. Debbie also has the ability to include additional insureds if required. In stark contrast to other programs, <span className='title-name'>Canine Liability</span> insurance does not exclude any particular breed of dog; this approach is central to Debbie's unique understanding of dog behavior that has turned underwriting this risk on its floppy ear.
          </p>
          <p className='card-text'>
            the program initially began in 2012 available in a limited number of states. Today <span className='title-name'>Canine Liability</span> coverage is available in all states except Alaska. The policy has also been redesigned to offer much broader coverage with no deductible. You can request a quote by filling out an online application and emailing it to <a href='mailto:dturner@deaninsuranceai.com'>dturner@deanInsuranceAi.com</a>, or by completing the lead form on this page for more information.
          </p>
          <p className='card-text'>
            The policy was originally sold through a subsidiary of her agency Federation of Insured Dog Owners aka(F.I.D.O), and is now sold through Debbie's agency, Dean Insurance Agency, Inc. Dean Insurance was established in 1994 and provides a broad range of insurance products and services to personal and business customers.
          </p>
          <p className='card-text'>
            Debbie has recently been nominated a finalist for Woman of the Year in the Pet Industry Network.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;
