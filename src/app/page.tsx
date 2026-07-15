"use client";

import type { FormEvent } from "react";

const WHATSAPP_NUMBER = "34677349714";

const INSTAGRAM_URL = "https://www.instagram.com/emotionrent/";

const MAPS_URL = "https://maps.app.goo.gl/vUgErC6mGxLB9KCd9";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Emotion%20Scooter%20%26%20Bike%20Rental%20Magaluf%20Mallorca&output=embed";

const NEXA_URL = "https://www.nexarentals.es";

const CONTACT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Emotion Scooter & Bike Rental 👋 I would like more information about renting a scooter in Mallorca."
)}`;

export default function Home() {
  function sendWhatsAppEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const customerName = String(form.get("customerName") ?? "");
    const customerPhone = String(form.get("customerPhone") ?? "");
    const pickupDate = String(form.get("pickupDate") ?? "");
    const returnDate = String(form.get("returnDate") ?? "");
    const scooters = String(form.get("scooters") ?? "");
    const scooterModel = String(form.get("scooterModel") ?? "");
    const accommodation = String(form.get("accommodation") ?? "");
    const licence = String(form.get("licence") ?? "");
    const message = String(form.get("message") ?? "");

    const whatsappMessage = `
Hello Emotion Scooter & Bike Rental 👋

I would like to request a scooter rental.

Name: ${customerName}
Phone number: ${customerPhone}
Pickup date: ${pickupDate}
Return date: ${returnDate}
Number of scooters: ${scooters}
Preferred scooter: ${scooterModel}
Hotel / accommodation: ${accommodation || "Not provided"}
Driving licence: ${licence}
Additional message: ${message || "No additional message"}

Advertised price: €40 per day.

Please confirm availability and the final rental price.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <header className="navbar">
        <div className="navbar-spacer" aria-hidden="true" />

        <nav className="desktop-navigation" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#scooters">Scooters</a>
          <a href="#location">Location</a>
          <a href="#partner">Partner</a>
        </nav>

        <div className="navbar-actions">
          <a
            className="navbar-social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            className="navbar-contact-button"
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>

          <a className="navbar-button" href="#booking">
            Book now
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <picture className="hero-picture">
            <source media="(max-width: 760px)" srcSet="/images/mbe1.png" />

            <img
              src="/images/dte1.png"
              alt="Emotion scooter rental in Mallorca"
              className="hero-image"
            />
          </picture>

          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">Scooter rental in Mallorca</p>

            <h1>
              Explore Mallorca
              <span>with complete freedom.</span>
            </h1>

            <p className="hero-description">
              Rent a comfortable and reliable scooter and discover Mallorca at
              your own pace. Easy WhatsApp booking, friendly local service and
              scooters available from €40 per day.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#booking">
                Request a scooter
                <span aria-hidden="true">→</span>
              </a>

              <a className="secondary-button" href="#scooters">
                View scooters
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>€40/day</strong>
                <span>Simple daily price</span>
              </div>

              <div>
                <strong>125cc</strong>
                <span>Automatic scooters</span>
              </div>

              <div>
                <strong>WhatsApp</strong>
                <span>Direct booking enquiry</span>
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span>Scroll to explore</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="introduction section" id="about">
          <div className="section-heading">
            <p className="section-label">Welcome to Emotion</p>

            <h2>A simple and friendly way to explore Mallorca.</h2>
          </div>

          <div className="introduction-content">
            <p>
              Emotion Scooter & Bike Rental helps visitors discover Mallorca
              independently, comfortably and without unnecessary complications.
              Our goal is to provide a personal rental service with clear
              information and direct communication.
            </p>

            <p>
              Whether you want to visit nearby beaches, explore the coast or
              move around during your holiday, our automatic 125cc scooters
              give you the freedom to enjoy more of the island.
            </p>
          </div>
        </section>

        <section className="fleet-section section" id="scooters">
          <div className="section-heading centered-heading">
            <p className="section-label">Our scooters</p>

            <h2>Choose your scooter for Mallorca.</h2>

            <p>
              Comfortable, reliable and automatic scooters available for a
              simple price of €40 per day.
            </p>
          </div>

          <div className="scooter-grid">
            <article className="scooter-card">
              <div className="scooter-image-wrapper">
                <img
                  src="/images/s1.jpg"
                  alt="Piaggio Liberty 125cc rental scooter"
                  className="scooter-card-image"
                  loading="lazy"
                />

                <span className="scooter-image-badge">125cc</span>
              </div>

              <div className="scooter-card-content">
                <div className="scooter-card-heading">
                  <div>
                    <p className="fleet-category">
                      Comfortable city scooter
                    </p>

                    <h3>Piaggio Liberty 125</h3>
                  </div>

                  <div className="scooter-price">
                    <strong>€40</strong>
                    <span>per day</span>
                  </div>
                </div>

                <p className="scooter-description">
                  The Piaggio Liberty is lightweight, comfortable and easy to
                  control. It is ideal for exploring Mallorca, visiting beaches
                  and travelling between nearby towns.
                </p>

                <div className="scooter-features">
                  <span>125cc engine</span>
                  <span>Fully automatic</span>
                  <span>Comfortable ride</span>
                  <span>Reliable and easy</span>
                </div>

                <a className="scooter-book-button" href="#booking">
                  Request this scooter
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>

            <article className="scooter-card">
              <div className="scooter-image-wrapper">
                <img
                  src="/images/s2.jpg"
                  alt="Vespa 125cc rental scooter"
                  className="scooter-card-image"
                  loading="lazy"
                />

                <span className="scooter-image-badge">125cc</span>
              </div>

              <div className="scooter-card-content">
                <div className="scooter-card-heading">
                  <div>
                    <p className="fleet-category">Classic Mallorca style</p>
                    <h3>Vespa 125</h3>
                  </div>

                  <div className="scooter-price">
                    <strong>€40</strong>
                    <span>per day</span>
                  </div>
                </div>

                <p className="scooter-description">
                  Enjoy Mallorca with the comfort and classic design of a
                  Vespa-style scooter. Perfect for couples, coastal routes,
                  beaches and relaxed island journeys.
                </p>

                <div className="scooter-features">
                  <span>125cc engine</span>
                  <span>Fully automatic</span>
                  <span>Comfortable seat</span>
                  <span>Easy to ride</span>
                </div>

                <a className="scooter-book-button" href="#booking">
                  Request this scooter
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="location-section section" id="location">
          <div className="section-heading location-section-heading">
            <p className="section-label">Our location</p>

            <h2>Find us on Google Maps.</h2>

            <p>
              Visit Emotion Scooter & Bike Rental in Mallorca. Open the
              location directly in Google Maps for directions to the rental
              point.
            </p>
          </div>

          <div className="location-card">
            <div className="location-information">
              <p className="section-label">Visit Emotion</p>

              <h2>Your Mallorca scooter adventure starts here.</h2>

              <p>
                Contact us before arriving to confirm scooter availability,
                rental dates and pickup time. Our team will reply directly
                through WhatsApp.
              </p>

              <div className="location-contact-list">
                <div>
                  <span>Location</span>
                  <strong>Magaluf, Mallorca</strong>
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>+34 677 349 714</strong>
                </div>

                <div>
                  <span>Daily rental</span>
                  <strong>From €40 per day</strong>
                </div>
              </div>

              <div className="location-actions">
                <a
                  className="dark-button"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                  <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="text-button"
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact on WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="map-embed-wrapper">
              <iframe
                src={MAP_EMBED_URL}
                title="Emotion Scooter and Bike Rental location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="partner-section section" id="partner">
          <div className="partner-card">
            <div className="partner-information">
              <p className="section-label">Official rental partner</p>

              <h2>Working together with NEXA Rentals.</h2>

              <p>
                Emotion Scooter & Bike Rental works together with NEXA Rentals,
                a local scooter rental company in Mallorca. This partnership
                helps both teams provide reliable local assistance and a better
                rental experience for visitors.
              </p>

              <a
                className="dark-button"
                href={NEXA_URL}
                target="_blank"
                rel="noreferrer"
              >
                Visit NEXA Rentals
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <a
              className="partner-logo-wrapper"
              href={NEXA_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit NEXA Rentals"
            >
              <img
                src="/images/nexa1.png"
                alt="NEXA Rentals logo"
                className="partner-logo"
                loading="lazy"
              />
            </a>
          </div>
        </section>

        <section className="booking-section" id="booking">
          <div className="booking-information">
            <p className="section-label section-label-light">
              Request your scooter
            </p>

            <h2>Tell us your rental dates.</h2>

            <p className="booking-introduction">
              Complete this short form. When you press the button, WhatsApp will
              open with your booking information already prepared and it will
              be sent directly to Emotion Scooter & Bike Rental.
            </p>

            <div className="booking-benefits">
              <div>
                <span>✓</span>

                <p>
                  <strong>No online payment</strong>
                  Send an enquiry and wait for availability confirmation.
                </p>
              </div>

              <div>
                <span>✓</span>

                <p>
                  <strong>Direct WhatsApp communication</strong>
                  Speak directly with the Emotion rental team.
                </p>
              </div>

              <div>
                <span>✓</span>

                <p>
                  <strong>Simple daily price</strong>
                  Scooters are advertised from €40 per day.
                </p>
              </div>
            </div>
          </div>

          <form className="booking-form" onSubmit={sendWhatsAppEnquiry}>
            <div className="form-heading">
              <p>Rental enquiry</p>
              <h3>Request availability</h3>
            </div>

            <div className="form-grid">
              <label className="form-field">
                <span>Full name *</span>

                <input
                  type="text"
                  name="customerName"
                  placeholder="Your full name"
                  required
                />
              </label>

              <label className="form-field">
                <span>Phone number *</span>

                <input
                  type="tel"
                  name="customerPhone"
                  placeholder="+34 600 000 000"
                  required
                />
              </label>

              <label className="form-field">
                <span>Pickup date *</span>
                <input type="date" name="pickupDate" required />
              </label>

              <label className="form-field">
                <span>Return date *</span>
                <input type="date" name="returnDate" required />
              </label>

              <label className="form-field">
                <span>Number of scooters *</span>

                <select name="scooters" defaultValue="1" required>
                  <option value="1">1 scooter</option>
                  <option value="2">2 scooters</option>
                  <option value="3">3 scooters</option>
                  <option value="4">4 scooters</option>
                  <option value="5+">5 or more scooters</option>
                </select>
              </label>

              <label className="form-field">
                <span>Preferred scooter *</span>

                <select
                  name="scooterModel"
                  defaultValue="Piaggio Liberty 125"
                  required
                >
                  <option value="Piaggio Liberty 125">
                    Piaggio Liberty 125
                  </option>

                  <option value="Vespa 125">Vespa 125</option>

                  <option value="No preference">
                    No preference — any available scooter
                  </option>
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>Hotel or accommodation</span>

                <input
                  type="text"
                  name="accommodation"
                  placeholder="Hotel name or Mallorca area"
                />
              </label>

              <label className="form-field form-field-full">
                <span>Valid driving licence *</span>

                <select name="licence" defaultValue="" required>
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes, I have a valid driving licence">
                    Yes, I have a valid driving licence
                  </option>

                  <option value="I need information about the licence requirements">
                    I need information about licence requirements
                  </option>
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>Additional message</span>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Preferred pickup time, questions or other information..."
                />
              </label>
            </div>

            <button className="submit-button" type="submit">
              Send enquiry on WhatsApp
              <span aria-hidden="true">→</span>
            </button>

            <p className="form-disclaimer">
              This is an availability request. The rental is confirmed only
              after Emotion replies through WhatsApp.
            </p>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-icon">E</span>

          <div>
            <strong>Emotion</strong>
            <p>Scooter & Bike Rental Mallorca</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#scooters">Scooters</a>
          <a href="#location">Location</a>
          <a href="#partner">Partner</a>
          <a href="#booking">Booking enquiry</a>

          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Emotion Scooter & Bike Rental. All rights
          reserved.
        </p>
      </footer>

      <a
        className="floating-whatsapp"
        href={CONTACT_WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Emotion on WhatsApp"
      >
        <span>WhatsApp</span>
        <strong>Contact</strong>
      </a>
    </>
  );
}