import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Evocabridge() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Manushakaguyn Sub-bar */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/praktika" className="text-purple-200 hover:text-white transition">Աշխատանք Evoca-ում</Link>
            <Link to="/usumnakan" className="text-purple-200 hover:text-white transition">Ուսումնական պրակտիկա</Link>
            <Link to="/evocabridge" className="border-b-2 border-white pb-1 cursor-pointer font-black">EvocaBRIDGE</Link>
          </div>
        </div>

        <main className="space-y-16 pb-20">
          {/* Top Banner with Image */}
          <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-gray-900">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/17377293888049/1920x634.jpg" 
              alt="EvocaBRIDGE" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-16">
              <div className="container mx-auto max-w-6xl space-y-2">
                <h1 className="text-3xl md:text-5xl font-black text-white">
                  EvocaBRIDGE
                </h1>
                <p className="text-purple-200 text-sm md:text-base font-medium">
                  EvocaBRIDGE: Bridging Ideas, Shaping The Future
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            
            {/* Intro text */}
            <div className="bg-purple-50/50 border border-purple-100 rounded-3xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl md:text-2xl font-black text-neutral-950">
                Չունե՞ս աշխատանքային փորձ, բայց փնտրու՞մ ես աշխատանք, ուրեմն EvocaBRIDGE ծրագիրը քեզ համար է!
              </h2>
              <ul className="space-y-3 text-neutral-700 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>երկամսյա խորացված ուսումնական ծրագիր,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>ծանոթացում նորարար բանկային միջավայրին ներսից,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>գործնական կապերի հաստատում,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>ամսական 180.000 ՀՀ դրամ վարձատրություն` ներառյալ հարկերը և այլ պարտադիր վճարումները,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>անմիջապես ծրագրի ավարտից հետո աշխատանքի անցնելու հնարավորություն:</span>
                </li>
              </ul>
            </div>

            {/* Who can participate */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-neutral-950">
                💼 EvocaBRIDGE-ին կարող ես մասնակցել, եթե...
              </h3>
              <ul className="space-y-3 text-neutral-700 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>սովորում ես համալսարանի 4-րդ կուրսում, մագիստրատուրայում կամ մինչև 1 տարի է՝ ինչ ավարտել ես համալսարանը,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>ունես բարձր առաջադիմություն,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>հետաքրքրասեր ես, ակտիվ ու նպատակասլաց,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">✓</span>
                  <span>սիրում ես բացահայտել նորը, սովորել և զարգանալ:</span>
                </li>
              </ul>
            </div>

            {/* How to apply */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-neutral-950">
                💼 EvocaBRIDGE-ին մասնակցելու համար <a href="mailto:evocabridge@evoca.am" className="text-[#6400dc] underline font-bold">evocabridge@evoca.am</a> էլեկտրոնային հասցեին ուղարկիր.
              </h3>
              <ul className="space-y-3 text-neutral-700 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>ինքնակենսագրական,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>ՄՈԳ-ի ցուցանիշը հաստատող տեղեկանք,</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6400dc] font-bold">•</span>
                  <span>«Նամակ ապագայից» այն մասին, թե ինչպես ես ամենամեծ 2 նպատակներդ դարձրել հաջողված նախագծեր:</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-gray-500 pt-2 border-t border-gray-200">
                Նախնական ընտրությունն անցած թեկնածուների հետ կիրականացվեն անհատական հարցազրույցներ, որի արդյունքում կընտրվեն ծրագրի մասնակիցները:
              </p>
            </div>

            {/* Program Details / Phases */}
            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-black text-neutral-950">
                Ծրագրի մանրամասներ․
              </h3>
              <p className="text-neutral-700 text-sm md:text-base font-semibold">
                Evoca-ն իրականացվում է 3 փուլերով:
              </p>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-2xl p-6 space-y-2 bg-white shadow-xs">
                  <h4 className="font-bold text-neutral-950 text-base">Փուլ 1: Տեսական ուսուցում</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Տեսական ուսուցման ընթացքում մասնակիցներն ունենում են հանդիպումներ Բանկի մի շարք ստորաբաժանումների ղեկավարների հետ, ստանում խորացված գիտելիքներ բանկային պրոդուկտների, ծառայությունների և մի շարք գործընթացների վերաբերյալ:
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 space-y-2 bg-white shadow-xs">
                  <h4 className="font-bold text-neutral-950 text-base">Փուլ 2: Գործնական փուլ</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Գործնական փուլի շրջանակում մասնակիցները հնարավորություն են ունենում տեսական և գործնական գիտելիքները կիրառել պրակտիկ միջավայրում: Այս փուլի ընթացքում մասնակիցները նաև ներգրավվում են նախագծերի մշակման և ներկայացման հետաքրքիր գործընթացում:
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 space-y-2 bg-white shadow-xs">
                  <h4 className="font-bold text-neutral-950 text-base">Փուլ 3: Թեստավորում և ավարտ</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Տեսական և գործնական փուլերի ավարտից հետո իրականացվում է թեստավորում և ավարտական նախագծերի հանձնում։ Լավագույն արդյունք ցուցաբերած մասնակիցները ստանում են աշխատանքի առաջարկ Evocabank-ից և սկսում իրենց մասնագիտական ուղին։
                  </p>
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