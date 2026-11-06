import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function Kap() {
  const [personType, setPersonType] = useState('fiz'); // 'fiz' or 'jur'
  const [contactType, setContactType] = useState('shnorhakalutyun'); // 'shnorhakalutyun' or 'arajark'
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
    captcha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Հաղորդագրությունն ուղարկված է:');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Հետադարձ կապ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Հետադարձ կապ
          </h1>

          {/* Կոնտակտային տվյալների աղյուսակ / բլոկ */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden mb-12 shadow-sm">
            <div className="divide-y divide-gray-200 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-gray-50">
                <span className="font-bold text-neutral-900">Հասցե</span>
                <span className="sm:col-span-2 text-gray-700">ՀՀ, 0010 Երևան, Հանրապետության փող. 44/2 շենք</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
                <span className="font-bold text-neutral-900">Հեռախոսահամար</span>
                <span className="sm:col-span-2 text-gray-700">
                  +374 10 605555,<br />
                  84-44
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-gray-50">
                <span className="font-bold text-neutral-900">Էլ. փոստ</span>
                <span className="sm:col-span-2 text-gray-700">hello@evoca.am</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
                <span className="font-bold text-neutral-900">SWIFT</span>
                <span className="sm:col-span-2 text-gray-700">PRML AM 22</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-gray-50">
                <span className="font-bold text-neutral-900">Աշխատանքային ժամեր</span>
                <span className="sm:col-span-2 text-gray-700">9:00 - 18:00</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-white">
                <span className="font-bold text-neutral-900">Հաճախորդների սպասարկման ժամեր</span>
                <span className="sm:col-span-2 text-gray-700">9:30 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Նկարագրություն */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-10 text-sm text-gray-700 leading-relaxed">
            <p>
              Մենք կցանկանայինք լսել ձեր մտքերը, առաջարկությունները, մտահոգությունները կամ ցանկացած խնդրի հետ կապված հարցերը, որպեսզի կարողանանք բարելավել մեր ծառայությունները:
            </p>
            <p className="font-bold text-neutral-900 mt-2">
              Հաղորդագրություն ուղարկելու համար լրացրեք ստորև բերված դաշտերը՝
            </p>
          </div>

          {/* Հետադարձ կապի ֆորմա */}
          <form onSubmit={handleSubmit} className="space-y-6 text-sm text-gray-700 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            
            {/* Դուք հանդիսանում եք */}
            <div>
              <label className="block font-bold text-neutral-900 mb-2">Դուք հանդիսանում եք</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="personType" 
                    checked={personType === 'fiz'} 
                    onChange={() => setPersonType('fiz')} 
                    className="text-[#6400dc] focus:ring-[#6400dc]"
                  />
                  <span>Ֆիզիկական անձ</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="personType" 
                    checked={personType === 'jur'} 
                    onChange={() => setPersonType('jur')} 
                    className="text-[#6400dc] focus:ring-[#6400dc]"
                  />
                  <span>Իրավաբանական անձ</span>
                </label>
              </div>
            </div>

            {/* Հետադարձ կապի տեսակը */}
            <div>
              <label className="block font-bold text-neutral-900 mb-2">Հետադարձ կապի տեսակը *</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactType" 
                    checked={contactType === 'shnorhakalutyun'} 
                    onChange={() => setContactType('shnorhakalutyun')} 
                    className="text-[#6400dc] focus:ring-[#6400dc]"
                  />
                  <span>Հայտնել շնորհակալություն</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="contactType" 
                    checked={contactType === 'arajark'} 
                    onChange={() => setContactType('arajark')} 
                    className="text-[#6400dc] focus:ring-[#6400dc]"
                  />
                  <span>Ներկայացնել առաջարկ</span>
                </label>
              </div>
            </div>

            {/* Անուն և Ազգանուն */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-neutral-900 mb-1">Անուն *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6400dc]" 
                  placeholder="Մուտքագրեք Ձեր անունը"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-900 mb-1">Ազգանուն *</label>
                <input 
                  type="text" 
                  name="surname" 
                  value={formData.surname} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6400dc]" 
                  placeholder="Մուտքագրեք Ձեր ազգանունը"
                />
              </div>
            </div>

            {/* Հեռախոսահամար և Էլ. փոստ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-neutral-900 mb-1">Հեռ՝ *</label>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-[#6400dc]">
                  <span className="bg-gray-100 px-3 py-3 text-gray-600 border-r border-gray-300">+374</span>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full p-3 focus:outline-none" 
                    placeholder="XX XXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-neutral-900 mb-1">Էլ. փոստ *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6400dc]" 
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            {/* Հաղորդագրություն */}
            <div>
              <label className="block font-medium text-neutral-900 mb-1">Հաղորդագրություն *</label>
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6400dc]"
                placeholder="Գրեք ձեր հաղորդագրությունը..."
              ></textarea>
            </div>

            {/* Կցել փաստաթուղթ */}
            <div>
              <label className="block font-medium text-neutral-900 mb-1">Կցել փաստաթուղթ</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#6400dc] transition-colors cursor-pointer bg-gray-50">
                <p className="text-gray-500 mb-1">Կցել ֆայլը / Upload file</p>
                <input type="file" className="block w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-[#6400dc] hover:file:bg-purple-100 cursor-pointer"/>
              </div>
            </div>

            {/* Ստուգման ծածկագիր (Captcha) */}
            <div>
              <label className="block font-medium text-neutral-900 mb-1">Ստուգման ծածկագիր *</label>
              <div className="flex items-center gap-4 mb-3">
                <img 
                  src="https://accounts.zoho.com/static/showcaptcha?digest=1_C_e89a7cc9c5de6a0d927cd9b3276f5b83bf1da9ee440883cd8ee008c03ebfe73c572a13b2e3f33265d26252b832c8ab68e5a5cd49a664b8afa7c80c74a39e7081" 
                  alt="Captcha" 
                  className="h-12 border border-gray-300 rounded-xl bg-gray-50 px-2 object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <input 
                type="text" 
                name="captcha" 
                value={formData.captcha} 
                onChange={handleChange} 
                required 
                className="w-full sm:w-1/2 border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-[#6400dc]" 
                placeholder="Մուտքագրեք ծածկագիրը"
              />
            </div>

            {/* Ուղարկել կոճակ */}
            <div>
              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3.5 bg-[#6400dc] text-white font-bold rounded-xl hover:bg-[#5200b3] transition-colors shadow-sm cursor-pointer"
              >
                Ուղարկել
              </button>
            </div>

          </form>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}