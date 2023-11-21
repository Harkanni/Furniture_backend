import { Schema, model } from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const ProductSchema = new Schema({
  title: {
    type: 'string',
    required: true
  },
  supplier: {
    type: 'string',
    required: true
  },
  price: {
   type: 'string',
   required: true
  },
  product_location: {
    type: 'string',
    required: true
  },
  image_url: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  }
}, { timestamps: true });

//Export the model
const ProductModel = model('ProductModel', ProductSchema);
export default ProductModel

