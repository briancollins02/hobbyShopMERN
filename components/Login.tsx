import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Login = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Login;