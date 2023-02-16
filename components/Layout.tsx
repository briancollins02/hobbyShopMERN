import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Layout = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Layout;