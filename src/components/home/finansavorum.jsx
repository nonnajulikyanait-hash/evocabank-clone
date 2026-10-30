import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Finansavorum() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Առևտրի ֆինանսավորում</span> &gt; <span className="text-gray-700 font-medium">Երաշխիք</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Երաշխիք
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական տեքստ */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-gray-800 leading-relaxed">
                Բանկային երաշխիքը անկախ, անվերապահ և գրավոր պարտավորություն է, որը բանկը ստանձնում է իր հաճախորդի (Applicant) հանձնարարությամբ հօգուտ երրորդ կողմի (Beneficiary)՝ վճարելու երաշխիքով սահմանված գումարը ներկայացված պահանջի դիմաց, եթե պահանջը համապատասխանում է երաշխիքի պայմաններին[cite: 19]:
              </p>
              <p className="text-gray-800 leading-relaxed">
                Բանկային երաշխիքները, որպես կանոն, կարգավորվում են Միջազգային առևտրի պալատի (ICC) կողմից ընդունված URDG 758 կանոններով, եթե երաշխիքում այլ բան նախատեսված չէ[cite: 19]:
              </p>

              {/* Հիմնական տեսակները */}
              <div className="space-y-4 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Բանկային երաշխիքների հիմնական տեսակները[cite: 19]
                </h3>

                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong className="text-neutral-900">• Կանխավճարային երաշխիք (Advance Payment Guarantee)</strong>[cite: 19]<br />
                    Տրվում է այն դեպքերում, երբ գնորդը (Buyer) մատակարարին (Seller) տրամադրում է կանխավճար մինչև ապրանքի մատակարարումը կամ ծառայության մատուցումը[cite: 19]: Երաշխիքը ապահովում է կանխավճարի վերադարձը բենեֆիցիարին, եթե դիմողը չի կատարում հիմնական պայմանագրով նախատեսված իր պարտավորությունները[cite: 19]:
                  </li>
                  <li>
                    <strong className="text-neutral-900">• Պարտավորությունների կատարման երաշխիք (Performance Guarantee / Performance Bond)</strong>[cite: 19]<br />
                    Տրվում է պայմանագրով նախատեսված պարտավորությունների պատշաճ կատարումն ապահովելու նպատակով[cite: 19]: Բանկը պարտավորվում է վճարել բենեֆիցիարին երաշխիքով սահմանված գումարը՝ պայմանագրային պարտավորությունների չկատարման կամ ոչ պատշաճ կատարման դեպքում[cite: 19]:
                  </li>
                  <li>
                    <strong className="text-neutral-900">• Մրցութային երաշխիք (Tender / Bid Guarantee)</strong>[cite: 19]<br />
                    Տրվում է մրցույթներին կամ տենդերներին մասնակցելու, ինչպես նաև պայմանագրի, որակավորման, կանխավճարի ապահովման նպատակներով[cite: 19]:
                  </li>
                  <li>
                    <strong className="text-neutral-900">• Վճարման երաշխիք (Payment Guarantee)</strong>[cite: 19]<br />
                    Կիրառվում է բաց հաշվով վճարման (open account) առևտրային գործարքներում[cite: 19]: Երաշխիքը ապահովում է բենեֆիցիարի վճարումը այն դեպքում, երբ դիմողը չի կատարում պայմանագրով սահմանված վճարային պարտավորությունները[cite: 19]:
                  </li>
                  <li>
                    <strong className="text-neutral-900">• Մաքսային երաշխիք (Customs Guarantee)</strong>[cite: 19]<br />
                    Տրվում է մաքսային մարմինների օգտին և ապահովում է մաքսային տուրքերի, հարկերի և այլ վճարների կատարումը՝ մաքսային օրենսդրությամբ նախատեսված դեպքերում[cite: 19]: Մաքսային երաշխիքները կարող են կարգավորվել ինչպես ազգային օրենսդրությամբ, այնպես էլ համապատասխան միջազգային կանոններով[cite: 19]:
                  </li>
                  <li>
                    <strong className="text-neutral-900">• Պահուստային ակրեդիտիվ (Standby Letter of Credit – SBLC)</strong>[cite: 19]<br />
                    Պահուստային ակրեդիտիվը անկախ վճարային գործիք է, որը իր տնտեսական էությամբ համարժեք է բանկային երաշխիքին[cite: 19]: Այն սովորաբար կարգավորվում է ICC ISP98 կամ UCP 600 կանոններով և կիրառվում է այն դեպքերում, երբ բանկային երաշխիքի թողարկումը իրավական կամ գործառնական տեսանկյունից սահմանափակ է[cite: 19]: SBLC-ի հիման վրա վճարումը կատարվում է միայն բենեֆիցիարի կողմից պայմաններին համապատասխան պահանջ ներկայացնելու դեպքում[cite: 19]:
                  </li>
                </ul>
              </div>

              {/* Առավելությունները */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Բանկային երաշխիքների առավելությունները[cite: 19]
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
                  <li>նվազեցնում են առևտրային և ֆինանսական ռիսկերը[cite: 19],</li>
                  <li>ապահովում են գործարքների վստահելի իրականացումը[cite: 19],</li>
                  <li>հնարավորություն են տալիս կիրառել հետաձգված վճարման պայմաններ[cite: 21],</li>
                  <li>նպաստում են գործընկերների միջև երկարաժամկետ և վստահելի համագործակցությանը[cite: 21],</li>
                  <li>հանդիսանում են վարկային միջոցներին համեմատ ավելի ճկուն և ծախսարդյունավետ գործիք[cite: 21]:</li>
                </ul>
              </div>

              {/* Accordion Header */}
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ[cite: 19]
              </h2>

              <div className="space-y-4">

                {/* 1. Միջազգային Բանկային Երաշխիքներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(1)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 1 ? 'rotate-180' : ''}`}>▼</span>
                      Միջազգային Բանկային Երաշխիքներ[cite: 19]
                    </span>
                  </button>

                  {openSection === 1 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">1. Արժույթ</td><td className="p-3">ԱՄՆ դոլար, Եվրո, ՌԴ ռուբլի կամ Բանկի համար ընդունելի այլ արտարժույթ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">2. Գումարային սահմանաչափ</td><td className="p-3">Պայմանագրային[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">3. Ժամկետներ</td><td className="p-3">Պայմանագրային[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">4. Երաշխիքի թողարկում և/կամ հաստատում (տարեկան)</td><td className="p-3">Պայմանագրային[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">5. Երաշխիքի պայմանների փոփոխում (ա.թ. երկարաձգում)</td><td className="p-3">0.15%, նվազ. 50,000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">6. Երաշխիքի ծանուցում</td><td className="p-3">0.15%, նվազ. 50,000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">7. Բանկի կողմից թողարկված և/կամ հաստատված երաշխիքով վճարում</td><td className="p-3">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">8. Երաշխիքի հետ կանչում</td><td className="p-3">50,000 ՀՀ դրամ[cite: 19]</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Տեղական Բանկային Երաշխիքներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(2)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 2 ? 'rotate-180' : ''}`}>▼</span>
                      Տեղական Բանկային Երաշխիքներ[cite: 19]
                    </span>
                  </button>

                  {openSection === 2 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">1. Արժույթ</td><td className="p-3">ՀՀ դրամ կամ արտարժույթ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">2. Գումարային սահմանաչափ</td><td className="p-3">Պայմանագրային[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">3. Ժամկետներ</td><td className="p-3">Մինչև 60 ամիս մարման ժամկետով[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">4. Գանձվող վճարներ</td><td className="p-3">Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 20,000 ՀՀ դրամը, ապա Պրինցիպալից գանձվում է միանվագ վճար 20,000 ՀՀ դրամ գումարի չափով:[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">5. Փոփոխություն</td><td className="p-3">15 000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">6. Տարեկան տոկոսադրույք` դրամական ապահովվածության դեպքում</td><td className="p-3">1-3%[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">7. Տարեկան տոկոսադրույք Այլ ապահովվածության դեպքում</td><td className="p-3">2-6%[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">8. Չեղյալ համարում</td><td className="p-3">25 000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">9. Վճարում պահանջի դիմաց</td><td className="p-3">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">10. Վարկ դառնալու դեպքում</td><td className="p-3">Ոչ ավել քան ՀՀ կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ[cite: 19]</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  <button
                    onClick={() => toggleSection(3)}
                    className="w-full flex justify-between items-center p-5 text-left font-bold text-gray-800 hover:text-[#6400dc] transition cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-[#6400dc] text-xs transition-transform duration-200 ${openSection === 3 ? 'rotate-180' : ''}`}>▼</span>
                      Առաջնակարգ ապահովվածությամբ առանց վարկունակության գնահատման Բանկային երաշխիքներ[cite: 19]
                    </span>
                  </button>

                  {openSection === 3 && (
                    <div className="p-6 border-t border-gray-100 text-xs md:text-sm text-gray-700 space-y-4 bg-gray-50/50">
                      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="p-3 font-bold bg-purple-50/50">1. Արժույթ</td><td className="p-3">ՀՀ դրամ կամ արտարժույթ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">2. Գումարային սահմանաչափ</td><td className="p-3">Պայմանագրային[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">3. Ժամկետներ</td><td className="p-3">Մինչև 60 ամիս մարման ժամկետով[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">4. Ապահովվածություն</td><td className="p-3">Դրամական միջոցների (ավանդային հաշվի կամ ընթացիկ հաշվի մնացորդ) մնացորդ, ինչպես նաև Բանկի կողմից թողարկված պարտատոմսեր, պետական պարտատոմսեր[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">5. Գանձվող վճարներ</td><td className="p-3">Իրավաբանական անձանց և անհատ ձեռնարկատերերին տրամադրված երաշխիքների դեպքում, եթե գանձման ենթակա տոկոսագումարը տրամադրվող երաշխիքի գործողության փաստացի կամ ամբողջ ժամանակահատվածի համար չի գերազանցում 20,000 ՀՀ դրամը, ապա Պրինցիպալից գանձվում է միանվագ վճար 20,000 ՀՀ դրամ գումարի չափով:[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">6. Փոփոխություն</td><td className="p-3">15 000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">7. Տարեկան տոկոսադրույք</td><td className="p-3">1-3%[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">8. Չեղյալ համարում</td><td className="p-3">25 000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">9. Վճարում պահանջի դիմաց</td><td className="p-3">0.5%, նվազ. 50,000 ՀՀ դրամ[cite: 19]</td></tr>
                            <tr><td className="p-3 font-bold bg-purple-50/50">10. Վարկ դառնալու դեպքում</td><td className="p-3">Ոչ ավել քան ՀՀ կենտրոնական բանկի սահմանված բանկային տոկոսի հաշվարկային տոկոսադրույքի կրկնապատիկ[cite: 19]</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}