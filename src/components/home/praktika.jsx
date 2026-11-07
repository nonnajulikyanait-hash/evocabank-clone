import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Praktika() {
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
        'վճարվող հանգստյան օրեր',
        'սպորտ փաթեթ'
      ],
      responsibilities: [
        'ՓՄՁ հաճախորդների ներգրավում, գործնական հարաբերությունների հաստատում և պահպանում',
        'վարկային պորտֆելի սպասարկում',
        'վարկային գործի կազմում, վարկային հայտի ներկայացում վարկային կոմիտեներին'
      ],
      requirements: [
        'բարձրագույն կրթություն տնտեսագիտության, հաշվապահության կամ ֆինանսների ոլորտում',
        'ՓՄՁ հաճախորդների սպասարկման և վարկավորման առնվազն 2 տարվա աշխատանքային փորձ',
        'ՀՀ բանկային օրենսդրության իմացություն'
      ],
      email: 'cv@evoca.am',
      subject: 'ՓՄՁ վարկավորման ավագ վարկային մասնագետ'
    },
    {
      id: 3,
      title: 'Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)',
      deadline: '02.11.2026',
      location: 'Երևան, Գլխամասային գրասենյակ',
      description: `Evoca-ն փնտրում է վարկերի հաստատման մասնագետ, ով պատասխանատու կլինի իրավաբանական անձանց և ԱՁ հաճախորդների վարկային հայտերի ուսումնասիրության և գնահատման համար։`,
      benefits: ['բժշկական ապահովագրություն', 'ճամփորդական ապահովագրություն'],
      responsibilities: ['իրավաբանական անձանց վարկային հայտերի դիտարկում և ուսումնասիրություն'],
      requirements: ['բարձրագույն կրթություն տնտեսագիտության կամ ֆինանսների ոլորտում'],
      email: 'cv@evoca.am',
      subject: 'Վարկերի հաստատման մասնագետ (Իրավաբանական անձանց)'
    }
  ];

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Manushakaguyn Sub-bar (Աշխատանք Evoca-ում | Ուսումնական պրակտիկա | EvocaBRIDGE) */}
        <div className="bg-[#6400dc] text-white py-3 px-4 sm:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 sm:gap-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/praktika" className="border-b-2 border-white pb-1 cursor-pointer font-black">Աշխատանք Evoca-ում</Link>
            <Link to="/usumnakan" className="text-purple-200 hover:text-white transition cursor-pointer">Ուսումնական պրակտիկա</Link>
            <Link to="/evocabridge" className="text-purple-200 hover:text-white transition cursor-pointer">EvocaBRIDGE</Link>
          </div>
        </div>

        <main className="space-y-12 sm:space-y-16 pb-20">
          {selectedJob ? (
            /* Ashxatatxeri manramasn ej */
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl pt-8 space-y-6 sm:space-y-8 text-left">
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-[#6400dc] font-bold text-xs sm:text-sm flex items-center gap-2 hover:underline cursor-pointer"
              >
                ← Հետ վերադառնալ ցանկին
              </button>

              <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950">
                  {selectedJob.title}
                </h1>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-100 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400 block text-[10px] sm:text-xs">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                    <strong className="text-neutral-900">{selectedJob.deadline}</strong>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px] sm:text-xs">Աշխատանքի վայր</span>
                    <strong className="text-neutral-900">{selectedJob.location}</strong>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">Աշխատատեղի նկարագրություն</h3>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">Ի՞նչ արտոնություններ կստանաք Դուք</h3>
                  <p className="text-xs sm:text-sm text-neutral-600">Մենք ձգտում ենք ստեղծել այնպիսի աշխատանքային միջավայր, որը նպաստում է աշխատակիցների աճին և զարգացմանը: Միանալով Evoca-ի թիմին, Դուք կստանաք՝</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-neutral-600">
                    {selectedJob.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">Աշխատանքային պարտականություններ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-neutral-600">
                    {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">Ներկայացվող պահանջներ</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-neutral-600">
                    {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">Ինչպե՞ս դիմել</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Խնդրում ենք ուղարկել ինքնակենսագրականը (CV) <a href={`mailto:${selectedJob.email}`} className="text-[#6400dc] font-bold underline">{selectedJob.email}</a> էլեկտրոնային հասցեին` վերնագրում նշելով «{selectedJob.subject}»։
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Main "Ashxatanq Evoca-um" view */
            <>
              {/* Top Banner with Image */}
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] overflow-hidden bg-gray-900">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16194611253542/1920x634.jpg" 
                  alt="Ashxatanq Evoca-um" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8 md:p-16">
                  <div className="container mx-auto text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
                      Աշխատանք Evoca-ում
                    </h1>
                  </div>
                </div>
              </div>

              {/* Inčpisi timakic enq menq pntrum */}
              <div className="container mx-auto px-4 sm:px-6 max-w-6xl text-center space-y-8 sm:space-y-12 pt-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950">
                  Ինչպիսի թիմակից ենք մենք փնտրում ?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194199747856/120x120.png" alt="Motivacvat" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800">Մոտիվացված</span>
                  </div>

                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194205883017/120x120.png" alt="Npatakaslac" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800">Նպատակասլաց</span>
                  </div>

                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194206332591/120x120.png" alt="Arag ev chkun" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800">Արագ և ճկուն</span>
                  </div>

                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194207496218/120x120.png" alt="Ir ashxatanqy shat sirox" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800">Իր աշխատանքը շա~տ սիրող</span>
                  </div>

                  <div className="flex flex-col items-center space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-50 rounded-full flex items-center justify-center p-4 shadow-sm">
                      <img src="https://www.evoca.am/images-cache/applicant_features/1/16194208269015/120x120.png" alt="Norarakan ev kreativ" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm text-neutral-800">Նորարարական և կրեատիվ լուծումներ գտնող</span>
                  </div>
                </div>
              </div>

              {/* Vacancies Cards List */}
              <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-6 sm:space-y-8 pt-8 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950">
                    Բաց մի թող քո նոր հնարավորությունը
                  </h2>
                  <span className="text-xs sm:text-sm font-bold text-gray-500">20 աշխատատեղ</span>
                </div>

                <div className="space-y-6">
                  {jobsList.map((job) => (
                    <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xs space-y-6 transition hover:border-[#6400dc]">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                        {job.title}
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-gray-600">
                        <div>
                          <span className="text-gray-400 block text-[10px] sm:text-xs">Փաստաթղթերի ներկայացման վերջնաժամկետ</span>
                          <strong className="text-neutral-900">{job.deadline}</strong>
                        </div>
                        <div>
                          <span className="text-gray-400 block text-[10px] sm:text-xs">Աշխատանքի վայր</span>
                          <strong className="text-neutral-900">{job.location}</strong>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition shadow-sm cursor-pointer w-full sm:w-auto text-center"
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