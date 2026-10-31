import React from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Terminal() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Դիջիթալ</span> &gt; <span className="text-gray-700 font-medium">POS Տերմինալ</span>
          </div>

          {/* Banner / Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                POS Տերմինալ
              </h1>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                <strong>POS-ը</strong> (point of sale) վճարային համակարգ է, որն օգտագործվում է անկանխիկ վճարումներ ընդունելու համար։ Արագ և տեղում վճարումներ կատարելն այսօր կարևոր նախապայման է Ձեր գնորդների համար։
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16158085302978/780x585.jpg" 
                alt="POS Terminal" 
                className="w-full max-w-md rounded-2xl shadow-sm object-cover"
              />
            </div>
          </div>

          <div className="flex gap-8 items-start mb-12">
            {/* Соц. сети */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Основной контент */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <p className="text-gray-800 leading-relaxed">
                Ձեր գնորդները կկարողանան գնումներ կատարել իրենց միջազգային VISA, Mastercard և տեղական ArCa վճարային քարտերով։
              </p>

              <p className="text-gray-800 font-medium">
                POS-ը հասանելի կլինի ինչպես Ձեր կայքում, այնպես էլ՝ մոբայլ հավելվածում։
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                Իսկ ինչո՞ւ տեղադրել Evocabank-ի POS տերմինալ՝
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Evocabank-ը POS-ով կատարված վաճառքներից կգանձի <strong>նվազագույն միջնորդավճարներ</strong>՝ հատուկ Ձեր բիզնեսի համար,
                </li>
              </ul>

              <p className="font-bold text-gray-900 pt-2">
                Սպասարկման կետի գրանցման համար անհրաժեշտ POS, ՀԴՄ-POS, mPOS, VENDISTA տերմինալների տեղադրման <span className="text-[#6400dc] underline cursor-pointer">ստանդարտ սակագներ ու պայմաններ</span>։
              </p>

              {/* Таблица 1 */}
              <div className="space-y-3 pt-2">
                <p className="font-semibold text-gray-800">
                  1. Եթե վաճառակետի գործունեության տեսակը չի համընկնում <span className="text-[#6400dc] font-bold underline cursor-pointer">ԿԲ կողմից ներկայացված տեսակի կոդին</span> կամ գերազանցում է տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը `
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-purple-50/50 border-b border-gray-200 text-gray-900 font-bold">
                        <th className="p-3">Գործարքի տեսակ</th>
                        <th className="p-3">Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
                        <th className="p-3">Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
                        <th className="p-3">Ոչ Արքա համակարգի ներքո թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
                        <th className="p-3">QR կոդով վճարման դեպքում</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Վճարվող գումարի չափ</td>
                        <td className="p-3">1.5 %</td>
                        <td className="p-3">1.7 %</td>
                        <td className="p-3">3.0 %</td>
                        <td className="p-3">1 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" colSpan="2">
                          Յուրաքանչյուր տերմինալից գանձվող ամսական միջնորդավճարի նվազագույն չափ (ՀՀ դրամ)
                        </td>
                        <td className="p-3 font-bold text-neutral-900" colSpan="3">
                          <div className="space-y-1">
                            <div>Բանկի կողմից տրամադրված POS տերմինալ: <strong>10,000</strong></div>
                            <div>Բանկի կողմից տրամադրված ՀԴՄ-POS: <strong>7,000</strong></div>
                            <div>Տնտեսվարողի ՀԴՄ-POS տերմինալ: <strong>3,000</strong></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic">
                  mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում:
                </p>
              </div>

              {/* Таблица 2 */}
              <div className="space-y-3 pt-6">
                <p className="font-semibold text-gray-800">
                  2. Եթե վաճառակետի գործունեության տեսակը համընկնում է <span className="text-[#6400dc] font-bold underline cursor-pointer">ԿԲ կողմից ներկայացված տեսակի կոդին</span> և չի գերազանցում տարեկան 150.000.000 ՀՀ դրամի իրացման շրջանառության շեմը՝
                </p>

                <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-purple-50/50 border-b border-gray-200 text-gray-900 font-bold">
                        <th className="p-3">Գործարքի տեսակ</th>
                        <th className="p-3">Արքա /ArCa/ վճարային համակարգի քարտերով կատարված գործարքների դեպքում</th>
                        <th className="p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված MasterCard, Visa քարտերի դեպքում առավելագույնը</th>
                        <th className="p-3">ՀՀ տարածքում գործող բանկերի կողմից թողարկված UPay քարտերի դեպքում</th>
                        <th className="p-3">Արտասահմանյան բանկերի կողմից թողարկված MasterCard, Visa, UPay քարտերի դեպքում</th>
                        <th className="p-3">QR կոդով վճարման դեպքում</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 font-medium bg-gray-50">Վճարվող գումարի չափ</td>
                        <td className="p-3">max 0.5 %</td>
                        <td className="p-3">max 0.9 %</td>
                        <td className="p-3">1.7 %</td>
                        <td className="p-3">3.0 %</td>
                        <td className="p-3">1 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium bg-gray-50" colSpan="2">
                          50.000 ՀՀ դրամ քարտային շրջանառության շեմը չգերազանցելու դեպքում յուրաքանչյուր տերմինալից գանձվող ամսական ընդհանուր միջնորդավճարների առավելագույն սահմանաչափ (ՀՀ դրամ)
                        </td>
                        <td className="p-3 font-bold text-neutral-900" colSpan="4">
                          <div className="space-y-1">
                            <div>Ք. Երևան: <strong>4,600</strong></div>
                            <div>Մարզային քաղաքներ: <strong>3,000</strong></div>
                            <div>Գյուղեր: <strong>1,000</strong></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 italic">
                  mPOS և VENDISTA տերմինալների մասով ամսական միջնորդավճարների նվազագույն չափ չի սահմանվում:
                </p>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 pt-4">
                <li>Վճարման պարզ գործընթաց, Ձեր գնորդները վճարում կկատարեն 1 քայլով,</li>
                <li>Անվճար տեխնիկական խորհրդատվություն և տեխնիկական սպասարկում Բանկի մասնագետների կողմից,</li>
                <li>Անհատական մոտեցում Ձեր բիզնեսին ու կայքին։</li>
              </ul>

              <p className="text-gray-800 pt-2">
                1. POS տերմինալ տեղադրելու համար լրացրեք հայտը հենց հիմա։
              </p>

              <p className="text-gray-700 pl-4">
                Մեր մասնագետը 1 աշխատանքային օրում կապ կհաստատի Ձեզ հետ, կներկայացնի պայմանները, կպատասխանի Ձեր բոլոր հարցերին և կպատրաստի գործընթացի համար անհրաժեշտ բոլոր փաստաթղթերը։
              </p>

              <p className="font-bold text-neutral-900 text-base pt-2">
                Կառուցեք Ձեր ապագան Evocabank-ի հետ։
              </p>

            </div>
          </div>
        </main>

        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}