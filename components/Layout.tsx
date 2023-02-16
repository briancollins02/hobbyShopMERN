import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
interface Props {
    children?:ReactNode
}
const Layout = (props:Props) => {
    return (
        <div>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default Layout;