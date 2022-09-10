import './contact.css'
import Phone from '../../img/phone.png'
import Mail from '../../img/mail.png'
import Address from '../../img/address.png'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_deg0s1v',
        'template_1e0ja7l',
        formRef.current,
        'GQhEF6oBPCG2WErx3'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='c'>
      <div className='cBg'></div>
      <div className='cWrap'>
        <div className='cLeft'>
          <h1 className='cTitle'>Let's discuss your project</h1>
          <div className='cInfo'>
            <div className='cInfoItem'>
              <img src={Phone} alt='' className='cIcon' /> +2348132163481
            </div>

            <div className='cInfoItem'>
              <img src={Mail} alt='' className='cIcon' />{' '}
              peterolatunji1@gmail.com
            </div>
            <div className='cInfoItem'>
              <img src={Address} alt='' className='cIcon' /> Ilorin Nigeria
            </div>
          </div>
        </div>
        <div className='cRight'>
          <p className='cDesc'>
            <b>What's your story?</b> Get in touch.Always available for
            freelancing if the right project comes along me
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <input
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              type='text'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              rows='7'
              style={{
                backgroundColor: darkMode && '#333',
                color: darkMode && 'white',
              }}
              placeholder='Drop your Message Here'
              name='message'
            />
            <button className='subBtn'>Submit</button>
            {done && 'Thanks for contacting us'}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
