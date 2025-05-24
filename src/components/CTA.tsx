import React from 'react';
import { ChevronRight, Download, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#051622] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#39FF14]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#39FF14]/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#39FF14]/30 shadow-[0_0_50px_rgba(57,255,20,0.2)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Poker Game?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join hundreds of players who are making better decisions and improving their win rates with PokerNow Copilot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FeaturePoint 
              icon={<Zap className="h-6 w-6 text-[#39FF14]" />}
              title="Real-time Analysis"
              description="Get instant GTO recommendations as you play"
            />
            <FeaturePoint 
              icon={<Download className="h-6 w-6 text-[#39FF14]" />}
              title="Easy Installation"
              description="Setup takes less than 2 minutes to complete"
            />
            <FeaturePoint 
              icon={<ChevronRight className="h-6 w-6 text-[#39FF14]" />}
              title="Start Today"
              description="No complicated configuration needed"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#39FF14] text-black font-bold hover:bg-[#39FF14]/80 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.5)] flex items-center justify-center">
              <Download className="h-5 w-5 mr-2" />
              Download Extension
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-bold hover:bg-[#39FF14]/10 transition-all flex items-center justify-center">
              Learn More <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default CTA;