import AddProduct from "@/components/AddProduct"
import { useState } from "react"
import ProductPreview from "@/components/ProductPreview"
import graphqlClient from "@/lib/graphql-client";
import gql from "graphql-tag";
import UpdateProductWrapper from "@/components/UpdateProductWrapper";
export const getServerSideProps = async () => {
    const query = gql`
        query Query {
            products {
                description
                id
                images
                name
                price
                quantity
                stripe_product_id
                stripe_product_price_id
            }
        }
    `
    try {
        const data = await graphqlClient.request(query);
        return {
            props: {
                products: data.products
            }
        }
    }
    catch (err) {
        console.log(err);
        return {
            props: {
                products: []
            }
        }
    }
}
const Page = (props:any) => {
    const [products, setProducts] = useState(props.products);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const handleShowAddProduct = () => {
        setShowAddProduct(true) 
    }
    const renderProductsPreview = () => {
        return products.reverse().map((product:any)=>{
            // key prop and generic props
            return <UpdateProductWrapper key={product.id} product={product}/>
        })
    }
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <button onClick = {handleShowAddProduct}>
                    Add Product
                </button >
                {showAddProduct && <AddProduct/>}
            </div>
            <div>
                {renderProductsPreview()}
            </div>
        </div>
    )      
}
export default Page