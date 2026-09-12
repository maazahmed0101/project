import React from "react";
import './contact.css'
import ContactForm from './ContactForm'
function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 img-fluid">
            <img
              className="img-fluid imgforcontact"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaU8ACbVaEEGsFOHVnio0BaPOx7ziyFY_PPbXu6Necw&s=10"
              alt="img contact"
            />
          </div>
          <div className="col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
