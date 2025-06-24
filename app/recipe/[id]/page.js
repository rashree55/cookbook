import Image from "next/image";
import React from "react";
import recipes from '../../../data/recipes.json';

export default async function RecipePage({ params }) {
  const recipe = recipes.find(
    (r) => r.id.toString() === params.id.toString()
  );

  if (!recipe) {
    return <div className="text-center mt-10 text-red-500">Recipe not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">
        Prep: {recipe.prepTime} | Cook: {recipe.cookTime} | Servings: {recipe.servings}
      </p>

      {recipe.image && (
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={600}
          height={400}
          className="rounded-lg shadow-md mb-6 object-cover"
        />
      )}

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
