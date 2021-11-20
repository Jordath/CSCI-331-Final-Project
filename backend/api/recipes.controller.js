import RecipesDAO from "../dao/recipesDAO.js"

export default class RecipesController {
    static async apiGetRecipes(req, res, next) {
        const recipesPerPage = req.query.recipesPerPage ? parseInt(req.query.recipesPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0
    
    let filters = {}
    if (req.query.recipeName) {
        filters.recipeName = req.query.recipeName
    }

    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
        filters,
        page, 
        recipesPerPage,
    })

    let response = {
        recipes: recipesList,
        page: page,
        filters: filters,
        entries_per_page: recipesPerPage,
        total_results: totalNumRecipes
    }
    res.json(response)
    }
}