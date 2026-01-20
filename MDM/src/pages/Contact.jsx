import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! We will contact you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className='page'>
      <section className='contact-section'>
        <div className='container'>
          <h1>Contact Us</h1>
          <p className='section-subtitle'>
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>

          <div className='contact-content'>
            <div className='contact-info'>
              <div className='info-card'>
                <h3>Email</h3>
                <p>
                  <a href='mailto:info@mdmplatform.com'>info@mdmplatform.com</a>
                </p>
              </div>

              <div className='info-card'>
                <h3>Phone</h3>
                <p>
                  <a href='tel:+1234567890'>+1 (234) 567-890</a>
                </p>
              </div>

              <div className='info-card'>
                <h3>Address</h3>
                <p>123 Tech Street, Innovation City, IC 12345</p>
              </div>

              <div className='info-card'>
                <h3>Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='contact-form'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='form-input'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='your@email.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='form-input'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='Message subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='form-input'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Your message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='form-input'
                  rows='6'
                />
              </div>

              <button type='submit' className='btn btn-primary'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
