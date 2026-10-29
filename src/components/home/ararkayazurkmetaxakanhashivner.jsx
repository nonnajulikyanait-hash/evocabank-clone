import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function ArarkayazurkMetaxakanHashivner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Հաշիվներ</span> &gt; <span className="text-gray-700 font-medium">Առարկայազուրկ մետաղական հաշիվներ</span>
          </div>

          {/* Top Banner Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                Առարկայազուրկ մետաղական հաշիվներ
              </h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի բարձրացման շնորհիվ:
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16154599304948/780x585.jpg" 
                alt="Առարկայազուրկ մետաղական հաշիվներ" 
                className="rounded-3xl shadow-sm object-cover w-full max-h-[350px]"
              />
            </div>
          </div>

          {/* Social Media Icons & Details */}
          <div className="flex gap-8 items-start mb-12">
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed">
              <h2 className="text-xl font-bold text-neutral-900 tracking-wide border-b border-gray-100 pb-3">
                Հիմնական պայմաններ
              </h2>

              <ul className="space-y-4 list-disc pl-5 text-gray-600">
                <li>
                  Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու գնանշումը կատարվում է գրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:
                </li>

                <li>
                  Հաշիվներում անկանխիկ ոսկին հաշվառում ենք դրամով` ՀՀ Կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):
                </li>

                <li>
                  Մետաղական հաշիվ/ներ բացելիս ղեկավարվում ենք ՀՀ օրենսդրությամբ, ՀՀ Կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:
                </li>

                <li>
                  Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ <span className="text-[#6400dc] underline font-bold cursor-pointer">այստեղ</span>:
                </li>

                <li>
                  Այս հաշիվներով կարող ենք իրականացնել հետևյալ գործառնությունները՝
                  <ul className="list-dash pl-5 mt-2 space-y-2 text-gray-700">
                    <li>
                      <strong>հաշվի համալրում՝</strong> բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,
                    </li>
                    <li>
                      <strong>հաշվի ելքագրում՝</strong> հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:
                    </li>
                  </ul>
                </li>

                <li>
                  Մետաղական հաշիվները կարող են գրավադրվել:
                </li>

                <li>
                  <strong>Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</strong>
                  
                  <div className="mt-4 space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 text-xs md:text-sm">
                    <div>
                      <h4 className="font-bold text-[#6400dc] mb-2">Իրավաբանական անձանց դեպքում`</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                        <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                        <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ փոխարինող այլ փաստաթուղթ):</li>
                        <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի գրանցող պետական մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ):</li>
                        <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
                        <li>Գործադիր մարմնի ղեկավար/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը, ինչպես նաև քաղվածքներ պաշտոնների նշանակման հրամաններից, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են:</li>
                        <li>Հաշվի կարգադրիչների անձնագրերը կամ նույնականացման քարտերը:</li>
                        <li>Կանոնադրական կապիտալում 10% և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ փաստաթղթեր:</li>
                        <li>Մեր պահանջով այլ փաստաթղթեր:</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#6400dc] mb-2">Անհատ ձեռնարկատերի դեպքում`</h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                        <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
                        <li>Անձնագիր կամ նույնականացման քարտ:</li>
                        <li>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝ քաղվածք պետական ռեգիստրից):</li>
                        <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
                        <li>Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ ձեռնարկատերի դեպքում, ստորագրության և նմուշի քարտում կատարվում է համապատասխան գրառում՝ կնիքի բացակայության վերաբերյալ:</li>
                        <li>Մեր պահանջով այլ փաստաթղթեր:</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}