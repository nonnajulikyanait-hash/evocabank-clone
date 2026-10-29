import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Qarter() {
  const [activeTab, setActiveTab] = useState('cards'); // 'cards' կամ 'provision'
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeCardTab, setActiveCardTab] = useState('about');
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const cardsList = [
    {
      id: 1,
      title: "Evoca Travel Card",
      image: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
      desc: "Սիրո՞ւմ ես ճամփորդել․ ուրեմն ժամանակն է ձեռք բերելու Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական անբաժան ընկերը։",
      categories: ['Mastercard'],
      features: [
        { label: "Cashback արտասահմանում իրականացրած վճարումների համար", value: "1.5%", prefix: "Մինչև" },
        { label: "Lounge Key սրահներ քեզ և հյուրերիդ համար", value: "6 մուտք", prefix: "Անվճար" },
        { label: "Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար", value: "6 անգամ", prefix: "Անվճար" },
        { label: "Քարտի տարեկան սպասարկում", value: "16․000֏" }
      ]
    },
    {
      id: 2,
      title: "Evoca Visa Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17798007931247/415x261.png",
      desc: "Պրեմիում առավելություններ պրեմիում քարտով։",
      categories: ['Պրեմիում', 'VISA'],
      features: [
        { label: "Սպասարկման վճար", value: "30.000 ֏" },
        { label: "Օդանավակայանների բիզնես սրահներ", value: "6 մուտք", prefix: "Անվճար" }
      ]
    },
    {
      id: 3,
      title: "Wilco Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/17815131185095/415x261.png",
      desc: "Բացահայտեք պրեմիում բանկինգի և անհատականացված ֆինանսական փորձառությունը Wilco Visa Infinite քարտի հետ։",
      categories: ['Պրեմիում', 'VISA'],
      features: []
    },
    {
      id: 4,
      title: "Evoca Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
      desc: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը:)",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 5,
      title: "Digital Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
      desc: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող:",
      categories: ['Նվեր քարտեր', 'Թվային քարտեր', 'Mastercard'],
      features: []
    },
    {
      id: 6,
      title: "Visa Infinite",
      image: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
      desc: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է։",
      categories: ['Պրեմիում', 'VISA'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում", value: "1%" },
        { label: "Կանխիկացում ԱրՔա անդամ բանկերի կանխիկացման կետերում", value: "1.2%" },
        { label: "Կանխիկացում ԱրՔա անդամ չհանդիսացող բանկերի կանխիկացման կետերում", value: "1.5%", prefix: "min 2,500 ֏" },
        { label: "Տարեկան սպասարկում", value: "100,000 ֏" }
      ]
    },
    {
      id: 7,
      title: "Visa Vision",
      image: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
      desc: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:)",
      categories: ['VISA'],
      features: []
    },
    {
      id: 8,
      title: "Mastercard World Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
      desc: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։",
      categories: ['Թվային քարտեր', 'Mastercard'],
      features: [
        { label: "Կանխիկացում բանկի բանկոմատներից", value: "2%" },
        { label: "Կանխիկացում ԱրՔա համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից", value: "2.5%" }
      ]
    },
    {
      id: 9,
      title: "UnionPay Business Platinum",
      image: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
      desc: "Այս պրեմիում դասի քարտը կդառնա Ձեր գործընկերը հաջողության ճանապարհին:",
      categories: ['Պրեմիում', 'UnionPay'],
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" }
      ]
    },
    {
      id: 10,
      title: "MyLer Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17655348192361/415x261.png",
      desc: "Մեկ քարտ, անսահմանափակ արկածներ:)",
      categories: ['Նվեր քարտեր', 'arca'],
      features: []
    },
    {
      id: 11,
      title: "UnionPay Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17262129422977/415x261.png",
      desc: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը:",
      categories: ['UnionPay'],
      features: [
        { label: "Կանխիկացում", value: "0.5%" },
        { label: "Քարտի ժամկետ", value: "5 տարի" },
        { label: "Տարեկան սպասարկման վճար", value: "15,000 ֏" }
      ]
    },
    {
      id: 12,
      title: "4U.am Gift card",
      image: "https://www.evoca.am/images-cache/cards/1/17485032554482/415x261.png",
      desc: "Երբ ժամանակակիցն ու կրեատիվը հանդիպում են, ստեղծվում է իդեալական նվեր։",
      categories: ['Նվեր քարտեր', 'arca'],
      features: []
    },
    {
      id: 13,
      title: "Mastercard Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865321136/415x261.png",
      desc: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով։",
      categories: ['Mastercard'],
      features: [
        { label: "Կանխիկացում բանկի կանխիկացման կետերում մինչև 2 մլն ֏", value: "0%" },
        { label: "Տարեկան սպասարկում", value: "15․000 ֏" }
      ]
    },
    {
      id: 14,
      title: "Mastercard Standard",
      image: "https://www.evoca.am/images-cache/cards/1/17149866652788/415x261.png",
      desc: "Աշխարհի ցանկացած կետում, որտեղ էլ լինես, քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն։",
      categories: ['Mastercard'],
      features: [
        { label: "Քարտի տարեկան սպասարկում", value: "5000 ֏" }
      ]
    },
    {
      id: 15,
      title: "Visa Digital",
      image: "https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png",
      desc: "Պատվիրիր Evoca Digital քարտը հիմա EvocaTOUCH հավելվածով:",
      categories: ['Թվային քարտեր', 'VISA'],
      features: [
        { label: "Տարեկան սպասարկում", value: "1000 ֏" }
      ]
    },
    {
      id: 16,
      title: "Visa Classic",
      image: "https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png",
      desc: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով:",
      categories: ['VISA'],
      features: [
        { label: "Տարեկան սպասարկում", value: "5,000 ֏" }
      ]
    },
    {
      id: 17,
      title: "Arca Classic",
      image: "https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png",
      desc: "Evocabank-ի հետ ցանկացած գնում և վճարում ապահով է և հուսալի։",
      categories: ['arca'],
      features: [
        { label: "Տարեկան սպասարկում", value: "1500 ֏" }
      ]
    },
    {
      id: 18,
      title: "Arca-UnionPay",
      image: "https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png",
      desc: "Մեկ քարտ, բազմաթիվ հնարավորություններ:",
      categories: ['arca', 'UnionPay'],
      features: [
        { label: "տարեկան (ամսական՝ 250֏)", value: "2,500֏" }
      ]
    },
    {
      id: 19,
      title: "Visa Business",
      image: "https://www.evoca.am/images-cache/cards/1/17149865475676/415x261.png",
      desc: "Գործուղման մեկնելիս Ձեր ներկայացուցչական ծախսերը կարող եք հոգալ Visa Business քարտով։",
      categories: ['VISA'],
      features: []
    },
    {
      id: 20,
      title: "Dalma Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png",
      desc: "Նվեր ընտրելն այլևս դժվար չէ:)",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 21,
      title: "Rio Gift Card",
      image: "https://www.evoca.am/images-cache/cards/1/17404717289057/415x261.png",
      desc: "Ամեն ինչ մեկ նվեր քարտում",
      categories: ['Նվեր քարտեր'],
      features: []
    },
    {
      id: 22,
      title: "Visa Gold",
      image: "https://www.evoca.am/images-cache/cards/1/17149865646885/415x261.png",
      desc: "Նոր քարտերի թողարկումը դադարեցված է 25.11.2024 թվականից",
      categories: ['VISA'],
      features: [
        { label: "Տարեկան սպասարկում", value: "15,000 ֏" }
      ]
    }
  ];

  const provisionSections = [
    {
      title: "Քարտի տրամադրում և ակտիվացում",
      content: [
        "Բանկը հաճախորդներին տրամադրում է Հաշվարկային կամ Վարկային` «ArCa» լոկալ, «Visa», «Mastercard» և «UnionPay» միջազգային վճարային համակարգերի քարտեր:",
        "Քարտային հաշիվները բացվում և վարվում են ՀՀ դրամով, ԱՄՆ դոլարով, ԵՎՐՈ-ով և ՌԴ ռուբլով:",
        "Արագ փոխանցման համակարգերով ստացված գումարներ հաճախորդի կարգադրությամբ կարող են հաշվեգրվել նաև հաճախորդի Բանկում ունեցած այլ Քարտային հաշվին:",
        "Բանկը դիմումի համաձայն Քարտապանի կողմից լիազորված անձանց կարող է տրամադրել Լրացուցիչ քարտեր: Քարտային հաշիվը տնօրինում է հիմնական Քարտի Քարտապանը: Հիմնական Քարտի Քարտապանը պատասխանատվություն է կրում տրամադրված բոլոր Լրացուցիչ Քարտերով իրականացված գործարքների համար: Լրացուցիչ քարտը կարող է տրամադրվել անմիջականորեն այն օգտագործողին միայն հիմնական Քարտապանի նախապես ներկայացված գրավոր համաձայնության դեպքում:",
        "Բանկը Քարտապանի Քարտային հաշվի դրական մնացորդի նկատմամբ հաշվեգրում է տոկոսագումարներ, տոկոսադրույքի չափը սահմանվում է Բանկի սակագներով:",
        "Վճարային Քարտը Քարտապանին է տրամադրվում Բանկի գլխամասային գրասենյակում, մասնաճյուղերում, ինչպես նաև առաքման միջոցով` Վճարային քարտի ստացման դիմումը ներկայացնելուն հաջորդող 7 (յոթ) աշխատանքային օրվա ընթացքում:",
        "Քարտապանը Վճարային քարտը ստանալիս պետք է ներկայացնի անձը հաստատող այն փաստաթուղթը, որով դիմել է քարտի համար (անձնագիր կամ նույնականացման քարտ):",
        "Բանկը Քարտապանին Վճարային Քարտը կարող է տրամադրել PIN ծածկագրով կամ առանց PIN ծածկագրի: Վճարային Քարտը և PIN ծածկագիրը Քարտապանին տրամադրվում են առանձին փակ ծրարներով: Վճարային Քարտը առանց PIN ծածկագրի տրամադրման դեպքում քարտի ակտիվացումը և Հաճախորդի կողմից PIN ծածկագրի սահմանումը կատարվում է Հաճախորդի համար Բանկում գրանցված հեռախոսահամարին ստացված OTP գաղտնաբառի միջոցով:",
        "Քարտը և PIN ծածկագիրը ստանալուն պես Քարտապանը պետք է ստուգի ծրարի փակ և անվնաս լինելը, քարտի և PIN-ծածկագրի առկայությունը ծրարում, համապատասխանությունը քարտի պատվիրման հայտին, ինչպես նաև քարտի վրա նշված տվյալների ճշտությունը: Անհամապատասխանությունների դեպքում Քարտապանը պետք է անմիջապես տեղեկացնի Բանկին:",
        "Վճարային Քարտը ստանալուն պես Քարտապանը պարտավոր է անմիջապես ստորագրել Վճարային Քարտի հակառակ կողմի վրա ստորագրության համար նախատեսված մասում: Վճարային Քարտի հակառակ կողմում ստորագրության բացակայությունը կամ դրա անհամապատասխանությունը օրինական հիմք է քարտի սպասարկումը մերժելու և այն առգրավելու համար:",
        "Բանկի կողմից Վճարային Քարտերը տրամադրվում են մինչև 5 (հինգ) տարի ժամկետով:",
        "Հաճախորդի ներկայացրած դիմումի հիման վրա Բանկը կարող է վարկավորել Հաճախորդի Քարտային հաշիվը` վերջինիս հետ կնքելով համապատասխան վարկային սահմանաչափի տրամադրման պայմանագիր:",
        "Եթե Հաճախորդը Վճարային քարտը պատվիրելուց հետո 30 օրացուցային օրվա ընթացքում չի դիմում Բանկ Վճարային քարտը ստանալու համար, ապա Բանկը կարող է ոչնչացնել Վճարային քարտը` փակելով քարտային հաշիվը, և չվերադարձնել գանձված միջնորդավճարները:"
      ]
    },
    {
      title: "Վճարային քարտի վճարներ և գանձումներ",
      content: [
        "Քարտապանը վճարում է Բանկին Վճարային Քարտի սպասարկման հետ կապված Բանկի սակագներով սահմանված միջնորդավճարներ, եթե Բանկի և Քարտապանի միջև այլ համաձայնություն չի կայացվել:",
        "Վճարային Քարտի սպասարկման միջնորդավճարի առաջին վճարումը Քարտապանը կատարում է քարտը պատվիրելիս, իսկ հաջորդ վճարումները՝ Բանկի սակագներով սահմանված պարբերականությամբ՝ կանխավճարային կարգով: Վճարային Քարտի գործողությունը վաղաժամկետ դադարելու դեպքում գանձված սպասարկման վճարը չի վերադարձվում:",
        "Վճարային Քարտի սպասարկման միջնորդավճարի գծով չմարված պարտավորության դեպքում մինչև Հաճախորդի կողմից պարտավորության լրիվ մարումը Բանկի կողմից Վճարային քարտը բլոկավորվում է:",
        "Վճարային Քարտով գործարքների իրականացման, ինչպես նաև Բանկի կողմից Վճարային Քարտի սպասարկման հետ կապված վճարների գանձման արդյունքում քարտի վճարային սահմանաչափը գերազանցելու դեպքում Քարտային հաշվին ձևավորվում է Գերածախս: Բանկի սակագներով կարող է սահմանվել Գերածախսի գծով տուժանք: Բանկին վճարման ենթակա Գերածախսի գումարները Քարտապանը պարտավոր է մարել անմիջապես:",
        "Բանկի սակագներով Վճարային Քարտի համար սահմանված միջնորդավճարները և Վճարային Քարտի սպասարկման հետ կապված այլ վճարները՝ ներառյալ Քարտային հաշվին ձևավորված Գերածախսը, պարտավորությունները կազմող գումարները Բանկի կողմից գանձվում են անակցեպտ եղանակով՝ առանց Քարտապանի հանձնարարականի: Գանձումն առաջնահերթ կատարվում է Քարտային հաշվից, իսկ Քարտային հաշվին միջոցների բացակայության դեպքում, Քարտապանի՝ Բանկում ունեցած այլ հաշիվներից: Ընդ որում, Քարտապանը պարտավոր է ապահովել համապատասխան դրամական միջոցների առկայությունը իր բանկային հաշիվ(ներ)ին:",
        "Չեղարկված գործարքի գումարը առևտրի/սպասարկման կետի կողմից վերադարձվելուց հետո Բանկը մուտքագրում է Քարտային հաշվին՝ նվազեցնելով չեղարկման համար պահումները (առկայության դեպքում): Անկախ չեղարկված գործարքի գումարի վերադարձման հանգամանքից և ժամկետից՝ Քարտապանը պետք է Բանկին վճարի կատարված գործարքի արդյունքում Բանկի նկատմամբ ձևավորված պարտավորությունները:",
        "Բանկը պատասխանատվություն չի կրում առևտրի/սպասարկման կետի կողմից մատուցված որևէ ծառայության դիմաց գանձված և Քարտապանի Քարտային հաշվից ելքագրված վճարի համար:"
      ]
    },
    {
      title: "Վճարային Քարտի օգտագործման, պահպանման և անվտանգության կանոնները",
      content: [
        "Նախքան Վճարային Քարտն օգտագործելը Քարտապանը պարտավոր է ստուգել տվյալ քարտը սպասարկող սարքի կամ սարքավորման միջոցով Վճարային Քարտով իրականացվող գործարքների տեսակները (կանխիկի տրամադրում, կանխիկի մուտքագրում, վճարումներ և այլն), ինչպես նաև Վճարային Քարտը սպասարկող վճարահաշվարկային համակարգերով (ArCa, MasteCard, VISA և այլն) սպասարկելու հնարավորությունը:",
        "Վճարային Քարտի, PIN ծածկագրի, CVV/CVC կոդի և Բանկի կողմից տրամադրված գաղտնաբառի օգտագործման հետ կապված ամբողջ ռիսկը կրում է Քարտապանը:",
        "PIN ծածկագիրը Քարտապանը պետք է պահպանի գաղտնի և այն հասանելի չդարձնի այլ անձանց: Բանկը պատասխանատվություն չի կրում Քարտապանի կողմից իր PIN ծածկագիրը երրորդ անձանց հասանելի դառնալու հետևանքով Վճարային Քարտի ոչ օրինական և Քարտապանի կողմից չարտոնված օգտագործման համար:",
        "Քարտապանը կարող է իր հայեցողությամբ փոխել PIN ծածկագիրը` համապատասխան հնարավորությամբ բանկոմատի միջոցով: PIN ծածկագրի փոփոխման համար անհրաժեշտ է մուտքագրել գործող PIN ծածկագիրը և նոր PIN ծածկագիրը:",
        "Քարտապանն իրավունք չունի փոխանցել Վճարային Քարտը, հայտնել PIN ծածկագիրը, CVV/CVC կոդը, գաղտնաբառը այլ անձանց: Քարտապանը պարտավոր է ձեռնարկել միջոցներ, որպեսզի Վճարային Քարտը, PIN-կոդը, CVV/CVC կոդը, գաղտնաբառը, քարտի վրա նշված տեղեկատվությունը տեսանելի կամ այլ կերպ հասանելի չլինեն այլ անձանց:",
        "Արգելվում է գրել PIN ծածկագիրը Վճարային Քարտի վրա, ինչպես նաև Վճարային Քարտը և PIN ծածկագիրը պահել միասին:",
        "Վճարային Քարտը օգտագործելիս PIN ծածկագիրը անհրաժեշտ է հավաքել այնպես, որ տեսանելի չլինի այլ անձանց համար և չտեսագրվի որևէ տեսաձայնագրող սարքի միջոցով:",
        "Վճարային Քարտով գործարքների իրականացման ժամանակ Քարտապանը պետք է մուտքագրի PIN ծածկագիրը, եթե գործարքի կատարման համար օգտագործվող սարքավորման միջոցով տվյալ տեսակի քարտով գործարքի իրականացման համար պահանջվում է PIN ծածկագրի մուտքագրում: PIN ծածկագրի մուտքագրումն անհրաժեշտ է նաև NFC վճարումների ժամանակ` առանց PIN ծածկագրի մուտքագրման շեմի գերազանցման դեպքում:",
        "Ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում) քարտով գործարքների իրականացման ժամանակ PIN ծածկագրի փոխարեն կարող է պահանջվել CVV/CVC կոդի մուտքագրում:",
        "Արգելվում է ինտերնետ միջավայրում (վիրտուալ առևտրի կետերում) մուտքագրել (հայտնել) PIN ծածկագիրը: PIN ծածկագիրը հայտնելու դեպքում անհրաժեշտ է անմիջապես դադարեցնել գործարքը, տեղեկացնել Բանկին և բլոկավորել քարտը:",
        "Ինտերնետ միջավայրում քարտով գործարք կատարելիս Քարտապանը պետք է նախապատվություն տա ապահով վճարում նախատեսող կայքերին (secure-payment website): Առցանց խաղատները, բուքմեյքերական գրասենյակները համարվում են առավել ռիսկային:",
        "Քարտապանը պետք է առավել ուշադիր լինի այն գործարքների մասով, որոնք իրականացվում են ժամանցի և նմանատիպ այլ վայրերում: Խորհուրդ է տրվում Վճարային Քարտը չվստահել այլ անձանց և թույլ չտալ Վճարային Քարտի օգտագործումը Քարտապանի տեսադաշտից դուրս:",
        "Չի կարելի օգտվել այն բանկոմատներից, կանխիկացման և առևտրի/սպասարկման կետերից և սարքավորումներից, որոնք Քարտապանի կարծիքով վստահելի չեն կամ կասկած են առաջացնում, ինչպես նաև, եթե դրանց քարտ ընթերցող սարքին, ստեղնաշարին կամ կանխիկի տրամադրման պատուհանին միացված են լրացուցիչ սարքավորումներ, հաղորդալարեր, կպչուն ժապավեններ և այլ կասկածելի իրեր։",
        "Սույն պայմաններով սահմանված կանոնների և պահանջների խախտումով Վճարային Քարտով կատարված գործարքների, ինչպես նաև քարտի, PIN-ծածկագրի, գաղտնաբառի, Վճարային քարտի վրա նշված տեղեկատվության (Վճարային քարտի համար, CVV/CVC կոդ, վավերության ժամկետ), OTP գաղտնաբառի օգտագործման, երրորդ անձանց տրամադրման կամ հայտնի դառնալու հետևանքով Քարտապանի կրած վնասների համար Բանկը որևէ պատասխանատվություն չի կրում:"
      ]
    },
    {
      title: "Վճարային Քարտի օգտագործումը",
      content: [
        "Վճարային Քարտով իրականացվում են հետևյալ տեսակի գործարքները` Քարտային հաշվի համալրում, Քարտային հաշվից կանխիկացում, Անկանխիկ վճարումների իրականացում, Քարտից քարտ փոխանցումներ:",
        "Քարտապանը Քարտային հաշվի համալրում կարող է իրականացնել կանխիկ և անկանխիկ եղանակներով:",
        "Քարտային հաշվին կանխիկ եղանակով համալրում իրականացնելու համար Քարտապանը մոտենում է Բանկի Գլխամասային գրասենյակ կամ Մասնաճյուղ և կատարում է համալրումը: Քարտային հաշվին կանխիկ եղանակով համալրումներ կարող են իրականացվել նաև Բանկի կանխիկի մուտքի հնարավորությամբ բանկոմատների, վճարային տերմինալների, ինչպես նաև այլ բանկերի և վճարահաշվարկային կազմակերպությունների վճարային տերմինալների միջոցով:",
        "Քարտային հաշվին անկանխիկ եղանակով համալրում իրականացվում է Բանկի կամ այլ Բանկերի, Քարտապանի կամ այլ անձանց բանկային հաշիվներից՝ Քարտապանի Քարտային հաշվին փոխանցում կատարելու միջոցով:",
        "Բանկի Գլխամասային գրասենյակում կամ մասնաճյուղերում Բանկի վճարային տերմինալներով կանխիկ մուտքագրված գումարները քարտի վրա հասանելի են լինում անմիջապես, իսկ հաշվին` հաջորդ աշխատանքային օրը: Բանկի այլ հաշիվներից Քարտային հաշվին փոխանցումը քարտի վրա հասանելի է դառնում, որպես կանոն, մինչև 30 (երեսուն) րոպեի ընթացքում (ArCa պրոցեսինգային կենտրոնում տեխնիկական կամ ծրագրային խնդիրների բացակայության դեպքում):",
        "Այլ բանկերի և կազմակերպությունների կանխիկի մուտքագրման սարքավորման հնարավորություններն ու սահմանափակումները՝ կապված մուտքագրվող գումարի արժույթի, թղթադրամի արժողության/տեսակի հետ և այլն, սահմանվում են տվյալ սարքավորման սպասարկող կազմակերպության և (կամ) վճարահաշվարկային համակարգի կողմից:",
        "Քարտապանը կանխիկացման գործառնությունները կարող է իրականացնել բանկոմատների (ATM) կամ POS-տերմինալների միջոցով, տվյալ կետի կողմից տվյալ վճարահաշվարկային համակարգի քարտերի ընդունման պարագայում:",
        "Կանխիկացման գործառնություններ իրականացնելիս կանխիկացման միջնորդավճարը կարող է հաշվարկվել և գումարվել պահանջվող գումարին հավաստագրման հարցում իրականացնելիս:",
        "Այլ բանկերի բանկոմատներում կամ կանխիկացման կետերում կանխիկացման գործարքներ իրականացնելիս այն սպասարկող բանկը կարող է սահմանել կանխիկացման լրացուցիչ միջնորդավճարներ:",
        "Գործարքի գումարը Վճարային քարտից ելքագրվում կամ մուտքագրվում է (C2C) անմիջապես, իսկ Քարտային հաշվում հաշվառվում է ArCa համակարգում կատարված գործարքների դեպքում հաջորդ աշխատանքային օրը, իսկ ԱրՔա համակարգից դուրս՝ 2-5 աշխատանքային օր հետո:"
      ]
    },
    {
      title: "Արտարժույթով արտահայտված գործառնությունների կատարում",
      content: [
        "Վճարային Քարտով գործարքները հնարավոր է իրականացնել ինչպես Քարտային հաշվի արժույթով, այնպես էլ Քարտային հաշվի արժույթից տարբերվող արժույթով:",
        "Հաշվի արժույթով կատարված գործարքի դեպքում գործարքի գումարը Քարտային հաշվից գանձվում առանց փոխարկման՝ նույն արժույթով:",
        "Եթե Քարտով կատարված գործարքի արժույթը տարբեր է Քարտային հաշվի արժույթից, ապա գործարքի ձևակերպման ժամանակ գործարքի գումարը փոխարկվում է Քարտային հաշվի արժույթի:",
        "ԱրՔա պրոցեսինգային կենտրոնի շրջանակներում փոխարկումն իրականացվում է ՀՀ Կենտրոնական բանկի փոխարժեքով՝ հաշվի առնելով սահմանված տոկոսային շեղումները:",
        "ԱրՔա պրոցեսինգային կենտրոնի շրջանակներից դուրս՝ Visa, Mastercard և UnionPay համակարգերում կատարվում են հավաստագրման, հաշվանցման և ելքագրման փոխարկումներ, որոնց ընթացքում ԱՄՆ դոլարից տարբերվող արժույթների դեպքում գանձվում է լրացուցիչ միջնորդավճար (2%):"
      ]
    },
    {
      title: "Վճարային Քարտի առգրավում/բռնագանձում",
      content: [
        "Քարտապանի կողմից Վճարային Քարտը սխալ օգտագործելու դեպքում (օրինակ` 3 անգամ սխալ PIN ծածկագիրը հավաքելու կամ Քարտը Բանկոմատում մոռանալու և այլ դեպքերում) այն կարող է առգրավվել բանկոմատի կողմից:",
        "Եթե Բանկոմատի միջոցով քարտով գործարք կատարելիս Վճարային Քարտը Բանկոմատում առգրավվել է, և առգրավման պատճառի մասին հաղորդագրություն չկա, Քարտապանը պետք է անմիջապես զանգահարի Բանկ և ստուգի քարտի կարգավիճակը:",
        "Առգրավված Վճարային Քարտը բլոկավորված չլինելու դեպքում Քարտապանը մոտենում է Բանկ և անձը հաստատող փաստաթղթով ստանում քարտը:",
        "Բանկը բռնագանձում է Վճարային Քարտը, եթե հայտնաբերվի քարտի գողացված լինելու, անօրինական օգտագործման կամ պայմանագրի խախտման փաստ:"
      ]
    },
    {
      title: "Վճարային Քարտի վերաթողարկում",
      content: [
        "Վճարային քարտի օգտագործման ժամկետը լրանալուց առաջ քարտապանը դիմումի համաձայն կարող է վերաթողարկել այն:",
        "Վճարային քարտի ժամկետի ավարտից հետո այն չի վերաթողարկվում, եթե ժամկետի լրացմանը նախորդող 10 (տաս) օրվա ընթացքում քարտապանը չի տեղեկացրել վերաթողարկելու ցանկության մասին:",
        "Վերաթողարկված քարտը քարտապանին է տրամադրվում ոչ ուշ, քան հին քարտի ժամկետի ավարտից 5 (հինգ) աշխատանքային օրվա ընթացքում:",
        "Վերաթողարկում իրականացվում է նաև քարտի կամ PIN ծածկագրի կորստի, վնասվելու և այլ դեպքերում՝ համաձայն դիմումի:"
      ]
    }
  ];

  const documentsList = [
    { title: "Կենսաթոշակային քարտեր", link: "https://www.evoca.am/files/global_files/1/pention-cards.pdf" },
    { title: "Evoca Gift քարտեր (Տեղեկատվական ամփոփագիր)", link: "https://www.evoca.am/files/global_files/1/evoca-gift-tariffs.pdf" },
    { title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 08.06.26", link: "https://www.evoca.am/files/global_files/1/bank-account-08-06-26.pdf" },
    { title: "Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)", link: "https://www.evoca.am/files/global_files/1/visa-digital-03-25.pdf" },
    { title: "«ԷՎՈԿԱԲԱՆԿ» ԲԲԸ վճարային քարտերի կիրառմամբ EvocaTouch բջջային հավելվածով թվայնացված քարտերով գործարքների կատարման հիմնական պայմաններ և դրույթներ", link: "https://www.evoca.am/files/global_files/1/digital-cards-terms-and-conditions.pdf" },
    { title: "Visa Infinite քարտեր (Տեղեկատվական ամփոփագիր)", link: "https://www.evoca.am/files/global_files/1/visa-infinite-2026.pdf" },
    { title: "UnionPay Business Platinum քարտեր (Տեղեկատվական ամփոփոգիր)", link: "https://www.evoca.am/files/global_files/1/union-pay-17-03-26.pdf" }
  ];

  const filteredCards = cardsList;

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Purple Sub-bar #6400dc */}
        <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <span 
              onClick={() => { setSelectedCard(null); setActiveTab('cards'); }} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'cards' && !selectedCard ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Քարտեր
            </span>
            <span 
              onClick={() => { setSelectedCard(null); setActiveTab('provision'); }} 
              className={`cursor-pointer pb-1 transition ${activeTab === 'provision' && !selectedCard ? 'border-b-2 border-white text-white' : 'text-white opacity-80 hover:opacity-100'}`}
            >
              Քարտերի տրամադրում և սպասարկում
            </span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">Սոցիալական ապահովության վճարային քարտեր</span>
            <span className="text-white opacity-80 hover:opacity-100 cursor-pointer">Evoca Benefits</span>
          </div>
        </div>

        {selectedCard ? (
          /* ================= ՔԱՐՏԻ ՄԱՆՐԱՄԱՍՆ ԷՋԸ ================= */
          <div>
            <div className="relative bg-[#e6d2ff] text-neutral-900 overflow-hidden py-16 px-4 md:px-12 rounded-b-[40px] shadow-sm">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4 text-left">
                  <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
                    {selectedCard.title}
                  </h1>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
                    {selectedCard.desc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={selectedCard.image} 
                    alt={selectedCard.title} 
                    className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => setSelectedCard(null)} 
                  className="text-xs font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1 cursor-pointer"
                >
                  ← Վերադառնալ
                </button>
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <span>🏠</span> &gt; <span>Անհատ</span> &gt; 
                  <span onClick={() => setSelectedCard(null)} className="cursor-pointer hover:text-[#6400dc]">Քարտեր</span> &gt; 
                  <span className="text-gray-700 font-medium">{selectedCard.title}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-8 space-y-6 text-left">
                  <div className="flex border-b border-gray-200 gap-8 text-sm font-bold">
                    <button 
                      onClick={() => setActiveCardTab('about')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeCardTab === 'about' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Քարտի մասին
                    </button>
                    <button 
                      onClick={() => setActiveCardTab('conditions')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeCardTab === 'conditions' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Պայմաններ
                    </button>
                    <button 
                      onClick={() => setActiveCardTab('documents')}
                      className={`pb-3 cursor-pointer transition-all border-b-2 ${activeCardTab === 'documents' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
                    >
                      Պահանջվող փաստաթղթեր
                    </button>
                  </div>

                  {activeCardTab === 'about' && (
                    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                      <p>{selectedCard.desc}</p>
                    </div>
                  )}

                  {activeCardTab === 'conditions' && (
                    <div className="space-y-3 text-sm text-gray-700">
                      <p className="font-semibold text-neutral-900">Ընդհանուր պայմաններ․</p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Արժույթը՝ ՀՀ դրամ, ԱՄՆ դոլար, Եվրո</li>
                        <li>Ժամկետը՝ 3-5 տարի</li>
                      </ul>
                    </div>
                  )}

                  {activeCardTab === 'documents' && (
                    <div className="space-y-3 text-sm text-gray-700">
                      <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                        <li>Անձնագիր կամ նույնականացման քարտ</li>
                        <li>ՀԾՀ (Սոց. քարտ)</li>
                      </ol>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-24 space-y-4">
                  <div className="flex justify-center">
                    <span className="w-10 h-10 rounded-full bg-[#6400dc] text-white flex items-center justify-center font-bold text-base">
                      💳
                    </span>
                  </div>
                  {selectedCard.features && selectedCard.features.length > 0 && (
                    <div className="space-y-3 border-t border-b border-gray-100 py-4 text-left text-xs">
                      {selectedCard.features.map((feat, idx) => (
                        <div key={idx} className="pt-1">
                          <div className="text-lg md:text-xl font-black text-[#6400dc]">{feat.value}</div>
                          <div className="text-[11px] text-gray-400 font-medium">{feat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs py-3.5 rounded-full transition shadow-md cursor-pointer">
                    Պատվիրել քարտը
                  </button>
                </div>
              </div>
            </div>

            {/* Swiper / Slider for other cards */}
            <div className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-100">
              <h2 className="text-2xl font-black text-neutral-900 mb-6 text-left">Այլ քարտեր</h2>
              <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin snap-x">
                {cardsList.filter(c => c.id !== selectedCard.id).map(card => (
                  <div
                    key={card.id}
                    onClick={() => { setSelectedCard(card); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="min-w-[260px] max-w-[260px] bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-md transition cursor-pointer snap-start flex-shrink-0 text-left flex flex-col justify-between"
                  >
                    <div className="h-40 flex items-center justify-center mb-4 bg-gray-50 rounded-2xl p-3">
                      <img src={card.image} alt={card.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-extrabold text-neutral-900 text-sm line-clamp-1">{card.title}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2">{card.desc}</p>
                      <span className="text-[#6400dc] font-bold text-xs inline-block pt-2">Մանրամասն &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EvocaOnlineMobile />
          </div>
        ) : activeTab === 'provision' ? (
          /* ================= ՔԱՐՏԵՐԻ ՏՐԱՄԱԴՐՈՒՄ ԵՎ ՍՊԱՍԱՐԿՈՒՄ ԷՋ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8 text-left">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="cursor-pointer hover:text-[#6400dc]" onClick={() => setActiveTab('cards')}>Քարտեր</span> &gt; <span className="text-gray-700 font-medium">Քարտերի տրամադրում և սպասարկում</span>
            </div>

            <h1 className="text-3xl font-black text-neutral-900 mb-8">
              Քարտերի տրամադրում և սպասարկում
            </h1>

            <div className="mb-10">
              <h1 className="text-xl font-bold text-neutral-900 mb-6 text-left">
                ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ
              </h1>

              <div className="space-y-4">
                {provisionSections.map((sec, secIdx) => (
                  <div key={secIdx} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => toggleAccordion(secIdx)}
                      className="w-full flex justify-between items-center p-4 text-left font-bold text-neutral-800 hover:bg-purple-50 transition cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#6400dc]">⌄</span> {sec.title}
                      </span>
                      <span className="text-xs text-gray-400 font-normal">{openAccordions[secIdx] ? 'Փակել' : 'Բացել'}</span>
                    </button>

                    {openAccordions[secIdx] && (
                      <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3 text-xs md:text-sm text-gray-700">
                        {sec.content.map((itemText, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-3">
                            <span className="bg-[#6400dc] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                              {itemIdx + 1}
                            </span>
                            <p className="leading-relaxed">{itemText}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Փաստաթղթեր բաժին */}
            <div className="mb-16">
              <h1 className="text-xl font-bold text-neutral-900 mb-6 text-left">
                Փաստաթղթեր
              </h1>
              <div className="space-y-3">
                {documentsList.map((doc, docIdx) => (
                  <a
                    key={docIdx}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl hover:bg-purple-50 hover:border-[#6400dc] transition group shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#6400dc] font-bold text-lg">📄</span>
                      <span className="text-xs md:text-sm font-medium text-neutral-800 group-hover:text-[#6400dc] transition">
                        {doc.title}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#6400dc] opacity-0 group-hover:opacity-100 transition">
                      Ներբեռնել &gt;
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <EvocaOnlineMobile />
          </main>
        ) : (
          /* ================= ՔԱՐՏԵՐԻ ՑԱՆԿԻ ԷՋԸ ================= */
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-xs text-gray-400 mb-4 flex items-center gap-2 text-left">
              <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span className="text-gray-700 font-medium">Քարտեր</span>
            </div>

            <h1 className="text-3xl font-black text-neutral-900 mb-8 text-left">
              Քարտեր
            </h1>

            <div className="space-y-10 mb-16">
              {filteredCards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 rounded-3xl overflow-hidden flex items-center justify-center aspect-[16/10]">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  <div className="lg:col-span-8 space-y-5 text-left">
                    <h3 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {card.desc}
                    </p>

                    {card.features && card.features.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                        {card.features.map((feat, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="text-base md:text-xl font-black text-[#6400dc]">
                              {feat.value}
                            </div>
                            <div className="text-[11px] text-gray-400 font-medium">
                              {feat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2">
                      <button 
                        onClick={() => { setSelectedCard(card); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer"
                      >
                        Մանրամասն &gt;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        )}
      </div>

      <Footer />
    </div>
  );
}