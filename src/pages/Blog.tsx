import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../layouts/MainLayout';

const Blog: React.FC = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>Blog - Arthur Hemmer</title>
        <meta name="description" content="Thoughts and essays on Artificial Intelligence, Neurosymbolic AI, and Software Engineering." />
        <link rel="canonical" href="https://arthurhemmer.com/blog" />
      </Helmet>
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog Posts</h1>
          
          <div className="space-y-12">
              <article className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">On the Duality of Intelligence</h2>
                  <div className="flex items-center space-x-4 text-base text-gray-500">
                      <span>August 14, 2023</span>
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">Neuro-Symbolic AI</span>
                      <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">AI</span>
                  </div>
                  <p className="text-lg text-gray-600">
                      "All models are wrong, but some are useful" goes the saying from George Box. I often find this saying best illustrated by the short story from Jorge Luis Borges. In the story, the ruler is eager to get a map of the empire...
                  </p>
                  <Link to="/posts/duality-of-intelligence" className="text-lg text-blue-500 hover:text-blue-700 inline-flex items-center">
                      Read more 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                  </Link>
              </article>
          </div>
      </div>
    </MainLayout>
  );
};

export default Blog;

