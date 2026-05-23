import DoctorCard from "../../../Components/DoctorCard";
import "./home.css";

function Home() {


    const doctorList = JSON.parse(localStorage.getItem("doctorList"))

    return (
        <>
       

        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Effortless Event Booking
                </h1>
                <p className="hero-desc">
                    Discover, book, and manage your events easily with <span className="hero-span">event-booking</span>.
                    Simplifying event organization for everyone – from concerts and conferences to meetups and workshops.
                </p>
                <a
                    href="/about"
                    className="hero-btn"
                >
                    Learn More
                </a>
            </div>
            <div className="hero-svg-wrapper">
                {/* Decorative SVG vector */}
                <svg
                    className="hero-svg"
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


        {/* Available Doctors */}
        <div className="available-doctors-container" >
            <h1 className="title" > 
                Available Doctors
            </h1>
            <div className="doctor-cards" >
                {
                    doctorList.map((item)=>{
                        return(
                            <DoctorCard data={item} />
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Home