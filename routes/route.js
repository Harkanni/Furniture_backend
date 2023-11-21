import express from 'express';
import { createProduct, getAllProducts, getProduct, searcProduct, } from '../controllers/productControllers.js';

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.get('/search/:key', searcProduct)
router.post('/', createProduct)

export default router;