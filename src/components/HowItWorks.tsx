import React from 'react';
import { Eye, BrainCircuit, Monitor, Sparkles, Mic, Volume2, Cpu, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Eye className="h-10 w-10 text-[#39FF14]" />,
      title: 'Real-Time Game Analysis',
      description: 'Our AI constantly monitors your PokerNow table, analyzing cards, pot sizes, positions, and player actions to give you the edge you need.',
      delay: '0ms',
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#39FF14]" />,
      title: 'GTO Strategy Computation',
      description: 'Advanced algorithms process game data through our fine-tuned AI model to calculate optimal GTO-based decisions with precise frequencies.',
      delay: '200ms',
    },
    {
      icon: <Mic className="h-10 w-10 text-[#39FF14]" />,
      title: 'Voice Strategy Advisor',
      description: 'Click the voice button to get instant audio explanations of the optimal play, complete with detailed reasoning and strategic insights.',
      delay: '400ms',
    },
    {
      icon: <Sparkles className="h-10 w-10 text-[#39FF14]" />,
      title: 'Continuous Improvement',
      description: 'Our AI learns from thousands of hands and professional strategies, constantly evolving to provide you with cutting-edge poker insights.',
      delay: '600ms',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#39FF14]/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#39FF14]/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">Advanced AI Technology</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14]/70 rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Experience the future of poker assistance with our cutting-edge AI technology and voice-powered strategy advisor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#39FF14]/20 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)]"
              style={{ animationDelay: step.delay }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Voice Agent Feature Showcase */}
        <div className="bg-gradient-to-r from-black to-[#051622] rounded-2xl border border-[#39FF14]/30 overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.1)]">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Volume2 className="h-8 w-8 text-[#39FF14]" />
                <h3 className="text-2xl font-bold text-white">Voice Strategy Advisor</h3>
              </div>
              
              <div className="space-y-4">
                <Feature
                  icon={<Cpu className="h-6 w-6" />}
                  title="Real-time Analysis"
                  description="Get instant voice explanations of optimal plays as situations develop"
                />
                <Feature
                  icon={<BrainCircuit className="h-6 w-6" />}
                  title="Strategic Reasoning"
                  description="Understand the 'why' behind each GTO recommendation"
                />
                <Feature
                  icon={<MessageCircle className="h-6 w-6" />}
                  title="Natural Conversation"
                  description="Clear, concise voice guidance in natural language"
                />
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-[#39FF14]/20">
                <p className="text-gray-300 italic">
                  "You have AK suited on the button. With 40% pot-sized bet from MP, calling is optimal here due to strong equity, position, and implied odds. Your range has 82% call frequency in this spot."
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#39FF14]">AI Voice Agent</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
              <div className="relative z-20 h-full flex items-center justify-center">
                <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl border border-[#39FF14]/30 w-full max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <Mic className="h-5 w-5 text-[#39FF14]" />
                      <span className="text-white font-medium">Voice Assistant</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <VoiceFeature text="Instant hand analysis" />
                    <VoiceFeature text="Position-based strategy" />
                    <VoiceFeature text="Range analysis" />
                    <VoiceFeature text="Pot odds calculation" />
                    <VoiceFeature text="Action frequencies" />
                  </div>

                  <button className="mt-6 w-full py-3 rounded-lg bg-[#39FF14]/20 border border-[#39FF14] text-[#39FF14] font-medium hover:bg-[#39FF14]/30 transition-colors flex items-center justify-center space-x-2">
                    <Volume2 className="h-5 w-5" />
                    <span>Activate Voice Guide</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14]">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const VoiceFeature = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-3 bg-black/30 p-3 rounded-lg border border-[#39FF14]/10">
    <div className="w-1.5 h-1.5 bg-[#39FF14] rounded-full"></div>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

export default HowItWorks;