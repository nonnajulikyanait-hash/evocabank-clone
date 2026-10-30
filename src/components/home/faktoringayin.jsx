import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Faktoringayin() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Առևտրի ֆինանսավորում</span> &gt; <span className="text-gray-700 font-medium">Ֆակտորինգային ֆինանսավորում</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Ֆակտորինգային ֆինանսավորում
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-gray-800 leading-relaxed">
                Եթե ցանկանում եք լինել շուկայում ավելի մրցունակ, Evocabank-ը կօգնի Ձեզ`առաջարկում ենք ֆակտորինգային ֆինանսավորում[cite: 15]:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Evocabank-ն իրականացնում է ֆակտորինգային ֆինանսավորում նաև «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակում[cite: 15]:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Ֆակտորինգ կարող եք ձևակերպել մեր Գլխամասային գրասենյակում և ցանկացած մասնաճյուղում (Բացառությամբ «Հանրապետության» , «Երևան Մոլ» , «Էրեբունի» մասնաճյուղերի)[cite: 15]:
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-4">
                Պայմաններ և սակագներ՝[cite: 15]
              </h3>

              {/* Պայմանների աղյուսակ */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50 w-1/3">1. Ֆակտորինգի սահմանաչափ</td>
                      <td className="p-3 text-gray-700">5,000,000 – 1,000,000,000 ՀՀ դրամ կամ համարժեք արտարժույթ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">2. Հաճախորդները</td>
                      <td className="p-3 text-gray-700">ՀՀ ռեզիդենտ իրավաբանական անձինք և անհատ ձեռնարկատեր, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս:[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">3. Ֆակտորինգային սահմանաչափի գործողության ժամկետ</td>
                      <td className="p-3 text-gray-700">Մինչև 24 ամիս[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">4. Ֆինանսավորման ժամկետ</td>
                      <td className="p-3 text-gray-700 space-y-1">
                        <div>• Մինչև 120 օր,</div>
                        <div>• «Հայաստանի արտահանման ապահովագրական գործակալություն» ԱՓԲԸ-ի հետ համագործակցության պայմանագրի շրջանակներում - մինչև 250 օր[cite: 15]</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">5. Ֆինանսավորման չափ</td>
                      <td className="p-3 text-gray-700">Ներկայացված հաշիվ ապրանքագրի մինչև 90%[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">6. Ֆինանսավորման գումարի տարեկան տոկոսադրույք և արժույթ</td>
                      <td className="p-3 text-gray-700 space-y-1">
                        <div><strong>ՀՀ դրամ</strong> – սկսած 12%-ից[cite: 15]</div>
                        <div><strong>ԱՄՆ դոլար</strong> – սկսած 8%-ից[cite: 15]</div>
                        <div><strong>Եվրո</strong> – սկսած 6%-ից[cite: 15]</div>
                        <div><strong>ՌԴ ռուբլի</strong> – սկսած 12%-ից[cite: 15]</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">7. Ֆինանսավորման գումարի և տոկոսագումարների մարման ժամկետների ուշացման դեպքում վճարվող տույժեր</td>
                      <td className="p-3 text-gray-700">
                        ժամկետանց գումարի համար՝ օրական 0.015%,<br />
                        ժամկետանց տոկոսագումարի համար օրական 0.1%[cite: 15]:
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">8. Վաղաժամկետ մարում</td>
                      <td className="p-3 text-gray-700">Վաղաժամկետ մարման տուժանքներ չեն կիրառվում[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">9. Սահմանաչափի հաստատման վճար</td>
                      <td className="p-3 text-gray-700">Սահմանաչափի 0.20% նվազագույնը 10,000 ՀՀ դրամ առավելագույնը 200,000 ՀՀ դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">10. Գործող սահմանաչափի ավելացում</td>
                      <td className="p-3 text-gray-700">ավելացվող մասի 0.20% նվազագույնը 10,000 ՀՀ դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">11. Հ/Ա գանձվող միջնորդավճար</td>
                      <td className="p-3 text-gray-700">0.5-3%, min 10,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">12. Սահմանաչափի վերահաստատում</td>
                      <td className="p-3 text-gray-700">10,000 ՀՀ դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">13. Հայտի ուսումնասիրման վճար</td>
                      <td className="p-3 text-gray-700">10,000 ՀՀ դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold bg-purple-50/50">14. Ապահովվածություն</td>
                      <td className="p-3 text-gray-700">
                        Հաճախորդի/պարտապանների անձնական երաշխավորություններ` ըստ պահանջի,<br />
                        Առանձին դեպքերում, բարձր ռիսկայնությամբ գործարքների դեպքում կարող է պահանջվել նաև լրացուցիչ գրավ[cite: 15]
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Փաստաթղթեր */}
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-neutral-900">
                  Փաստաթղթեր
                </h3>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-200 transition">
                  <a 
                    href="https://www.evoca.am/files/global_files/1/information-summary-loan-07-04-2026.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6400dc] font-bold underline hover:text-purple-800 block text-xs md:text-sm"
                  >
                    Տեղեկատվական ամփոփագիր (Վարկային պրոդուկտներ) 01.10.2026
                  </a>
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