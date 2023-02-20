import { useFormik } from "formik";
import graphqlClient from "@/lib/graphql-client";
import gql from "graphql-tag";
const UpdateModal = (props: any) => {
    const formik = useFormik({
        initialValues: {
            name: props.name || "",
            description: props.description || "",
            price: props.price || 0.99,
            quantity: props.quantity || 1,
            category: props.category || "",
            main_image: props.images[0] || ""
        },
        onSubmit: async (values) => {

            console.log(values)
            const mutation = gql`
                mutation Mutation($id: ID!, $name: String) {
                    updateProduct(id: $id, name: $name) {
                        id
                        name
    }
}
        `
            const variables = { id: props.id, ...values }
            try {
                const response = await graphqlClient.request(mutation, variables);
                console.log(response);
                alert("Successfully updated a product.")
                location.reload()
            }
            catch (err) {
                console.log(err);
                alert("Failed to update a product. Are you sure you have a unique name?")
            }
        }
    });
    const handleCloseModal = () => {
        props.setShowModal(false);
    }
    return (
        <div className="modal">
            <div className="modal-inner">
                <button onClick={handleCloseModal}>
                    Close
                </button>
                <h1>Update Product</h1>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label>
                                Image
                            </label>
                            <input
                                placeholder="Paste a link to an image."
                                type="text"
                                name="main_image"
                                value={formik.values.main_image}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label>
                                description
                            </label>
                            <textarea
                                name="description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label>
                                price
                            </label>
                            <input
                                type="number"
                                min={0.99}
                                step={0.01}
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label>
                                Quantity
                            </label>
                            <input
                                type="number"
                                min={1}
                                step={1}
                                name="quantity"
                                value={formik.values.quantity}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label>
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UpdateModal