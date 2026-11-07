import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

function BiometricSection() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setFaceIndex((prevIndex) => (prevIndex + 1) % faces.length);
        setIsVisible(true);
      }, 400);

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleLearnMore = () => {
    navigate('/evocatouch');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 sm:py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Ձախ մաս - Բիոմետրիկ նկարներն ու մանուշակագույն եռանկյունը */}
        <div className="lg:w-1/2 flex justify-center items-center relative min-h-[320px] sm:min-h-[380px] w-full">
          
          {/* Հետևի կետագծով շրջաններ */}
          <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-gray-200 pointer-events-none flex items-center justify-center">
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-dashed border-gray-100"></div>
          </div>

          {/* Մանուշակագույն եռանկյունաձև ֆոն */}
          <div 
            className="absolute w-[280px] h-[260px] sm:w-[320px] sm:h-[295px] bg-[#6400DC] pointer-events-none flex items-center justify-center"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              borderTopLeftRadius: '32px',
              borderTopRightRadius: '32px'
            }}
          ></div>
          
          {/* Դեմքերի անիմացիոն պատկերներ */}
          <div className="relative z-10 flex justify-center items-center w-[280px] h-[340px] sm:w-[320px] sm:h-[380px]">
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-full h-full object-contain transition-all duration-500 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Աջ մաս - Վերնագիր, նկարագրություն, QR կոդ և կոճակ */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-5 text-left z-10 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-gray-900 tracking-tight leading-snug">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 max-w-md leading-relaxed font-normal">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-3">
            {/* QR code */}
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
              />
            </div>

            {/* Կոճակ */}
            <div>
              <button 
                onClick={handleLearnMore}
                className="font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white bg-[#6400DC] hover:bg-opacity-95 transition-all shadow-md cursor-pointer"
              >
                Իմանալ ավելին
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BiometricSection;