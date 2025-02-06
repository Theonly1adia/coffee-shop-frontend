import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import useAuth from "../../../../hooks/auth";
import Link from "next/link";

export default function CreateProduct() {
  const { token, isAuthenticated } = useAuth();
  console.log(token);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    alert("Form submitted");

    const name = event.target.elements.name.value;
    const description = event.target.elements.description.value;
    const price = event.target.elements.price.value;
    const stock = event.target.elements.stock.value;
    const category = event.target.elements.category.value;

    const product = {
      name,
      description,
      price,
      stock,
      category,
    };
    createProduct(product);
  }

  async function createProduct(product) {
    console.table(product);

    try {
      const response = await fetch(
        "https://coffee-shop-backend-5fmn.onrender.com/api/v1/products",
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log("Product created", data);
    } catch (error) {
      console.log("Error", error);
      alert("An error occurred while creating the product");
    }
  }

  return (
    <>
      <NavBar />
      <div 
      className="flex justify-center items-center min-h-screen bg-gray-900 text-white "
      style={{ backgroundImage: "url('/beads.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="w-full max-w-3xl backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-6 bg-gray-800">

          <h2 className="text-2xl font-bold pb-5 text-center">
            Create Product
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Description
              </label>
              <input
                type="text"
                placeholder="A useful product"
                name="description"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Price</label>
              <input
                type="number"
                placeholder="The price"
                name="price"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Category</label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Stock Count
              </label>
              <input
                type="number"
                placeholder="Stock count"
                name="stock"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
              />
            </div>

            <Button label="Create Product" />

            <div className="flex items-center text-md pt-4">
              <p>View all products?</p>
              <Link
                href="/admin/products"
                className="underline cursor-pointer ml-1 text-blue-400 hover:text-blue-300"
              >
                View Products
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
