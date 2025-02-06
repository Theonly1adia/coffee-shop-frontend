import ProductCard from './ProductCard';

const meta = {
  component: ProductCard,
};

export default meta;

export const Default = {
  args: {
    product: {
      "name": "Muffin",
      "description": "A small, sweet baked good that is typically made with ingredients such as flour, sugar, eggs, and butter.",
      "price": 2.5,
      "category": "Food",
      "stock": 6,
      "imageUrl": "/sample-images/muffin.jpg",
      "_id": 3
    }
  }
};