import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DualityOfIntelligence: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Helmet>
            <title>On the Duality of Intelligence - Arthur Hemmer</title>
            <meta name="description" content="Reflections on Neuro-Symbolic AI, proposal/verification mechanisms, and the limits of purely statistical models. Discussing System I and System II thinking in AI." />
            <link rel="canonical" href="https://arthurhemmer.com/posts/duality-of-intelligence" />
            
            {/* Open Graph */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content="On the Duality of Intelligence - Arthur Hemmer" />
            <meta property="og:description" content="Reflections on Neuro-Symbolic AI, proposal/verification mechanisms, and the limits of purely statistical models." />
            <meta property="og:url" content="https://arthurhemmer.com/posts/duality-of-intelligence" />
            <meta property="og:image" content="https://arthurhemmer.com/images/profile.jpg" />
            <meta property="article:published_time" content="2023-08-14" />
            <meta property="article:author" content="Arthur Hemmer" />
            <meta property="article:tag" content="Neuro-Symbolic AI" />
            <meta property="article:tag" content="AI" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="On the Duality of Intelligence - Arthur Hemmer" />
            <meta name="twitter:description" content="Reflections on Neuro-Symbolic AI, proposal/verification mechanisms, and the limits of purely statistical models." />
            <meta name="twitter:image" content="https://arthurhemmer.com/images/profile.jpg" />
            
            {/* Article Structured Data */}
            <script type="application/ld+json">{`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "On the Duality of Intelligence",
                "description": "Reflections on Neuro-Symbolic AI, proposal/verification mechanisms, and the limits of purely statistical models.",
                "author": {
                  "@type": "Person",
                  "name": "Arthur Hemmer",
                  "url": "https://arthurhemmer.com"
                },
                "datePublished": "2023-08-14",
                "image": "https://arthurhemmer.com/images/profile.jpg",
                "publisher": {
                  "@type": "Person",
                  "name": "Arthur Hemmer"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://arthurhemmer.com/posts/duality-of-intelligence"
                }
              }
            `}</script>
        </Helmet>
        <main className="max-w-[680px] mx-auto px-6 py-16 md:py-24 space-y-12 leading-relaxed opacity-0 animate-fade-in">
            {/* Header */}
            <header className="space-y-8">
                <Link 
                    to="/" 
                    className="inline-flex items-center text-gray-500 hover:text-accent-indigo transition-colors duration-300 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </Link>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 items-center text-sm">
                        <span className="text-gray-500">August 14, 2023</span>
                        <span className="text-gray-300">•</span>
                        <span className="px-2 py-0.5 bg-indigo-50 text-accent-indigo rounded-md font-medium text-xs tracking-wide uppercase">Neuro-Symbolic AI</span>
                        <span className="px-2 py-0.5 bg-indigo-50 text-accent-indigo rounded-md font-medium text-xs tracking-wide uppercase">AI</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                        On the Duality of Intelligence
                    </h1>
                </div>
            </header>

            {/* Content */}
            <article className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                    "All models are wrong, but some are useful" goes the saying from George Box. I often find this saying best illustrated by the short story from Jorge Luis Borges. In the story, the ruler is eager to get a map of the empire. Upon his servants returning to him with a map, he states that it does not contain enough detail and wants it to be bigger. Upon increasing the level of detail - and therefore also the size of the map - they return to the ruler, who requests again more detail in the map. This continues for a couple of times until the map contains so much details that it becomes the size of the empire itself. "Have you used it much?" asks the emperor. "It has never been spread out, yet," says the servant: "the farmers objected: they said it would cover the whole country, and shut out the sunlight! So we now use the country itself, as its own map, and I assure you it does nearly as well."
                </p>

                <p>
                    I think in a similar way about modern-day neural network approaches. The bigger they are the more detail they capture, so people continue to make them bigger and bigger but in the end their size will overcome their utility. What if, instead of pushing these statistical approaches to minimize their errors, requiring exponentially more compute, we assume that, just like humans, they will make errors and find another way to make them more useful?
                </p>

                <p>
                    While I don't have the literature to back up the following statement, it seems that we humans make mistakes all the time (sorry for the spoiler). However, I'm not talking about hitting-your-small-toe-on-the-corner-of-the-furniture kind of wrong every now and then. No, I mean out of every single prediction our brain makes maybe in the order of 90% or 99% are wrong. The difference is that we have ways to verify when we are wrong, adjust accordingly, and do so constantly. Since we are so used to making these adjustments, we might just not realize that we're doing it.
                </p>

                <p>
                    As such, making predictions is only one part of the equation. From what it looks like, there seems to be some kind of duality in (human) intelligence that is missing in artificial intelligence. With this "duality", I refer to 1) the mechanism that makes the predictions and 2) the mechanism that verifies the predictions by detecting incoherencies and adjusting accordingly. I have named them the proposal and the verification mechanisms respectively. The proposal mechanism can take in large amounts of noisy data and spit out useful representations/symbols. However, it is often wrong and needs to be accompanied by a verification mechanism. The verification mechanism takes the ideas of the proposal mechanism and puts them together in a way that it creates a coherent story. I'm not the only one thinking about it. An emerging field called Neuro-Symbolic AI seems to recognize this exact same duality. Neural network approaches are used as intuitive, fast, idea generating proposal mechanisms after which they are combined with symbolic approaches that verify and possibly slightly correct any predictions.
                </p>

                <p>
                    People familiar with Daniel Kahneman's 'Thinking Fast and Slow' might notice the similarities to his System I and System II thinking. In his book, Kahneman describes two different types of thinking that correspond exactly to the duality described above. System I thinking is fast, intuitive and black-box, but also often wrong and easily perturbed by changing circumstances and needs some time to readapt. System II thinking is much slower, but also more robust to noise, more accurate and more explicit. While we probably do not need to recreate all human features to achieve general artificial intelligence, it seems that the two system thinking approach contains interesting directions for AI research.
                </p>

                <p>
                    Currently it seems that the proposal mechanism (probabilistic/neural methods) is actively being researched. What isn't researched as much is the verification mechanism and the interaction between the two. While we are good at making simple verification rules ourselves, there are some fundamental verification tools or skills that we might be unaware of. For example, a fascinating concept in human development is "object permanence". When we're born, it takes us up to two years to realize that things around us are permanent, meaning that when they disappear from sight they continue to exist. (This is also the reason why peekaboo works so well with babies; when you hide and show your face it's as if it appeared out of nowhere.) What's more, once we have this figured out, we start showing signs of self-recognition and suddenly our vocabulary grows exponentially. It's a remarkable feature that is learnt only after birth and which is impossible to imagine not having. Object permanence sounds like a very useful concept, and the leaps in intelligence that result from acquiring it suggest it worthy of exploring in the context of AI.
                </p>

                <p>
                    To advance in artificial intelligence, it's crucial to focus not just on enhancing neural networks but also on developing robust verification mechanisms. This dual approach, inspired by human cognition, could make AI systems more resilient and adaptable. Just like the ruler in Borges' story realized that a map could never fully capture the empire's complexity, we must acknowledge the limitations of our models. By integrating verification mechanisms, we can create AI systems that are not only powerful but also capable of learning from and correcting their errors. Ultimately, true progress in AI will come from balancing prediction with verification.
                </p>
            </article>
        </main>
    </div>
  );
};

export default DualityOfIntelligence;
