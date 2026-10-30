import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Inkaso() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Առևտրի ֆինանսավորում</span> &gt; <span className="text-gray-700 font-medium">Ինկասո</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Ինկասո
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
                Ինկասոն վճարումների ստացման և պարտքերի մարման արագ, պարզ ու արդյունավետ գործիք է[cite: 15]:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Այն վաճառողի հանձնարարությունն է մեզ՝ մատակարարված ապրանքների փաստաթղթերը, վճարի դիմաց, փոխանցելու գնորդին: Ընդ որում, մենք վճարման որևէ պարտավորություն չենք ստանձնում, այլ կատարում ենք փաստաթղթերը փոխանցողի (միջնորդի) դեր[cite: 15]:
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                Ինկասոյի վճարման հիմնական ձևերն են՝[cite: 15]
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>
                  <strong>Փաստաթղթեր՝ վճարման դիմաց (Documents Against Payment or D/P).</strong> փաստաթղթերը տրամադրում ենք գնորդին՝ միայն նրա կողմից ապրանքների դիմաց վճարելուց հետո[cite: 15]:
                </li>
                <li>
                  <strong>Փաստաթղթեր՝ ակցեպտի դիմաց (Documents Against Acceptance or D/A).</strong> փաստաթղթերը տրամադրում ենք գնորդին՝ ապրանքների դիմաց հետագայում վճարելու պայմանով (վճարումների հետաձգման պարտավորագրի (մուրհակ) ակցեպտի դեպքում): Ինկասոյի այս ձևը կիրառվում է, երբ գնորդն ու վաճառողը պայմանավորվածություն ունեն վճարման հետաձգման վերաբերյալ[cite: 15]:
                </li>
              </ul>

              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                Սակագներ
              </h2>

              <p className="text-gray-800 leading-relaxed">
                Ինկասոյի գործառնությունների վերաբերյալ լրացուցիչ տեղեկություններ և խորհրդատվություն ստանալու համար կարող եք դիմել մեր Գլխամասային գրասենյակ՝ «Միջազգային և արտարժութային գործառնությունների» բաժին[cite: 15]:
              </p>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}