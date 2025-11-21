"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // Filters
  const [healthyOnly, setHealthyOnly] = useState(false);
  const [type, setType] = useState("all"); // all / veg / non-veg
  const [maxCalories, setMaxCalories] = useState(2000);

  // Fetch from Supabase
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const { data, error } = await supabase.from("recipes").select("*");
    if (!error) {
      setRecipes(data);
      setFiltered(data);
    }
  };

  // Apply filters
  useEffect(() => {
    let result = [...recipes];

    if (healthyOnly) {
      result = result.filter((r) => r.is_healthy === true);
    }

    if (type !== "all") {
      result = result.filter((r) => r.type === type);
    }

    result = result.filter((r) => r.calories <= maxCalories);

    setFiltered(result);
  }, [healthyOnly, type, maxCalories, recipes]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Recipes</h1>

      {/* FILTER SECTION */}
      <div className="p-4 bg-gray-100 rounded-lg mb-8 flex flex-col gap-4">

        {/* Healthy Filter */}
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={healthyOnly}
            onChange={(e) => setHealthyOnly(e.target.checked)}
          />
          <span>Show Healthy Only</span>
        </label>

        {/* Veg / Non-Veg Filter */}
        <select
          className="p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>

        {/* Calorie Slider */}
        <div>
          <label className="block font-medium mb-1">
            Max Calories: {maxCalories}
          </label>
          <input
            type="range"
            min="100"
            max="2000"
            value={maxCalories}
            onChange={(e) => setMaxCalories(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* RECIPE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.length === 0 && (
          <p className="text-gray-500">No recipes match your filters.</p>
        )}

        {filtered.map((recipe) => (
          <div
            key={recipe.id}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            {recipe.image_url && (
              <Image
                src={recipe.image_url}
                alt={recipe.title}
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
            )}

            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>

              <p className="text-gray-700 mt-2">{recipe.description}</p>

              <div className="mt-3 text-sm text-gray-600">
                <p>Calories: {recipe.calories}</p>
                <p>Type: {recipe.type}</p>
                {recipe.is_healthy && (
                  <p className="text-green-600 font-semibold">Healthy ✓</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
