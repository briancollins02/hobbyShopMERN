import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Navigation = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Navigation;