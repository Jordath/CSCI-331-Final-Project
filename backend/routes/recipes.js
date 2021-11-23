import express from 'express';
import { getRecipes } from '../controllers/recipes.js';
import recipes from '../models/recipes.js';

const router = express.Router();

router.get('/', getRecipes);

export default router;
