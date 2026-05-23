import Footer from "./Footer/footer";
import Header from "./Header/header";
import "./layout.css";

function Layout({children}) {
    return (
        <div style={{background:"#f9fafd"}} >
            <Header/>
            <div className="layout-content" >
            {children}
            </div>
            <Footer />
        </div>



    )
}

export default Layout