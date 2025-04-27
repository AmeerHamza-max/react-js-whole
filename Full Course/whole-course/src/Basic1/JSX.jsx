// JSX allows us to write HTML in React.JSX makes it eaiser to write and add HTML in react.
import React from 'react'


const JSX = () => {
  return (
    <div>
      <section id='section'>
        <form >
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter your name' />
        </form>
        <h1>My website</h1>
        <article>
            <h2>Welcome to react</h2>
            <p className='text'>Paragraph content</p>
        </article>
      </section>
    </div>
  )
}

export default JSX
