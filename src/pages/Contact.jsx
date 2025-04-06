import React from 'react'

function Contact() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md ">
        <h2 className="heading1 text-center">Contact Us</h2>
        <p className="mb-8  lg:mb-16 font-light text-center text__para1">
          Got a technical issue? Want to send feedback about a beta feature? let me know
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form__input m-1"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="let us know how we can help you"
              className="form__input m-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Your Message
            </label>
            <textarea
              rows='6' 
              type="text"
              id="message"
              placeholder="Leave your comment......"
              className="form__input m-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
