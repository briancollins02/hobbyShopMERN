import { useContext } from "react"
import { UserContext } from "@/lib/client-context";
import Link from "next/link" 
import {useRouter} from "next/router";
const Header = () => {
    const router = useRouter()
    const userContext = useContext(UserContext);
    console.log(userContext);
    const handleLogout = () => {
        userContext.setUser(null);
        router.push("/");
    }
    return (
        <header>
            {
                userContext && userContext.user?
                <div>
                    <p>{userContext.user.name}</p>
                    <button>
                        Cart
                        <span>{userContext.user.cart.length}</span>
                    </button>
                    <button onClick = {handleLogout}>
                        Logout
                    </button>
                </div>
                :
                <div>
                    <Link href = "/sign-up">
                        Sign Up
                    </Link>
                    <Link href = "/log-in">
                        Login
                    </Link>
                </div>
            }
        </header>
    )
}
export default Header;