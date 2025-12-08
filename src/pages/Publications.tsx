import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Publications: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-white rounded-xl shadow-sm p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Publications</h1>
          
          <div className="space-y-10">
              {/* ConfBERT Publication */}
              <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">Confidence-Aware Document OCR Error Detection</h2>
                  <p className="text-lg text-gray-700">Arthur Hemmer, Mickaël Coustaty, Nicola Bartolo, Jean-Marc Ogier</p>
                  <p className="text-base italic text-gray-500">Document Analysis Systems: 16th IAPR International Workshop, DAS 2024</p>
                  <p className="text-base text-gray-600 mt-3">
                      Optical Character Recognition (OCR) continues to face accuracy challenges that impact subsequent applications. To address these errors, we explore the utility of OCR confidence scores for enhancing post-OCR error detection. Our study involves analyzing the correlation between confidence scores and error rates across different OCR systems. We develop ConfBERT, a BERT-based model that incorporates OCR confidence scores into token embeddings and offers an optional pre-training phase for noise adjustment. Our experimental results demonstrate that integrating OCR confidence scores can enhance error detection capabilities. This work underscores the importance of OCR confidence scores in improving detection accuracy and reveals substantial disparities in performance between commercial and open-source OCR technologies.
                  </p>
                  <div className="flex flex-wrap space-x-4 mt-3 items-center">
                      <div className="flex items-center space-x-2">
                          <audio controls className="h-8 w-48 [&::-webkit-media-controls-panel]:bg-gray-100 [&::-webkit-media-controls-panel]:hover:bg-gray-200 rounded">
                              <source src="/deepdives/confbert.wav" type="audio/wav" />
                              Your browser does not support the audio element.
                          </audio>
                      </div>
                      <a href="https://link.springer.com/chapter/10.1007/978-3-031-70442-0_13" 
                         className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          </svg>
                          <span>Springer</span>
                      </a>
                      <a href="https://arxiv.org/abs/2409.04117" 
                         className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <img src="/images/arxiv-logomark-small.svg" 
                               className="w-5 h-5 mr-1 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(80%)_saturate(1000%)_hue-rotate(194deg)_brightness(101%)_contrast(101%)]" 
                               alt="arXiv logo"/>
                          <span>arXiv</span>
                      </a>
                  </div>
              </div>

              {/* Lazy-k Publication */}
              <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">Lazy-k: Decoding for Constrained Information Extraction</h2>
                  <p className="text-lg text-gray-700">Arthur Hemmer, Mickaël Coustaty, Nicola Bartolo, Jérôme Brachat, Jean-Marc Ogier</p>
                  <p className="text-base italic text-gray-500">Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing, 2023</p>
                  <p className="text-base text-gray-600 mt-3">
                      We explore the possibility of improving probabilistic models in structured prediction. Specifically, we combine the models with constrained decoding approaches in the context of token classification for information extraction. The decoding methods search for constraint-satisfying label-assignments while maximizing the total probability. To do this, we evaluate several existing approaches, as well as propose a novel decoding method called Lazy-k. Our findings demonstrate that constrained decoding approaches can significantly improve the models' performances, especially when using smaller models. The Lazy-k approach allows for more flexibility between decoding time and accuracy.
                  </p>
                  <div className="flex space-x-4 mt-3">
                      <div className="flex items-center space-x-2">
                          <audio controls className="h-8 w-48 [&::-webkit-media-controls-panel]:bg-gray-100 [&::-webkit-media-controls-panel]:hover:bg-gray-200 rounded">
                              <source src="/deepdives/lazyk.wav" type="audio/wav" />
                              Your browser does not support the audio element.
                          </audio>
                      </div>
                      <a href="https://aclanthology.org/2023.emnlp-main.416" className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          </svg>
                          ACL Anthology
                      </a>
                      <a href="https://arxiv.org/abs/2312.03367" className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <img src="/images/arxiv-logomark-small.svg" className="w-5 h-5 mr-1 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(80%)_saturate(1000%)_hue-rotate(194deg)_brightness(101%)_contrast(101%)]" alt="arXiv logo"/>
                          arXiv
                      </a>
                      <a href="https://github.com/ArthurDevNL/lazyk" className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                      </a>
                  </div>
              </div>

              {/* Denoising Complexity Publication */}
              <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">Estimating Post-OCR Denoising Complexity on Numerical Texts</h2>
                  <p className="text-lg text-gray-700">Arthur Hemmer, Jérôme Brachat, Mickaël Coustaty, Jean-Marc Ogier</p>
                  <p className="text-base italic text-gray-500">Communications in Computer and Information Science, Volume 1863, 2023</p>
                  <p className="text-base text-gray-600 mt-3">
                      Post-OCR processing has significantly improved over the past few years. However, these have been primarily beneficial for texts consisting of natural, alphabetical words, as opposed to documents of numerical nature such as invoices, payslips, medical certificates, etc. To evaluate the OCR post-processing difficulty of these datasets, we propose a method to estimate the denoising complexity of a text and evaluate it on several datasets of varying nature, and show that texts of numerical nature have a significant disadvantage. We evaluate the estimated complexity ranking with respect to the error rates of modern-day denoising approaches to show the validity of our estimator.
                  </p>
                  <div className="flex space-x-4 mt-3">
                      <div className="flex items-center space-x-2">
                          <audio controls className="h-8 w-48 [&::-webkit-media-controls-panel]:bg-gray-100 [&::-webkit-media-controls-panel]:hover:bg-gray-200 rounded">
                              <source src="/deepdives/denoising.wav" type="audio/wav" />
                              Your browser does not support the audio element.
                          </audio>
                      </div>
                      <a href="https://link.springer.com/chapter/10.1007/978-3-031-42430-4_6" className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                          </svg>
                          Springer
                      </a>
                      <a href="https://arxiv.org/abs/2307.01020" className="text-blue-500 hover:text-blue-700 text-base inline-flex items-center" target="_blank" rel="noopener noreferrer">
                          <img src="/images/arxiv-logomark-small.svg" className="w-5 h-5 mr-1 [filter:brightness(0)_saturate(100%)_invert(48%)_sepia(80%)_saturate(1000%)_hue-rotate(194deg)_brightness(101%)_contrast(101%)]" alt="arXiv logo"/>
                          arXiv
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </MainLayout>
  );
};

export default Publications;

