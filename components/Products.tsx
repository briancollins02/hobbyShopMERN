import type { ReactNode } from "react"
interface Props {
    children?:ReactNode
}
const Products = (props:Props) => {
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default Products;