import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Header = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Header;