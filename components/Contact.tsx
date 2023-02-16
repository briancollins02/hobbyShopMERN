import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Contact = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Contact;