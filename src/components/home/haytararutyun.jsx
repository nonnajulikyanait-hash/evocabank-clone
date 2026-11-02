import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Haytararutyun() {
  // Ձեր տրամադրած բոլոր հայտարարությունների ամբողջական ցանկը
  const announcementsList = [
    {
      id: 1,
      date: '10.11.2026',
      title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2026թ. Նոյեմբերի 10-ին` ժամը 13:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Արտահերթ ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Բանկի Խորհրդի նոր անդամի ընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>«Էվոկաբանկ» ԲԲԸ կանոնադրության փոփոխությունների հաստատում։</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      date: '22.06.2026',
      title: '«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2026թ. հունիսի 22-ին` ժամը 12:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ԲԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Տարեկան ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2025թ. գործունեության վերաբերյալ, 2026թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2025թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2026թ. արտաքին աուդիտն իրականացնող անձի հաստատումը:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2025թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
            <li>Դուստր ընկերության հիմնադրում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 3,
      date: '01.07.2025',
      title: 'Գործարքների արգելափակում ֆունկցիոնալ',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ Գործարքների արգելափակում ֆունկցիոնալը։
          </p>
          <p>
            Այն հնարավորություն է տալիս ինքնուրույն՝ ընդամենը 1 կոճակով, ժամանակավորապես արգելափակել առանձին կամ բոլոր հեռավար բանկային ծառայությունները՝ ապահովելով հաշիվների անվտանգության բարձր մակարդակը։ Գործարքների ապաարգելափակման համար անհրաժեշտ կլինի մոտենալ Բանկի ցանկացած մասնաճյուղ:
          </p>
          <p>
            <strong>Ուշադրություն.</strong> «Գործարքների արգելափակում» գործիքը նախատեսված է Ձեր միջոցների և տվյալների անվտանգությունն ապահովելու համար: Խնդրում ենք չկիրառել այն փորձարկման նպատակով, քանի որ արգելափակման դեպքում ընտրված ծառայությունները կդառնան անհասանելի, իսկ դրանց ապաարգելափակման համար անհրաժեշտ կլինի մոտենալ Բանկի մասնաճյուղ:
          </p>
        </div>
      )
    },
    {
      id: 4,
      date: '19.06.2025',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2025թ. հունիսի 19-ին` ժամը 15:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Տարեկան ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2024թ. գործունեության վերաբերյալ, 2025թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2024թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2025թ. արտաքին աուդիտն իրականացնող անձի հաստատումը:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2024թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 5,
      date: '14.04.2025',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2025թ. ապրիլի 14-ին` ժամը 15:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի արտահերթ ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Արտահերթ ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Խորհրդի անդամների ընտրություն, վարձատրության չափի հաստատում։</li>
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ 2025թ. արտաքին աուդիտն իրականացնող անձի ընտրություն:</li>
            <li>«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ-ի Կանոնադրության փոփոխությունների հաստատում։</li>
          </ol>
        </div>
      )
    },
    {
      id: 6,
      date: '30.12.2024',
      title: 'Արտաքին աուդիտի մրցույթի հայտարարություն',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            «Էվոկաբանկ» ՓԲԸ-ն հայտարարում է Բանկի 2025թ. գործունեության արտաքին աուդիտ իրականացնող անձի ընտրության բաց հրապարակային մրցույթ` համաձայն Բանկի Խորհրդի 25.12.2019թ. թիվ 20 արձանագրությամբ հաստատված «Անկախ աուդիտորական կազմակերպության ընտրության» կարգի պահանջների:
          </p>
          <p>
            Մրցույթի մասնակցության հայտերն ընդունվում են 03.01.2025թ.-ից մինչև 15.02.2025թ.-ը ընկած ժամանակահատվածում, յուրաքանչյուր աշխատանքային օր, ժամը 9:30-17:00-ն, ք. Երևան, Հանրապետության 44/2 հասցեում, Բանկի Խորհրդի աշխատակազմում:
          </p>
        </div>
      )
    },
    {
      id: 7,
      date: '01.07.2024',
      title: 'Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            Տեղեկացնում ենք, որ EvocaTOUCH հավելվածում և EvocaONLINE համակարգում Բանկի ներսում նույն արժույթով քարտերի միջև փոխանցման սակագինը սահմանվել է 0%։
          </p>
          <p><strong>Խնդրում ենք հաշվի առնել, որ</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Մյուս սակագները մնացել են անփոփոխ:</li>
            <li>Փոփոխությունը չի տարածվում Visa Infinite քարտերի վրա։</li>
          </ul>
        </div>
      )
    },
    {
      id: 8,
      date: '28.06.2024',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2024թ. հունիսի 28-ին` ժամը 16:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ Բաժնետերերի տարեկան ընդհանուր ժողով՝ տեսակապի միջոցով:
          </p>
          <p><strong>Բաժնետերերի տարեկան ընդհանուր ժողովի օրակարգում ընդգրկված են հետևյալ հարցերը`</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2023թ. գործունեության վերաբերյալ, 2024թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2023թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2024թ. արտաքին աուդիտն իրականացնող անձի հաստատումը:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2023թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 9,
      date: '29.03.2024',
      title: 'МИР քարտերի սպասարկման դադարեցում',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            Տեղեկացնում ենք, որ մարտի 29-ից Բանկը դադարեցնում է ArCa МИР քարտերի թողարկումը և МИР քարտերի սպասարկումն իր ցանցում, ինչը պայմանավորված է «МИР» վճարային համակարգի նկատմամբ միջազգային պատժամիջոցների կիրառմամբ:
          </p>
          <p>
            Այսինքն՝ այսուհետ МИР քարտերով Evocabank-ի կողմից սպասարկվող POS, vPOS և mPOS տերմինալների միջոցով գնումներ, իսկ Բանկի բանկոմատներից՝ կանխիկացում հնարավոր չի լինի կատարել:
          </p>
          <p>
            Նշենք նաև, որ ցանկության դեպքում Բանկի կողմից թողարկված ArCa МИР քարտերը անվճար կվերաթողարկվեն Mastercard Standard կամ Visa Classic քարտերի:
          </p>
        </div>
      )
    },
    {
      id: 10,
      date: '08.09.2023',
      title: 'Թղթադրամների մուտքագրման սակագնի փոփոխություն',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            Տեղեկացնում ենք, որ ԱՄՆ դոլարով կանխիկի մուտքագրման սակագներում տեղի է ունեցել փոփոխություն։
          </p>
          <p>
            1 օրվա ընթացքում 1 անձի կողմից մինչև 1,000 ԱՄՆ դոլար թղթադրամի մուտքագրումն ԱՆՎՃԱՐ է։
          </p>
          <p>Սակագինն ուժի մեջ է մտնում 08․09․2023թ-ից։</p>
        </div>
      )
    },
    {
      id: 11,
      date: '15.08.2023',
      title: 'Արտարժութային հաշիվներից կանխիկացման միջնորդավճարի ժամանակավոր փոփոխություն',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            15.08.2023թ.-ից Էվոկաբանկ ՓԲԸ-ի ընթացիկ արտարժույթային հաշիվներից (ԱՄՆ դոլարով և Եվրոյով), ինչպես նաև Բանկի ArCa, ArCa МИР, ArCa Transfer MasterCard և VISA ԱՄՆ դոլարով և Եվրոյով քարտերից և քարտային հաշիվներից կանխիկացման միջնորդավճարը կկազմի 0.5%:
          </p>
        </div>
      )
    },
    {
      id: 12,
      date: '02.06.2023',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2023թ. հունիսի 02-ին` ժամը 16:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի տարեկան ընդհանուր ժողով, որն անցկացվելու է տեսակապի միջոցով` Zoom ծրագրով:
          </p>
          <p><strong>Ժողովի օրակարգում ընդգրկվել են հետևյալ հարցերը.</strong></p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2022թ. գործունեության վերաբերյալ, 2023թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2022թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2023թ. արտաքին աուդիտն իրականացնող անձի հաստատում:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն/վերընտրություն, վարձատրության չափի և պաշտոնավարման ժամկետի հաստատում։</li>
            <li>2022թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
          </ol>
        </div>
      )
    },
    {
      id: 13,
      date: '27.03.2023',
      title: 'ԱՄՆ դոլարով և Եվրոյով ստացված արագ դրամական փոխանցումների վերաբերյալ',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            27.03.2023թ.-ից արագ դրամական փոխանցումների բոլոր համակարգերով (այդ թվում Ria, Intelexpress, Unistream, Moneygram) ԱՄՆ դոլարով և Եվրոյով ստացված բոլոր գումարների կանխիկ եղանակով ստացումը իրականացվում է առանց կանխիկացման միջնորդավճարի գանձման:
          </p>
        </div>
      )
    },
    {
      id: 14,
      date: '06.02.2023',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի արտահերթ ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2023թ. փետրվարի 06-ին` ժամը 17:00-ին</strong> (Երևանի ժամանակով), ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի արտահերթ ընդհանուր ժողով, որն անցկացվելու է տեսակապի միջոցով` Zoom ծրագրով:
          </p>
          <p><strong>Ժողովի օրակարգում ընդգրկվել է հետևյալ հարցը.</strong></p>
          <p>- 2021թ․ արդյունքները ներառյալ Բանկում կուտակված զուտ շահույթից հասարակ անվանական բաժնետոմսերի դիմաց 2 մլրդ ՀՀ դրամի չափով շահութաբաժնի վճարման մասին որոշման կայացում։</p>
        </div>
      )
    },
    {
      id: 15,
      date: '01.01.2023',
      title: 'Արտարժութային հաշիվներից կանխիկացման միջնորդավճարի ժամանակավոր փոփոխություն',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            01.01.2023թ.-ից Էվոկաբանկ ՓԲԸ-ի ընթացիկ արտարժույթային հաշիվներից (ԱՄՆ դոլարով և Եվրոյով), ինչպես նաև Բանկի ArCa, ArCa МИР, ArCa Transfer MasterCard և VISA ԱՄՆ դոլարով և Եվրոյով քարտերից և քարտային հաշիվներից կանխիկացման միջնորդավճարը կկազմի 2%:
          </p>
          <p>Փոփոխությունները կգործեն մինչև 31.03.2023թ.-ը:</p>
        </div>
      )
    },
    {
      id: 16,
      date: '18.06.2022',
      title: '«ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի տարեկան ընդհանուր ժողով',
      content: (
        <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
          <p>
            <strong>2022թ. հունիսի 18-ին` ժամը 12:00-ին</strong>, ք. Երևան, Հանրապետության 44/2 հասցեում տեղի է ունենալու «ԷՎՈԿԱԲԱՆԿ» ՓԲԸ բաժնետերերի տարեկան ընդհանուր ժողով` տեսակապի միջոցով:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Վարչության նախագահի հաշվետվությունը Բանկի 2021թ. գործունեության վերաբերյալ, 2022թ.-ի ծրագրերը:</li>
            <li>Գլխավոր հաշվապահի հաշվետվությունը` Բանկի 2021թ. տարեկան հաշվապահական հաշվեկշիռը, ծախսերի և եկամուտների կատարողականը:</li>
            <li>Բանկի գործունեությամբ կուտակված զուտ շահույթի բաշխումը:</li>
            <li>Բանկի 2022թ. արտաքին աուդիտն իրականացնող անձի հաստատում:</li>
            <li>Բանկի Խորհրդի անդամների ընտրություն և վարձատրության չափի հաստատում:</li>
            <li>2021թ.-ի արդյունքներով Բանկի Խորհրդի անդամների պարգևատրման չափի հաստատում:</li>
            <li>Բանկի Խորհրդի կազմում Բանկի փոքր բաժնետերերի ներկայացուցչի վերընտրություն:</li>
          </ol>
        </div>
      )
    }
  ];

  const [openId, setOpenId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 2; // Սահմանված է 2 հայտարարություն մեկ էջում
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnnouncements = announcementsList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(announcementsList.length / itemsPerPage);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="space-y-12 pb-20 pt-8">
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 max-w-6xl text-xs text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-[#6400dc]">🏠</Link>
            <span>/</span>
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span className="text-neutral-800 font-semibold">Հայտարարություններ</span>
          </div>

          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            {/* Title & Filter Icon Section */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-950">
                Հայտարարություններ
              </h1>

              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600">
                <span>📅</span>
                <span className="text-gray-400">Սկսած</span>
                <span>-</span>
                <span className="text-gray-400">Մինչև</span>
              </div>
            </div>

            {/* Main Content Layout with Background Graphics */}
            <div className="relative">
              <div className="absolute -left-16 top-10 w-48 h-48 bg-[#fff3cd]/40 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute left-12 top-32 z-0 hidden lg:block">
                <img 
                  src="https://www.evoca.am/img/announcements-img.png" 
                  alt="Announcements Illustration" 
                  className="w-72 object-contain opacity-90"
                />
              </div>

              {/* Announcements Accordion List */}
              <div className="relative z-10 lg:ml-80 space-y-4">
                {currentAnnouncements.map((item) => (
                  <div 
                    key={item.id} 
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white transition hover:border-[#6400dc]/50"
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                    >
                      <div className="space-y-1">
                        <span className="text-xs text-gray-400 font-medium block">{item.date}</span>
                        <span>{item.title}</span>
                      </div>
                      <span className={`text-xl transform transition-transform duration-300 shrink-0 ${openId === item.id ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>
                        ∨
                      </span>
                    </button>

                    {openId === item.id && (
                      <div className="px-5 md:px-6 pb-6 pt-2 border-t border-gray-100 bg-[#f8f9fa]/50">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pt-8">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => {
                        setCurrentPage(num);
                        setOpenId(null);
                      }}
                      className={`w-9 h-9 rounded-lg font-bold text-sm transition cursor-pointer flex items-center justify-center ${
                        currentPage === num 
                          ? 'bg-[#6400dc] text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <button 
                    onClick={() => {
                      if (currentPage < totalPages) {
                        setCurrentPage(currentPage + 1);
                        setOpenId(null);
                      }
                    }}
                    className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 font-bold text-sm flex items-center justify-center cursor-pointer"
                  >
                    →
                  </button>
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