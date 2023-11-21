import ProductModel from '../models/Product.js';

export const createProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    await newProduct.save();
    res.status(200).json('product created successfully');
  } catch (err) {
    res.status(500).json('error creating product');
  }
};

export const getAllProducts = async (req, res) => {
   // console.log(req);
  try {
    const products = await ProductModel.find().sort({ createdAt: -1 });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json('failed to get all products');
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json('failed to get product');
  }
};

export const searcProduct = async (req, res) => {
  try {
    const result = await ProductModel.aggregate([
      {
        $search: {
          index: 'furniture',
          text: {
            query: req.params.key,
            path: {
              wildcard: '*'
            }
          }
        }
      }
    ]);
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json('Failed to search for products');
  }
};
