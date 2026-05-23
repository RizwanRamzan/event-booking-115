import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content" style={{ justifyContent: "center" }}>
                <span className="footer__brand">
                    &copy; {new Date().getFullYear()} event-booking
                </span>
            </div>
        </footer>
    );
}

export default Footer