"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const allRecipes = [
    {
      id: "1",
      title: "Pancakes",
      description: "Fluffy pancakes for breakfast",
      image: "pancakes.png"
    },
    {
      id: "2",
      title: "Spaghetti Aglio",
      description: "Homemade Spaghetti Aglio with cheese and pepperoni",
      image: "recipe 6.png"
    },
    {
      id: "3",
      title: "Cookies",
      description: "Sweet chocolate chip cookies",
      image: "cookies.png"
    },
    {
      id: "4",
      title: "Salad",
      description: "Fresh green salad with vegetables",
      image: "salad.png"
    },
    {
      id: "5",
      title: "Waffels",
      description: "Fluffy pancakes for breakfast",
      image: "waffel.png"
    },
    {
      id: "6",
      title: "Sandwich",
      description: "Simple sandwich with ham and cheese",
      image: "sandwich.png"
    }
  ];

  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allRecipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchQuery) ||
          recipe.description.toLowerCase().includes(searchQuery)
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(allRecipes);
    }
  }, [searchQuery]);

  return (
    <main>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Recipes</h2>
        <p>Explore a wide range of tasty dishes.</p>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "30px"
          }}
        >
          My Recipes
        </h1>

        {searchQuery && (
          <p
            style={{
              textAlign: "center",
              color: "#888",
              marginBottom: "10px"
            }}
          >
            Showing results for: <strong>{searchQuery}</strong>
          </p>
        )}

        {filteredRecipes.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "10px",
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                />
                <h3
                  style={{
                    margin: "0 0 8px 0",
                    color: "#333"
                  }}
                >
                  {recipe.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 15px 0",
                    color: "#666",
                    fontSize: "14px"
                  }}
                >
                  {recipe.description}
                </p>

                <Link href={`/recipe/${recipe.id}`}>
                  <button
                    style={{
                      backgroundColor: "#007bff",
                      color: "white",
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "14px"
                    }}
                  >
                    View Recipe
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            No recipe found.
          </p>
        )}
      </div>
    </main>
  );
}
