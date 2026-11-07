import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Usumnakan() {
  // Պրակտիկայի փուլերի ակորդեոնների կառավարման համար
  const [openPhase, setOpenPhase] = useState(1);

  const togglePhase = (id) => {
    setOpenPhase(openPhase === id ? null : id);
  };

  // Ձևաթղթի (Form) դաշտերի վիճակը
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    university: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    captcha: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Դիմում-հայտը հաջողությամբ ուղարկվել է!');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Manushakaguyn Sub-bar */}
        <div className="bg-[#6400dc] text-white py-3 px-4 md:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 sm:gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link to="/praktika" className="text-purple-200 hover:text-white transition shrink-0">Աշխատանք Evoca-ում</Link>
            <Link to="/usumnakan" className="border-b-2 border-white pb-1 cursor-pointer font-black shrink-0">Ուսումնական պրակտիկա</Link>
            <Link to="/evocabridge" className="text-purple-200 hover:text-white transition shrink-0">EvocaBRIDGE</Link>
          </div>
        </div>

        <main className="space-y-12 sm:space-y-16 pb-16 md:pb-20">
          {/* Top Banner with Image */}
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] overflow-hidden bg-gray-900">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/1619460987097/1920x634.jpg" 
              alt="Ուսումնական պրակտիկա" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 sm:p-8 md:p-16">
              <div className="container mx-auto max-w-6xl">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
                  Ուսումնական պրակտիկա
                </h1>
              </div>
            </div>
          </div>

          {/* Intro Description */}
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 pt-2 sm:pt-4">
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Evocabank-ն, առանձնահատուկ ուշադրություն դարձնելով երիտասարդության զարգացմանը և նրանց համար հնարավորություններ ստեղծելուն, պարբերաբար կազմակերպում է ուսումնական պրակտիկաներ` համագործակցելով հայաստանյան առաջատար բուհերի հետ:
            </p>
          </div>

          {/* Partner Universities Section */}
          <div className="container mx-auto px-4 max-w-6xl text-center space-y-8 sm:space-y-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 leading-tight">
              Համալսարանական պրակտիկայի շրջանակներում մենք համագործակցում ենք հետևյալ Բուհերի հետ՝
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex flex-col items-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#6400dc] transition">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-xs">
                  <img src="https://www.evoca.am/images-cache/partner_universities/1/16192503158745/120x120.jpg" alt="ԵՊՀ" className="w-16 h-16 object-contain" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-neutral-800">Երևանի պետական համալսարան</span>
              </div>

              <div className="flex flex-col items-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#6400dc] transition">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-xs">
                  <img src="https://www.evoca.am/images-cache/partner_universities/1/16192501535211/120x120.jpg" alt="ՀԱՀ" className="w-16 h-16 object-contain" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-neutral-800">Հայաստանի ամերիկյան համալսարան</span>
              </div>

              <div className="flex flex-col items-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#6400dc] transition">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-xs">
                  <img src="https://www.evoca.am/images-cache/partner_universities/1/16192504505443/120x120.jpg" alt="ՀՊՏՀ" className="w-16 h-16 object-contain" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-neutral-800">Հայաստանի պետական տնտեսագիտական համալսարան</span>
              </div>

              <div className="flex flex-col items-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#6400dc] transition">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-xs">
                  <img src="https://www.evoca.am/images-cache/partner_universities/1/16192505629164/120x120.jpg" alt="ՀՌՀ" className="w-16 h-16 object-contain" />
                </div>
                <span className="font-bold text-xs sm:text-sm text-neutral-800">Հայ-Ռուսական Համալսարան</span>
              </div>
            </div>
          </div>

          {/* Practice Phases Accordion */}
          <div className="container mx-auto px-4 max-w-4xl space-y-6 sm:space-y-8 pt-4 sm:pt-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 text-center">
              Ուսումնական պրակտիկայի փուլեր
            </h2>

            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button 
                  onClick={() => togglePhase(1)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Առաջին փուլ` Համագործակցություն</span>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openPhase === 1 ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>∨</span>
                </button>
                {openPhase === 1 && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-neutral-600 text-xs sm:text-sm leading-relaxed bg-purple-50/30">
                    Բարձրագույն ուսումնական հաստատության և Evocabank-ի միջև կնքվում է ուսումնական պրակտիկայի վերաբերյալ պայմանագիր` համաձայն ուսումնական պլանի:
                  </div>
                )}
              </div>

              {/* Phase 2 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button 
                  onClick={() => togglePhase(2)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Երկրորդ փուլ` Դիմում-Հայտ</span>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openPhase === 2 ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>∨</span>
                </button>
                {openPhase === 2 && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-neutral-600 text-xs sm:text-sm leading-relaxed bg-purple-50/30">
                    Ուսանողը, ով ցանկանում է անցնել պրակտիկա, պետք է լրացնի դիմում-հայտ՝ կցելով ինքնակենսագրականը:
                  </div>
                )}
              </div>

              {/* Phase 3 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button 
                  onClick={() => togglePhase(3)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Երրորդ փուլ` Թեստավորում</span>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openPhase === 3 ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>∨</span>
                </button>
                {openPhase === 3 && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-neutral-600 text-xs sm:text-sm leading-relaxed bg-purple-50/30 space-y-2">
                    <p>Դիմորդներն անցնում են թեստավորում, որն իրականացվում է երկու փուլով:</p>
                    <p><strong>Առաջին փուլ</strong> գրավոր թեստ է ընդհանուր զարգացվածության վերաբերյալ` ստուգում է hard skills:</p>
                    <p>Բավարար արդյունքներ ունենալու դեպքում թեկնածուն տեղափոխվում է <strong>երկրորդ փուլ</strong>, որը թիմային առաջադրանք է, ստուգում է soft skills:</p>
                  </div>
                )}
              </div>

              {/* Phase 4 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button 
                  onClick={() => togglePhase(4)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center text-xs font-bold shrink-0">4</span>
                    <span>Չորրորդ փուլ` Ուսումնական պրակտիկա</span>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openPhase === 4 ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>∨</span>
                </button>
                {openPhase === 4 && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-neutral-600 text-xs sm:text-sm leading-relaxed bg-purple-50/30 space-y-2">
                    <p>Նախորդ փուլում լավագույն արդյունք ցուցաբերած դիմորդներն սկսում են պրակտիկան: Ուսանողները, ներածական դասընթաց անցնելուց և կազմակերպությանը ծանոթանալուց հետո, անմիջապես ներգրավվում են ամենօրյա աշխատանքներում` կիրառելով համալսարանական գիտելիքները և հմտությունները:</p>
                    <p>Պրակտիկայի ավարտին ուսանողներն ստանում են մեծ փորձ, պրակտիկ գիտելիքներ և մոտիվացիա: Եվ իհարկե, պրակտիկայի մասնակցության հավաստագիր:</p>
                  </div>
                )}
              </div>

              {/* Phase 5 */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs bg-white">
                <button 
                  onClick={() => togglePhase(5)}
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center gap-4 font-bold text-neutral-900 text-xs sm:text-sm md:text-base hover:text-[#6400dc] transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center text-xs font-bold shrink-0">5</span>
                    <span>Հինգերորդ փուլ` Աշխատանքի առաջարկ</span>
                  </div>
                  <span className={`text-xl transform transition-transform duration-300 ${openPhase === 5 ? 'rotate-180 text-[#6400dc]' : 'text-gray-400'}`}>∨</span>
                </button>
                {openPhase === 5 && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-gray-100 text-neutral-600 text-xs sm:text-sm leading-relaxed bg-purple-50/30">
                    Ստուգումների դրական արդյունքներ ստանալուց հետո մեր թիմը կապ կհաստատի Ձեզ հետ և կներկայացնի աշխատանքի առաջարկ: Ձեր կողմից այն ընդունվելուց հետո կիրականացվեն փաստաթղթային ձևակերպումները և կամփոփվեն այլ մանրամասներ: Բարի գալուստ Evocabank!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Application Form Section */}
          <div className="container mx-auto px-4 max-w-3xl pt-8 sm:pt-12">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm space-y-6 sm:space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950">
                  Ուսումնական պրակտիկայի դիմում-հայտ
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Եթե ցանկանում ես անցնել ուսումնական պրակտիկա Evoca-ում, կարող ես ուղարկել դիմում` կցելով ինքնակենսագրականը:
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">Անուն *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">Ազգանուն *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">Հեռախոսահամար *</label>
                    <div className="flex">
                      <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl px-3 py-3 text-xs text-gray-600 flex items-center font-bold">+374</span>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="XX XXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">Էլ. հասցե</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                  </div>
                </div>

                {/* University selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-neutral-700 block">ԲՈՒՀ *</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Երևանի պետական համալսարան',
                      'Հայաստանի ամերիկյան համալսարան',
                      'Հայաստանի պետական տնտեսագիտական համալսարան',
                      'Հայ-ռուսական /Սլավոնական/ պետական համալսարան'
                    ].map((uni, idx) => (
                      <label key={idx} className="flex items-center gap-3 border border-gray-200 rounded-xl p-3.5 cursor-pointer hover:border-[#6400dc] transition">
                        <input 
                          type="radio" 
                          name="university" 
                          required
                          value={uni}
                          checked={formData.university === uni}
                          onChange={handleChange}
                          className="accent-[#6400dc]"
                        />
                        <span className="text-xs font-semibold text-neutral-800">{uni}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">Facebook սոց. կայքում անձնական էջի հղում</label>
                    <input 
                      type="url" 
                      name="facebook"
                      value={formData.facebook}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 block">LinkedIn սոց. կայքում անձնական էջի հղում</label>
                    <input 
                      type="url" 
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Ուղեկցող նամակ</label>
                  <textarea 
                    name="coverLetter"
                    rows="4"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Վերբեռնեք Ձեր ռեզյումեն *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#6400dc] transition cursor-pointer">
                    <span className="text-xs text-gray-500 font-medium block">Կցել ֆայլը / ֆայլերը (Upload file)</span>
                    <input type="file" required className="hidden" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Ստուգման ծածկագիր *</label>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <input 
                      type="text" 
                      name="captcha"
                      required
                      placeholder="Մուտքագրեք ծածկագիրը"
                      value={formData.captcha}
                      onChange={handleChange}
                      className="w-full sm:w-1/2 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                    />
                    <div className="bg-gray-100 border border-gray-300 px-6 py-3 rounded-xl font-mono font-bold text-gray-700 tracking-widest w-full sm:w-auto text-center">
                      8 4 9 2
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-sm px-8 py-4 rounded-xl transition shadow-sm cursor-pointer"
                  >
                    Ես ուզում եմ աշխատել Evoca-ում :)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}