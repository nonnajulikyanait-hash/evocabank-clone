import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Chapanishner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Հաճախորդի ռեզիդենտության չափանիշներ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Հաճախորդի ռեզիդենտության չափանիշներ
          </h1>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            
            {/* Ո՞վ է համարվում ՀՀ ռեզիդենտ */}
            <div>
              <h2 className="text-lg font-bold text-neutral-900 mb-2">Ո՞վ է համարվում ՀՀ ռեզիդենտ։</h2>
              <p className="mb-2">
                Ձեր Ռեզիդենտության կարգավիճակը որոշվում է՝ հաշվի առնելով երկու կարևոր հանգամանք։
              </p>
              <p className="font-semibold text-neutral-900 mb-2">Դուք համարվում եք ՀՀ ռեզիդենտ, եթե</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>տվյալ հարկային տարում ՀՀ-ում գտնվել եք 183 և ավել օր,</li>
                <li>Ձեր կենսական շահերի կենտրոնը ՀՀ-ում է։</li>
              </ul>
              <p>
                Կենսական շահերի կենտրոնը գնահատելիս կարող են հաշվի առնվել, օրինակ, Ձեր ընտանիքի բնակության վայրը, մշտական բնակության վայրը, հիմնական աշխատանքը կամ բիզնեսը, գույքը, եկամուտների աղբյուրներն ու տնտեսական գործունեությունը։
              </p>
            </div>

            {/* ՀՀ ռեզիդենտ չե՞ք */}
            <div className="pt-4 border-t border-gray-100">
              <h2 className="text-lg font-bold text-neutral-900 mb-2">ՀՀ ռեզիդենտ չե՞ք։</h2>
              <p className="mb-3">
                Դուք այլ երկրի քաղաքացի եք և չե՞ք համապատասխանում ՀՀ ռեզիդենտության չափանիշներին։<br />
                Բանկի հաճախորդ կարող եք դառնալ, եթե բավարարում եք ստորև նշված պայմաններից <strong>առնվազն մեկին</strong>․
              </p>

              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong className="text-neutral-900">Անշարժ գույք ՀՀ-ում</strong>
                  <p className="text-gray-600 mt-0.5">ՀՀ-ում ունեք անշարժ գույք և դրա նկատմամբ սեփականության իրավունքը հաստատող գրանցման վկայական։</p>
                </li>
                <li>
                  <strong className="text-neutral-900">Ավանդ՝ առնվազն 6 ամիս ժամկետով</strong>
                  <p className="text-gray-600 mt-0.5 mb-1">Evocabank-ում պատրաստվում եք ներդնել առնվազն 6 ամիս ժամկետով ավանդ հետևյալ սահմանաչափերով՝</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>20,000 ԱՄՆ դոլար,</li>
                    <li>20,000 եվրո,</li>
                    <li>1,500,000 ՌԴ ռուբլի</li>
                    <li>կամ դրանց համարժեք ՀՀ դրամ</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-neutral-900">Անհատ ձեռնարկատեր ՀՀ-ում</strong>
                  <p className="text-gray-600 mt-0.5">ՀՀ-ում գրանցված եք որպես անհատ ձեռնարկատեր և ունեք համապատասխան գրանցման վկայական։</p>
                </li>
                <li>
                  <strong className="text-neutral-900">Մասնակից կամ բաժնետեր ՀՀ-ում գրանցված ընկերությունում</strong>
                  <p className="text-gray-600 mt-0.5">ՀՀ-ում գրանցված ընկերության բաժնետեր եք, և այդ կարգավիճակը հաստատված է համապատասխան փաստաթղթերով։</p>
                </li>
              </ol>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}