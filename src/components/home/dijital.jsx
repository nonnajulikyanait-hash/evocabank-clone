import React from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Dijital() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Դիջիթալ Բաժնի Sub-Bar Նավարկություն */}
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            <span className="h-full flex items-center border-b-2 border-white text-white font-black whitespace-nowrap cursor-pointer">
              V-POS Տերմինալ
            </span>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              POS Տերմինալ
            </span>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Սակագներ
            </span>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Տերմինալի տեղադրման հայտ
            </span>
            <span className="h-full flex items-center text-purple-200 hover:text-white transition whitespace-nowrap cursor-pointer">
              Evoca Mobile POS' mPOS
            </span>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Դիջիթալ</span> &gt; <span className="text-gray-700 font-medium">V-POS Տերմինալ</span>
          </div>

          {/* Banner / Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                V-POS Տերմինալ
              </h1>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                <strong>V-POS-ը</strong> (virtual point of sale) վիրտուալ վճարային համակարգ է, որը հարմարավետ, ապահով և հեշտ լուծում է օնլայն առևտրով զբաղվող բիզնեսների համար։ Արագ և տեղում օնլայն վճարումներ կատարելն այսօր կարևոր նախապայման է Ձեր գնորդների համար։
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16158111599306/780x585.jpg" 
                alt="V-POS Terminal" 
                className="w-full max-w-md rounded-2xl shadow-sm object-cover"
              />
            </div>
          </div>

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
                Evocabank-ը կապահովի Ձեր կայքում V-POS տերմինալի տեղադրումը։ Այն հնարավորություն կտա Ձեզ խուսափել լրացուցիչ ծրագրային ծախսերից, սերտիֆիկացումից և հետագա ծրագրային ապահովումից[cite: 11]։
              </p>

              <p className="text-gray-800 leading-relaxed">
                Ձեր գնորդները կկարողանան գնումներ կատարել Ձեր կայքից ու վճարել դրանց համար իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով[cite: 11]։
              </p>

              <p className="text-gray-800 font-medium">
                V-POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում[cite: 11]։
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                Իսկ ինչո՞ւ տեղադրել Evocabank-ի V-POS տերմինալ՝[cite: 11]
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Օնլայն վաճառքների շնորհիվ կաճեն Ձեր եկամուտները[cite: 11],</li>
                <li>Evocabank-ը V-POS-ով կատարված վաճառքներից կգանձի նվազագույն միջնորդավճարներ՝ հատուկ Ձեր բիզնեսի համար[cite: 11],</li>
              </ul>

              <p className="font-bold text-gray-900 pt-2">
                Սպասարկման կետի գրանցման համար անհրաժեշտ V-POS տերմինալների տեղադրման ստանդարտ սակագներն են՝[cite: 11]
              </p>

              {/* Սակագների Աղյուսակ */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-gray-200 text-gray-900 font-bold">
                      <th className="p-3">Գործարքի տեսակ</th>
                      <th className="p-3">Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
                      <th className="p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa քարտերի դեպքում</th>
                      <th className="p-3">Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa քարտերի դեպքում</th>
                      <th className="p-3">QR կոդով վճարման դեպքում</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 font-medium bg-gray-50">Վճարվող գումարի չափ<sup>[1]</sup></td>
                      <td className="p-3">1.50%</td>
                      <td className="p-3">1.90%</td>
                      <td className="p-3">3.00%</td>
                      <td className="p-3">1%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50" colSpan="3">
                        200,000 (երկու հարյուր հազար) ՀՀ դրամը չգերազանցող շրջանառության պարագայում
                      </td>
                      <td className="p-3 font-bold text-neutral-900" colSpan="2">
                        3000<sup>[2]</sup>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium bg-gray-50" colSpan="3">
                        Վճարային էջի ստանդարտից դուրս դիզայնի պատվիրման պարագայում
                      </td>
                      <td className="p-3 font-bold text-neutral-900" colSpan="2">
                        20000<sup>[3]</sup>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Ծանոթագրություններ */}
              <div className="space-y-1 text-xs text-gray-500 pt-2 border-b border-gray-100 pb-4">
                <p><sup>[1]</sup> Կախված ոլորտի առանձնահատկություններից և շրջանառությունից՝ սակագները կարող են փոփոխվել[cite: 11]։</p>
                <p><sup>[2]</sup> Ներառյալ կիրառելի բոլոր հարկերը[cite: 11]։</p>
                <p><sup>[3]</sup> Ներառյալ կիրառելի բոլոր հարկերը[cite: 11]։</p>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 pt-2">
                <li>Վճարումներն անվտանգ են, գործում են 3D Secure Code անվտանգության համակարգերը[cite: 12],</li>
                <li>Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով[cite: 12],</li>
                <li>Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի մասնագետների կողմից[cite: 12],</li>
                <li>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին[cite: 12]։</li>
              </ul>

              <p className="text-gray-800 pt-2">
                V-POS տերմինալ տեղադրելու համար լրացրեք <span className="text-[#6400dc] font-bold underline cursor-pointer">Տերմինալի տեղադրման հայտը</span> հիմա[cite: 12]։
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                <li>Մեր մասնագետը 3 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը[cite: 12]։</li>
                <li>Պայմանագրի ստորագրումից հետո V-POS-ը կտեղադրվի Ձեր բիզնեսի կայքում[cite: 12]։</li>
              </ol>

              <p className="font-bold text-neutral-900 text-base pt-2">
                Կառուցեք Ձեր բիզնեսի թվային ապագան[cite: 12]։
              </p>

              <p className="text-gray-800 pt-4">
                Evocabank-ում այսուհետ գործում են բիզնես վարկ և բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա[cite: 12]։
              </p>

              {/* Փոքր Նկար */}
              <div className="py-4">
                <img 
                  src="https://www.evoca.am/file_manager/pos2-600x315.jpg" 
                  alt="POS Terminal Loan" 
                  className="w-full max-w-md rounded-2xl border border-gray-100 shadow-xs"
                />
              </div>

              {/* Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա */}
              <div className="pt-4 space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">
                  Բիզնես վարկ POS տերմինալի շրջանառության հիման վրա
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Եթե ունեք փոքր և միջին բիզնես ու իրականացնում եք անկանխիկ գործարքներ, ապա այս բիզնես վարկը Ձեզ համար է։ Մեզ մոտ փոքր և միջին բիզնեսներն ունեն հնարավորություն ձևակերպել արագ բիզնես վարկեր իրենց կարճաժամկետ ֆինանսական խնդիրները լուծելու համար։
                </p>

                <p className="font-bold text-[#6400dc]">Վարկի համար կարող են դիմել՝</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>ՀՀ ռեզիդենտ անհատ ձեռնարկատեր և իրավաբանական անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս</li>
                  <li>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության պայմանագիր</li>
                </ul>

                <p className="font-bold text-[#6400dc]">Որպես վարկի ապահովության միջոց կարող են հանդիսանալ՝</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>POS տերմինալի շրջանառություն</li>
                  <li>Անհրաժեշտության դեպքում ֆիզիկական և/կամ իրավաբանական անձի երաշխավորություն</li>
                </ul>

                <p className="text-gray-800">
                  Օգտվեք մեր կողմից տրվող հնարավորությունից և գրանցեք Ձեր նոր բիզնես հաջողությունները։
                </p>
                <p className="text-gray-800">
                  Վարկի պայմանների կարող եք ծանոթանալ <span className="text-[#6400dc] font-bold underline cursor-pointer">այստեղ</span>:
                </p>
              </div>

              {/* Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա */}
              <div className="pt-6 space-y-4 border-t border-gray-100">
                <h2 className="text-xl font-bold text-neutral-900">
                  Բիզնես օվերդրաֆտ POS տերմինալի շրջանառության հիման վրա
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Evocabank-ում կարող եք ձեռք բերել բիզնես օվերդրաֆտ՝ առանց ավելորդ թղթաբանության և ժամանակի կորստի։ Եթե կան կարճաժամկետ ֆինանսական խնդիրներ կամ պարզապես ցանկանում եք ավելի զարգացնել բիզնեսը, ապա մեզ մոտ շատ արագ և պարզ տարբերակով կարող եք ձևակերպել բիզնես օվերդրաֆտ։
                </p>

                <p className="font-bold text-[#6400dc]">Վարկի համար կարող են դիմել՝</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>ՀՀ ռեզիդենտ իրավաբանական և անհատ ձեռնարկատեր անձինք, ովքեր գրանցված գործունեություն են ծավալում առնվազն 12 ամիս</li>
                  <li>Այն հաճախորդները, ովքեր Evocabank-ի հետ ունեն կնքված POS տերմինալի համագործակցության առնվազն 6 ամսվա պայմանագիր</li>
                </ul>
              </div>

            </div>
          </div>
        </main>

        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}