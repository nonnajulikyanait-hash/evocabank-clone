import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Iravakan() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Իրավական ակտեր</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-8 md:mb-10">
            Իրավական ակտեր
          </h1>

          {/* 1. Օրենքներ բաժին */}
          <div className="mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 border-b border-gray-100 pb-3">
              Օրենքներ
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6400dc] font-medium">
              <li><a href="#cb-law" className="hover:underline">Կենտրոնական բանկի մասին ՀՀ օրենք</a></li>
              <li><a href="#civ-code" className="hover:underline">ՀՀ քաղաքացիական օրենսգիրք</a></li>
              <li><a href="#bank-law" className="hover:underline">Բանկերի և բանկային գործունեության մասին ՀՀ օրենք</a></li>
              <li><a href="#bankruptcy-law" className="hover:underline">Բանկերի, վարկային կազմակերպությունների, ներդրումային ընկերությունների, ներդրումային ֆոնդի կառավարիչների և ապահովագրական ընկերությունների սնանկության մասին ՀՀ օրենք</a></li>
              <li><a href="#secret-law" className="hover:underline">Բանկային գաղտնիքի մասին ՀՀ օրենք</a></li>
              <li><a href="#deposits-law" className="hover:underline">Ֆիզիկական անձանց բանկային ավանդների հատուցումը երաշխավորելու մասին ՀՀ օրենք</a></li>
              <li><a href="#credit-law" className="hover:underline">Սպառողական կրեդիտավորման մասին ՀՀ օրենք</a></li>
              <li><a href="#inv-deposits-law" className="hover:underline">Բանկային ավանդների ներգրավման մասին ՀՀ օրենք</a></li>
              <li><a href="#mortgage-law" className="hover:underline">Բնակարանային հիփոթեքային կրեդիտավորման մասին ՀՀ օրենք</a></li>
              <li><a href="#privacy-law" className="hover:underline">Անձնական տվյալների պաշտպանության մասին ՀՀ օրենք</a></li>
            </ul>
          </div>

          {/* 2. Կանոնակարգեր և այլ իրավական ակտեր */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6 border-b border-gray-100 pb-3">
              Կանոնակարգեր և այլ իրավական ակտեր
            </h2>
            <ol className="space-y-4 text-xs sm:text-sm text-neutral-700 list-decimal pl-5">
              <li>
                <a href="#reg-1" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 1 «Բանկերի և օտարերկրյա բանկերի մասնաճյուղերի գրանցումն ու լիցենզավորումը, բանկերի մասնաճյուղերի և ներկայացուցչությունների գրանցումը, բանկերի և օտարերկրյա բանկերի մասնաճյուղերի ղեկավարների որակավորումը և գրանցումը»
                </a>
              </li>
              <li>
                <a href="#reg-2" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 2 «Բանկերի գործունեության կարգավորումը, բանկային գործունեության հիմնական տնտեսական նորմատիվները»
                </a>
              </li>
              <li>
                <a href="#reg-3" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 3 «Բանկերի հաշվետվությունները, դրանց ներկայացումը և հրապարակումը»
                </a>
              </li>
              <li>
                <a href="#reg-4" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 4 «Բանկերի ներքին հսկողության իրականացման նվազագույն պայմանները»
                </a>
              </li>
              <li>
                <a href="#reg-7" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 7 «Անվճարունակ բանկերի և վարկային կազմակերպությունների ժամանակավոր ադմինիստրացիայի ձևավորման կարգն ու ժամկետները, ժամանակավոր ադմինիստրացիայի ղեկավարի կողմից ներկայացվող հաշվետվությունները»
                </a>
              </li>
              <li>
                <a href="#reg-8-1" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/01 «Տարեկան փաստացի տոկոսադրույքի հաշվարկման բացատրություններ և օրինակներ»
                </a>
              </li>
              <li>
                <a href="#reg-8-2" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/02 «Բանկային ավանդների տարեկան տոկոսային եկամտաբերության հաշվարկումը»
                </a>
              </li>
              <li>
                <a href="#reg-8-3" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/03 «Բանկերի, վարկային կազմակերպությունների, ապահովագրական ընկերությունների, ապահովագրական բրոքերների, ներդրումային ընկերությունների, ներդրումային ֆոնդերի կառավարիչների, կենտրոնական դեպոզիտարիայի և դրամական փոխանցումներ իրականացնող վճարահաշվարկային կազմակերպությունների կողմից տեղեկությունների հրապարակումը»
                </a>
              </li>
              <li>
                <a href="#reg-8-4" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/04 «Հաճախորդների բողոք-պահանջների քննության գործընթացը կարգավորող ներքին իրավական ակտերին ներկայացվող նվազագույն պայմաններ և սկզբունքներ»
                </a>
              </li>
              <li>
                <a href="#reg-8-5" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/05 «Բանկի և ավանդատուի, կրեդիտավորողի և սպառողի հաղորդակցման կարգը, պայմանները, ձևերը և նվազագույն պահանջները»
                </a>
              </li>
              <li>
                <a href="#reg-8-6" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/06 «Բանկերի ու վարկային կազմակերպությունների կողմից երաշխավորների հետ գործարար վարվելակերպի կանոնների կիրարկման եղանակների և ընթացակարգերի պահանջներ»
                </a>
              </li>
              <li>
                <a href="#reg-8-7" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 8/07 «Ֆինանսական համակարգի մասնակիցներին ուղղված բողոքների հաշվառման, պահպանման և գրանցման ներքին գործընթացին ներկայացվող նվազագույն պայմաններ և սկզբունքներ»
                </a>
              </li>
              <li>
                <a href="#reg-9" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 9 «Հայաստանի Հանրապետության տարածքում գործող բանկերում կանխիկ դրամով կատարվող գործառնությունները»
                </a>
              </li>
              <li>
                <a href="#reg-11-1" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 11/01 «Արտարժույթի առուվաճառքի և արտարժույթի առուվաճառքի սակարկությունների ընթացքում գնային չարաշահումների արգելումը, գնային չարաշահումների ազդակները և Կենտրոնական բանկին գնային չարաշահումների մասին տեղեկացման կարգը»
                </a>
              </li>
              <li>
                <a href="#reg-20" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 20 «Ֆինանսական կազմակերպությունների ինքնալուծարման նախնական համաձայնության, ինքնալուծարման թույլտվության տրամադրման համար պահանջվող փաստաթղթերը և տեղեկությունները, լուծարային հանձնաժողովի նախագահի և անդամների, ժամանակավոր ադմինիստրացիայի ղեկավարի, լուծարային կառավարչի և հիփոթեքային կառավարչի որակավորման պահանջները...»
                </a>
              </li>
              <li>
                <a href="#reg-20-1" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 20/01 «Ֆինանսական խմբերի ճանաչման և ֆինանսական խումբ որակումը դադարեցնելու, ֆինանսական խմբերի կազմում փոփոխությունների կատարման, ֆինանսական խմբերի պատասխանատու անձանց նշանակման կարգը, ֆինանսական խմբերի տեսակները»
                </a>
              </li>
              <li>
                <a href="#reg-20-2" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 20/02 «Ֆինանսական խմբերի տնտեսական նորմատիվների սահմանաչափերը, հաշվարկման կարգը, հաշվարկին մասնակցող տարրերի կազմը և հաշվարկման պարբերականությունը»
                </a>
              </li>
              <li>
                <a href="#reg-20-3" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 20/03 «Ֆինանսական խմբերի կողմից Հայաստանի Հանրապետության կենտրոնական բանկ ներկայացվող հաշվետվությունները և դրանց ներկայացման հաճախականությունը»
                </a>
              </li>
              <li>
                <a href="#reg-20-4" className="text-[#6400dc] hover:underline font-medium">
                  Կանոնակարգ 20/04 «Ֆինանսական խմբերի ներքին հսկողության իրականացման նվազագույն պայմանները»
                </a>
              </li>
              <li>
                <span>Հայաստանի Հանրապետության տարածքում գործող բանկերի վարկերի ու դեբիտորական պարտքերի դասակարգման եւ հնարավոր կորուստների պահուստների ձեւավորման կարգ</span>
              </li>
              <li>
                <span>Հայաստանի Հանրապետության տարածքում գործող բանկերի ինվեստիցիոն արժեթղթերում ներդրումների հնարավոր կորուստների պահուստի ձեվավորման եվ օգտագործման կարգի մասին թիվ 188 որոշում</span>
              </li>
              <li>
                <span>Բանկերի հրապարակվող ֆինանսական հաշվետվությունների օրինական ձևերի լրաման ցուցումների մասին թիվ 205-Ն որոշում և այլն։</span>
              </li>
            </ol>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}