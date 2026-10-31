import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Xekavarutyun() {
  const [selectedMember, setSelectedMember] = useState(null);

  const managementData = {
    council: [
      {
        name: "ՎԱՐՈՒԺԱՆ ԱՎԵՏԻՔՅԱՆ, LL.M., MPA",
        title: "Խորհրդի նախագահ",
        img: "https://www.evoca.am/images-cache/team_members/1/16776012013335/230x230.png",
        education: [
          "1998թ. - ավարտել է Կիպրոսի Նիկոսիայի համալսարանը (Բիզնես կառավարման բակալավրի և իրավագիտության կրկնակի աստիճան)",
          "2004թ. - ավարտել է Միացյալ Թագավորության Լեսթերի համալսարանը (Եվրամիության առևտրային իրավունքի մագիստրոսի աստիճան – LL.M.)",
          "2005թ. – ավարտել է Բոստոնի Համալսարանի Իրավագիտության ֆակուլտետը (Ֆինանսական և բանկային իրավունքի մագիստրոսի աստիճան - LL.M.)",
          "2009թ. – ավարտել է Հարվարդի համալսարանի Քեննեդու անվան կառավարման դպրոցը (Պետական կառավարման մագիստրոսի աստիճան MPA)"
        ],
        career: [
          "2008-2009թթ. - աշխատել է Հարվարդի համալսարանի Քեննեդու անվան դպրոցում` որպես դասախոսի օգնական",
          "2015-2018թթ. - աշխատել է Christ’s College-ում (Քեմբրիջ, ՄԹ)՝ որպես հրավիրված դասախոս Ֆինանսական կարգավորման և կենտրոնական բանկերի կառավարման գծով",
          "2000 - 2022 – թվականներին աշխատել է Հայաստանում Ֆրանսիական համալսարանում` որպես ֆինանսական իրավունքի և բիզնես իրավունքի հրավիրված պրոֆեսոր",
          "2019թ. - աշխատում է Հայաստանում Ամերիկյան Համալսարանում` որպես Բիզնես իրավունքի (LL.M.) և ադապտիվ առաջնորդության (MBA) հրավիրված պրոֆեսոր",
          "2018-2020թթ. - աշխատել է Տնօրենների Հայկական Ինստիտուտում` որպես գործադիր տնօրեն, ղեկավարել է Հայաստանում կորպորատիվ կառավարման մշակույթի զարգացման թիմը",
          "2020թ. - Հայաստանում Ֆրանսիական համալսարանի հիմնադրամի հոգաբարձու",
          "2017-2021թթ. - հանդիսացել է Զինծառայողների ապահովագրության հիմնադրամի տնօրեն",
          "2020 – 2025 թվականներին - ճանաչվել է միջազգային ֆինանսական իրավունքի պատվավոր իրավաբան International Financial Law Review ամսագրի կողմից",
          "2006-2018թթ. - աշխատել է ՀՀ կենտրոնական բանկում՝ որպես գլխավոր իրավաբան, Իրավաբանական վարչության պետ",
          "2018թ. - աշխատում է Արժույթի Միջազգային Հիմնադրամի Իրավաբանական վարչությունում, Վաշինգտոն, ԱՄՆ՝ որպես կարճաժամկետ փորձագետ",
          "2018թ. - հանդիսանում է Andersen in Armenia –ի Կառավարող գործընկեր",
          "2023թ. - ստացել է European Board diploma European Confederation of Directors’ Associations (ecoDa)-ի կողմից",
          "2022-2024թթ.- հանդիսացել է Evocabank-ի Խորհրդի անդամ",
          "2023-2024թթ.- հանդիսացել է Evocabank-ի Աուդիտ կոմիտեի անդամ",
          "2024թ. - հանդիսանում է Evocabank-ի Խորհրդի նախագահ"
        ]
      },
      {
        name: "ՄԱՐՏԱ ԷՉԱՐՐԻ",
        title: "Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
        img: "https://www.evoca.am/images-cache/team_members/1/17544805530896/230x230.png",
        education: [
          "2003թ. ավարտել է ESSEC Փարիզի բիզնեսի դպրոցը։",
          "2001 - 2005թթ. - սովորել է Northeastern University և ICADE (E4)-ում՝ Միջազգային բիզնեսի կառավարում Երկաստիճան ծրագրի շրջանակներում` ստանալով մասնագիտացում Միջազգային բիզնես, ֆինանսներ և շուկայավարում ոլորտում։",
          "2019թ. մասնակցել է IE university-ի՝ Հաքերության էքսպոնենցիալ աճ 1-շաբաթյա դասընթացին։",
          "2020թ. մասնակցել է ISDI Dibex: Թվային բիզնես ղեկավարների համար ծրագրին։",
          "2023թ. - ավարտել է Singularity University կրթական ծրագիրը՝ նախատեսված ղեկավարների համար: Ներկայումս նույն համալսարանում հանդիսանում է հյուր-խոսնակ միջազգային գագաթնաժողովների համար։",
          "2026թ. Fundación Rafael del Pino հիմնադրամի կրթաթոշակառուի կարգավիճակով մասնակցել է MIT-ի «Frontiers of Innovation» ծրագրին (Բոստոն)։",
          "Ունի հավաստագրեր ֆինանսական ոլորտում՝ series 7 և series 63 հավաստագրեր, Հարվարդի համալսարանի Բանակցելու հմտություններ դասընթաց, Բլումբերգի դասընթաց NYC ընկերության գլխամասային գրասենյակում, պորտֆելի կառավարում IEB, Մադրիդ համալսարանում, Հարկեր և իրավաբանական նորություններ Իսպանիայում՝ Deloitte and Garrigues, տարբեր բանկային դասընթացներ Լոնդոնում, Նյու Յորքում և Ժնևում՝ J.P.Morgan-ի գրասենյակներում:"
        ],
        career: [
          "2005 - 2008թթ. - աշխատել է UBS Bank S.A.-ում՝ որպես Հարստության կառավարման վերլուծաբան։",
          "2008 - 2012թթ. - աշխատել է J.P.MORGAN International Bank Ltd. Sucursal en Espana-ում՝ որպես Ասոցիացված անհատական բանկիր։",
          "2012 – 2015թթ. - զբաղեցրել է J.P.MORGAN International Bank Ltd. Sucursal en Espana-ի Փոխնախագահ-անհատական բանկիրի պաշտոնը։",
          "2015 - 2019թթ. - զբաղեցրել է J.P.MORGAN International Bank Ltd. Sucursal en Espana –ի Գործադիր տնօրեն- անհատական բանկիրի պաշտոնը։",
          "2019 – 2020թթ. - աշխատել է LOMBARD ODIER GROUP –ում՝ որպես Ավագ փոխնախագահ - անհատական բանկիր։",
          "2020 - 2023թթ. - աշխատել է N26 BANK Gmbh, Sucursal en Espana-ում՝ որպես Իսպանիայի և Պորտուգալիայի հարցերով գլխավոր մենեջեր։",
          "2023 - 2024թթ. - զբաղեցրել է WESTERN UNION միջազգային բանկի՝ Եվրոպայում թվային բանկինգի ստորաբաժանման ղեկավարի և Western Union միջազգային բանկի գործադիր տնօրենի տեղակալի պաշտոնները։",
          "2024թ. - հանդիսանում է MUSE MOVEMENT SL-ի հիմնադիր։",
          "2024թ. - հանդես է գալիս որպես տեխնոլոգիաների ռազմավարագետ և հիմնական զեկուցող նորարարությանը նվիրված միջազգային ֆորումներում։",
          "2025թ. - հիմնադրել է KIRI SL-ը և զբաղեցնում է գլխավոր գործադիր տնօրենի (CEO) պաշտոնը։",
          "2025թ. - KPMG Startup Connect նախաձեռնության արտաքին խորհրդատու և համաղեկավար։",
          "2025թ. - հանդիսանում է Էվոկաբանկի Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ։"
        ],
        extra: "Ունի Խորհրդի անդամի և դասավանդման լայն փորձ միջազգային հարթակներում (ISDI, IE, ESADE, ICADE, Advantere):"
      },
      {
        name: "ՎԱԶԳԵՆ ԳԵՒՈՐԿՅԱՆ, MBA, PhD",
        title: "Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ",
        img: "https://www.evoca.am/images-cache/team_members/1/17550915579199/230x230.png",
        education: [
          "1993թ. - ավարտել է Երևանի պետական համալսարանի Երկրաբանական ֆակուլտետը:",
          "1994 – 1998թթ. - ընդունվել է ՌԴ Ժողովրդական տնտեսության ակադեմիա՝ 1998թ. ավարտելով այն «Կորպորատիվ կառավարման ժամանակից մեթոդները» մասնագիտությամբ:",
          "2003թ. - ավարտել է ՌԴ Ժողովրդական տնտեսության ակադեմիայի ասպիրանտուրան, պաշտպանել թեկնածուական ատենախոսությունը՝ ստանալով տնտեսագիտական գիտությունների թեկնածուի գիտական աստիճան:",
          "2008թ. - ստացել է MBA որակավորում:"
        ],
        career: [
          "Աշխատանքային գործունեությունը սկսել է 20 տարեկանում՝ «Պրոմեթեյ» ԲԲԸ-ում:",
          "1994թ. - աշխատել է «ԶՆԳՍ-Պրոմեթեյ» ԲԲԸ ներկայացուցչություն՝ որպես արտասահմանյան ընկերությունների հետ աշխատող մասնագետ:",
          "2001թ. - նշանակվել է «ԶՆԳՍ-Պրոմեթեյ» ԲԲԸ Խորհրդի նախագահի տեղակալ:",
          "2003թ. - ստանձնել է «Զակնեֆտեգազստրոյ Պրոմեթեյ» ՍՊԸ-ի գլխավոր տնօրենի պաշտոնը:",
          "2004 - 2009թթ. - եղել է «Զակնեֆտեգազստրոյ Պրոմեթեյ» ՍՊԸ-ի Տնօրենների խորհրդի նախագահ:",
          "2009 - 2018թթ. - եղել է «Զակնեֆտեգազստրոյ Պրոմեթեյ» ՍՊԸ-ի Գլխավոր տնօրենի առաջին խորհրդական:",
          "2018 - 2024թթ. - եղել է «Պրոմեթեյ Սիթի» ՍՊԸ Գլխավոր տնօրենի առաջին խորհրդական:",
          "2019թ. հուլիս - 2019թ. սեպտեմբեր - եղել է «Էվոկաբանկ» ՓԲԸ Խորհրդի անդամ:",
          "2019 - 2022թթ. - եղել է «Էվոկաբանկ» ՓԲԸ-ի Խորհրդի նախագահ:",
          "2025թ. - հանդիսացել է Evocabank-ի Խորհրդի անդամ, Ռազմավարության կոմիտեի անդամ։",
          "2026թ. - հանդիսանում է Evocabank-ի Խորհրդի անդամ, Ռազմավարության կոմիտեի նախագահ"
        ]
      },
      {
        name: "ՄԱՐԻՆԱ ԲՈՒԿԻ, MBA",
        title: "Խորհրդի անդամ Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ",
        img: "https://www.evoca.am/images-cache/team_members/1/17544805642771/230x230.png",
        education: [
          "1993թ. ավարտել է Հունաստանի University of Patras-ում՝ ստանալով Մաթեմատիկական գիտությունների բակալավրի աստիճան։",
          "1998թ. Էդինբուրգ, Միացյալ Թագավորությունում ավարտել է Herriot Watt University-ն՝ ստանալով Ակտուարական գիտությունների մագիստրոսի աստիճան։",
          "2001թ. Միացյալ Թագավորությունում Ակտուարների Ֆակուլտետի անդամ (Fellow)",
          "2005թ. Նյու Յորք, ԱՄՆ-ում ավարտել է Կոլումբիայի բիզնես դպրոցը՝ Բիզնեսի կառավարման մագիստրոսի (MBA) կոչումով",
          "2022թ. մասնակցել է St. Gallen Board Practice Սեմինարին։",
          "2025 թ. մասնակցել է Օքսֆորդի արհեստական բանականության ծրագրին"
        ],
        career: [
          "1998-2000թթ. - աշխատել է Էդինբուրգի Standard Life կազմակերպությունում՝ որպես ակտուարական վերլուծաբան։",
          "2000-2004թթ. - աշխատել է Լոնդոնի Towers Perrin կազմակերպությունում՝ որպես ակտուարական վերլուծաբան։",
          "2005–2021թթ. - աշխատել է Morgan Stanley-ում, London, որպես ներդրումային բանկիր Financial Institutions Group (FIG)-ում (Գլխավոր տնօրեն 2015–2021)",
          "2022-2025թթ. - Ավագ խորհրդատու Delphos-ում",
          "2023թ. - Խորհրդատու Bain & Company-ում",
          "2023թ. - հանդիսանում է Halcyon Equity Partners ընկերության Ներդրումային կոմիտեի ոչ գործադիր, անկախ անդամ։",
          "2024-2025թթ. - Ծառայել է որպես ոչ գործադիր խորհրդի անդամ Aegean Baltic Bank (ABB) –ում",
          "2025թ. - Խորհրդի անկախ անդամ NBG AM MFMC-ում",
          "2025թ. - հանդիսանում է «Էվոկաբանկ» ԲԲԸ Խորհրդի անդամ, Աուդիտ կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
          "2026թ. - հանդիսանում է «Էվոկաբանկ» ԲԲԸ Ռիսկերի և համապատասխանության կոմիտեի անդամ"
        ]
      },
      {
        name: "ԽՈՍԵ ՄԱՐԻԱ ՄՈՐԵՆՈ ԴԵ ԲԱՐՐԵԴԱ, LL.M., MBA, PhD",
        title: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ",
        img: "https://www.evoca.am/images-cache/team_members/1/1675080847328/230x230.png",
        education: [
          "1987–1992թթ. սովորել է Իսպանիայի UNIVERSIDAD SAN PABLO CEU համալսարանում",
          "1987-1993թթ. սովորել է UNIVERSIDAD COMPLUTENSE Իսպանիայում (Իրավագիտության բակալավր)",
          "1995-1996թթ. Լոնդոնի KING’S COLLEGE (Իրավագիտության մագիստրոս - Միջազգային բիզնեսի իրավունք)",
          "2001թ. IE BUSINESS SCHOOL (Բիզնես վարչարարության մագիստրոս - MBA)",
          "2016-2022թթ. UNIVERSIDAD DE SALAMANCA (Թվային տեխնոլոգիաների միջոցով ֆինանսական միջոցների հասանելիություն - Դոկտորի աստիճան)"
        ],
        career: [
          "1992-1993թթ. CITI - իրավաբանական հարցերով խորհրդատու",
          "1994-1997թթ. BARCLAYS BANK - մասնավոր բանկային ծառայությունների մասնագետ",
          "1997-2000թթ. PRICEWATERHOUSECOOPERS - ավագ խորհրդատու",
          "2006-2012թթ. EY ԽՈՐՀՐԴԱՏՎԱԿԱՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐՈՒՄ - Հիմնադիր գործընկեր և գործադիր տնօրեն",
          "2014թ. - աշխատում է ՄՖԿ-ում (Համաշխարհային բանկի խումբ)՝ որպես Գլոբալ թվային ֆինանսների ավագ խորհրդատու",
          "2022-2024թթ. հանդիսացել է Evocabank-ի Խորհրդի նախագահ",
          "2025թ. – հանդիսանում է Evocabank-ի Ռիսկերի և համապատասխանության կոմիտեի նախագահ, Ռազմավարության կոմիտեի անդամ"
        ]
      },
      {
        name: "ՊԻԵՐ ԿԱԶԻՅԱԿ, MBA",
        title: "Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
        img: "https://www.evoca.am/images-cache/team_members/1/17544805424545/230x230.png",
        education: [
          "1979 - 1982թթ. - Mines de Saint-Etienne (Քաղաքացիական ինժեներ - MEng)",
          "1982 - 1984թթ. - ESSEC բիզնեսի դպրոց (MBA որակավորում)"
        ],
        career: [
          "1984 - 1985թթ. - Banque Indosuez՝ վարկային վերլուծաբան",
          "1997 - 2004թթ. - Natexis Banques Populaires/Natexis Bleichroeder՝ ստորաբաժանման ղեկավար",
          "2016 - 2019թթ. - Auctus Finance մասնավոր պարտքային հիմնադրամի գործադիր տնօրեն",
          "2019–2025թթ. – June Partners/BDO Consulting՝ ավագ խորհրդատու",
          "2025թ. – Oderis Consulting՝ ավագ խորհրդատու",
          "2025թ. - Evocabank-ի Խորհրդի անդամ, Ռիսկերի և համապատասխանության կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ"
        ]
      },
      {
        name: "ԱՐԿԱԴԻ ՍԱՆԴԼԵՐ",
        title: "Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ",
        img: "https://www.evoca.am/images-cache/team_members/1/17884208691388/230x230.png",
        education: [
          "2000թ. – Մոսկվայի Հեռահաղորդակցության պետական համալսարան (Համակարգչային գիտությունների մագիստրոս)",
          "2021թ. – Լոնդոնի Institute of Directors (IoD) - Կորպորատիվ կառավարման դիպլոմ"
        ],
        career: [
          "1998–2000թթ. – հիմնել է Simpo ընկերությունը",
          "2004–2005թթ. – հիմնել է KeyStaff Solutions ընկերությունը (HeadHunter Group)",
          "2006–2008թթ. – HeadHunter Group-ի կորպորատիվ զարգացման և փոխակերպման ղեկավար",
          "2017–2021թթ. – MTS Group-ի արհեստական բանականության գծով տնօրեն (Chief AI Officer)",
          "2024թ. – MARSHALL ընկերության տնօրենների խորհրդի նախագահ",
          "2026թ. – «Էվոկաբանկ» ԲԲԸ Խորհրդի անդամ, Աուդիտ կոմիտեի անդամ, Ռազմավարության կոմիտեի անդամ"
        ]
      }
    ],
    board: [
      {
        name: "ԿԱՐԵՆ ԵՂԻԱԶԱՐՅԱՆ, MBA, PhD",
        title: "Վարչության նախագահ",
        img: "https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png",
        education: [
          "2000թ. ավարտել է Հայաստանի պետական ճարտարագիտական համալսարանը",
          "2012թ. ավարտել է Հայաստանի Ամերիկյան համալսարանը (MBA)",
          "2022թ. ստացել է Տնտեսագիտության թեկնածուի գիտական աստիճան (PhD)",
          "2023թ. Harvard Business School Executive Education"
        ],
        career: [
          "2000-2002թթ. - «Հայագրոբանկ» ԲԲԸ տարբեր պաշտոններում",
          "2003-2017թթ. - «Պրոմեթեյ Բանկ» ՓԲԸ վարչության նախագահի տեղակալ / վարչության անդամ",
          "2017-2019թթ. - Evocabank-ում՝ որպես Վարչության նախագահի տեղակալ, Վարչության անդամ",
          "2019թ. - առ այսօր Evocabank-ի Վարչության նախագահ"
        ]
      },
      {
        name: "ԱՐՄԵՆ ՀԱԿՈԲՅԱՆ, PhD",
        title: "Վարչության նախագահի առաջին տեղակալ",
        img: "https://www.evoca.am/images-cache/team_members/1/16602027630068/230x230.png",
        education: [
          "1993թ. ավարտել է Երևանի անասնաբուծա-անասնաբուժական ինստիտուտը",
          "1998թ. ստացել է Տնտեսագիտության թեկնածուի գիտական աստիճան (PhD)"
        ],
        career: [
          "1993-1996թթ. - «Պրոմեթեյ Բանկ» ՓԲԸ վարկա-պլանային վարչության մասնագետ",
          "2006-2017թթ. - «Պրոմեթեյ Բանկ» ՓԲԸ Վարչության նախագահի առաջին տեղակալ, Վարչության անդամ",
          "2017թ. - առ այսօր Evocabank-ի Վարչության նախագահի առաջին տեղակալ, Վարչության անդամ"
        ]
      },
      {
        name: "ՏԱԹԵՒԻԿ ԽԱՉԱՏՐՅԱՆ, MBA, PMP",
        title: "Վարչության նախագահի տեղակալ",
        img: "https://www.evoca.am/images-cache/team_members/1/16602030244095/230x230.png",
        education: [
          "2009թ. ավարտել է Հայաստանի պետական տնտեսագիտական համալսարանը",
          "2011թ. Հայաստանի Ամերիկյան համալսարան (MBA)",
          "2020թ. Project Management Professional (PMP)®",
          "Ավարտել է դասընթացներ Harvard Business School, Yale School of Management, MIT Sloan School of Management"
        ],
        career: [
          "2011թ. - «Պրոմեթեյ Բանկ» մարքեթինգի մասնագետ, ապա բաժնի պետ",
          "2017թ. - Evocabank մարքեթինգի և հասարակայնության հետ կապերի բաժնի պետ",
          "2019թ. - առ այսօր Evocabank-ի Վարչության նախագահի տեղակալ, Վարչության անդամ (ղեկավարում է Մարքեթինգի, PR, HR, CX և կայուն զարգացման ուղղությունները)"
        ]
      },
      {
        name: "ՀԱՅԿ ՊԵՏՐՈՍՅԱՆ",
        title: "Վարչության նախագահի տեղակալ",
        img: "https://www.evoca.am/images-cache/team_members/1/16602028118681/230x230.png",
        education: [
          "1991թ. ավարտել է Երևանի ժողովրդական տնտեսության ինստիտուտը",
          "1997թ. Արտաքին տնտեսական կապերի և կառավարման ինստիտուտ"
        ],
        career: [
          "1991-2001թթ. - «Հայագրոբանկ» ներքին աուդիտի վարչության պետ",
          "2008-2017թթ. - «Պրոմեթեյ Բանկ» Վարչության նախագահի տեղակալ, անդամ",
          "2017թ. - առ այսօր Evocabank-ի Վարչության նախագահի տեղակալ, Վարչության անդամ"
        ]
      },
      {
        name: "ԼԻԼԻԹ ԳԱԲՈՅԱՆ, MBA",
        title: "Վարչության նախագահի տեղակալ ֆինանսական գծով",
        img: "https://www.evoca.am/images-cache/team_members/1/16602028538342/230x230.png",
        education: [
          "2008թ. / 2010թ. ԵՊՀ (Մագիստրոս)",
          "2012թ. Հայաստանի Ամերիկյան համալսարան (MBA)",
          "CFA level III candidate"
        ],
        career: [
          "2010-2012թթ. - ՊրոԿրեդիտ Բանկ վերլուծաբան",
          "2012-2019թթ. - Ամերիաբանկ Կառավարչական հաշվետվությունների և ֆինանսական պլանավորման բաժնի պետ",
          "2019թ. - առ այսօր Evocabank-ի Վարչության նախագահի տեղակալ ֆինանսական գծով, վարչության անդամ"
        ]
      },
      {
        name: "ՄՀԵՐ ՍԱՀԱԿՅԱՆ",
        title: "Վարչության անդամ, Ծրագրավորման և գործառնական համակարգերի վարչության պետ",
        img: "https://www.evoca.am/images-cache/team_members/1/1660202833495/230x230.png",
        education: ["Տեղեկատվական տեխնոլոգիաներ և ծրագրավորում"],
        career: ["Երկար տարիներ ղեկավարում է Evocabank-ի ծրագրավորման և գործառնական համակարգերը:"]
      }
    ],
    audit: [
      {
        name: "ՆԱԶԵԼԻ ԵՂՈՅԱՆ, CIA",
        title: "Ներքին աուդիտի ստորաբաժանման ղեկավար",
        img: "https://www.evoca.am/images-cache/team_members/1/16282549740688/230x230.png",
        education: [
          "2014թ. – ԵՊՀ տնտեսագետի մագիստրոսի աստիճան",
          "2014–2016թթ. – Ֆինանսական կայունության ինստիտուտ (FSI)",
          "2026թ. – MIT Open Learning (Generative AI)",
          "2026թ. – Certified Internal Auditor (CIA®)"
        ],
        career: [
          "2014-2021թթ. - ՀՀ կենտրոնական բանկում տարբեր վերահսկողական և մեթոդաբանական պաշտոններում",
          "2021թ. - առ այսօր Evocabank-ում՝ որպես Ներքին աուդիտի բաժնի պետ"
        ]
      }
    ]
  };

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
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Ղեկավարություն</span>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <Link to="/mer-masin/mrcanakner" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <Link to="/mer-masin/csr" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin/xumb" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Ղեկավարություն</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Ղեկավարություն
          </h1>

          {/* 1. Բանկի խորհուրդ */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900 border-b pb-3">Բանկի խորհուրդ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {managementData.council.map((person, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedMember(person)}
                  className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-xs flex flex-col items-center text-center cursor-pointer hover:shadow-md transition"
                >
                  <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-sm" />
                  <h3 className="font-bold text-base text-neutral-900 mb-1">{person.name}</h3>
                  <p className="text-xs text-[#6400dc] font-medium">{person.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Բանկի վարչություն */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold text-neutral-900 border-b pb-3">Բանկի վարչություն</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {managementData.board.map((person, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedMember(person)}
                  className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-xs flex flex-col items-center text-center cursor-pointer hover:shadow-md transition"
                >
                  <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-sm" />
                  <h3 className="font-bold text-base text-neutral-900 mb-1">{person.name}</h3>
                  <p className="text-xs text-[#6400dc] font-medium">{person.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Բանկի ներքին աուդիտ */}
          <section className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold text-neutral-900 border-b pb-3">Բանկի ներքին աուդիտ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {managementData.audit.map((person, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedMember(person)}
                  className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-xs flex flex-col items-center text-center cursor-pointer hover:shadow-md transition"
                >
                  <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full object-cover mb-4 shadow-sm" />
                  <h3 className="font-bold text-base text-neutral-900 mb-1">{person.name}</h3>
                  <p className="text-xs text-[#6400dc] font-medium">{person.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Detail Modal when clicked on a member */}
          {selectedMember && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center hover:bg-gray-200 cursor-pointer"
                >
                  ✕
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
                  <img src={selectedMember.img} alt={selectedMember.name} className="w-28 h-28 rounded-full object-cover shadow-md" />
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl font-extrabold text-neutral-900 mb-1">{selectedMember.name}</h2>
                    <p className="text-sm text-[#6400dc] font-bold">{selectedMember.title}</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
                  {selectedMember.education && selectedMember.education.length > 0 && (
                    <div>
                      <h4 className="font-extrabold text-[#6400dc] uppercase mb-2">Կրթություն</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedMember.education.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedMember.career && selectedMember.career.length > 0 && (
                    <div>
                      <h4 className="font-extrabold text-[#6400dc] uppercase mb-2">Կարիերա</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {selectedMember.career.map((car, i) => (
                          <li key={i}>{car}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedMember.extra && (
                    <div>
                      <h4 className="font-extrabold text-[#6400dc] uppercase mb-2">Այլ</h4>
                      <p>{selectedMember.extra}</p>
                    </div>
                  )}
                </div>

                <div className="text-right pt-4 border-t">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="bg-[#6400dc] text-white px-6 py-2 rounded-full font-bold text-xs hover:bg-opacity-90 cursor-pointer"
                  >
                    Փակել
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}