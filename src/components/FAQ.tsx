import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Is PokerNow Copilot allowed on poker sites?',
      answer: 'PokerNow Copilot is designed for use with PokerNow.club, which is primarily used for home games with friends. Always check the terms of service for any poker site you play on, as some online poker rooms prohibit the use of real-time assistance tools.',
    },
    {
      question: 'How accurate are the GTO recommendations?',
      answer: 'Our GTO recommendations are based on a fine-tuned large language model trained on extensive poker strategy data. The recommendations closely align with solutions from commercial solvers, with accuracy typically above 90% in most common situations.',
    },
    {
      question: 'Does the extension slow down my browser?',
      answer: 'No, PokerNow Copilot is built with vanilla JavaScript and optimized for performance. The extension has minimal impact on browser performance and won\'t affect your poker experience.',
    },
    {
      question: 'Can other players see that I\'m using the extension?',
      answer: 'No, PokerNow Copilot operates entirely on your local machine and is invisible to other players. The extension simply reads the game information displayed in your browser and provides recommendations without interacting with the poker site\'s servers.',
    },
    {
      question: 'How does the Monte Carlo equity calculation work?',
      answer: 'Our Monte Carlo simulator runs thousands of hand simulations in milliseconds to calculate your exact equity against likely opponent hand ranges. It considers your hole cards, the board cards, and uses advanced algorithms to model opponent ranges based on their actions.',
    },
    {
      question: 'Is there a subscription fee?',
      answer: 'PokerNow Copilot is currently available for free as we gather feedback and improve the product. We may introduce premium features in the future, but core functionality will remain free for all users.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold text-white mb-4 relative">
            <span className="relative z-10">Frequently Asked Questions</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#39FF14]/70 rounded-full"></span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Get answers to common questions about PokerNow Copilot.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Still have questions? Feel free to reach out to our team.
            </p>
            <button className="px-6 py-3 rounded-full bg-transparent border-2 border-[#39FF14] text-[#39FF14] font-bold hover:bg-[#39FF14]/10 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-[#39FF14]/20 overflow-hidden transition-all duration-300">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#39FF14]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#39FF14]" />
        )}
      </button>
      <div 
        className={`px-6 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;