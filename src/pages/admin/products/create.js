import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import useAuth from "../../../../hooks/auth";

export default function createProduct() {
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
            Authorization: `Bearer ${token}`
          },
        })
      

      const data = await response.json();
      console.log("Product created", data);
    } catch (error) {
      console.log("Error", error);
      alert("An error occured while creating the product");
    }
  }


  return (
    <>
      <NavBar />
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input type="text" placeholder="A product" name="name" />
        <input type="text" placeholder="A useful product" name="description" />
        <input type="number" placeholder="The price" name="price" />
        <input type="text" placeholder="category" name="category" />
        <input type="number" placeholder="stock count" name="stock" />

        <Button label="Create Product" />
      </form>
      <Footer />
    </>
  );
}
