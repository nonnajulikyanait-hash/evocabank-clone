import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Hashtarar() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Ֆին. հաշտարար</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
            Ֆին. հաշտարար
          </h1>

          <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            
            <p>
              Ֆինանսական համակարգի հաշտարարի գրասենյակն անկախ կառավարման համակարգով կառույց է, որի հիմնադիրն է ՀՀ կենտրոնական բանկը: Հաշտարարի գրասենյակը կոչված է լուծելու ֆիզիկական անձ սպառողների և ֆինանսական կազմակերպությունների միջև ծագած գույքային վեճերը:
            </p>

            <p className="font-semibold text-neutral-900">
              Հաշտարարի ծառայություններն անվճար են:
            </p>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">Ֆինանսական համակարգի հաշտարարի գործունեության նպատակներն են՝</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
                <li>ֆինանսական ոլորտում սպառողների իրավունքների ու շահերի պաշտպանությունը,</li>
                <li>սպառողների պահանջների արագ, արդյունավետ և անվճար քննությունը,</li>
                <li>ֆինանսական համակարգի նկատմամբ հանրության վստահության բարձրացումը:</li>
              </ul>
            </div>

            <div className="pt-2">
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">Ֆինանսական համակարգի հաշտարարի գրասենյակ՝</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <p><strong className="text-neutral-900">Ֆինանսական համակարգի գլխավոր հաշտարար, Գրասենյակի կառավարիչ՝</strong> Վազգեն Մնացականյան</p>
                <p><strong className="text-neutral-900">Հաշտարար՝</strong> Փիրուզ Սարգսյան</p>
                <p><strong className="text-neutral-900">Հասցե՝</strong> ՀՀ, 0010, ք. Երևան, Մ. Խորենացու փող., 15, «Էլիտ Պլազա» բիզնես կենտրոն 7-րդ հարկ</p>
                <p><strong className="text-neutral-900">Հեռ.՝</strong> +374 60 70-11-11</p>
                <p><strong className="text-neutral-900">Ֆաքս՝</strong> +374 10 58-24-21</p>
                <p>
                  <strong className="text-neutral-900">Էլ. հասցե՝</strong>{' '}
                  <a href="mailto:info@fsm.am" className="text-[#6400dc] hover:underline font-semibold">info@fsm.am</a>
                </p>
                <p>
                  <strong className="text-neutral-900">Պաշտոնական կայք՝</strong>{' '}
                  <a href="https://www.fsm.am" target="_blank" rel="noreferrer" className="text-[#6400dc] hover:underline font-semibold">www.fsm.am</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-2">Աշխատանքային ժամեր՝</h2>
              <p>
                Ֆինանսական համակարգի հաշտարարի գրասենյակն աշխատում է ամեն օր ժամը 09:00 - 18:00 (ընդմիջման ժամ՝ 13:00-ից 14:00), բացի հանգստյան և տոն օրերից:
              </p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}