import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children}){
    return(
        <div>
            <Header></Header>
            <main style={{minHeight: '85vh' }}>
            {children}
            </main>
            <Footer></Footer>
        </div>
    )
}