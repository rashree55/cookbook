"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AddRecipePage() {
  const router = useRouter();

  // FORM STATE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [type, setType] = useState("veg");
  const [isHealthy, setIsHealthy] = useState(false);
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ADD INGREDIENT INPUT FIELD
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const updateIngredient = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  // ADD STEP INPUT FIELD
  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const updateStep = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  // MAIN SUBMIT FUNCTION
  const handleSubmit = async () => {
    if (!title || !description || !calories) {
      setMessage("Please fill all required fields.");
      return;
    }

    setLoading(true);

    let imageUrl = null;
    if (imageFile) {
      const fileName = `${Date.now()}-${imageFile.name}`;

      const { data, error } = await supabase.storage
        .from("recipe-images")
        .upload(fileName, imageFile);

      if (error) {
        setMessage("Image upload failed.");
        setLoading(false);
        return;
      }

      imageUrl = supabase.storage
        .from("recipe-images")
        .getPublicUrl(fileName).data.publicUrl;
    }

    const { error: insertError } = await supabase.from("recipes").insert({
      title,
      description,
      calories: parseInt(calories),
      type,
      is_healthy: isHealthy,
      ingredients,
      steps,
      image_url: imageUrl,
    });

    if (insertError) {
      setMessage("Error saving recipe.");
      setLoading(false);
      return;
    }

    setMessage("Recipe added successfully!");
    router.push("/recipe");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Add New Recipe</h2>

      {/* Title */}
      <input
        className="w-full p-3 border rounded mb-4"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description */}
      <textarea
        className="w-full p-3 border rounded mb-4"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Calories */}
      <input
        className="w-full p-3 border rounded mb-4"
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      {/* Veg / Non-Veg */}
      <select
        className="w-full p-3 border rounded mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
      </select>

      {/* Healthy Toggle */}
      <label className="flex items-center space-x-3 mb-4">
        <input
          type="checkbox"
          checked={isHealthy}
          onChange={(e) => setIsHealthy(e.target.checked)}
        />
        <span>Healthy Recipe</span>
      </label>

      {/* Ingredients */}
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      {ingredients.map((ing, index) => (
        <input
          key={index}
          className="w-full p-2 border rounded mb-2"
          value={ing}
          placeholder={`Ingredient ${index + 1}`}
          onChange={(e) => updateIngredient(index, e.target.value)}
        />
      ))}
      <button
        onClick={addIngredient}
        className="bg-gray-200 px-4 py-2 rounded mb-4"
      >
        + Add Ingredient
      </button>

      {/* Steps */}
      <h3 className="text-xl font-semibold mb-2">Steps</h3>
      {steps.map((step, index) => (
        <textarea
          key={index}
          className="w-full p-2 border rounded mb-2"
          value={step}
          placeholder={`Step ${index + 1}`}
          onChange={(e) => updateStep(index, e.target.value)}
        />
      ))}
      <button
        onClick={addStep}
        className="bg-gray-200 px-4 py-2 rounded mb-4"
      >
        + Add Step
      </button>

      {/* Image Upload */}
      <input
        type="file"
        className="mb-4"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-5 py-3 rounded w-full"
        disabled={loading}
      >
        {loading ? "Saving..." : "Add Recipe"}
      </button>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}
