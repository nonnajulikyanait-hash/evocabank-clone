import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Akreditiv() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Առևտրի ֆինանսավորում</span> &gt; <span className="text-gray-700 font-medium">Ակրեդիտիվ</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-neutral-900 mb-8">
            Ակրեդիտիվ
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed w-full">
              <p className="text-gray-800 leading-relaxed">
                Փաստաթղթային ակրեդիտիվը (Letter of Credit կամ L/C) մեր գրավոր պարտավորությունն է (որը թողարկվում է գնորդի հանձնարարությամբ հօգուտ վաճառողի)՝ վճարելու որոշակի գումար ապրանք վաճառողին՝ վերջինիս կողմից ակրեդիտիվի պայմաններին համապատասխան փաստաթղթեր ներկայացնելու դեպքում:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Ակրեդիտիվները թողարկվում են Առևտրի միջազգային պալատի մշակած միասնական կանոնների համաձայն (կախված առևտրային գործարքի պայմաններից և առանձնահատկություններից):
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                Ակրեդիտիվի թողարկման հիմնական պայմանները՝
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Անհրաժեշտ է Ձեր հաշվին բացվելիք ակրեդիտիվի ծածկույթ, որն ամրագրվում է ձեր հատուկ ծածկույթի հաշվին:</li>
                <li>Ձեր հատուկ ծածկույթի հաշվի ռեժիմը, հաշվի մնացորդի նկատմամբ հաշվարկվող տոկոսադրույքը և մյուս պայմանները սահմանվում են պայմանագրային կարգով:</li>
                <li>Ձեր հաշվին սեփական միջոցների մասնակի առկայության կամ բացակայության դեպքում դիտարկում ենք ձեզ վարկային գիծ տրամադրելու հնարավորությունը:</li>
              </ul>

              <p className="text-gray-800 leading-relaxed pt-2">
                Փաստաթղթային ակրեդիտիվների թողարկման վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնությունների» բաժին:
              </p>

              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                Սակագներ
              </h2>

              {/* Սակագների աղյուսակ */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white w-full">
                <table className="w-full text-left border-collapse text-xs md:text-sm min-w-[450px]">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-gray-200">
                      <th className="p-3 font-bold text-neutral-900">Ակրեդիտիվի՝</th>
                      <th className="p-3 font-bold text-neutral-900">Սակագին</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-medium text-gray-800">նախնական ծանուցում</td>
                      <td className="p-3 text-gray-700">50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">ծանուցում</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">բացում</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">հաստատում</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">վճարում կամ նեգոցիացիա</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">փաստաթղթերի ընդունում, ստուգում, առաքում</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">պայմանների փոփոխում</td>
                      <td className="p-3 text-gray-700">50,000 դրամ</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">չեղյալ համարում</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Նշում */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                <strong>Նշում</strong> – Այս դրույքներով և սակագներով սահմանված վճարներից բացի՝ գանձում ենք մեր փաստացի կատարած ծախսերի գումարը:
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}