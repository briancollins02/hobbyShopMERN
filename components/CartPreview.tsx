import { useContext } from "react"
import { UserContext } from "@/lib/client-context"
const CartPreview = (props:any) => {
    const { user, setUser } = useContext(UserContext);
    
    const handleCartPreview = () => {
        props.setCartPreview(false);
    } 
    
    const renderProducts = () => {
        if (user && user.cart) {
            return user.cart.map((product:any)=>{
                // make into its own component
                return (
                    <div key={product.id}>
                        <h5>
                            {product.name}
                        </h5>
                    </div>
                )
            })
        }
    } 
    return (
        <div className = "cart-preview">
            <div className = "cart-preview-inner">
                {renderProducts()}
                <button onClick = {handleCartPreview}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default CartPreview