import React from 'react';
import { Brain, Calculator, Mic, MessageCircle, Layout, Database, Zap, ChevronRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'GTO Strategy Recommendations',
      description: 'Get optimal game theory strategy recommendations with action frequencies based on your exact situation.',
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Real-time Equity Calculations',
      description: 'Monte Carlo simulations calculate your precise winning odds against likely opponent hand ranges.',
    },
    {
      icon: <Mic className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Voice Agent Integration',
      description: 'Hear strategy explanations through voice feedback while keeping your eyes on the table.',
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Chat Assistant',
      description: 'Ask questions about poker strategy and get intelligent answers powered by Claude AI.',
    },
    {
      icon: <Layout className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Multi-table Support',
      description: 'Play multiple tables simultaneously with automatic game detection and table-specific advice.',
    },
    {
      icon: <Database className="h-8 w-8 text-[#39FF14] group-hover:scale-110 transition-transform duration-300" />,
      title: 'Hand History Analysis',
      description: 'Review past hands with detailed analysis to identify leaks and improve your strategy.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#051622]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">AI-Powered Features</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14]/70 rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Our extension combines cutting-edge AI with poker expertise to give you a significant edge at the tables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-[#39FF14]/20 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
            <h3 className="text-2xl font-bold text-white mb-4">Powered by Advanced AI</h3>
            <p className="text-gray-300 mb-6">
              Our system uses a fine-tuned large language model trained on GTO poker strategy data, 
              providing you with professional-level insights in real-time.
            </p>
            <div className="flex items-center justify-center">
              <Zap className="h-6 w-6 text-[#39FF14] mr-2" />
              <span className="text-lg font-medium text-[#39FF14]">Try it for yourself</span>
              <ChevronRight className="h-5 w-5 text-[#39FF14] ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="group bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#39FF14]/20 shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300 hover:-translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Features;