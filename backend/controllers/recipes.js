import RecipeData from '../models/recipes.js';

export const getRecipes = async(req, res)=> {
    try {
        const allRecipes = await RecipeData.find();
        res.status(200).json(allRecipes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}