// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This app brings you curated recipes from around the world. Discover delicious meals 
            that fit your lifestyle, from quick weeknight dinners to healthy options and sweet treats.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden">
              <img 
                src="sandwich.png" 
                alt="Quick Meals" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">🍝 Quick Meals</h3>
              <p className="text-gray-600">Ready in 30 minutes or less.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden">
              <img 
                src="salad.png" 
                alt="Healthy Recipes" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">🥗 Healthy Recipes</h3>
              <p className="text-gray-600">Nutritious and vegetarian-friendly.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden">
              <img 
                src="cookies.png" 
                alt="Desserts" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">🍰 Desserts</h3>
              <p className="text-gray-600">Sweet treats for every mood.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="overflow-hidden">
              <img 
                src="recipe 4.png" 
                alt="Budget Meals" 
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">💰 Budget Recipes</h3>
              <p className="text-gray-600">Delicious and affordable meals.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Recipes?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="p-4">
              <div className="text-4xl mb-3">👨‍🍳</div>
              <h4 className="text-lg font-semibold mb-2">Expert Curated</h4>
              <p className="text-gray-600">Every recipe is carefully selected and tested by our culinary experts.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-lg font-semibold mb-2">Global Flavors</h4>
              <p className="text-gray-600">Discover authentic dishes from cuisines around the world.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl mb-3">⭐</div>
              <h4 className="text-lg font-semibold mb-2">Easy to Follow</h4>
              <p className="text-gray-600">Step-by-step instructions make cooking enjoyable for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}