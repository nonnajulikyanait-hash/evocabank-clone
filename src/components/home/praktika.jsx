import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Praktika() {
  // Թափուր աշխատատեղերի ցանկը
  const jobsList = [
    {
      id: 1,
      title: 'Մանրածախ վարկային պրոդուկտների մշակման մասնագետ',
      deadline: '20.11.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է Մանրածախ վարկային պրոդուկտների մշակման մասնագետ, ով պատասխանատու կլինի բանկային սպառողական պրոդուկտների ստեղծման, զարգացման և կատարելագործման համար՝ ապահովելով դրանց մրցունակությունը, շահութաբերությունը և համապատասխանությունը հաճախորդների պահանջներին։`,
      benefits: [
        'բժշկական ապահովագրություն',
        'ճամփորդական ապահովագրություն',
        'Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ',
        'տոնական և տարեվերջյան բոնուսներ',
        'բոնուսներ ամուսնության կամ երեխայի ծննդյան առթիվ',
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ',
        'անգլերեն լեզվի դասընթացներ',
        'շարունակական կրթության և զարգացման լայն հնարավորություններ (մասնակցություն միջազգային կոնֆերանսներին, գործուղումներ արտերկիր, հնարավորություն ստանալու միջազգային հավաստագրեր և սովորելու աշխարհի լավագույն համալսարաններում)'
      ],
      responsibilities: [
        'շուկայի միտումների, մրցակիցների առաջարկների և հաճախորդների կարիքների պարբերաբար ուսումնասիրություն և ստացված տվյալների վերլուծություն',
        'մանրածախ վարկային նոր պրոդուկտների պայմանների, սակագների և ֆինանսական մոդելի մշակում, համաձայնեցում համապատասխան ստորաբաժանումների հետ',
        'պրոդուկտներին վերաբերող ներքին ընթացակարգերի և հաճախորդներին ուղղված փաստաթղթերի մշակում',
        'գործընթացների թվայնացման նախագծերի իրականացում և պրոդուկտի ներդրումից առաջ ծրագրային լուծումների թեստավորում',
        'պրոդուկտի փորձնական մեկնարկի արդյունքների վերլուծություն, հետադարձ կարծիքների հավաքագրում, անհրաժեշտության դեպքում պրոդուկտի լրամշակման գործընթացի իրականացում',
        'պրոդուկտների գծով Բանկի ստորաբաժանումների համար ընթացիկ պարզաբանող գրությունների պատրաստում և շրջանառում, աշխատակիցների ուսուցանում',
        'ընթացիկ աշխատանքների կազմակերպում, վերահսկում և հաշվետվությունների ներկայացում ղեկավարին'
      ],
      requirements: [
        'բարձրագույն կրթություն ֆինանսների, տնտեսագիտության կամ այլ համապատասխան ոլորտում',
        'առնվազն 1 տարվա աշխատանքային փորձ բանկային կամ ֆինանսական պրոդուկտների մշակման ոլորտներում',
        'ՀԾ համակարգի հետ աշխատանքային փորձառություն',
        'ՀՀ բանկային օրենսդրության, բանկային ծառայությունների իմացություն',
        'կազմակերպվածություն և արդյունքին միտված աշխատանքային մոտեցում',
        'հաղորդակցման և համագործակցության գերազանց հմտություններ',
        'նախաձեռնողականություն, պատասխանատվության զգացում',
        'վերլուծական ճկուն միտք, խնդիրների կառուցվածքային լուծման կարողություն',
        'անգլերենի և ռուսերենի լավ իմացություն'
      ],
      email: 'cv@evoca.am',
      subject: 'Մանրածախ վարկային պրոդուկտների մշակման մասնագետ'
    },
    {
      id: 2,
      title: 'ՓՄՁ վարկավորման ավագ վարկային մասնագետ',
      deadline: '20.11.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է ՓՄՁ վարկավորման ավագ վարկային մասնագետի, ով պատասխանատու է լինելու նոր հաճախորդների ներգրավման և նրանց բիզնես կարիքների բացահայտման համար:`,
      benefits: [
        'բժշկական ապահովագրություն',
        'ճամփորդական ապահովագրություն',
        'Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ',
        'տոնական և տարեվերջյան բոնուսներ',
        'բոնուսներ ամուսնության կամ երեխայի ծննդյան առթիվ',
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ',
        'անգլերեն լեզվի դասընթացներ',
        'շարունակական կրթության և զարգացման լայն հնարավորություններ'
      ],
      responsibilities: [
        'ՓՄՁ հաճախորդների ներգրավում, գործնական հարաբերությունների հաստատում և պահպանում',
        'վարկային պորտֆելի սպասարկում',
        'վարկային գործի կազմում, վարկային հայտի ներկայացում վարկային կոմիտեներին և ձևակերպման գործընթացի կառավարում',
        'խնդրահարույց հաճախորդների հետ բանկացությունների վարում',
        'վարչության պետի և բաժնի պետի այլ հանձնարարականների կատարում'
      ],
      requirements: [
        'բարձրագույն կրթություն տնտեսագիտության, հաշվապահության կամ ֆինանսների ոլորտում',
        'ՓՄՁ հաճախորդների սպասարկման և վարկավորման առնվազն 2 տարվա աշխատանքային փորձ',
        'ՀՀ բանկային օրենսդրության, վարկավորման գործընթացների գերազանց իմացություն',
        'ՀԾ-բանկ 4.0 իմացություն',
        'հաղորդակցման գերազանց հմտություններ',
        'հաճախորդների ներգրավման և վաճառքների իրականացման հմտություններ',
        'բանակցությունների վարման և կոնֆլիկտների կառավարման հմտություններ',
        'վերլուծական ճկուն միտք',
        'ռուսերենի և անգլերենի լավ իմացություն'
      ],
      email: 'cv@evoca.am',
      subject: 'ՓՄՁ վարկավորման ավագ վարկային մասնագետ'
    },
    {
      id: 3,
      title: 'Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)',
      deadline: '02.11.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է վարկերի հաստատման մասնագետ, ով պատասխանատու կլինի իրավաբանական անձանց և ԱՁ հաճախորդների վարկային հայտերի ուսումնասիրության և գնահատման, հաճախորդների վարկունակության ու վարկերի ապահովվածության վերլուծության, ինչպես նաև իր լիազորությունների շրջանակներում որոշումների և եզրակացությունների տրամադրման համար։`,
      benefits: [
        'բժշկական ապահովագրություն',
        'ճամփորդական ապահովագրություն',
        'Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ',
        'տոնական և տարեվերջյան բոնուսներ',
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ',
        'անգլերեն լեզվի դասընթացներ'
      ],
      responsibilities: [
        'իրավաբանական անձանց և ԱՁ հաճախորդների վարկային հայտերի դիտարկում և ուսումնասիրություն',
        'իրավաբանական անձանց և ԱՁ հաճախորդների վարկային հայտերի վերաբերյալ, իր լիազորությունների շրջանակներում, որոշումների կայացում',
        'իրավաբանական անձանց և ԱՁ հաճախորդների վարկային հայտերի վերաբերյալ, իր լիազորությունների շրջանակներում, եզրակացությունների ներկայացում',
        'բաժնի ղեկավարի այլ հանձնարարությունների իրականացում'
      ],
      requirements: [
        'բարձրագույն կրթություն տնտեսագիտության, ֆինանսների կամ հարակից ոլորտում',
        'առնվազն երկու տարվա աշխատանքային փորձ որպես վարկային մասնագետ (բիզնես վարկավորման ոլորտում)',
        'վերլուծական մտածողություն և փաստերը համադրելու կարողություն',
        'բարձր ծանրաբեռնվածության պայմաններում արդյունավետ աշխատելու և ժամկետները պահպանելու ունակություն',
        'միջազգային մասնագիտական որակավորումների առկայությունը դիտվում է որպես առավելություն'
      ],
      email: 'cv@evoca.am',
      subject: 'Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)'
    },
    {
      id: 4,
      title: 'Համապատասխանության ապահովման մասնագետ',
      deadline: '28.10.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է Համապատասխանության ապահովման պատասխանատու, ով պատասխանատու կլինի օրենսդրական պահանջների մշտադիտարկման և համապատասխանության ապահովման քաղաքականությունից բխող այլ գործառույթների համար։`,
      benefits: [
        'բժշկական ապահովագրություն',
        'ճամփորդական ապահովագրություն',
        'Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ',
        'տոնական և տարեվերջյան բոնուսներ',
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ'
      ],
      responsibilities: [
        'օրենսդրական պահանջների մշտադիտարկում, օրենսդրական բացերի բացահայտում և դրանց հիման վրա առաջարկությունների մշակում',
        'նոր կարգավորումների վերլուծություն, դրանց կիրառելիության և Բանկի գործընթացների վրա ազդեցության գնահատում',
        'Բանկի ներքին իրավական ակտերի նախագծերի նախնական ուսումնասիրություն և համապատասխանության ապահովում'
      ],
      requirements: [
        'բարձրագույն կրթություն տնտեսագիտության, կառավարման կամ իրավաբանական ոլորտում',
        'առնվազն երկու տարվա աշխատանքային փորձ բանկային կամ ֆինանսական ոլորտում',
        'ՀՀ բանկային օրենսդրության և Կենտրոնական բանկի նորմատիվ իրավական ակտերի խորացված իմացություն',
        'հայերեն, ռուսերեն և անգլերեն լեզուների գերազանց իմացություն'
      ],
      email: 'cv@evoca.am',
      subject: 'Համապատասխանության ապահովման մասնագետ'
    },
    {
      id: 5,
      title: 'Ավագ Հաշվապահ',
      deadline: '02.11.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է փորձառու ավագ հաշվապահ, ով պատասխանատու կլինի հաշվապահական հաշվառման առանձին ուղղության վարման, հաշվապահական գործընթացների պատշաճ իրականացման, ինչպես նաև ֆինանսական տվյալների ճշգրտության ու ամբողջականության ապահովման համար։`,
      benefits: [
        'բժշկական ապահովագրություն',
        'ճամփորդական ապահովագրություն',
        'Evoca-ի պրոդուկտների և ծառայությունների արտոնյալ պայմաններ',
        'տոնական և տարեվերջյան բոնուսներ',
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ',
        'անգլերեն լեզվի դասընթացներ'
      ],
      responsibilities: [
        'վարել դեբիտորական և կրեդիտորական պարտքերի հաշվառում',
        'իրականացնել հիմնական միջոցների, լիզինգի կամ աշխատավարձի հաշվառում՝ ըստ բաշխված ուղղության',
        'ապահովել հաշվապահական գործառնությունների ճշգրիտ և ժամանակին հաշվառում',
        'մասնակցել ֆինանսական հաշվետվությունների կազմման գործընթացին'
      ],
      requirements: [
        'բարձրագույն կրթություն տնտեսագիտության, հաշվապահության կամ ֆինանսների ոլորտում',
        'առնվազն 2 տարվա աշխատանքային փորձ որպես հաշվապահ',
        'ՀԾ հաշվապահ ծրագրի իմացություն',
        'MC office ծրագրերի իմացություն',
        'ռուսերեն և անգլերեն լեզուների իմացություն'
      ],
      email: 'cv@evoca.am',
      subject: 'Ավագ հաշվապահ'
    }
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Կարիերայի ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="text-purple-200 hover:text-white transition">Աշխատանք Evoca-ում</Link>
            <Link to="/praktika" className="border-b-2 border-white pb-1 cursor-pointer font-black">Ուսումնական պրակտիկա</Link>
            <span className="text-purple-200 hover:text-white transition cursor-pointer">EvocaBRIDGE</span>
          </div>
        </div>

        <main className="space-y-16 pb-20">
          {selectedJob ? (
            /* Աշխատատեղի մանրամասն էջ */
            <div className="container mx-auto px-4 max-w-4xl pt-8 space-y-8">
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-[#6400dc] font-bold text-sm flex items-center gap-2 hover:underline cursor-pointer"
              >
                ← Հետ վերադառնալ ցանկին
              </button>

              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-black text-neutral-950">
                  {selectedJob.title}
                </h1>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-gray-400 block text-xs">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                    <strong className="text-neutral-900">{selectedJob.deadline}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-xs">Աշխատանքի վայր</span>
                    <strong className="text-neutral-900">{selectedJob.location}</strong>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Աշխատատեղի նկարագրություն</h3>
                  <p className="text-neutral-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Ի՞նչ արտոնություններ կստանաք Դուք</h3>
                  <p className="text-neutral-600 text-sm">Մենք ձգտում ենք ստեղծել այնպիսի աշխատանքային միջավայր, որը նպաստում է աշխատակիցների աճին և զարգացմանը: Միանալով Evoca-ի թիմին, Դուք կստանաք՝</p>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                    {selectedJob.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Աշխատանքային պարտականություններ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                    {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-neutral-900">Ներկայացվող պահանջներ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-neutral-600">
                    {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-neutral-900">Ինչպե՞ս դիմել</h3>
                  <p className="text-neutral-600 text-sm">
                    Խնդրում ենք ուղարկել ինքնակենսագրականը (CV) <a href={`mailto:${selectedJob.email}`} className="text-[#6400dc] font-bold underline">{selectedJob.email}</a> էլեկտրոնային հասցեին` վերնագրում նշելով «{selectedJob.subject}»։
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Հիմնական Պրակտիկա / Աշխատանք էջ */
            <>
              {/* Top Banner with Image */}
              <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-gray-900">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg" 
                  alt="Evoca Careers" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-16">
                  <div className="container mx-auto">
                    <h1 className="text-3xl md:text-5xl font-black text-white">
                      Աշխատանք Evoca-ում
                    </h1>
                  </div>
                </div>
              </div>

              {/* What kind of teammate we are looking for */}
              <div className="container mx-auto px-4 max-w-6xl text-center space-y-12 pt-8">
                <h2 className="text-2xl md:text-3xl font-black text-neutral-950">
                  Ինչպիսի թիմակից ենք մենք փնտրում ?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png" alt="Մոտիվացված" className="w-14 h-14 object-contain" />
                    </div>
                    <span className="font-bold text-sm text-neutral-800">Մոտիվացված</span>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png" alt="Նպատակասլաց" className="w-14 h-14 object-contain" />
                    </div>
                    <span className="font-bold text-sm text-neutral-800">Նպատակասլաց</span>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png" alt="Արագ և ճկուն" className="w-14 h-14 object-contain" />
                    </div>
                    <span className="font-bold text-sm text-neutral-800">Արագ և ճկուն</span>
                  </div>

                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png" alt="Իր աշխատանքը շա~տ սիրող" className="w-14 h-14 object-contain" />
                    </div>
                    <span className="font-bold text-sm text-neutral-800">Իր աշխատանքը շա~տ սիրող</span>
                  </div>

                  <div className="flex flex-col items-center space-y-4 col-span-2 md:col-span-1">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png" alt="Նորարարական և կրեատիվ լուծումներ գտնող" className="w-14 h-14 object-contain" />
                    </div>
                    <span className="font-bold text-sm text-neutral-800">Նորարարական և կրեատիվ լուծումներ գտնող</span>
                  </div>
                </div>
              </div>

              {/* Vacancies List */}
              <div className="container mx-auto px-4 max-w-4xl space-y-8 pt-12">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl md:text-3xl font-black text-neutral-950">
                    Բաց մի թող քո նոր հնարավորությունը
                  </h2>
                  <span className="text-sm font-bold text-gray-500">20 աշխատատեղ</span>
                </div>

                <div className="space-y-6">
                  {jobsList.map((job) => (
                    <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6 transition hover:border-[#6400dc]">
                      <h3 className="text-xl font-bold text-neutral-950">
                        {job.title}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                        <div>
                          <span className="text-gray-400 block">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                          <strong className="text-neutral-900">{job.deadline}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Աշխատանքի վայր</span>
                          <strong className="text-neutral-900">{job.location}</strong>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-xl transition shadow-sm cursor-pointer"
                        >
                          Տեսնել մանրամասն և դիմել
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}