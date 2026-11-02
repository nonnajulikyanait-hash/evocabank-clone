import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Aravelutyunner() {
  const benefitsList = [
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431437867453/120x120.png',
      title: 'Առողջության ապահովագրություն',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/1743143856123/120x120.png',
      title: 'Ճամփորդական ապահովագրություն',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431582596354/120x120.png',
      title: 'Evocabank-ի ծառայությունների արտոնյալ պայմաններ, ապահովագրական ծառայությունների զեղչեր',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431582659146/120x120.png',
      title: 'Կորպորատիվ զեղչեր',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431581917652/120x120.png',
      title: 'Տոնական և տարեվերջյան բոնուսներ',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/174314403471/120x120.png',
      title: 'Պարգևատրումներ ծննդյան օրերին, ամուսնանալիս և երեխա ունենալիս',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431442426277/120x120.png',
      title: 'Days-off',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431443089347/120x120.png',
      title: 'Սպորտային փաթեթ',
    },
    {
      img: 'https://www.evoca.am/images-cache/benefits/1/17431453776119/120x120.png',
      title: 'Շարունակական կրթության և մասնագիտական զարգացման լայն հնարավորություն',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Կարիերայի Ենթամենյու */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/kariera" className="text-purple-200 hover:text-white transition">Մշակույթ</Link>
            <Link to="/aravelutyunner" className="border-b-2 border-white pb-1 cursor-pointer font-black">Առավելություններ</Link>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Հաճախ տրվող հարցեր</span>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Ինչպես ընդունվել աշխատանքի Evocabank-ում</span>
          </div>
        </div>

        <main className="space-y-16 pb-16">
          {/* 1. Full-Width Hero Banner */}
          <div 
            className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center overflow-hidden flex items-end md:items-center justify-start px-6 md:px-24 pb-8 md:pb-0"
            style={{ backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg')` }}
          >
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-lg space-y-4 border border-gray-100">
              <h1 className="text-3xl md:text-4xl font-black text-neutral-900">Առավելություններ</h1>
              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                Միացի՛ր թիմին, որի ամենամեծ ակտիվը ներգրավված և երջանիկ աշխատակիցներն են:
              </p>
            </div>
          </div>

          {/* 2. Մեր առավելությունները Grid */}
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 text-center">
              Մեր առավելությունները
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 p-4">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base font-bold text-neutral-800 max-w-xs">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Application Form */}
          <div className="container mx-auto px-4 max-w-3xl bg-[#f8f9fa] border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900">
                Դառնալ թիմի անդամ
              </h2>
              <p className="text-neutral-600 text-sm">
                Եթե ցանկանում ես միանալ EvocaTEAM-ին, կարող ես ուղարկել դիմում` կցելով ինքնակենսագրականը:
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Անուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Ազգանուն *</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Հեռախոսահամար *</label>
                  <div className="flex">
                    <span className="bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl px-3 flex items-center text-sm font-medium">+374</span>
                    <input type="tel" required className="w-full bg-white border border-gray-200 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Էլ. հասցե</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Facebook սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">LinkedIn սոց. կայքում անձնական էջի հղում</label>
                  <input type="url" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Ուղեկցող նամակ</label>
                <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]"></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">Վերբեռնեք Ձեր ռեզյումեն *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center bg-white hover:border-[#6400dc] transition cursor-pointer">
                  <span className="text-sm text-gray-500 font-medium">Կցել ֆայլը / ֆայլերը</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-neutral-700">Ստուգման ծածկագիր *</label>
                <div className="flex items-center gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-3 flex items-center justify-center">
                    <img 
                      src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_c650227a5d5f803deda631352226140fab644e31fffbddd9a8f2c43683e1676dfed64664d53e4e0fc68fdc773c30f2568394c4cb889fe89cac5d77f7187f1ad7" 
                      alt="Captcha" 
                      className="h-10 object-contain"
                    />
                  </div>
                  <input type="text" placeholder="Մուտքագրեք ծածկագիրը" required className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-4 rounded-xl transition shadow-md cursor-pointer text-center"
              >
                Ես ուզում եմ աշխատել Evoca-ում :)
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}