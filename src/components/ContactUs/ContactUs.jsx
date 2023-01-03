import React from 'react';
import { useState } from 'react';

const ContactUs = () => {
  const [service, setService] = useState('NoService');

  const HandleChange = (event) =>{
    setService(event.target.value);
    console.log(service);

  }

  
  return (
    <div className='contactUs'>
      <div className='intro-section'>
        <h2>Feel free to to reach our team</h2>
        <p>Our team is always available at any time for you!</p>
      </div>
      <div className='form-section'> 
        <h4>Fill the form below</h4>
        <form action="" method="post">
          <div className='Row'>
            <div className='Group'>
            <label htmlFor="Name">
              Name:
            </label>
            <input type="text" name='Name'/>
            </div>
            <div className='Group'>
            <label htmlFor="Email">
              Email:
            </label>
            <input type="email" name='Email'/>
            </div>
          </div>
          <div className='Row'>
            <div className='Group'>
              <label htmlFor="phone-number">
                Phone Number
              </label>
              <input type="text" name='phone-number' />
            </div>
            <div className='Group'>
              <label htmlFor="companyName">Company Name(optional)</label>
              <input type="text" name='companyName' />
            </div>
          </div>
          <div className='Row'>
            <label htmlFor="ServiceType">Type of Service</label>
            <select name="ServiceType" id="serviceType" onChange={HandleChange}>
              <option value="Service Selected">Select the type of service...</option>
              <option value="Architectual Design Service">Architectual Design</option>
              <option value="Structural Design Service"> Structural Design</option>
              <option value="Interior Design Service">Interior Design</option>
              <option value="Construction Service">Construction</option>
              <option value="Consultancy Service">Consultancy</option>
              <option value="Cost Estimation Service">Cost Estimation</option>
              <option value="Evaluation Service">Evaluation</option>
            </select>
          </div>
          <div className={service === 'Architectual Design Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
              <div className='Group'>
                <label htmlFor="landLocation">
                  Location Of the Plot:
                </label>
                <input type="text" name='landLocation' />
              </div>
              <div className='Group'>
                <label htmlFor="UPI-detail">
                  Plot-UPI:
                </label>
                <input type="text" name='UPI-detail' />
              </div>
            </div>

            <div className='row'>
              <div className='Group'>
                <label htmlFor="clientDescription">
                  Please enter how you want your house to be:
                </label>
                <textarea name="clientDescription" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Structural Design Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
              <div className='Group'>
                <label htmlFor="flowPlan">Flow Plan:</label>
                <input type="file" name='flowPlan' />
              </div>
            </div>
            <div className='row'>
              <div className='Group'>
                <label htmlFor="elevationPlan">Elevation Plan:</label>
                <input type="file" name='elevationPlan' />
              </div>
            </div>
            <div className='row'>
              <div className='Group'>
                <label htmlFor="softwareUsed">Software Used:</label>
                <input type="text" name='softwareUsed' />
              </div>
              <div className='Group'>
                <label htmlFor="softwareFile">Project File:</label>
                <input type="file" name='softwareFile' />
              </div>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Interior Design Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
              <div className='Group'>
                <label htmlFor="flowPlan">Flow Plan:</label>
                <input type="file" name='flowPlan' />
              </div>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Construction Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <p>Call Us on the phone number: <a href="acornsconsultancy@gmail.com">+250780867765</a></p>
            <p>Email us on this email: <a href="acornsconsultancy@gmail.com">acornsconsultancy@gmail.com</a></p>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Consultancy Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
            <p>Call Us on the phone number: <a href="acornsconsultancy@gmail.com">+250780867765</a></p>
            <p>Email us on this email: <a href="acornsconsultancy@gmail.com">acornsconsultancy@gmail.com</a></p>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Cost Estimation Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
            <p>Call Us on the phone number: <a href="acornsconsultancy@gmail.com">+250780867765</a></p>
            <p>Email us on this email: <a href="acornsconsultancy@gmail.com">acornsconsultancy@gmail.com</a></p>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className={service === 'Evaluation Service' ? service : 'displayNotMe'}>
            <h2>{service}</h2>
            <div className='row'>
            <p>Call Us on the phone number: <a href="acornsconsultancy@gmail.com">+250780867765</a></p>
            <p>Email us on this email: <a href="acornsconsultancy@gmail.com">acornsconsultancy@gmail.com</a></p>
            </div>
            <div className='Row'>
              <p>Thanks for your time, Click the Button below reach our support team</p>
            </div>
          </div>

          <div className='Row'>
            <input type="button" name='Submit' value='Submit' />
          </div>
        </form>
      </div>
    </div>
  )
}
 


export default ContactUs;