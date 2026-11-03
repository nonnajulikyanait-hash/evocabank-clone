import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Բոլորը');

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Բլոգ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Բլոգ
          </h1>

          {/* Ֆիլտրեր / Կատեգորիաներ */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 mb-12 text-xs font-semibold text-gray-600">
            {['Բոլորը', 'Բիզնես', 'Կենսակերպ', 'Ներդրումներ'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#6400dc] text-white font-bold'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-[#6400dc]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Քարտեր կողք կողքի (3 հատ) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Քարտ 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="h-56 overflow-hidden bg-gray-50">
                  <img 
                    src="https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg" 
                    alt="2021-ի ամենասպասված ֆիլմերը" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                    Կենսակերպ
                  </span>
                  <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                    2021-ը դարձել է կինո պրեմիերաների մրցավազք
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Fast & Furious 9, No Time to Die, Dune, Free Guy և այս տարվա ամենասպասված ու քննարկվող կինոպրեմիերաները:
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                01.02.2021
              </div>
            </div>

            {/* Քարտ 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="h-56 overflow-hidden bg-gray-50">
                  <img 
                    src="https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.jpg" 
                    alt="2021-ի ամենասպասված 21 սերիալները" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                    Կենսակերպ
                  </span>
                  <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                    2021-ի ամենասպասված 21 սերիալները
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Ձեզ ենք ներկայացնում 2021-ի #mustwatch սերիալները՝ ըստ պաշտոնական և ոչ պաշտոնական տվյալների:
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                18.01.2021
              </div>
            </div>

            {/* Քարտ 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex flex-col justify-between group">
              <div>
                <div className="h-56 overflow-hidden bg-gray-50">
                  <img 
                    src="https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.jpg" 
                    alt="Ապագայի ամենապահանջված մասնագիտությունները" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                    Կենսակերպ
                  </span>
                  <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                    Ապագայի ամենապահանջված մասնագիտությունները
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    Կիսվենք ձեզ հետ ապագայի ամենապահանջված մասնագիտություններով և զարգացման միտումներով:
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                22.06.2020
              </div>
            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}