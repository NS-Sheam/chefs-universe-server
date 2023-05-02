const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefData = require("./data/chefData.json");
const recipeData = require("./data/recipeData.json");

app.use(cors());


// load chef data 
app.get("/", (req, res) => {
    res.send(chefData);
})

// load chef Data 
app.get("/chef/:id", (req, res) =>{
    const id = req.params.id;
    
    const chef = chefData.filter(chef => chef.chefId == id);
    res.send(chef);
})
// load recipe Data 
app.get("/recipies/:id", (req, res) =>{
    const id = req.params.id;
    const filterRecipe = recipeData.filter(recipe => recipe.recipeId === +id);
    res.send(filterRecipe);
})


app.listen(port, () => {
    console.log(`recipe hunting is running on port ${port}`);
})