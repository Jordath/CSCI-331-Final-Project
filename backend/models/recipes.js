import mongoose from 'mongoose';

const recipesSchema = mongoose.Schema({
    recipeName: String,
    ingredients: [String]
});

const recipes = mongoose.model('recipes', recipesSchema);

export default recipes;
 