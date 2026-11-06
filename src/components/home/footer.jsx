import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer({ setActiveTab }) {
  const navigate = useNavigate();

  const partners = [
    { id: 1, url: 'https://www.evoca.am/img/temp/partners/partner-1.png' },
    { id: 2, url: 'https://www.evoca.am/img/temp/partners/partner-2.png' },
    { id: 3, url: 'https://www.evoca.am/img/temp/partners/partner-6.png' },
    { id: 4, url: 'https://www.evoca.am/img/temp/partners/partner-3.png' },
    { id: 5, url: 'https://www.evoca.am/img/temp/partners/partner-4.png' },
    { id: 6, url: 'https://www.evoca.am/img/temp/partners/partner-5-new.png' },
    { id: 7, url: 'https://www.evoca.am/img/temp/partners/partner-7.png' },
  ];

  const handleNavClick = (tabName) => {
    if (setActiveTab) {
      setActiveTab(tabName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRouteChange = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f1f1f1] border-t border-gray-200 pt-12 pb-6 font-sans text-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Verin bazin (sylunkar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Sylunk 1: Logo ane Address */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold tracking-wider text-[#6400dc]">evocaBANK</h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="text-[10px] text-gray-400">
              1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
            </p>
          </div>

          {/* Sylunk 2: Banki masin */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Բանկի մասին</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li><button onClick={() => handleRouteChange('/mer-masin')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Մեր մասին</button></li>
              <li><button onClick={() => handleRouteChange('/mer-masin/xekavarutyun')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ղեկավարություն</button></li>
              <li><button onClick={() => handleRouteChange('/mer-masin/bajneterer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բաժնետերեր</button></li>
              <li><button onClick={() => handleRouteChange('/hashvetvutyunner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաշվետվություններ</button></li>
              <li><button onClick={() => handleRouteChange('/iravakan')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Իրավական ակտեր</button></li>
              <li><button onClick={() => handleRouteChange('/guyq')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Օտարվող գույք</button></li>
              <li><button onClick={() => handleRouteChange('/karucapatox')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կառուցապատողներ</button></li>
              <li><button onClick={() => handleRouteChange('/avtosrahner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Գործընկեր ավտոսրահներ</button></li>
            </ul>
          </div>

          {/* Sylunk 3: Ogtakar hulumner */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Օգտակար հղումներ</h3>
            <ul className="space-y-2 text-xs text-gray-600 flex flex-col items-start">
              <li><button onClick={() => handleRouteChange('/iravunqner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)</button></li>
              <li><button onClick={() => handleRouteChange('/chapanishner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաճախորդի ռեզիդենտության չափանիշներ</button></li>
              <li><button onClick={() => handleRouteChange('/kargavorum')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կարգավորում</button></li>
              <li><button onClick={() => handleRouteChange('/gaxtniutyun')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Գաղտնիության քաղաքականություն</button></li>
              <li><button onClick={() => handleRouteChange('/hashtarar')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ֆին. հաշտարար</button></li>
              <li><button onClick={() => handleRouteChange('/kanxargelum')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Ֆինանսական հանցագործությունների կանխարգելում</button></li>
              <li><button onClick={() => handleRouteChange('/hxumner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հղումներ Բանկի քարտապանների համար</button></li>
            </ul>
          </div>

          {/* Sylunk 4: Ayl hulumner */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Այլ հղումներ</h3>
            <ul className="space-y-2 text-xs text-gray-600 flex flex-col items-start">
              <li><button onClick={() => handleRouteChange('/footerevoca')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">EvocaONLINE</button></li>
              <li><button onClick={() => handleRouteChange('/footerpahatuper')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Պահատուփեր</button></li>
              <li><button onClick={() => handleRouteChange('/footerharcer')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հաճախ տրվող հարցեր</button></li>
              <li><button onClick={() => handleNavClick('haytararutyun')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հայտարարություններ</button></li>
              <li><button onClick={() => handleRouteChange('/dibrary')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Dibrary</button></li>
              <li><button onClick={() => handleRouteChange('/bukletner')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Բուկլետներ</button></li>
              <li><button onClick={() => handleNavClick('kap')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Հետադարձ կապ</button></li>
              <li><button onClick={() => handleNavClick('kayqiqartez')} className="hover:text-[#6400dc] bg-transparent border-0 cursor-pointer p-0 text-left">Կայքի քարտեզ</button></li>
            </ul>
          </div>

          {/* Sylunk 5: Socials, Apps & Contact */}
          <div className="space-y-4">
            <div className="flex space-x-3 text-gray-600 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-[#6400dc]">f</a>
              <a href="#" aria-label="Instagram" className="hover:text-[#6400dc]">ig</a>
              <a href="#" aria-label="Pinterest" className="hover:text-[#6400dc]">p</a>
              <a href="#" aria-label="YouTube" className="hover:text-[#6400dc]">yt</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#6400dc]">in</a>
            </div>

            <div className="space-y-2 pt-2">
              <a href="#" className="block"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" /></a>
              <a href="#" className="block"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" /></a>
            </div>

            <div className="space-y-1 pt-2 text-xs">
              <a href="https://www.evoca.am/hy/branches-and-atms" target="_blank" rel="noopener noreferrer" className="block text-[#6400dc] font-bold hover:underline">
                Բանկի հասցեները և աշխատաժամերը
              </a>
              <p className="font-bold text-neutral-900 pt-1">Կապ մեզ հետ</p>
              <p className="font-bold text-neutral-900">+374 10 605555</p>
              <p className="font-bold text-neutral-900">8444</p>
            </div>
          </div>

        </div>

        {/* Legal Text */}
        <div className="border-t border-gray-300 pt-6 pb-6 text-[11px] text-gray-500 leading-relaxed">
          <p>
            Կայքի՝ այցելուի որևէ տեխնիկական միջոցներով վերցվող տվյալների անհամապատասխանության, ինչպես նաև տռտաներն ու անցքերն ընդունելու ոչ ադրեզնված ծրագրի տեխնիկական դեպքերում ինքնաբերաբար ինքն ապահովագրելը: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում ի՞նչ ինտերնետային կայքում այլ անձանց ինտերնետային կայքերի բովանդակության և արժանահավատության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկության օգտագործման հետևանքների համար:
          </p>
        </div>

        {/* Partner Logos above the bottom line, positioned on the right */}
        <div className="border-t border-gray-300 pt-6 mt-4 flex items-center justify-end flex-wrap gap-4 opacity-90">
          {partners.map((partner) => (
            <div key={partner.id} className="h-8 flex items-center justify-center">
              <img 
                src={partner.url} 
                alt={`Partner ${partner.id}`} 
                className="max-h-6 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}

export default Footer;