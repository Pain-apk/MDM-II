import React from 'react'

const About = () => {
  return (
    <div className='page'>
      <section className='content-section'>
        <div className='container'>
          <h1>About Us</h1>
          <div className='content-grid'>
            <div className='content-card'>
              <h2>Our Mission</h2>
              <p>
                We are committed to providing high-quality solutions that empower
                businesses and individuals to achieve their goals. Our platform
                combines cutting-edge technology with user-friendly design.
              </p>
            </div>

            <div className='content-card'>
              <h2>Our Vision</h2>
              <p>
                To create a world where technology is accessible to everyone,
                enabling innovation and growth across all industries. We believe
                in the power of collaboration and continuous improvement.
              </p>
            </div>

            <div className='content-card'>
              <h2>Our Values</h2>
              <p>
                Integrity, innovation, and customer focus guide everything we do.
                We are dedicated to delivering excellence and building lasting
                relationships with our users and partners.
              </p>
            </div>

            <div className='content-card'>
              <h2>Our Team</h2>
              <p>
                Our talented team consists of experienced professionals from
                various backgrounds, united by a passion for creating exceptional
                products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
