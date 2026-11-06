import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function Dibrary() {
  const partnerImages = [
    { id: 1, url: 'https://www.evoca.am/file_manager/Dibrary/1_Ebso.jpg', alt: 'EBSCO' },
    { id: 2, url: 'https://www.evoca.am/file_manager/Dibrary/Openstax.jpg', alt: 'Openstax' },
    { id: 3, url: 'https://www.evoca.am/file_manager/Dibrary/5_Logo_OAPEN.png', alt: 'OAPEN' },
    { id: 4, url: 'https://www.evoca.am/file_manager/Dibrary/N.jpg', alt: 'Partner' },
    { id: 5, url: 'https://www.evoca.am/file_manager/Dibrary/2_Sp[1].jpg', alt: 'Springer' },
    { id: 6, url: 'https://www.evoca.am/file_manager/Dibrary/3_POlP.jpg', alt: 'Polpred' },
    { id: 7, url: 'https://www.evoca.am/file_manager/Dibrary/431ea875.jpg', alt: 'Library' },
    { id: 8, url: 'https://www.evoca.am/file_manager/Dibrary/RS.jpg', alt: 'Open Textbook Library' },
    { id: 9, url: 'https://www.evoca.am/file_manager/Dibrary/Library.ru.jpg', alt: 'Library.ru' },
    { id: 10, url: 'https://www.evoca.am/file_manager/Dibrary/4_71691ad9.jpg', alt: 'DOAJ' },
    { id: 11, url: 'https://www.evoca.am/file_manager/Dibrary/e6797964.jpg', alt: 'Partner' },
    { id: 12, url: 'https://www.evoca.am/file_manager/Dibrary/NLA.jpg', alt: 'DOAB' },
    { id: 13, url: 'https://www.evoca.am/file_manager/Dibrary/4_Doab.jpg', alt: 'OER Commons' },
    { id: 14, url: 'https://www.evoca.am/file_manager/Dibrary/1_c55c00d4.jpg', alt: 'Opendoor' },
    { id: 15, url: 'https://www.evoca.am/file_manager/Dibrary/OpD.jpg', alt: 'Duke University Press' },
    { id: 16, url: 'https://www.evoca.am/file_manager/Dibrary/Duke.jpg', alt: 'JSTOR' },
    { id: 17, url: 'https://www.evoca.am/file_manager/Dibrary/5_JS[1].jpg', alt: 'Open Book Publishers' },
    { id: 18, url: 'https://www.evoca.am/file_manager/Dibrary/2_OBP.jpg', alt: 'Sage Journals' },
    { id: 19, url: 'https://www.evoca.am/file_manager/Dibrary/Sage.jpg', alt: 'Partner' },
    { id: 20, url: 'https://www.evoca.am/file_manager/Dibrary/3e144dee.jpg', alt: 'Quest' },
    { id: 21, url: 'https://www.evoca.am/file_manager/Dibrary/6_Quest.jpg', alt: 'Journals4free' },
    { id: 22, url: 'https://www.evoca.am/file_manager/Dibrary/Logo_Journals4free.png', alt: 'ScienceDirect' },
    { id: 23, url: 'https://www.evoca.am/file_manager/Dibrary/SD.jpg', alt: 'OKM' },
    { id: 24, url: 'https://www.evoca.am/file_manager/Dibrary/OKM.jpg', alt: 'Dibrary' },
    { id: 25, url: 'https://www.evoca.am/file_manager/Dibrary/dibrary-2.jpg', alt: 'Open Knowledge Repository' },
    { id: 26, url: 'https://www.evoca.am/file_manager/Dibrary/4_Logo_OpenKnowledgeRepository.png', alt: 'Elgar' },
    { id: 27, url: 'https://www.evoca.am/file_manager/Dibrary/Elg.jpg', alt: 'Search' },
    { id: 28, url: 'https://www.evoca.am/file_manager/Dibrary/Search.jpg', alt: 'BookBoon' },
    { id: 29, url: 'https://www.evoca.am/file_manager/Dibrary/Logo_BookBoon.png', alt: 'Ideas' },
    { id: 30, url: 'https://www.evoca.am/file_manager/Dibrary/ideas.png', alt: 'Partner' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Dibrary</span>
          </div>

          {/* Վերնագիր և մեծ նկար */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight mb-4">
                Dibrary - Digital Library
              </h1>
              <p className="text-sm text-gray-700 leading-relaxed">
                Evocabank-ի նոր և գերժամանակակից «Թումանյան» մասնաճյուղում` Թումանյան 15 հասցեով, բացի ստանդարտ բանկային ծառայություններից, կգործի նաև Dibrary – digital library:
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16117479662777/780x585.jpg" 
                alt="Dibrary Digital Library" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            
            <p>
              <strong>#dibrary</strong>-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝ e-Duke Journals Scholarly Collection, ASTM Compass, Edward Elgar Publishing Journals, Mathematical Sciences Publishers Journals, Royal Society Journals Collection, SAGE Premier և այլն․․․
            </p>

            <p>
              <strong>#dibrary</strong>-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսները։ Բացի էլեկտրոնային նյութերից, #dibrary-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելլերները, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն։
            </p>

            <p>
              <strong>#dibrary</strong>-ի բացման գործում մեզ աջակցել են՝ DLAA-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia), Ավետիք Իսահակյանի անվան գրադարանը և American Corner Yerevan-ը։ Նրանց աջակցության շնորհիվ՝ #dibrary-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի։
            </p>

          </div>

          {/* Փոքր նկարների ցանց (Partners Grid) */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-base font-bold text-neutral-900 mb-6 text-center">
              Գործընկեր գրադարաններ և հարթակներ
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
              {partnerImages.map((img) => (
                <div key={img.id} className="bg-gray-50 border border-gray-200 rounded-xl p-3 h-20 flex items-center justify-center transition-all hover:shadow-sm">
                  <img 
                    src={img.url} 
                    alt={img.alt} 
                    className="max-h-12 w-auto object-contain"
                    onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}