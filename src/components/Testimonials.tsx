import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Professional Poker Player',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'This extension has completely transformed my online poker game. The GTO recommendations are spot-on and have helped me make better decisions in tough spots.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      role: 'Tournament Player',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'I was skeptical at first, but the Monte Carlo equity calculations are incredibly accurate. It\'s like having a poker coach with you at the table.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cash Game Specialist',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      content: 'The voice agent feature is brilliant. I can keep my focus on reading my opponents while getting strategy advice through my headphones.',
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#051622] to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">What Players Are Saying</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14]/70 rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Hear from poker players who have improved their win rate using PokerNow Copilot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-[#39FF14]/10 backdrop-blur-sm p-6 rounded-xl border border-[#39FF14]/30 max-w-2xl">
            <div className="flex items-center justify-center mb-4">
              <Quote className="h-8 w-8 text-[#39FF14]" />
            </div>
            <p className="text-xl text-white text-center italic mb-6">
              "PokerNow Copilot has helped hundreds of players make better decisions and improve their poker skills. Join them today and take your game to the next level."
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-3 rounded-full bg-[#39FF14] text-black font-bold hover:bg-[#39FF14]/80 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                Get the Extension Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ 
  name, 
  role, 
  image, 
  content, 
  rating 
}: { 
  name: string; 
  role: string; 
  image: string; 
  content: string; 
  rating: number;
}) => (
  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-[#39FF14]/20 shadow-lg hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300">
    <div className="flex items-center mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-14 h-14 rounded-full object-cover border-2 border-[#39FF14]/50"
      />
      <div className="ml-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-gray-400 text-sm">{role}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-[#39FF14] fill-[#39FF14]' : 'text-gray-600'}`} 
        />
      ))}
    </div>
    <p className="text-gray-300">"{content}"</p>
  </div>
);

export default Testimonials;