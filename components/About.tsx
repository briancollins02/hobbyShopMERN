import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const About = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default About;