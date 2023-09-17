import React from 'react';
import '../../styles.css'

const contact = () => {
    return (
        <section id="contact" className="contact text-dark">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div>
        <iframe title="map" className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1608.014272047652!2d75.88282921730689!3d25.207609991772898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694944322696!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>117, Janakpuri colony, Kota </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:uditparihar11@gmail.com">uditparihar11@gmail.com</a></p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><a href="tel:+918949756599">8890654392</a></p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div ><button className="text-center btn btn-block btn-outline-success mt-2 mb-2" type="submit">Send Message</button></div>

          </div>

        </div>

      </div>
    </section>
    );
}

export default contact;