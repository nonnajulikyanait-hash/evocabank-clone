import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Gorcarqner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-6 md:py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Արժեթղթերի շուկա</span> &gt; <span className="text-gray-700 font-medium">Ռեպո/Հակադարձ ռեպո գործարքներ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
            Ռեպո/Հակադարձ ռեպո գործարքներ
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական տեքստ */}
            <div className="flex-1 space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed w-full">
              <p className="text-gray-800 leading-relaxed">
                Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
              </p>

              <p className="text-gray-800 leading-relaxed">
                Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
              </p>

              <p className="text-gray-800 leading-relaxed">
                Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
              </p>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}