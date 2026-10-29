import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function ImportantInformation() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />

      {/* Purple Sub-header Bar with Active State */}
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="opacity-80 hover:opacity-100 cursor-pointer">
            Վարկեր
          </Link>
          <Link to="/credit-history-and-score" className="opacity-80 hover:opacity-100 cursor-pointer">
            Վարկային պատմություն և uScore
          </Link>
          <Link to="/important-information" className="border-b-2 border-white pb-1 cursor-pointer">
            Կարևոր տեղեկատվություն
          </Link>
        </div>
      </div>

      {/* Breadcrumb & Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 text-left">
        {/* Breadcrumbs */}
        <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-gray-600">🏠</Link> &gt; 
          <span>Անհատ</span> &gt; 
          <Link to="/loans" className="hover:text-gray-600">Վարկեր</Link> &gt; 
          <span className="text-gray-700 font-medium">Կարևոր տեղեկատվություն</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-neutral-900 mb-8">
          Կարևոր տեղեկատվություն
        </h1>

        {/* Social Share Buttons */}
        <div className="flex gap-2 mb-8">
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">
            f
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">
            in
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">
            O
          </button>
        </div>

        {/* Section 1: Ushadrutyun */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Ուշադրություն
        </h2>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-12">
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարում եք դրան հաջորդող աշխատանքային օրվա ընթացքում:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Վարկի մարման ժամանակացույցը խախտելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով։</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ։</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p className="font-bold">ՎԱՐԿ ՍՏԱՆԱԼՈՒ ՀԱՄԱՐ ԴԻՄԵԼԻՍ ՎԱՐԿԱՏՈՒՆ ՁԵԶ ԿՏՐԱՄԱԴՐԻ ՍՊԱՌՈՂԱԿԱՆ ՎԱՐԿԻ ԷԱԿԱՆ ՊԱՅՄԱՆՆԵՐԻ ԱՆՀԱՏԱԿԱՆ ԹԵՐԹԻԿ, ՈՐՈՒՄ ԿՆԵՐԿԱՅԱՑՎԵՆ ՁԵԶ ՏՐԱՄԱԴՐՎԵԼԻՔ ՎԱՐԿԻ ԱՆՀԱՏԱԿԱՆ ՊԱՅՄԱՆՆԵՐԸ:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Վարկի տոկոսագումարները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա, իսկ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ ցույց է տալիս, թե որքան կարժենա վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (ՀՀ ԿԲ Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (www.cba.am):</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Բանկը Ձեզ, ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով 30-օրյա պարբերականությամբ կտրամադրի վարկի վերաբերյալ քաղվածք:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Պայմանագրի գործողության ընթացքում բողոքներ ունենալու դեպքում կարող եք դրանք ներկայացնել Բանկին: Ձեր կողմից ներկայացված բողոքների քննության գործընթացը ներկայացված է www.evoca.am կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք պայմանագրից բխող բողոք-պահանջները ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատարանի միջոցով: Իրավունքների պաշտպանության գործընթացը նկարագրված է www.evoca.am կայքում և Բանկի գործունեության վայրերում տեղակայաված «Ի՞նչ անել, եթե բողոք ունեք» ձևաթղթում:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p className="font-bold text-red-600">ԶԳՈՒՇԱՑՈՒՄ՝ ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ԳՐԱՖԻԿՈՎ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐՈՒՄ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԿԱՄ ԹԵՐԻ ԿԱՏԱՐԵԼՈՒ ԴԵՊՔԵՐՈՒՄ ԲԱՆԿԸ 3 ԱՇԽԱՏԱՆՔԱՅԻՆ ՕՐՎԱ ԸՆԹԱՑՔՈՒՄ ՁԵՐ ՏՎՅԱԼՆԵՐԸ (ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՉԿԱՏԱՐՄԱՆ, ԹԵՐԻ ԿԱՏԱՐՄԱՆ ՄԱՍԻՆ ՏԵՂԵԿՈՒԹՅՈՒՆՆԵՐԸ) ՈՒՂԱՐԿՈՒՄ Է ՎԱՐԿԱՅԻՆ ԲՅՈՒՐՈ:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>ՏԵՂԵԿԱՑՈՒՄ. Հարգելի հաճախորդ, տեղեկացնում ենք, որ Ձեր կողմից ներկայացված վարկի ստացման դիմում-հայտերի քանակը, այդ թվում` հեռահար եղանակներով (տարբեր տեխնիկածրագրային լուծումներով և հավելվածներով), անկախ հաստատումից կամ մերժումից, բացասական ազդեցություն է ունենալու Ձեր վարկային ամփոփ գնահատականի վրա:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա: ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆԸ Ձեր ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունների այն ամբողջությունն է, որը հավաքվում, կուտակվում և պարբերաբար նորացվում է Ձեզ վարկ տրամադրած կազմակերպությունների և/կամ Վարկային բյուրոյի կողմից: Վարկային պատմությունը ուսումնասիրվում է վարկավորում իրականացնող կազմակերպությունների կողմից Ձեր վարկային հայտը դիտարկելու ընթացքում և մեծ դեր է խաղում վարկի տրամադրման որոշման կայացման հարցում:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p className="font-bold">ՏՈԿՈՍԱԳՈՒՄԱՐՆԵՐԻ և ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՈՒՄՆԵՐԸ ԺԱՄԱՆԱԿԻՆ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ, ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:</p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
            <p>Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե ձեր վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ ձեր այլ գույքերի հաշվին:</p>
          </div>
        </div>

        {/* Section 2: Credit History Info */}
        <h2 className="text-2xl font-black text-neutral-900 mb-4">
          Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
        </h2>
        <p className="text-sm font-bold text-gray-800 mb-6">
          Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վրա:
        </p>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed mb-12">
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Ինչ է վարկային պատմությունը
            </h3>
            <p className="pl-4 text-gray-600 mb-2">«Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:</p>
            <p className="pl-4 text-gray-600">Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Որոնք են վարկային պատմության ձևավորման աղբյուրները
            </h3>
            <p className="pl-4 text-gray-600">Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ(տվյալներ):</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Ինչ է վարկային բյուրոն
            </h3>
            <p className="pl-4 text-gray-600 mb-2">Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Ինչ է վարկային զեկույցը
            </h3>
            <p className="pl-4 text-gray-600">Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Որքան ժամանակ է պահպանվում վարկային պատմությունը
            </h3>
            <p className="pl-4 text-gray-600">Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Ինչպես բարելավել վարկային պատմությունը
            </h3>
            <p className="pl-4 text-gray-600">Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:</p>
          </div>
          <div>
            <h3 className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc]"></span> Ուր դիմել եթե վարկային պատմությունը սխալ է
            </h3>
            <p className="pl-4 text-gray-600">Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն կարող է դիմել վարկային բյուրոյին կամ ուղղակիորեն տեղեկատվություն տրամադրող սուբյեկտին:</p>
          </div>
        </div>

        {/* Section 3: Criteria */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Դրական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները</li>
              <li>Մշտական բնակության վայրը</li>
              <li>Կայուն եկամտի աղբյուրը</li>
              <li>Դրական կամ չեզոք վարկային պատմությունը</li>
              <li>Արժանահավատ և լիարժեք փաստաթղթերը</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Բացասական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Ոչ արժանահավատ փաստաթղթերը ներկայացնելը</li>
              <li>Բացասական վարկային պատմությունը</li>
              <li>Եկամտի աղբյուրի ռիսկայնությունը</li>
              <li>Գրավի պայմանագրի համար անհրաժեշտ փաստաթղթեր չներկայացնելը</li>
            </ul>
          </div>
        </div>

        {/* Section 4: State Fees */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Պետական տուրքեր և այլ ծախսեր
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 mb-12 list-disc pl-5">
          <li><strong>Գրավադրվող գույքի գնահատում`</strong> 10,000-150,000 դրամ՝ կախված գույքի տեսակից և մակերեսից:</li>
          <li><strong>Նոտարական ձևակերպման ծախսեր՝</strong> 10,000-30,000 դրամ:</li>
          <li><strong>Գրավի գրանցման ծախսեր՝</strong> անշարժ գույքի դեպքում՝ սկսած 26,400 ՀՀ դրամից:</li>
          <li><strong>Գրավադրվող գույքի ապահովագրում՝</strong> վարկի մնացորդի 0.15% – 2.5%-ի չափով:</li>
        </ul>

        {/* Section 5: APR and Formulas */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Տարեկան փաստացի տոկոսադրույքի հաշվարկման օրինակ
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          Բանկը իր կողմից տրամադրած վարկի դիմաց հաշվարկում է տարեկան փաստացի տոկոսադրույք (APR)` հիմք ընդունելով հետևյալ բանաձևը.
        </p>
        <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-2xl">
          <img src="https://www.evoca.am/file_manager/formula-1.jpg" alt="Formula 1" className="max-w-full" />
        </div>
        <p className="text-sm text-gray-700 mb-4">Անուիտետային եղանակով վարկի մարման գումարը որոշվում է հետևյալ բանաձևով.</p>
        <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-2xl">
          <img src="https://www.evoca.am/file_manager/formula-2.jpg" alt="Formula 2" className="max-w-full" />
        </div>
        <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-2xl">
          <img src="https://www.evoca.am/file_manager/formula-3.jpg" alt="Formula 3" className="max-w-full" />
        </div>
        <div className="mb-6 flex justify-center bg-gray-50 p-4 rounded-2xl">
          <img src="https://www.evoca.am/file_manager/formula-4.jpg" alt="Formula 4" className="max-w-full" />
        </div>
        <p className="text-sm text-gray-700 mb-12">
          Այսպիսով՝ վարկի տարեկան փաստացի տոկոսադրույքը կկազմի <strong>19.95 %</strong>:
        </p>

        {/* Section 6: Floating Rate Table */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Անցյալ և ներկա փոփոխական բաղադրիչների արժեքները
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#6400dc] text-white">
                <th className="p-3 border">Ամսաթիվ</th>
                <th className="p-3 border">ՀՀ դրամ</th>
                <th className="p-3 border">ԱՄՆ դոլար</th>
                <th className="p-3 border">Եվրո</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["15/07/2019", "6.0%", "0.5%", "0.0%"],
                ["15/01/2020", "6.0%", "0.5%", "0.0%"],
                ["15/07/2020", "6.0%", "0.5%", "0.0%"],
                ["15/01/2021", "6.0%", "0.5%", "0.0%"],
                ["15/07/2021", "7.0%", "0.5%", "0.0%"],
                ["15/12/2021", "8.0%", "0.5%", "0.0%"],
                ["01/08/2022", "9.0%", "1.0%", "0.0%"],
                ["01/02/2023", "9.0%", "1.0%", "0.0%"],
                ["01/08/2023", "9.0%", "1.0%", "0.0%"],
                ["01/02/2024", "9.0%", "1.0%", "0.0%"],
                ["01/08/2024", "9.0%", "1.0%", "0.0%"],
                ["01/02/2025", "8.5%", "1.0%", "0.0%"],
                ["01/08/2025", "8.0%", "1.0%", "0.0%"],
                ["01/02/2026", "7.5%", "1.0%", "0.0%"],
                ["01/08/2026", "7%", "1.0%", "0.0%"]
              ].map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{row[0]}</td>
                  <td className="p-3 border">{row[1]}</td>
                  <td className="p-3 border">{row[2]}</td>
                  <td className="p-3 border">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 7: Insurance Companies Table */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Բանկի հետ համագործակցող ապահովագրական ընկերությունների ցանկ
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#6400dc] text-white">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Անվանում</th>
                <th className="p-3 border">Գտնվելու վայր</th>
                <th className="p-3 border">Հեռախոսահամարներ</th>
                <th className="p-3 border">Էլ. փոստ</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "«ԻՆԳՈ ԱՐՄԵՆԻԱ» ապահովագրական ՓԲԸ", "ք. Երևան, Հանրապետության 51.53", "+374 10 543134", "info@ingoarmenia.am"],
                [2, "«ԷՖԵՍ» ապահովագրական ՓԲԸ", "ք. Երևան, Զարոբյան 11", "+374 10 700 800", "info@efes.am"],
                [3, "«ՆԱԻՐԻ ԻՆՇՈՒՐԱՆՍ» ՍՊԸ", "ք. Երևան, Ավետ Ավետիսյան 116/1", "+374 10 539457", "nairi@nairi-insurance.am"],
                [4, "«ԼԻԳԱ ԻՆՇՈՒՐԱՆՍ» ՓԲԸ", "ք. Երևան, Հյուսիսային պողոտա 1", "+374 10 591010", "info@liga.am"],
                [5, "«ՍԻԼ ԻՆՇՈՒՐԱՆՍ» ԱՓԲԸ", "ք. Երևան, Արամի փող. 3 և 5", "+374 60 580000", "info@silinsurance.am"],
                [6, "«ԱՐՄԵՆԻԱ ԻՆՇՈՒՐԱՆՍ» ՍՊԸ", "ք. Երևան, Վարդանանց 16", "+374 11 560404", "info@armeniainsurance.am"],
                [7, "ՌԵԳՈ ԻՆՇՈՒՐԱՆՍ ԱՓԲԸ", "ք. Երևան, Կոմիտասի պող. 62", "+374 60 505757", "info@regoinsurance.am"]
              ].map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{row[0]}</td>
                  <td className="p-3 border font-bold">{row[1]}</td>
                  <td className="p-3 border">{row[2]}</td>
                  <td className="p-3 border">{row[3]}</td>
                  <td className="p-3 border text-[#6400dc]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 8: Evaluators Table */}
        <h2 className="text-2xl font-black text-neutral-900 mb-6">
          Բանկի հետ համագործակցող գնահատող կազմակերպությունների ցանկ
        </h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#6400dc] text-white">
                <th className="p-3 border">#</th>
                <th className="p-3 border">Անվանում</th>
                <th className="p-3 border">Գտնվելու վայր</th>
                <th className="p-3 border">Հեռախոսահամարներ</th>
                <th className="p-3 border">Էլ. փոստ</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, "«ԱՐ ՎԻ ԷՄ ՔՈՆՍԱԼՏ» ՍՊԸ", "ք.Երևան, Տպագրիչների 9/114", "+374 10 546490", "info@rvmconsult.am"],
                [2, "«ԲԻԼԴ ԱՓ» ՍՊԸ", "ք. Երևան, Զաքյան 5-1", "+374 10 547160", "buildup@rambler.ru"],
                [3, "«ԿՈՍՏ ԿՈՆՍԱԼՏ» ՍՊԸ", "ք. Երևան, Հանրապետության 67", "+374 10 544882", "costconsult@mail.ru"],
                [4, "«ՎԻ ԷՄ-ԱՐ ՓԻ» ՍՊԸ", "ք. Երևան, Վարդանանց 8", "+374 10 588797", "vm-rp@mail.ru"],
                [5, "«ՖԻՆԼՈՈՒ» ՍՊԸ", "ք. Երևան, Նալբանդյան 50-3", "+374 10 506000", "finlaw@inbox.ru"],
                [6, "«ՕԼԻՎԵՐ ԳՐՈՒՊ» ՍՊԸ", "ք. Երևան, Թումանյան 8", "+374 10 542750", "info@olivergroup.am"],
                [7, "«ԻՆԷՔՍ» ՍՊԸ", "ք. Վանաձոր, Թամանցիների 14", "+374 41 042287", "apresyan.expert@mail.ru"]
              ].map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3 border">{row[0]}</td>
                  <td className="p-3 border font-bold">{row[1]}</td>
                  <td className="p-3 border">{row[2]}</td>
                  <td className="p-3 border">{row[3]}</td>
                  <td className="p-3 border text-[#6400dc]">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PDF Link Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">
            Փաստաթղթեր
          </h3>
          <a
            href="https://www.evoca.am/files/global_files/1/information-summary-loan-pdf.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-sm px-6 py-4 rounded-2xl transition"
          >
            <span>📄</span>
            <span>Տեղեկատվական ամփոփագիր (PDF)</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}