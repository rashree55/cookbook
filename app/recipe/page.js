"use client";

export default function RecipePage() {
  const recipes = [
    {
      id: 1,
      title: "Pasta",
      description: "Delicious pasta with tomato sauce",
      image: "recipe 3.png"
    },
    {
      id: 2,
      title: "Macroni",
      description: "Homemade macroni with cheese and pepperoni",
      image: "recipe 6.png"
    },
    {
      id: 3,
      title: "Cookies",
      description: "Sweet chocolate chip cookies",
      image: "cookies.png"
    },
    {
      id: 4,
      title: "Salad",
      description: "Fresh green salad with vegetables",
      image: "salad.png"
    },
    {
      id: 5,
      title: "Pancakes",
      description: "Fluffy pancakes for breakfast",
      image: "pancakes.png"
    },
    {
      id: 6,
      title: "Sandwich",
      description: "Simple sandwich with ham and cheese",
      image: "sandwich.png"
    }
  ];

  const viewRecipe = (recipeName) => {
    alert(`You clicked on ${recipeName}!`);
  };

  return (
    <main> 
    <div>
      <h2 className="text-2xl font-semibold mb-4">Our Recipes</h2>
      <p>Explore a wide range of tasty dishes.</p>
    </div>


    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        My Recipes
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '10px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {recipes.map(recipe => (
          <div key={recipe.id} style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '90px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={{
                width: '200%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '10px'
              }}
            />
            <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
              {recipe.title}
            </h3>
            <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>
              {recipe.description}
            </p>
            <button
              onClick={() => viewRecipe(recipe.title)}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
    </main> 
  );
}
