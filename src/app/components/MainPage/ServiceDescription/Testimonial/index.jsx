"use client";

import React, { useState, useEffect } from "react";
import { comments } from "../../../../extra/JsonFile/JsonFile";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentIndex === comments.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(comments.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleImageError = (event) => {
    event.target.src =
      "https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/qqwYxlIFK9HiYbgQj1uWjvT11UgYs3IsCj5gD3dc.jpeg";
  };

  return (
    <div className="bg-slate-300">
      <div className="relative  overflow-hidden w-[70%] mx-auto ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex-none w-full px-4 md:px-8 lg:px-12 py-16"
            >
              <div className="backgroundColorMain rounded-lg p-6 md:p-8 lg:p-10">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={comment.imageSrc}
                    className="w-12 h-12 rounded-full"
                    onError={handleImageError}
                    alt="Testimonial Avatar"
                  />
                </div>
                <p className="text-white text-center mb-6">
                  {comment.comments}
                </p>
                <div className="text-white text-center">
                  <h3 className="font-bold">{comment.name}</h3>
                  <p>{comment.customer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <img
         className="filter brightness-50 contrast-150" 

       src="https://www.haldirams.com/media/catalog/tmp/category/Sweets.jpg" alt="img" />

    </div>
  );
};

export default Testimonial;
