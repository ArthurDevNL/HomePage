import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ExternalLink = ({ href, children, color = "indigo", className = "" }: { href: string; children: React.ReactNode, color?: "indigo" | "orange", className?: string }) => {
  const hoverColor = color === "orange" ? "hover:text-accent-orange hover:border-accent-orange" : "hover:text-accent-indigo hover:border-accent-indigo";
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`border-b border-gray-300 transition-colors duration-300 ${hoverColor} ease-in-out ${className}`}
    >
      {children}
    </a>
  );
};

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <div className={`flex flex-wrap items-center ${className}`}>
        <button 
             onClick={() => setShowEmail(!showEmail)}
             className="border-b border-gray-300 transition-colors duration-300 hover:text-accent-indigo hover:border-accent-indigo ease-in-out cursor-pointer"
        >
             Email
        </button>
        <ExternalLink href="https://www.linkedin.com/in/arthurhemmer" color="indigo">LinkedIn</ExternalLink>
        <ExternalLink href="https://github.com/ArthurDevNL" color="indigo">GitHub</ExternalLink>
      </div>
      
      <div 
          className={`
              overflow-hidden transition-all duration-500 ease-in-out font-normal text-gray-500
              ${showEmail ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
          `}
      >
          arthurhemmer [at] proton [dot] me
      </div>
    </div>
  );
}

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Helmet>
        <title>Arthur Hemmer, PhD | Applied Scientist & Neurosymbolic AI</title>
        <meta name="description" content="Arthur Hemmer is an Applied Scientist in Paris specializing in Neurosymbolic AI, bridging theoretical research with industrial-scale systems at Shift Technology." />
        <link rel="canonical" href="https://arthurhemmer.com/" />
      </Helmet>
      
      <main className="max-w-[800px] mx-auto px-6 py-16 md:py-24 space-y-20 leading-relaxed opacity-0 animate-fade-in">
        
        {/* Hero Section */}
        <header className="space-y-8">
          <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-6 flex-1">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                  Arthur Hemmer, PhD
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-500 font-normal">
                  Applied Scientist based in Paris.
                </h2>
              </div>
              <SocialLinks className="gap-4 text-sm font-medium text-gray-600" />
            </div>
            <div className="shrink-0">
               <picture>
                 <source srcSet="/images/profile.webp" type="image/webp" />
                 <img 
                   src="/images/profile.jpg" 
                   alt="Arthur Hemmer - Applied Scientist specializing in Neurosymbolic AI" 
                   width={128}
                   height={128}
                   loading="eager"
                   fetchPriority="high"
                   decoding="async"
                   className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-sm border border-gray-200"
                 />
               </picture>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            I specialize in translating AI research into reliable, production-grade systems that operate at scale.
          </p>
        </header>

        {/* Background */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
            Background
          </h3>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              I have over seven years of experience bridging the gap between theoretical research and industrial application. Currently, at <span className="font-medium text-gray-900">Shift Technology</span>, I lead technical initiatives to automate high-stakes decision-making in the insurance sector.
            </p>

            <div>
              <div className="font-bold text-gray-900 mb-2">Neurosymbolic AI at Scale</div>
              <p>
                I believe that modern AI solutions are at their best when we combine the flexibility of deep learning with the interpretability and control of neurosymbolic approaches. This hybrid strategy is essential for building systems that are robust, reliable, and verifiable in production. My work leverages deep domain knowledge to design architectures that do not just work in isolation but generalize across large-scale deployments and variety of client environments, handling the variability of real-world data without compromising quality.
              </p>
            </div>

            <div>
              <div className="font-bold text-gray-900 mb-2">The Engineering Roots</div>
              <p>
                My path to research was built on a foundation of software engineering. Long before my PhD, I was building mobile applications and running my own company. This early experience gave me a strong user-oriented mindset: I learned that the best code is the code that adds value. Because of this background, I am technology agnostic. Whether optimizing low-level backend logic or designing user-facing applications, I approach every challenge with research rigor but the pragmatism of a builder.
              </p>
            </div>
          </div>
        </section>

        {/* Public Projects */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
            Projects
          </h3>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              I believe the best way to understand a technology is to build with it. When I am not working on industrial-scale AI, I build tools to solve my own problems or release libraries as part of my research.
            </p>
            
            <ul className="space-y-6 mt-4">
              <li className="group">
                <div className="flex items-baseline gap-2">
                   <ExternalLink href="https://timestamps.video" color="orange" className="text-gray-900 font-medium">TimestampAI</ExternalLink>
                   <span className="text-xs text-gray-400 font-mono">(timestamps.video)</span>
                </div>
                <p className="text-gray-600 mt-1">
                  I built TimestampAI because I needed a better way to navigate video content. It is a tool born out of personal necessity. No over-engineering, just a solution that works.
                </p>
              </li>

              <li className="group">
                <div className="flex items-baseline gap-2">
                   <ExternalLink href="https://github.com/ArthurDevNL/lazyk" color="indigo" className="text-gray-900 font-medium">lazyk</ExternalLink>
                </div>
                <p className="text-gray-600 mt-1">
                   A C++/Python library for constrained decoding. It efficiently iterates over high-probability label assignments to help probabilistic models adhere to logical constraints.
                </p>
              </li>

              <li className="group">
                <div className="flex items-baseline gap-2">
                   <ExternalLink href="https://github.com/ArthurDevNL/transactional-documents" color="indigo" className="text-gray-900 font-medium">transactional-documents</ExternalLink>
                </div>
                <p className="text-gray-600 mt-1">
                  Code and data for "Neurosymbolic Information Extraction". A framework demonstrating how schema-based validation can guide language models to achieve higher accuracy.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Research */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
            Publications
          </h3>
          <ul className="space-y-8">
            <li className="group">
              <a href="https://link.springer.com/article/10.1007/s10032-025-00530-0" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors block">
                Neurosymbolic Information Extraction from Transactional Documents
              </a>
              <div className="text-sm text-gray-500 mb-1 font-mono">IJDAR, 2025</div>
              <div className="text-gray-700 italic">
                Combining language models with schema-based validation for state-of-the-art extraction accuracy.
              </div>
            </li>
            <li className="group">
              <a href="https://openaccess.thecvf.com/content/ICCV2025W/VisionDocs/html/Hemmer_Improved_Information_Extraction_by_Leveraging_Multi-Hypothesis_OCR_at_Inference_Time_ICCVW_2025_paper.html" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors block">
                Improved Information Extraction by Leveraging Multi-Hypothesis OCR at Inference Time
              </a>
              <div className="text-sm text-gray-500 mb-1 font-mono">ICCVW, 2025</div>
              <div className="text-gray-700 italic">
                Leveraging multiple OCR hypotheses to improve information extraction accuracy in complex OCR scenarios where extractions can be verified.
              </div>
            </li>
            <li className="group">
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-70442-0_13" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors block">
                Confidence-Aware Document OCR Error Detection
              </a>
              <div className="text-sm text-gray-500 mb-1 font-mono">DAS, 2024</div>
              <div className="text-gray-700 italic">
                Improving post-OCR error detection via alignment and integration of confidence scores into BERT-based models.
              </div>
            </li>
            <li className="group">
              <a href="https://aclanthology.org/2023.emnlp-main.416/" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors block">
                Lazy-k Decoding: Constrained Decoding for Information Extraction
              </a>
              <div className="text-sm text-gray-500 mb-1 font-mono">EMNLP, 2023</div>
              <div className="text-gray-700 italic">
                Fast constrained decoding approach for information extraction.
              </div>
            </li>
            <li className="group">
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-42430-4_6" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors block">
                Estimating Post-OCR Denoising Complexity on Numerical Texts
              </a>
              <div className="text-sm text-gray-500 mb-1 font-mono">ACIIDS, 2023</div>
              <div className="text-gray-700 italic">
                Proposed methods to estimate complexity in post-OCR denoising of numerical text data.
              </div>
            </li>
          </ul>
        </section>

        {/* Writing */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
            Writing & Thinking
          </h3>
          <ul className="space-y-4">
            <li className="group">
               <Link to="/posts/duality-of-intelligence" className="font-medium text-gray-900 text-xl hover:text-accent-indigo transition-colors border-b border-gray-200 hover:border-transparent pb-0.5">
                On the Duality of Intelligence
              </Link>
              <p className="text-gray-600 mt-1">
                Reflections on Neuro-Symbolic AI, proposal/verification mechanisms, and the limits of purely statistical models.
              </p>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-gray-200 text-gray-600 text-base md:text-lg">
          <p className="mb-6">
            Native in French, Dutch, and English. Always open to discussing the latest AI research, Neurosymbolic AI, software architecture, or the best spots in Paris.
          </p>
          <SocialLinks className="flex-wrap gap-4 md:gap-6 font-medium" />
        </footer>
      </main>
    </div>
  );
};

export default Home;
