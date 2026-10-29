import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function CreditHistoryAndScore() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />

      {/* Purple Sub-header Bar */}
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="opacity-80 hover:opacity-100 cursor-pointer">
            Վարկեր
          </Link>
          <span className="border-b-2 border-white pb-1 cursor-pointer">
            Վարկային պատմություն և uScore
          </span>
          <span className="opacity-80 hover:opacity-100 cursor-pointer">
            Կարևոր տեղեկատվություն
          </span>
        </div>
      </div>

      {/* Breadcrumb & Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 text-left">
        {/* Breadcrumbs */}
        <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-gray-600">🏠</Link> &gt; 
          <span>Անհատ</span> &gt; 
          <Link to="/loans" className="hover:text-gray-600">Վարկեր</Link> &gt; 
          <span className="text-gray-700 font-medium">Վարկային պատմություն և սքոր</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-black text-neutral-900 mb-8">
          Վարկային պատմություն և սքոր
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

        {/* Section 1 */}
        <h2 className="text-2xl font-black text-neutral-900 mb-4">
          Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
        </h2>
        <p className="text-sm font-bold text-gray-800 mb-6">
          Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <span className="font-black text-neutral-900">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</span> վրա:
        </p>

        {/* List Items */}
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ինչ է վարկային պատմությունը</h3>
            </div>
            <p className="pl-4 text-gray-600 mb-3">
              «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
            </p>
            <p className="pl-4 text-gray-600">
              Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրող և վաճառող կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ տարաժամկետ վճարման սկզբունքով («ապառիկ») ապրանքների/ծառայությունների իրացման վերաբերյալ որոշում կայացնելու ընթացքում:
            </p>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Որոնք են վարկային պատմության ձևավորման աղբյուրները</h3>
            </div>
            <p className="pl-4 text-gray-600">
              Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հետաձգված վճարումներով գործարքներ իրականացնող կազմակերպությունները, ինչպես նաև՝ հանրային տվյալների բազաներից ՀՀ կառավարության սահմանած կարգով վարկային բյուրոյին անձանց վերաբերյալ տեղեկություններ տրամադրող պետական մարմինները), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ(տվյալներ):
            </p>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ինչ է վարկային բյուրոն</h3>
            </div>
            <p className="pl-4 text-gray-600 mb-3">
              Վարկային բյուրոն իրականացնում է իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկության (վարկային տեղեկատվության) հավաքագրում, մշակում, պահպանում, տրամադրում, ինչպես նաև դրանց հիման վրա վարկային զեկույցի պատրաստման գործունեություն:
            </p>
            <p className="pl-4 text-gray-600 mb-2">
              Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում․
            </p>
            <ul className="pl-8 space-y-2 list-none">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
                <span>ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտագործել այն որպես ծանրակշիռ ակտիվ ֆինանսական ծառայություններից արտոնյալ պայմաններով օգտվելու համար,</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc] mt-2 shrink-0"></span>
                <span>ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընդհանուր պատկերի մասին:</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ինչ է վարկային զեկույցը</h3>
            </div>
            <p className="pl-4 text-gray-600 mb-2">
              Վարկային զեկույցը գրավոր կամ էլեկտրոնային փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի (ֆիզիկական կամ իրավաբանական) և նրա կողմից ստանձնած տնտեսվարող կազմակերպությունների նկատմամբ ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
            </p>
            <p className="pl-4 text-gray-600">
              Զեկույցը կազմված է ԱՔՌԱ գործընկեր կազմակերպություններից ստացված տվյալների հիման վրա և արտացոլում է հարցման պահից վերջին 5 տարվա վարկային տվյալները:
            </p>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Որքան ժամանակ է պահպանվում վարկային պատմությունը</h3>
            </div>
            <p className="pl-4 text-gray-600">
              Համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 11-րդ հոդվածի դրույթների, «վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցներում չպետք է ներառվի վարկային զեկույցի տրամադրման պահին նախորդող հինգ տարուց ավելի վարկային տեղեկատվություն»:
            </p>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ինչպես բարելավել վարկային պատմությունը</h3>
            </div>
            <p className="pl-4 text-gray-600">
              Նախ, անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց՝ նույնիսկ մեկ օրվա կտրվածքով պարտավորությունների գոյացումը:
            </p>
          </div>

          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ուր դիմել եթե վարկային պատմությունը սխալ է</h3>
            </div>
            <p className="pl-4 text-gray-600">
              Եթե վարկառուի վարկային պատմության մեջ առկա են սխալ կամ թերի տվյալներ, ապա պարզաբանման և ուղղման նպատակով վարկառուն՝ համաձայն «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի 20-րդ հոդվածի դրույթների, կարող է այդ մասին տեղեկացնել վարկային բյուրոյին կամ ուղղակիորեն դիմել տեղեկատվություն տրամադրող սուբյեկտներին (վարկային տեղեկատվության աղբյուրին): Տեղեկացումը կարող է իրականացվել համապատասխան գրավոր դիմում վարկային բյուրոյին ներկայացնելու միջոցով կամ էլեկտրոնային եղանակով՝ առանց առցանց ռեժիմում Իմ ԱՔՌԱ անձնական գրասենյակից: ԱՔՌԱ-ի կողմից տրամադրված վարկային զեկույցների վերաբերյալ հաճախորդների բողոքների ընդունման/ստացման, քննարկման և վերջիններիս արձագանքման գործընթացը, գործողությունների հաջորդականությունը սահմանվում է «ԱՔՌԱ Քրեդիտ Ռեփորթինգ» ՓԲԸ-ի «Վեճերի լուծման ընթացակարգ»-ով:
            </p>
          </div>
        </div>

        {/* Section 2: Criteria */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-black text-neutral-900">
            Վարկի տրամադրման վերաբերյալ որոշման կայացման չափանիշները
          </h2>

          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Դրական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-2 pl-4 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Մեր կողմից ընդունելի գրավադրվող գույքը և երաշխավորությունները,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Մշտական բնակության վայրը,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Կայուն եկամտի աղբյուրը,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Դրական կամ չեզոք վարկային պատմությունը,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Արժանահավատ և լիարժեք փաստաթղթերը:</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Բացասական որոշման կայացման չափանիշները`</h4>
            <ul className="space-y-2 pl-4 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Ոչ արժանահավատ փաստաթղթերը ներկայացնելը,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Բացասական վարկային պատմությունը,</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Եկամտի աղբյուրի ռիսկայնությունը (անկայուն եկամուտներ, ոչ հստակ պարբերականությամբ եկամուտներ),</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6400dc]"></span>
                <span>Գրավի պայմանագրի կամ երաշխավորության համաձայնագրերի կնքման համար անհրաժեշտ փաստաթղթեր չներկայացնելը:</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Credit Score */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-black text-neutral-900">
            Վարկային սքոր
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Բանկը կիրառում է իր կողմից մշակված վարկային սքորը վարկավորման վերաբերյալ որոշումների կայացման ժամանակ։ Վարկային սքորը հաճախորդի վարկային պատմության և որոկական ցուցանիշների ուսումնասիրության հիման վրա ձևավորվող վիճակագրական գնահատականն է, որն արտահայտում է հավանականությունը հայցվող վարկը ժամանակին և պատշաճ մարելու գծով։ Վարկային պատմությունը ներառվում է սքորի հաշվարկի մեջ դիմելու պահից վերջին 5 տարվա վաղեմությամբ։
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Բանկի ներքին սքոր գնահատականի վրա ազդող հիմնական գործոններն են՝ ՖԱՅԿՈ սքորը (բարձր ՖԱՅԿՈ սքոր - դրական ազդեցություն), գործող վարկերի քանակը (գործող վարկերի քանակի ավելացում – բացասական ազդեցություն), վարկային բեռը (բարձր վարկային բեռ – բացասական ազդեցություն), վարկային պարտավորությունների ժամանակին կատարման փաստը (ժամկետանցների առկայություն – բացասական ազդեցություն), նոր վարկային հայտեր ներկայացնելու հաճախականությունը (հայտերի քանակի ավելացում – բացասական ազդեցություն), հաճախորդի աշխատանքային փորձը (քիչ փորձառություն – բացասական ազդեցություն), եկամուտների մեծությունը (բարձր եկամուտների առկայություն – դրական ազդեցություն)։
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Վարկային պատմությունը և/կամ սքոր գնահատականը հնարավոր է բարելավվել վարկն առանց ժամկետանցների մարելու, նպատակային օգտագործելու, վարկերի մնացորդային գումարը և քանակը նվազեցնելու, տրված երաշխավորությունների գծով պարտավորությունները ժամանակին կատարելու դեպքում։
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Վարկային պատմության և սքոր վատթարացումից խուսափելու նպատակով հաճախորդները չպետք է ունենան ժամկետանցներ, անհիմն ավելացնեն վարկային ծանրաբեռնվածությունը, վարկերի քանակը, հաճախակի վարկավորման հարցումներ ուղարկեն տարբեր կազմակերպություններին, հանդիսանան երաշխավոր անվստահելի անձանց համար։
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Վարկային պատմության և ՖԱՅԿՈ սքորի վերաբերյալ առավել մանրամասն տեղեկատվություն կարելի է ստանալ այցելելով՝{' '}
            <a href="https://www.abcfinance.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">
              www.abcfinance.am
            </a>
            , Հաճախ տրվող հարցեր - ԱՔՌԱ ({' '}
            <a href="https://www.acra.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">
              acra.am
            </a>
            ) և{' '}
            <a href="https://www.acra.am" target="_blank" rel="noreferrer" className="text-[#6400dc] underline font-medium">
              www.acra.am
            </a>{' '}
            կայքեր։
          </p>
        </div>

        {/* Section 4: PDF Link Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">
            Փաստաթղթեր
          </h3>
          <a
            href="https://www.evoca.am/files/global_files/1/information-summary-loan-07-04-2026.pdf"
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