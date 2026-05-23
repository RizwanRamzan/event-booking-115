import React from 'react'
import "./doctorCard.css"

const DoctorCard = ({data}) => {
    return (
        <div className="single-card" >
            <img src="./woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
            <h2>{data?.name}</h2>
            <p className="card-speciality" >
            {data?.specialty}
            </p>
            <p className="card-tag-line" >
                {data?.address}
            </p>

            <div style={{ textAlign: "center" }} >
                <button>
                    + Book Appointment
                </button>
            </div>
        </div>
    )
}

export default DoctorCard