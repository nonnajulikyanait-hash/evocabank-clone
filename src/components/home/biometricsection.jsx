import React, { useState, useEffect } from 'react';

const faces = [
  "https://www.evoca.am/img/temp/biometric/face1.png",
  "https://www.evoca.am/img/temp/biometric/face2.png",
  "https://www.evoca.am/img/temp/biometric/face3.png"
];

function BiometricSection() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Dzak mas - Ajun thode var shift kele ahe (-translate-y-10) */}
        <div className="lg:w-1/2 flex justify-center items-center relative min-h-[440px]">
          
          {/* Hetnamasi ketagçayin shrjanner */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gray-200 pointer-events-none flex items-center justify-center">
            <div className="w-[350px] h-[350px] rounded-full border border-dashed border-gray-100"></div>
          </div>

          {/* Manushakaguyn erankyunaձev fon (#6400DC) */}
          <div 
            className="absolute w-[400px] h-[370px] bg-[#6400DC] pointer-events-none -translate-y-10"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              borderTopLeftRadius: '40px',
              borderTopRightRadius: '40px'
            }}
          ></div>
          
          {/* Demqi nkary ajun var hanvats (-translate-y-12) */}
          <div className="relative z-10 flex justify-center items-center w-[400px] h-[440px] -translate-y-12">
            <img 
              src={faces[faceIndex]} 
              alt="Biometric Identification" 
              className={`w-full h-full object-contain transition-all duration-500 transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
        </div>

        {/* Aj mas - Tekster, QR kod ev kotchak */}
        <div className="lg:w-1/2 space-y-5 text-left z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-gray-900 tracking-tight leading-snug">
            Դարձիր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed font-normal">
            Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացիր քարտ
          </p>

          <div className="flex flex-row items-center gap-6 pt-3">
            {/* QR kod */}
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100 shrink-0">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" 
                alt="Biometric QR Code" 
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* «Իմանալ ավելին» kotchak */}
            <div>
              <button className="font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full text-white bg-[#6400DC] hover:bg-opacity-90 transition-all shadow-md cursor-pointer">
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