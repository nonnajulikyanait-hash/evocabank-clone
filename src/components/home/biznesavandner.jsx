import React from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function BiznesAvandner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Ավանդներ</span> &gt; <span className="text-gray-700 font-medium">Դասական ավանդ</span>
          </div>

          {/* Top Banner Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Դասական ավանդ
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Դասական ավանդը կայուն բարձր եկամտաբերությամբ կավելացնի ձեր խնայողությունները: Դասական ժամկետային ավանդն ընդունում ենք ֆիզիկական և իրավաբանական անձանցից: Ավանդ ներդնելիս ձեզ տրամադրում ենք անվճար միջազգային քարտ:
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/1615568375393/780x585.jpg" 
                alt="Դասական ավանդ" 
                className="rounded-3xl shadow-sm object-cover w-full max-h-[350px]"
              />
            </div>
          </div>

          {/* Social Icons & Information Sections */}
          <div className="flex gap-8 items-start mb-12">
            {/* Social media side tab */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            <div className="flex-1 space-y-8 text-xs md:text-sm text-gray-700 leading-relaxed">
              <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-wide border-b border-gray-100 pb-3">
                Անհրաժեշտ տեղեկատվություն
              </h2>

              {/* Ընդհանուր տեղեկատվություն */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Ընդհանուր տեղեկատվություն
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Ժամկետային ավանդներն ընդունում ենք ֆիզիկական (այդ թվում՝ անհատ ձեռնարկատեր) և իրավաբանական անձ հաճախորդներից (ռեզիդենտ, ոչ ռեզիդենտ)՝
                    <ul className="list-dash pl-5 mt-1 space-y-1 text-gray-700">
                      <li>դրամով, դոլարով, եվրոյով և ռուբլով,</li>
                      <li>կանխիկ և անկանխիկ տարբերակով:</li>
                    </ul>
                  </li>
                  <li>Ավանդներն ընդունում ենք մեր կողմից հաստատված պայմաններով և տոկոսադրույքներով:</li>
                  <li>Ավանդների ընդունման և վերադարձման գործընթացում ղեկավարվում ենք Օրենսդրությամբ, Կենտրոնական բանկի որոշումներով և այլ իրավական ակտերով:</li>
                  <li>
                    Մենք, օրենսդրական ակտերի համաձայն, ապահովում ենք ավանդի ներդրման և դրա հետ կապված այլ գործառնությունների գաղտնիությունը: Ավանդի վերաբերյալ տեղեկատվության տրամադրումը երրորդ անձանց կատարվում է բացառապես «Բանկային գաղտնիքի մասին» օրենքով սահմանված դեպքերում և ընթացակարգով:
                  </li>
                </ul>
                <p className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-gray-600">
                  <strong className="text-[#6400dc]">Ուշադրություն.</strong> Մեր կողմից պարբերաբար անցկացվող ավանդային ակցիաների պայմանները տարբերվում են մեր համակարգում ավանդների ներգրավման ընդհանուր պայմաններից և գործում են միայն պաշտոնապես հրապարակված ակցիայի շրջանակում ներգրավված ավանդների նկատմամբ:
                </p>
              </div>

              {/* Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Ավանդի տոկոսագումարների հաշվարկման և վճարման կարգը
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Տոկոսագումարները հաշվում ենք ավանդի փաստացի մնացորդի նկատմամբ՝ օրական կտրվածքով, պարզ եղանակով, ավանդային պայմանագրի ամբողջ ժամկետի համար: Ավանդի յուրաքանչյուր օրվա տոկոսադրույքը հաշվում ենք սահմանված տոկոսադրույքի 1/365, իսկ նահանջ տարվա համար՝ 1/366 հարաբերակցությամբ:</li>
                  <li>Տոկոսագումարները հաշվում ենք ավանդը բանկ մուտք լինելու օրվանից մինչև այն վերադարձնելու կամ ավանդային հաշվից այլ հիմքերով դուրս գրելու օրվան նախորդող օրն ընկած ժամանակահատվածի օրացույցային օրերի համար:</li>
                  <li>Ավանդների դիմաց հաշվեգրվող տոկոսագումարները վճարում ենք կանխիկ և անկանխիկ եղանակով՝ ավանդատուի ցանկությամբ տոկոսագումարները կարող են վճարվել այն արտարժույթով, որով ներգրավվել է ավանդը, ինչպես նաև ՀՀ դրամով` հիմք ընդունելով վճարման օրը տվյալ արտարժույթի համար մեր կողմից սահմանված անկանխիկ առքի փոխարժեքը:</li>
                  <li>
                    Ձեր ընտրությամբ տոկոսագումարները վճարում ենք հետևյալ տարբերակներով՝
                    <ul className="list-dash pl-5 mt-1 space-y-1 text-gray-700">
                      <li><strong>Տոկոսագումարների պարբերաբար վճարումով,</strong> որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները ձեզ վճարում ենք երկկողմանի համաձայնեցված ժամանակացույցով, կամ՝</li>
                      <li><strong>Տոկոսագումարների վճարմամբ՝ պայմանագրի ժամկետի վերջում,</strong> որի դեպքում ավանդի դիմաց հաշվեգրված տոկոսագումարները վճարում ենք պայմանագրի գործողության ավարտին (վերադարձնում ենք ավանդի գումարի հետ միասին):</li>
                    </ul>
                  </li>
                </ul>
                <p className="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 text-gray-600">
                  <strong className="text-[#6400dc]">Ուշադրություն՝</strong> Ձեր հաշվին առկա միջոցների նկատմամբ տոկոսագումարները հաշվում ենք ԱՆՎԱՆԱԿԱՆ տոկոսադրույքի հիման վրա, իսկ տարեկան ՏՈԿՈՍԱՅԻՆ ԵԿԱՄՏԱԲԵՐՈՒԹՅՈՒՆԸ ցույց է տալիս, թե որքան եկամուտ կստանայիք դուք, եթե ձեր ավանդի դիմաց ստացված տոկոսագումարները վերաներդնեիք ավանդի տեսքով: Տարեկան տոկոսային եկամտաբերության հաշվարկման կարգին (Կանոնակարգ 8-02) կարող եք ծանոթանալ <a href="https://www.cba.am" target="_blank" rel="noreferrer" className="text-[#6400dc] font-bold underline">www.cba.am</a> կայքում:
                </p>
              </div>

              {/* Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Ավանդային հաշվի վերաբերյալ տրամադրվող տեղեկատվություն
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Պայմանագրի գործողության ընթացքում պարտավոր ենք առնվազն 30-օրյա պարբերականությամբ ձեզ տրամադրել յուրաքանչյուր ավանդային հաշվի վերաբերյալ համապատասխան քաղվածք:</li>
                  <li>Քաղվածքները ձեզ տրամադրում ենք գրավոր՝ փոստային կապի միջոցով, բացառությամբ այն դեպքի, երբ դուք գրավոր, այդ թվում՝ էլեկտրոնային դիմումի հիման վրա հրաժարվել եք հաշվի քաղվածքները փոստային կապի միջոցով ստանալու իրավունքից՝ դրանք էլեկտրոնային կամ կապի այլ միջոցներով, կամ մեր տարածքում առձեռն ստանալու պայմանով։ Հաշվի քաղվածքների տրամադրման եղանակն ամրագրվում է Ավանդային պայմանագրով:</li>
                  <li>Ավանդային հաշվի վերաբերյալ քաղվածքների կրկնօրինակների կամ այլ տեղեկատվության (հաշվի վերաբերյալ տեղեկանքներ) տրամադրման դիմաց ձեզանից գանձվում է միջնորդավճար՝ ըստ մեր սակագների, որոնք ներկայացված են Ընթացիկ հաշիվներ բաժնում:</li>
                </ul>
              </div>

              {/* Այլ պայմաններ */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Այլ պայմաններ
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Եթե պայմանագրի ժամկետի ավարտից հետո չեք պահանջում վճարել ժամկետային ավանդի գումարը կամ պայմանագրով նախատեսված հանգամանքները երևան գալուց հետո վերադարձնել այլ պայմաններով ներդրված ավանդի գումարը, ապա ավանդային պայմանագիրը համարվում է երկարաձգված ցպահանջ ավանդի պայմաններով, եթե այլ բան նախատեսված չէ պայմանագրով:</li>
                  <li>Մենք չենք կարող միակողմանի նվազեցնել պայմանագրով որոշված ավանդի տոկոսագումարների չափը, որը դուք ներդրել եք որոշակի ժամկետի ավարտից կամ պայմանագրով նախատեսված հանգամանքները վրա հասնելուց հետո այն հետ ստանալու պայմանով, եթե այլ բան նախատեսված չէ օրենքով:</li>
                  <li>Օրենսդրությամբ սահմանված կարգով՝ դուք իրավունք ունեք ավանդ ներդնել երրորդ անձանց անունով:</li>
                </ul>
              </div>

              {/* Երաշխավորված ավանդների սահմանաչափերը */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#6400dc]">
                  Երաշխավորված ավանդների սահմանաչափերը
                </h3>
                <p className="text-gray-600">
                  Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված հաշվարկային, ընթացիկ, ժամկետային, խնայողական կամ այլ հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ: ՀՀ օրենքով երաշխավորված ավանդները հատուցում է Ավանդների հատուցումը երաշխավորող հիմնադրամը: Եթե դուք անվճարունակ բանկում ունեք՝
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                  <li><strong>Միայն դրամային ավանդ</strong> ապա երաշխավորված ավանդի չափը 16 միլիոն դրամ է:</li>
                  <li><strong>Միայն արտարժութային ավանդ</strong> ապա երաշխավորված ավանդի չափը 7 միլիոն դրամ է:</li>
                  <li><strong>Դրամային ու արտարժութային ավանդներ,</strong> և դրամային ավանդը 7 միլիոն դրամից ավելի է, ապա երաշխավորվում է միայն դրամային ավանդը՝ մինչև 16 միլիոն դրամով:</li>
                  <li><strong>Դրամային ու արտարժութային բանկային ավանդներ,</strong> և ձեր դրամային ավանդի գումարը պակաս է 7 միլիոն դրամից, ապա երաշխավորվում է դրամային ավանդն ամբողջությամբ և արտարժութային ավանդը՝ 7 միլիոն դրամի և հատուցված դրամային բանկային ավանդի տարբերության չափով:</li>
                </ul>
                <p className="text-xs text-gray-500 italic pt-1">
                  <strong>Ծանոթագրություն.</strong> Նույն բանկում ունեցած ձեր բոլոր դրամային ավանդները համարվում են մեկ ավանդ, և բոլոր արտարժութային ավանդները՝ մեկ ավանդ: Եթե ունեք ավանդներ ՀՀ տարածքում գործող մի քանի բանկերում, ապա դրանք երաշխավորվում են յուրաքանչյուր բանկում`առավելագույն սահմանաչափով։
                </p>
              </div>

              {/* ----------------- ՊԱՅՄԱՆՆԵՐ ԵՎ ՍԱԿԱԳՆԵՐ ----------------- */}
              <div className="pt-6 space-y-4">
                <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-wide border-b border-gray-100 pb-3">
                  Պայմաններ և սակագներ
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="w-full text-center border-collapse text-xs md:text-sm bg-white">
                    <thead>
                      <tr className="bg-purple-50 text-[#6400dc] font-bold">
                        <th className="border-b border-r border-gray-200 p-3 text-left">
                          Ներգրավվող գումարների սահմանաչափեր ըստ արժույթի
                        </th>
                        <th className="border-b border-r border-gray-200 p-3" colSpan="5">
                          Տարեկան տոկոսադրույք ըստ ժամկետների
                        </th>
                      </tr>
                      <tr className="bg-gray-50 text-gray-700 font-semibold text-[11px] md:text-xs">
                        <th className="border-b border-r border-gray-200 p-2.5"></th>
                        <th className="border-b border-r border-gray-200 p-2.5">91 - 180 օր</th>
                        <th className="border-b border-r border-gray-200 p-2.5">181 - 365 օր</th>
                        <th className="border-b border-r border-gray-200 p-2.5">366 - 545 օր</th>
                        <th className="border-b border-r border-gray-200 p-2.5">546 - 730 օր</th>
                        <th className="border-b border-gray-200 p-2.5">731 - 1095 օր</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-bold text-left border-r border-gray-200">200,000 - 25,000,000 ՀՀ դրամ</td>
                        <td className="p-3 border-r border-gray-200">6 %</td>
                        <td className="p-3 border-r border-gray-200">8 %</td>
                        <td className="p-3 border-r border-gray-200">9.5 %</td>
                        <td className="p-3 border-r border-gray-200">10 %</td>
                        <td className="p-3">10.5 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-left border-r border-gray-200">500 - 50,000 ԱՄՆ դոլար</td>
                        <td className="p-3 border-r border-gray-200">2 %</td>
                        <td className="p-3 border-r border-gray-200">3 %</td>
                        <td className="p-3 border-r border-gray-200">4 %</td>
                        <td className="p-3 border-r border-gray-200">4.5 %</td>
                        <td className="p-3">5 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-left border-r border-gray-200">500 - 40,000 Եվրո</td>
                        <td className="p-3 border-r border-gray-200">1 %</td>
                        <td className="p-3 border-r border-gray-200">1.5 %</td>
                        <td className="p-3 border-r border-gray-200">2 %</td>
                        <td className="p-3 border-r border-gray-200">2.5 %</td>
                        <td className="p-3">3 %</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-left border-r border-gray-200">30,000 - 3,000,000 ՌԴ ռուբլի</td>
                        <td className="p-3 border-r border-gray-200">5 %</td>
                        <td className="p-3 border-r border-gray-200">5.5 %</td>
                        <td className="p-3 border-r border-gray-200">6 %</td>
                        <td className="p-3 border-r border-gray-200 text-gray-300">-</td>
                        <td className="p-3 text-gray-300">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Ավանդն ընդունվում է ֆիզիկական և իրավաբանական անձանցից, ինչպես Բանկի գործունեության վայրում, այնպես էլ` «EvocaTouch» կամ «EvocaOnline» հեռակառավարման համակարգերի միջոցով:</li>
                  <li>Տոկոսագումարների պարբերաբար (ամենամսյա, եռամսյակային, կիսամյակային, տարեկան) վճարման դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք:</li>
                  <li>
                    Ավանդատուն կարող է համալրել (ավելացնել) իր Ավանդի գումարը սկսած նվազագույնը 200.000 ՀՀ դրամից, 500 ԱՄՆ դոլարից, 500 Եվրոյից կամ 30,000 ՌԴ ռուբլուց:
                    <br />
                    Ավելացման հնարավորությամբ ավանդ ներդնելու դեպքում ՀՀ դրամով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.5 %-ով պակաս տոկոսադրույք, իսկ ԱՄՆ դոլարով, Եվրոյով և ՌԴ ռուբլով ավանդների համար սահմանվում է վերոհիշյալ սանդղակի տոկոսադրույքներից 0.25 %-ով պակաս տոկոսադրույք: Կատարված բոլոր համալրումների հանրագումարը չի կարող գերազանցել Ավանդի ներդրման սկզբնական գումարը: Ավանդային պայմանագրի գործողության վերջին 3 (երեք) ամիսների ընթացքում Ավանդի գումարի համալրում չի թույլատրվում:
                  </li>
                  <li>
                    Ավանդատուի պահանջով ավանդային պայմանագիրը ժամկետից շուտ լուծելու դեպքում Բանկը իրականացնում է Ավանդի տոկոսագումարների վերահաշվարկ հետևյալ դրույքաչափերով՝
                    <div className="overflow-x-auto rounded-xl border border-gray-200 my-3">
                      <table className="w-full text-center border-collapse text-xs bg-white">
                        <thead>
                          <tr className="bg-purple-50 text-[#6400dc] font-bold">
                            <th className="border-b border-r border-gray-200 p-2.5 text-left">Ավանդի արժույթ</th>
                            <th className="border-b border-r border-gray-200 p-2.5">Մինչև 365 օր</th>
                            <th className="border-b border-gray-200 p-2.5">366 - 1095 օր</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="p-2.5 font-bold text-left border-r border-gray-200">ՀՀ դրամ</td>
                            <td className="p-2.5 border-r border-gray-200">0.5 %</td>
                            <td className="p-2.5">8.5 %</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-left border-r border-gray-200">ԱՄՆ դոլար</td>
                            <td className="p-2.5 border-r border-gray-200">0.1 %</td>
                            <td className="p-2.5">3.5 %</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-left border-r border-gray-200">Եվրո</td>
                            <td className="p-2.5 border-r border-gray-200">0.1 %</td>
                            <td className="p-2.5">1.5 %</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-bold text-left border-r border-gray-200">ՌԴ ռուբլի</td>
                            <td className="p-2.5 border-r border-gray-200">0.1 %</td>
                            <td className="p-2.5">5 %</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                  <li>Ավանդի գումարի մասնակի նվազեցում չի թույլատրվում:</li>
                </ol>
              </div>

              {/* ----------------- ԼՐԱՑՈՒՑԻՉ ՊԱՅՄԱՆՆԵՐ ----------------- */}
              <div className="pt-4 space-y-4">
                <h2 className="text-xl md:text-2xl font-black text-neutral-900 tracking-wide border-b border-gray-100 pb-3">
                  Լրացուցիչ պայմաններ
                </h2>

                <ol className="list-decimal pl-5 space-y-3 text-gray-600">
                  <li>Ավանդատուի ցանկության դեպքում, Բանկը կարող է տրամադրել վճարային քարտ առանց տարեկան սպասարկման վճարի գանձման:</li>
                  <li>
                    Տրամադրվող վճարային քարտի տեսակները, ըստ ներդրվող ավանդի գումարի սահմանվում է ստորև.
                    <div className="overflow-x-auto rounded-xl border border-gray-200 my-3">
                      <table className="w-full text-center border-collapse text-xs md:text-sm bg-white">
                        <thead>
                          <tr className="bg-purple-50 text-[#6400dc] font-bold">
                            <th className="border-b border-r border-gray-200 p-3 text-left">Ավանդի արժույթ</th>
                            <th className="border-b border-r border-gray-200 p-3">Mastercard Standart / Visa Classic</th>
                            <th className="border-b border-r border-gray-200 p-3">Mastercard Gold / Visa Gold</th>
                            <th className="border-b border-gray-200 p-3">VISA Infinite</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="p-3 font-bold text-left border-r border-gray-200">ՀՀ դրամ</td>
                            <td className="p-3 border-r border-gray-200">500,000 – 25,000,000</td>
                            <td className="p-3 border-r border-gray-200">25,000,001 – 50,000,000</td>
                            <td className="p-3">50,000,001 և ավել</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-left border-r border-gray-200">ԱՄՆ դոլար</td>
                            <td className="p-3 border-r border-gray-200">1,000 – 50,000</td>
                            <td className="p-3 border-r border-gray-200">50,001 – 100,000</td>
                            <td className="p-3">100,001 և ավել</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-left border-r border-gray-200">Եվրո</td>
                            <td className="p-3 border-r border-gray-200">1,000 – 40,000</td>
                            <td className="p-3 border-r border-gray-200">40,001 – 100,000</td>
                            <td className="p-3">100,001 և ավել</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-left border-r border-gray-200">ՌԴ ռուբլի</td>
                            <td className="p-3 border-r border-gray-200">60,000 – 3,000,000</td>
                            <td className="p-3 border-r border-gray-200">3,000,001 – 7,000,000</td>
                            <td className="p-3">7,000,001 և ավել</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ol>
              </div>

            </div>
          </div>
        </main>

        {/* Evoca Online & Mobile Section */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}