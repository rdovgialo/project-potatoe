
const recipe = {
    title : "some title", 
    description: "some description",
    prep_time: 60,
    author: 1,
    ingredients: [
        {
            ingredient_id: 1,
            amount_grams: 220,
            caloric_value: 500
        },
        {
            ingredient_id: 1,
            amount_grams: 50,
            caloric_value: 50
        }
    ],
    steps:[
        {
            index: 1,
            title: "step 1",
            content: "peal potatoes"
        },
        {
            index: 2,
            title: "step 2",
            content: "peal garlic"
        },
        {
            index: 3,
            title: "step 3",
            content: "bake potatoes with garlic"
        }
    ],
}

fetch('http://localhost:5000/api/recipe/post_new/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    }).then((err, res) => {
        if (err){
            console.log(err)
        }else{
            console.log(res);
        }
    });