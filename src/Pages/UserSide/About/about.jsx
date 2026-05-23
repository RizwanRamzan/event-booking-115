import "./about.css";

function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">
                    About Us
                </h1>
                <p className="about-desc">
                    Welcome to <span className="about-span">event-booking</span>!
                    <br /><br />
                    Our platform is dedicated to making event discovery and booking simple, fast, and effective for everyone. Whether you’re planning a large conference, small meetup, or just looking for something fun to do, we’re here to connect you with events and help you manage your bookings seamlessly.
                    <br /><br />
                    With a focus on usability and reliability, <span className="about-span">event-booking</span> aims to streamline the event experience for both organizers and attendees. We’re passionate about building community and bringing people together through events of all kinds.
                    <br /><br />
                    Thank you for choosing us to be a part of your event journey!
                </p>
            </div>
            <div className="about-svg-wrapper">
                <svg
                    className="about-svg"
                    width="260"
                    height="260"
                    viewBox="0 0 260 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="130" cy="130" r="110" fill="#646cff" opacity="0.12" />
                    <path d="M80 200c40-60 60-100 120-70" stroke="#646cff" strokeWidth="7" fill="none"/>
                    <circle cx="208" cy="78" r="22" fill="#646cff"/>
                    {/* Event calendar icon */}
                    <rect x="90" y="60" width="80" height="60" rx="12" fill="#fff" stroke="#646cff" strokeWidth="3"/>
                    <rect x="100" y="78" width="60" height="32" rx="6" fill="#e8eaff"/>
                    <rect x="108" y="100" width="12" height="8" rx="2" fill="#646cff"/>
                    <rect x="128" y="100" width="12" height="8" rx="2" fill="#646cff"/>
                    <rect x="148" y="100" width="12" height="8" rx="2" fill="#646cff"/>
                    <rect x="108" y="88" width="12" height="8" rx="2" fill="#b6bafd"/>
                    <rect x="128" y="88" width="12" height="8" rx="2" fill="#b6bafd"/>
                    <rect x="148" y="88" width="12" height="8" rx="2" fill="#b6bafd"/>
                    <rect x="110" y="65" width="6" height="10" rx="2" fill="#646cff"/>
                    <rect x="144" y="65" width="6" height="10" rx="2" fill="#646cff"/>
                </svg>
            </div>
        </section>
    );
}

export default About