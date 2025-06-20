'use client';
import React, { Component } from "react";

export class Page extends Component {
  render() {
    return (
      <div>
        {/* Tailwind CSS should be included in your index.html or imported in your project */}
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src="https://source.unsplash.com/random/300x300"
                alt="A random image"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Tailwind Card
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                A Beautiful Card Example
              </a>
              <p className="mt-2 text-gray-500">
                This is a simple card component styled with Tailwind CSS utility classes. You can easily customize it to fit your needs.
              </p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
