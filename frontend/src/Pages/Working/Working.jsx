import React from 'react'
import './Working.css'
import s1 from '../../assets/Step-1-scaled.png'
import s2 from '../../assets/Step-2-scaled.png'
import s3 from '../../assets/Step-3-scaled.png'
import s4 from '../../assets/Step-4-scaled.png'
const Working = () => {
  return (
  <div className='pagemain'>
     <h1 id='heading'>How it Works?</h1>
    <div className='page4'>
      <div>
        <img src={s1} alt="" />
        <h3>Step I : Register Tag</h3>
        <p>Use your phone to scan the QR code on your pet's tag. 
        Enter your name and the phone number you would like to appear when the tag is scanned.</p>
      </div>
      <div>
        <img src={s2} alt="" />
        <h3>Step II : Lost Your Pet?</h3>
        <p>If your pet gets lost, be sure your contact info is up to date so you can be contacted.</p>
      </div>
      <div>
        <img src={s3} alt="" />
        <h3>Step III : Finder Scans</h3>
        <p>The person that finds your pet can scan the QR code on his tag using their phone. 
        They will receive your contact information and can contact you.</p>
      </div>
      <div>
        <img src={s4} alt="" />
        <h3>Step IV : Be Reunited</h3>
        <p>Your Pet is back home safe! Give him a belly rub, a tasty snack, and a gentle reminder to stay close to you from now on!</p>
      </div>
    </div>
   </div>
  )
}

export default Working
