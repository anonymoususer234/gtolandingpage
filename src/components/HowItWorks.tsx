import React from 'react';
import { Eye, BrainCircuit, Monitor, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Eye className="h-10 w-10 text-[#39FF14]" />,
      title: 'Game State Observation',
      description: 'Our extension passively reads the HTML of your PokerNow table to extract game information like your cards, community cards, pot size, and player actions.',
      delay: '0ms',
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#39FF14]" />,
      title: 'AI Analysis',
      description: 'Game data is converted into a structured prompt and analyzed by our fine-tuned large language model trained on GTO poker strategy.',
      delay: '200ms',
    },
    {
      icon: <Monitor className="h-10 w-10 text-[#39FF14]" />,
      title: 'Strategy Display',
      description: 'Recommended actions, frequencies, expected value, and rationale are displayed in a floating panel that you can position anywhere on your screen.',
      delay: '400ms',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-[#39FF14]" />,
      title: 'Continuous Learning',
      description: 'Our system continuously improves by analyzing thousands of hands, learning from professional strategies and adapting to your playing style.',
      delay: '600ms',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#39FF14]/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#39FF14]/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">How It Works</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14]/70 rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Our technology works seamlessly in the background to provide you with real-time poker insights without interrupting your game.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#39FF14]/80 via-[#39FF14]/30 to-transparent hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="md:flex items-center"
                style={{
                  animationDelay: step.delay,
                }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-1'}`}>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                <div className={`flex justify-center my-6 md:my-0 md:w-0 relative z-10 ${index % 2 === 0 ? '' : 'md:order-0'}`}>
                  <div className="w-16 h-16 rounded-full bg-black border-2 border-[#39FF14] flex items-center justify-center shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                    {step.icon}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 md:order-1' : 'md:pr-16'}`}>
                  {index % 2 === 0 ? (
                    <div className="hidden md:block"></div>
                  ) : (
                    <h3 className="text-2xl font-bold text-white mb-3 md:text-right">{step.title}</h3>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-gradient-to-r from-black to-[#051622] rounded-xl border border-[#39FF14]/30 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Pure JavaScript Chrome Extension</h3>
              <p className="text-gray-300">
                Our extension is built with vanilla JavaScript for maximum performance and compatibility. No bulky frameworks, 
                no unnecessary dependencies - just lightweight, optimized code that won't slow down your browser or poker game.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Pill>JavaScript</Pill>
                <Pill>Chrome Extension</Pill>
                <Pill>HTML5</Pill>
                <Pill>CSS Animations</Pill>
                <Pill>WebSockets</Pill>
              </div>
            </div>
            <div className="md:w-1/3 p-4 bg-black rounded-lg border border-[#39FF14]/20">
              <pre className="text-xs text-gray-300 font-mono overflow-x-auto">
                <code>
                  <span className="text-blue-400">function</span> <span className="text-yellow-400">analyzeGameState</span>() {'{'}
                  <br />  <span className="text-green-400">// Extract game data</span>
                  <br />  <span className="text-blue-400">const</span> <span className="text-purple-400">cards</span> = extractCards();
                  <br />  <span className="text-blue-400">const</span> <span className="text-purple-400">board</span> = extractBoard();
                  <br />  <span className="text-blue-400">const</span> <span className="text-purple-400">pot</span> = calculatePot();
                  <br />
                  <br />  <span className="text-green-400">// Run equity calc</span>
                  <br />  <span className="text-purple-400">equity</span> = <span className="text-yellow-400">monteCarloSim</span>(cards, board);
                  <br />
                  <br />  <span className="text-green-400">// Get AI recommendation</span>
                  <br />  <span className="text-blue-400">return</span> <span className="text-yellow-400">getGtoStrategy</span>(cards, board, pot);
                  <br />{'}'}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 bg-[#39FF14]/10 text-[#39FF14] text-sm rounded-full border border-[#39FF14]/30">
    {children}
  </span>
);

export default HowItWorks;