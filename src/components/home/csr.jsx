import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function CSR() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Ընդհանուր</Link>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white cursor-pointer">Կառուցվածք</Link>
            <Link to="/mer-masin/bajneterer" className="text-purple-200 hover:text-white cursor-pointer">Բաժնետերեր</Link>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white cursor-pointer">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <Link to="/mer-masin/mrcanakner" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">CSR</span>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">CSR</span>
          </div>

          {/* Top Section: Title/Description and Image side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight">
                Կորպորատիվ<br />
                Սոցիալական<br />
                Պատասխանատվություն
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Մենք մեծ կարևորություն ենք տալիս CSR-ին՝ ապահովելով մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:
              </p>
            </div>
            <div>
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png" 
                alt="CSR Illustration" 
                className="rounded-3xl shadow-sm w-full object-cover"
              />
            </div>
          </div>

          {/* Detailed Content Section */}
          <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed pt-6">
            <p>
              <strong>Evocabank</strong>-ում Կորպորատիվ սոցիալական պատասխանատվությունը կարևորագույն արժեք է, որն արտացոլվում է Բանկի գրեթե բոլոր նախաձեռնություններում։ Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և հասարակական նախաձեռնություններին հետևյալ ոլորտներում՝
            </p>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Նորագույն տեխնոլոգիաների զարգացում,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#6400dc] font-bold">—</span>
                <span>Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:</span>
              </li>
            </ul>

            <p className="pt-4 font-medium text-neutral-900">
              Մեր բոլորի կողմից Կորպորատիվ սոցիալական պատասխանատվությանն ուղղված յուրաքանչյուր փոքրիկ քայլ վկայում է աշխարհն ավելի լուսավոր ու գեղեցիկ դարձնելու կարևորության մասին։
            </p>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}