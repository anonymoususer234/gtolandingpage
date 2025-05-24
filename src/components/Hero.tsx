import React from 'react';
import { ArrowRight, Cpu, BarChart2, Maximize2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-gradient-to-b from-black to-[#051622]">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3770353/pexels-photo-3770353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      {/* Matrix Effect Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.7)]">AI-Powered</span> Poker Assistant for <span className="text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.7)]">PokerNow</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Make optimal decisions in real-time with GTO strategy recommendations, equity calculations, and AI-powered insights while playing on PokerNow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 rounded-full bg-[#39FF14] text-black font-bold hover:bg-[#39FF14]/80 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                Download Extension
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-bold hover:bg-[#39FF14]/10 transition-all flex items-center justify-center">
                See It In Action <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl border border-[#39FF14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)] overflow-hidden">
              <div className="bg-black/70 border-b border-[#39FF14]/30 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto font-mono text-[#39FF14]">PokerNow Copilot</div>
                <Maximize2 className="h-4 w-4 text-gray-400" />
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex justify-between text-gray-300 border-b border-gray-800 pb-2 mb-4">
                  <span>Current Hand Analysis</span>
                  <span className="text-[#39FF14]">Hand #247</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/50 p-3 rounded border border-gray-800">
                    <div className="text-gray-400 mb-1">Your Cards</div>
                    <div className="flex space-x-2">
                      <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-red-600 font-bold">A♥</div>
                      <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">K♠</div>
                    </div>
                  </div>
                  <div className="bg-black/50 p-3 rounded border border-gray-800">
                    <div className="text-gray-400 mb-1">Board</div>
                    <div className="flex space-x-1">
                      <div className="w-8 h-10 bg-white rounded-md flex items-center justify-center text-red-600 font-bold text-sm">10♥</div>
                      <div className="w-8 h-10 bg-white rounded-md flex items-center justify-center text-black font-bold text-sm">J♠</div>
                      <div className="w-8 h-10 bg-white rounded-md flex items-center justify-center text-red-600 font-bold text-sm">Q♦</div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/70 p-4 rounded border border-[#39FF14]/30 mb-4">
                  <div className="flex items-center mb-2">
                    <Cpu className="h-4 w-4 text-[#39FF14] mr-2" />
                    <span className="text-[#39FF14] font-semibold">GTO Recommendation</span>
                  </div>
                  <div className="text-white mb-3">You have a strong draw with AK on a 10-J-Q board.</div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bet 2/3 pot</span>
                      <span className="text-[#39FF14] font-bold">76%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-[#39FF14] h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Check</span>
                      <span className="text-[#39FF14] font-bold">24%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-[#39FF14] h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="bg-black/70 p-4 rounded border border-[#39FF14]/30">
                  <div className="flex items-center mb-2">
                    <BarChart2 className="h-4 w-4 text-[#39FF14] mr-2" />
                    <span className="text-[#39FF14] font-semibold">Equity Calculation</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Win</span>
                    <span className="text-white">42.7%</span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Tie</span>
                    <span className="text-white">2.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Lose</span>
                    <span className="text-white">55.0%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-16 w-32 h-32 bg-[#39FF14]/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#39FF14]/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
    </div>
  );
};

export default Hero;