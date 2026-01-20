import React from 'react'

const Home = () => {
  return (
    <div className='page'>
      <section className='hero'>
        <div className='hero-content'>
          <h1 className='hero-title'>Welcome to Our Platform</h1>
          <p className='hero-subtitle'>Build something amazing today</p>
        </div>
      </section>

      <section className='form-section'>
        <div className='container'>
          <h2>Get Started Today</h2>
          <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Enter your name'
                className='form-input'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Enter your email'
                className='form-input'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
