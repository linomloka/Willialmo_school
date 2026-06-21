import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './css files/Contact.module.css';

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend email service in Phase 3
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h1>
          {language === "EN" ? "Contact Us" : "Wasiliana Nasi"}
        </h1>
        <p>
          {language === "EN"
            ? "We'd love to hear from you! Reach out with any questions or inquiries."
            : "Tungetaka kusikia kutoka kwako! Wasiliana nasi na maswali yoyote au malalamiko."}
        </p>
      </div>

      <div className={styles.contactContent}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <h2>{language === "EN" ? "Get in Touch" : "Wasiliana"}</h2>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📍</span>
            </div>
            <div className={styles.infoContent}>
              <h3>{language === "EN" ? "Location" : "Mahali"}</h3>
              <p>Willialmo School</p>
              <p>{language === "EN" ? "City/Region, Tanzania" : "Jiji/Mkoa, Tanzania"}</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📞</span>
            </div>
            <div className={styles.infoContent}>
              <h3>{language === "EN" ? "Phone" : "Simu"}</h3>
              <p>+255 747 945 986</p>
              <p>{language === "EN" ? "Monday - Friday: 8:00 AM - 4:00 PM" : "Jumatatu - Ijumaa: 8:00 AM - 4:00 PM"}</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>✉️</span>
            </div>
            <div className={styles.infoContent}>
              <h3>{language === "EN" ? "Email" : "Barua Pepe"}</h3>
              <p>linoxmloka@gmail.com</p>
              <p>{language === "EN" ? "Response within 24 hours" : "Jibu ndani ya saa 24"}</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>⏰</span>
            </div>
            <div className={styles.infoContent}>
              <h3>{language === "EN" ? "Office Hours" : "Saa za Ofisi"}</h3>
              <p>{language === "EN" ? "Monday - Friday: 8:00 AM - 5:00 PM" : "Jumatatu - Ijumaa: 8:00 AM - 5:00 PM"}</p>
              <p>{language === "EN" ? "Saturday: 9:00 AM - 1:00 PM" : "Jumamosi: 9:00 AM - 1:00 PM"}</p>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className={styles.quickContact}>
            <h3>{language === "EN" ? "Quick Contact" : "Haraka Wasiliana"}</h3>
            <a 
              href="https://wa.me/255747945986" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              {language === "EN" ? "💬 WhatsApp" : "💬 WhatsApp"}
            </a>
            <a 
              href="tel:+255747945986" 
              className={styles.callBtn}
            >
              {language === "EN" ? "📞 Call" : "📞 Piga"}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <h2>
            {language === "EN" ? "Send us a Message" : "Tume Ujumbe"}
          </h2>

          {submitted && (
            <div className={styles.successMessage}>
              {language === "EN"
                ? "✓ Thank you! We'll be in touch soon."
                : "✓ Asante! Tutawasiliana haraka."}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                {language === "EN" ? "Name" : "Jina"}
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={language === "EN" ? "Your name" : "Jina lako"}
                required
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  {language === "EN" ? "Email" : "Barua Pepe"}
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={language === "EN" ? "your@email.com" : "barua@pepe.com"}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  {language === "EN" ? "Phone" : "Simu"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={language === "EN" ? "+255 xxx xxx xxx" : "+255 xxx xxx xxx"}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">
                {language === "EN" ? "Subject" : "Somo"}
                <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={language === "EN" ? "What is this about?" : "Hii kuhusu nini?"}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                {language === "EN" ? "Message" : "Ujumbe"}
                <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={language === "EN" ? "Your message..." : "Ujumbe wako..."}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {language === "EN" ? "Send Message" : "Tuma Ujumbe"}
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className={styles.mapSection}>
        <h2>
          {language === "EN" ? "Find Us on Map" : "Tafuta Mahali Petu"}
        </h2>
        <div className={styles.mapPlaceholder}>
          <iframe
            title="Willialmo School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5463729166657!2d37.6648633!3d-6.7924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNi43OTI0Jk4gMzcu6YS3NjQwJkU!5e0!3m2!1sen!2stz!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>{language === "EN" ? "Frequently Asked Questions" : "Maswali Yenye Jibu"}</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqCard}>
            <h3>
              {language === "EN"
                ? "What are school hours?"
                : "Saa za shule ni nini?"}
            </h3>
            <p>
              {language === "EN"
                ? "School runs Monday-Friday, 8:00 AM to 3:30 PM. Breakfast is available from 7:30 AM."
                : "Shule inafanya Jumatatu-Ijumaa, 8:00 AM hadi 3:30 PM. Cha asubuhi kinapatikana kutoka 7:30 AM."}
            </p>
          </div>

          <div className={styles.faqCard}>
            <h3>
              {language === "EN"
                ? "Is there a boarding option?"
                : "Je, kuna chaguo la kuishi shuleni?"}
            </h3>
            <p>
              {language === "EN"
                ? "Currently, we are day school only. Boarding may be considered for future expansion."
                : "Kwa sasa, tunatoa elimu ya sehemu tu. Kuishi shuleni inaweza kuzingatiwa katika upanuzi wa baadaye."}
            </p>
          </div>

          <div className={styles.faqCard}>
            <h3>
              {language === "EN"
                ? "Do you offer scholarships?"
                : "Je, tunatoa beasiswa?"}
            </h3>
            <p>
              {language === "EN"
                ? "Yes, we offer merit-based and need-based scholarships. Contact admissions for details."
                : "Ndiyo, tunatoa beasiswa kulingana na ujuzi na mahitaji. Wasiliana na kuingizwa kwa maelezo."}
            </p>
          </div>

          <div className={styles.faqCard}>
            <h3>
              {language === "EN"
                ? "When is the next intake?"
                : "Wakati gani wa mlipuko ujao?"}
            </h3>
            <p>
              {language === "EN"
                ? "We accept new students at the beginning of each term. Contact us to check availability."
                : "Tunakubali wanafunzi wapya mwanzo wa kila muhula. Wasiliana nasi kuangalia iwapo kuna nafasi."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  language: PropTypes.string.isRequired
};

export default Contact;
