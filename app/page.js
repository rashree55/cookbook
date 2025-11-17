'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      <div className="bg-blue-100 p-3 rounded-t-lg">
        <h2 className="text-4xl font-semibold mb-6 mt-5">
          Adventure of <span className="text-blue-500">Delicacies</span>
        </h2>

        <p className="max-w-md text-base mb-1 text-gray-600">
          Discover, create and share your favorite recipes with food lovers from around the world!
        </p>
      </div>

      <div className="bg-blue-100 p-3 rounded-b-lg">
        <Link href="/signup">
          <button className="text-white mb-8 ml-2 mt-2 px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition">
            Get Started
          </button>
        </Link>
      </div>

      <div className="ml-2 mt-5">
        <p className="text-1xl font-bold text-blue-500 mb-1">Who we are</p>

        <h3 className="text-2xl font-bold text-black mb-1">
          Key Features of RecipeNest
        </h3>

        <p className="text-gray-500 max-w-lg">
          We connect food lovers by providing a platform to discover, create and share delicious recipes from around the world.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-5">

        <div className="flex flex-col items-center max-w-[250px]">
          <Image
            src="/recipe 7.png"
            alt="Discover New Recipes"
            width={240}
            height={200}
            className="rounded-lg shadow-lg transition hover:scale-105"
          />
          <p className="mt-2 text-center text-gray-700 text-md">
            Discover New Recipes
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[250px]">
          <Image
            src="/recipe 6.png"
            alt="Join a Thriving Community"
            width={240}
            height={220}
            className="rounded-lg shadow-lg transition hover:scale-105"
          />
          <p className="mt-3 text-center text-gray-700 text-md">
            Join a Thriving Community
          </p>
        </div>

        <div className="flex flex-col items-center max-w-[250px]">
          <Image
            src="/recipe 4.png"
            alt="Create & Share Your Own Recipes"
            width={240}
            height={200}
            className="rounded-lg shadow-lg transition hover:scale-105"
          />
          <p className="mt-3 text-center text-gray-700 text-md">
            Create & Share Your Own Recipes
          </p>
        </div>

      </div>

    </main>
  );
}
