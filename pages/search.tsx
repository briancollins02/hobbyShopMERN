import AddToCartWrapper from "@/components/AddToCartWrapper"
import { Products } from "@/lib/dummy-data"
export const getServerSideProps = () => {
    return {
        props:{
            products:Products
        }
    }
}
const Page = (props:any) => {
    const renderProductsPreview = () => {
        return props.products.map((product:any)=>{
            // key prop and generic props
            return <AddToCartWrapper key={product.id} product={product}/>
        })
    }
    return (
        <div>
            <h1>Our Collections</h1>
            <div>
                {renderProductsPreview()}
            </div>
        </div>
    )
}

export default Page