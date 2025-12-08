import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi👋</h1>
              <p className="text-lg text-gray-800">
                  Welcome to my personal site! Here, you'll find a brief overview of my background and research interests. Feel free to explore my blog posts to see what's currently on my mind.
              </p>
          </div>
          
          <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Research Interests</h2>
              <p className="text-lg text-gray-800">
                  I'm working on my PhD at L3i, La Rochelle Université, in partnership with Shift Technology. My research focuses on using machine learning to analyze administrative documents like invoices, quotes, and medical certificates. I specialize in document information extraction and optical character recognition. By combining neural networks with symbolic reasoning in a Neuro-Symbolic approach, I aim to improve data efficiency, explainability, and performance over traditional methods.
              </p>
          </div>

          <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Background</h2>
              <p className="text-lg text-gray-800">
                  I earned my Bachelor's degree in Computer Science from Utrecht University in the Netherlands. Afterward, I completed a Master's in Data Science and Business Analytics at CentraleSupélec and ESSEC in Paris, France. I began my career as a data scientist at Shift Technology, working on insurance fraud detection. Three years in, I joined Shift's research team as a Machine Learning Research Engineer, embarking on a PhD collaboration with La Rochelle Université focused on document analysis.
              </p>
          </div>

          <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Other Interests</h2>
              <p className="text-lg text-gray-800">
                  Before and during my studies, I developed iOS apps in Objective-C and Swift. In 2013, I received an Apple WWDC Scholarship, sparking a deep interest in the Apple ecosystem that continues to this day.
              </p>
          </div>

          <p className="text-lg text-gray-800 italic">
              Thanks for visiting! Don't hesitate to get in touch if you have any questions about my work or anything else.
          </p>
      </div>
    </MainLayout>
  );
};

export default Home;

