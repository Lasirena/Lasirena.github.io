export function ContactPage() {
  return (
    <section className="section-contact">
      <div className="container">
        <h1 className="display-heading">Get in touch</h1>
        <ul className="contact-col-list">
          <li className="contact-col">
            <p>
              If you'd like to discuss business opportunities or working with
              me, it's probably easiest to reach out to me via this form. I'll
              get back to you as soon as I can!
            </p>
            <p>
              Alternatively, you can send me an email, or find me on LinkedIn.
            </p>
            <p>I look forward to hearing from you!</p>
            <ul className="contact-type-list">
              <li className="contact-type">
                <a href="mailto:contact@alicehintonjones.com">
                  <svg
                    className="contact-type-svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 27.3333C12.1778 27.3333 10.4556 26.9831 8.83333 26.2827C7.21111 25.5822 5.79422 24.6267 4.58267 23.416C3.372 22.2053 2.41644 20.7889 1.716 19.1667C1.01555 17.5444 0.665777 15.8222 0.666666 14C0.666666 12.1556 1.01689 10.4276 1.71733 8.81601C2.41778 7.20445 3.37333 5.79378 4.584 4.58401C5.79467 3.37245 7.21067 2.41689 8.832 1.71734C10.4533 1.01778 12.176 0.667561 14 0.666672C15.8444 0.666672 17.5724 1.01689 19.184 1.71734C20.7956 2.41778 22.2062 3.37334 23.416 4.58401C24.6276 5.79467 25.5831 7.20578 26.2827 8.81734C26.9822 10.4289 27.3324 12.1564 27.3333 14V15.9333C27.3333 17.2444 26.8836 18.3613 25.984 19.284C25.0844 20.2067 23.9787 20.6676 22.6667 20.6667C21.8667 20.6667 21.1222 20.4889 20.4333 20.1333C19.7444 19.7778 19.1778 19.3111 18.7333 18.7333C18.1333 19.3333 17.4276 19.8058 16.616 20.1507C15.8044 20.4956 14.9324 20.6676 14 20.6667C12.1556 20.6667 10.5831 20.0164 9.28267 18.716C7.98222 17.4156 7.33244 15.8436 7.33333 14C7.33333 12.1556 7.98356 10.5831 9.284 9.28267C10.5844 7.98223 12.1564 7.33245 14 7.33334C15.8444 7.33334 17.4169 7.98356 18.7173 9.284C20.0178 10.5844 20.6676 12.1564 20.6667 14V15.9333C20.6667 16.5778 20.8667 17.0831 21.2667 17.4493C21.6667 17.8156 22.1333 17.9991 22.6667 18C23.2 18 23.6667 17.8164 24.0667 17.4493C24.4667 17.0822 24.6667 16.5769 24.6667 15.9333V14C24.6667 11.0889 23.6164 8.58312 21.516 6.48267C19.4156 4.38223 16.9102 3.33245 14 3.33334C11.0889 3.33334 8.58311 4.38356 6.48267 6.484C4.38222 8.58445 3.33244 11.0898 3.33333 14C3.33333 16.9111 4.38355 19.4169 6.484 21.5173C8.58444 23.6178 11.0898 24.6676 14 24.6667H20.6667V27.3333H14ZM14 18C15.1111 18 16.0556 17.6111 16.8333 16.8333C17.6111 16.0556 18 15.1111 18 14C18 12.8889 17.6111 11.9444 16.8333 11.1667C16.0556 10.3889 15.1111 10 14 10C12.8889 10 11.9444 10.3889 11.1667 11.1667C10.3889 11.9444 10 12.8889 10 14C10 15.1111 10.3889 16.0556 11.1667 16.8333C11.9444 17.6111 12.8889 18 14 18Z" />
                  </svg>
                </a>
              </li>
              <li className="contact-type">
                <a href="https://www.linkedin.com/in/aliceon/">
                  <svg
                    className="contact-type-svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24.4467 24.452H20.8933V18.8827C20.8933 17.5547 20.8667 15.8453 19.04 15.8453C17.188 15.8453 16.9053 17.2907 16.9053 18.7853V24.452H13.3507V13H16.764V14.56H16.8107C17.288 13.6613 18.448 12.7107 20.1813 12.7107C23.7813 12.7107 24.448 15.0813 24.448 18.1653V24.452H24.4467ZM9.33733 11.4333C9.06607 11.4337 8.79741 11.3805 8.54675 11.2768C8.29609 11.1731 8.06836 11.021 7.87661 10.8291C7.68486 10.6372 7.53287 10.4094 7.42935 10.1587C7.32582 9.90795 7.27281 9.63926 7.27333 9.368C7.2736 8.95978 7.39491 8.5608 7.62192 8.22153C7.84894 7.88225 8.17146 7.61791 8.54871 7.46194C8.92595 7.30596 9.34098 7.26536 9.74131 7.34525C10.1416 7.42515 10.5093 7.62197 10.7977 7.91081C11.0862 8.19965 11.2826 8.56755 11.3619 8.96798C11.4413 9.3684 11.4002 9.78338 11.2437 10.1604C11.0872 10.5375 10.8225 10.8597 10.4829 11.0862C10.1434 11.3128 9.74555 11.4336 9.33733 11.4333ZM11.1187 24.452H7.55467V13H11.12V24.452H11.1187ZM26.2267 4H5.772C4.79067 4 4 4.77333 4 5.72933V26.2707C4 27.2267 4.792 28 5.77067 28H26.2213C27.2 28 28 27.2267 28 26.2707V5.72933C28 4.77333 27.2 4 26.2213 4H26.2267Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
          <li className="contact-col">
            <form
              className="contact-form"
              action="https://formspree.io/f/xpzergbg"
              method="POST"
            >
              <ul className="contact-form-fields">
                <li className="contact-form-field">
                  <label htmlFor="email"> Your email: </label>
                </li>
                <li className="contact-form-field">
                  <input
                    className="contact-form-input-field"
                    type="email"
                    name="email"
                  />
                </li>
                <li className="contact-form-field">
                  <label htmlFor="subject"> Subject: </label>
                </li>
                <li className="contact-form-field">
                  <input
                    className="contact-form-input-field"
                    type="text"
                    name="subject"
                  />
                </li>
                <li className="contact-form-field">
                  <label htmlFor="message"> Your message: </label>
                </li>
                <li className="contact-form-field">
                  <textarea
                    className="contact-form-input-field"
                    name="message"
                  ></textarea>
                </li>
              </ul>
              <button type="submit" className="btn">
                <span>Submit</span>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </section>
  );
}
