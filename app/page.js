'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';


import Link from "next/link";

export default function HomePage() {
  const pathname= usePathname();
  return (
    <main>
      <div className="bg-blue-100 p-3 backdrop-opacity-45 rounded-t-lg">
      <h2 className="text-4xl font-semibold mb-6 mt-5">Adventure of <span className="text-blue-500">Delicacies</span>
      </h2>
      <p className="max-w-md text-base mb-1 text-gray-600" >Discover, create and share your favorite recipes with food lovers from around the world!</p>
    </div>

    <div className=" bg-blue-100 p-3 backdrop-blur-1 rounded-b-lg">
      <Link href="/sign-in" >
      <button className="text-black-500 text-amber-50 opacity-90 mb-8 ml-2 mt-2 p-2 px-4 py-2 w-100px bg-blue-500 rounded-full hover:bg-blue-600 transition" >
        Get Started
      </button>
      </Link>
     </div>


     <div className="ml-2"> 
      <p className="text-1xl font-bold text-blue-500 mt-5 mb-1">Who we are</p>
      <h3 className="text-2xl text-black mt-1 mb-1 font-bold">
        Key Features of RecipeNest
      </h3>
      
      {/* Browse button

      <div className="flex flex-col items-end" >
        <button className="text-white text-1xl bg-blue-500 rounded-full p-2 mt-0 " >
          Browse Recipes
        </button>
      </div>
      */}
      

      <p className="text-gray-500 max-w-180 mt-0 mb-1">
      We connect food lovers by providing a platform to discover, create and share delicious recipes from around the world</p>
    </div>

    <div className="flex flex-wrap justify-center gap-6">

        <div className="flex flex-col items-center max-w-[250px]">
          <Image
            src="/recipe 7.png"
            alt="Discover New Recipes"
            width={240}
            height={200}
            className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
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
            className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
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
            className="rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
          />
          <p className="mt-3 text-center text-gray-700 text-md">
            Create & Share Your Own Recipes
          </p>
        </div>




     
    </div>
    
    </main>
    
    
  );
}

