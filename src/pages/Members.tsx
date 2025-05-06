import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Members = () => {
  const { t } = useLanguage();
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const members = [
    {
      id: 1,
      name: "Kabilesh C",
      quote: "Don't mess with my schnitzel 😎🍖"
    },
    {
      id: 2,
      name: "JAIDEEP V",
      quote: "Bratwurst fuels my brainpower 🌭🧠"
    },
    {
      id: 3,
      name: "Naman Duhan",
      quote: "I came for the currywurst, stayed for the code 🍛💻"
    },
    {
      id: 4,
      name: "SHREYA MEDIMI",
      quote: "Strudel is my spirit dessert 🥧✨"
    },
    {
      id: 5,
      name: "MADAVANERI SARANYA",
      quote: "Käsespätzle is the real comfort food 💛🧀"
    },
    {
      id: 6,
      name: "KAKARLAPUDI SAYI GIRISH VERMA",
      quote: "Wiener Schnitzel > Everything else 😋🥩"
    },
    {
      id: 7,
      name: "PALLI SUPRADEEP REDDY",
      quote: "Beer me up, GutenEats style! 🍺🤓"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-600 
        animate-pulse drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]">
        {t('members.title')}
      </h1>

      {/* Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {members.map((member) => (
          <div
            key={member.id}
            className="relative bg-amber-50 rounded-lg p-6 border-2 border-amber-400 
              shadow-lg transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: hoveredMember === member.id 
                ? '0 0 20px rgba(217, 119, 6, 0.6), 0 0 30px rgba(251, 191, 36, 0.4)' 
                : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              transform: hoveredMember === member.id ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div className="absolute -right-4 -top-4 text-6xl opacity-10 rotate-12">
              {member.id % 3 === 0 ? '🍺' : member.id % 3 === 1 ? '🥨' : '🍖'}
            </div>
            <h3 className="text-xl font-semibold text-amber-800 mb-2">
              {t('members.member')} {member.id}
            </h3>
            <h2 className="text-2xl font-bold text-amber-600 mb-3">
              {member.name}
            </h2>
            <p className="text-gray-700 italic">
              "{member.quote}"
            </p>
          </div>
        ))}
      </div>

      {/* Faculty Guide */}
      <div className="w-full rounded-xl p-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 
        shadow-lg mb-12 transition-all duration-300 hover:shadow-[0_0_25px_rgba(217,119,6,0.7)]">
        <div className="bg-amber-50 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="md:w-3/5">
            <h2 className="text-3xl font-bold text-amber-700 mb-2">
              {t('members.faculty.title')}
            </h2>
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">
              Mrs. Bhuvana Udhayakumar
            </h3>
            <h4 className="text-xl text-amber-800 mb-4">
              Assistant Professor, Department of English and Foreign Languages
            </h4>
            <p className="text-gray-700 mb-6">
              {t('members.faculty.bio')}
            </p>
            <p className="text-amber-700 italic font-medium text-lg">
              "{t('members.faculty.quote')}"
            </p>
          </div>
          <div className="md:w-2/5 flex items-center justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-lg 
              transition-all duration-300 hover:scale-[1.02] group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 
                opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <img 
                src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/10/DSC_1416-transformed.png" 
                alt="Mrs. Bhuvana Udhayakumar" 
                className="w-full h-auto rounded-lg border-2 border-amber-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members; 