import { useFormik } from "formik";
import graphqlClient from "@/lib/graphql-client";
import gql from "graphql-tag";
import {useRouter} from "next/router";
import { useContext } from "react";
import { UserContext } from "@/lib/client-context";

const Page = () => {
    const router = useRouter()
    const userContext = useContext(UserContext);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            console.log(values)
            //TODO: connect this to an authentication service
            try {
                const loginResponse = await fetch("/api/auth", {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({email:values.email, password:values.password})
                })
                const loginData = await loginResponse.json();
                console.log(loginData);
    
                userContext.setUser(
                    {...loginData.user, cart:[]}
                )
                localStorage.setItem("authToken", loginData.authToken);
                if (loginData.user.isAdmin) {
                    router.push("/admin/dashboard");
                }
                else {
                    router.push("/search");
                }
            }
            catch (err) {
                console.log(err);
                alert("Failed to login.")
            }
        }
    });
    return (
        <div>
            <h1>Log In</h1>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label>
                            Password
                        </label>
                        <input
                            type="text"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
        //make a form, email or password, validate if admin or not.

    )
}

export default Page