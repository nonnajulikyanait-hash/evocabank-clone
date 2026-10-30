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
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Առևտրի ֆինանսավորում</span> &gt; <span className="text-gray-700 font-medium">Ակրեդիտիվ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Ակրեդիտիվ
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
                Փաստաթղթային ակրեդիտիվը (Letter of Credit կամ L/C) մեր գրավոր պարտավորությունն է (որը թողարկվում է գնորդի հանձնարարությամբ հօգուտ վաճառողի)՝ վճարելու որոշակի գումար ապրանք վաճառողին՝ վերջինիս կողմից ակրեդիտիվի պայմաններին համապատասխան փաստաթղթեր ներկայացնելու դեպքում[cite: 14]:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Ակրեդիտիվները թողարկվում են Առևտրի միջազգային պալատի մշակած միասնական կանոնների համաձայն (կախված առևտրային գործարքի պայմաններից և առանձնահատկություններից)[cite: 14]:
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                Ակրեդիտիվի թողարկման հիմնական պայմանները՝[cite: 14]
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Անհրաժեշտ է Ձեր հաշվին բացվելիք ակրեդիտիվի ծածկույթ, որն ամրագրվում է ձեր հատուկ ծածկույթի հաշվին[cite: 14]:</li>
                <li>Ձեր հատուկ ծածկույթի հաշվի ռեժիմը, հաշվի մնացորդի նկատմամբ հաշվարկվող տոկոսադրույքը և մյուս պայմանները սահմանվում են պայմանագրային կարգով[cite: 14]:</li>
                <li>Ձեր հաշվին սեփական միջոցների մասնակի առկայության կամ բացակայության դեպքում դիտարկում ենք ձեզ վարկային գիծ տրամադրելու հնարավորությունը[cite: 14]:</li>
              </ul>

              <p className="text-gray-800 leading-relaxed pt-2">
                Փաստաթղթային ակրեդիտիվների թողարկման վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնությունների» բաժին[cite: 14]:
              </p>

              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                Սակագներ
              </h2>

              {/* Սակագների աղյուսակ */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-gray-200">
                      <th className="p-3 font-bold text-neutral-900">Ակրեդիտիվի՝</th>
                      <th className="p-3 font-bold text-neutral-900">Սակագին</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- նախնական ծանուցում[cite: 15]</td>
                      <td className="p-3 text-gray-700">50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- ծանուցում[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- բացում[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- հաստատում[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- վճարում կամ նեգոցիացիա[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- փաստաթղթերի ընդունում, ստուգում, առաքում[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- պայմանների փոփոխում[cite: 15]</td>
                      <td className="p-3 text-gray-700">50,000 դրամ[cite: 15]</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">- չեղյալ համարում[cite: 15]</td>
                      <td className="p-3 text-gray-700">0,15% նվազ.՝ 50,000 դրամ[cite: 15]</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Նշում */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                <strong>Նշում</strong> – Այս դրույքներով և սակագներով սահմանված վճարներից բացի՝ գանձում ենք մեր փաստացի կատարած ծախսերի գումարը[cite: 15]:
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}