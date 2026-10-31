import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from './footer';

export default function Hayt() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    companyName: '',
    hvhh: '',
    creationDate: '',
    street: '',
    region: '',
    city: '',
    zip: '',
    directorFirstName: '',
    directorLastName: '',
    directorPassport: '',
    passportDate: '',
    passportIssuer: '',
    contactPhone: '',
    contactEmail: '',
    legalForm: '',
    terminalType: '',
    pointName: '',
    pointAddress: '',
    website: '',
    avgTurnover: '',
    goodsDescription: '',
    previousPayments: '',
    expectedTurnover: '',
    notes: '',
    agreement: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Մաքրում ենք սխալը մուտքագրելիս
    if (errors[name]) {

      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Պարտադիր դաշտերի վալիդացիա (*)
    if (!formData.companyName.trim()) newErrors.companyName = true;
    if (!formData.hvhh.trim()) newErrors.hvhh = true;
    if (!formData.creationDate) newErrors.creationDate = true;
    if (!formData.directorPassport.trim()) newErrors.directorPassport = true;
    if (!formData.passportDate) newErrors.passportDate = true;
    if (!formData.passportIssuer.trim()) newErrors.passportIssuer = true;
    if (!formData.contactPhone.trim()) newErrors.contactPhone = true;
    if (!formData.legalForm) newErrors.legalForm = true;
    if (!formData.terminalType) newErrors.terminalType = true;
    if (!formData.pointName.trim()) newErrors.pointName = true;
    if (!formData.goodsDescription.trim()) newErrors.goodsDescription = true;
    if (!formData.expectedTurnover.trim()) newErrors.expectedTurnover = true;
    if (!formData.agreement) newErrors.agreement = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert('Հայտն ուղարկվեց:');
      // Ֆորմայի մաքրում
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        companyName: '',
        hvhh: '',
        creationDate: '',
        street: '',
        region: '',
        city: '',
        zip: '',
        directorFirstName: '',
        directorLastName: '',
        directorPassport: '',
        passportDate: '',
        passportIssuer: '',
        contactPhone: '',
        contactEmail: '',
        legalForm: '',
        terminalType: '',
        pointName: '',
        pointAddress: '',
        website: '',
        avgTurnover: '',
        goodsDescription: '',
        previousPayments: '',
        expectedTurnover: '',
        notes: '',
        agreement: false
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span>Դիջիթալ</span> &gt; <span className="text-gray-700 font-medium">Տերմինալի տեղադրման հայտ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Տերմինալի տեղադրման հայտ
          </h1>

          <div className="flex gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հայտի Ձևաթուղթ (Form) */}
            <div className="flex-1 bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-xs">
              <h2 className="text-lg md:text-xl font-bold text-[#6400dc] mb-8 pb-4 border-b border-gray-100">
                V-POS, POS կամ mPOS տերմինալի տեղադրման հայտ
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 text-xs md:text-sm">
                {/* Անուն Ազգանուն */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Անուն Ազգանուն</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Անուն"
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Ազգանուն"
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                      />
                    </div>
                  </div>
                </div>

                {/* Հեռախոսի համար */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Հեռախոսի համար</label>
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#6400dc]">
                    <span className="bg-gray-50 px-3 py-3 border-r border-gray-200 text-gray-500 font-medium">🇦🇲 +374</span>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="XX XX XX XX"
                      className="w-full p-3 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Կազմակերպության անվանում * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Կազմակերպության անվանում *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* ՀՎՀՀ * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">ՀՎՀՀ *</label>
                  <input
                    type="text"
                    name="hvhh"
                    value={formData.hvhh}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.hvhh ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.hvhh && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Կազմակերպության ստեղծման ամսաթիվ * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Կազմակերպության ստեղծման ամսաթիվ օր/ամիս/տարի *</label>
                  <input
                    type="date"
                    name="creationDate"
                    value={formData.creationDate}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.creationDate ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.creationDate && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Իրավաբանական հասցե */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Իրավաբանական հասցե</label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Փողոցի անուն, տան համար, բնակարանի համար"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        placeholder="Մարզ"
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                      />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Քաղաք"
                        className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                      />
                    </div>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="Փոստային կոդ"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                    />
                  </div>
                </div>

                {/* Տնօրենի Անուն Ազգանուն */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Տնօրենի Անուն Ազգանուն</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="directorFirstName"
                      value={formData.directorFirstName}
                      onChange={handleChange}
                      placeholder="Անուն"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                    />
                    <input
                      type="text"
                      name="directorLastName"
                      value={formData.directorLastName}
                      onChange={handleChange}
                      placeholder="Ազգանուն"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                    />
                  </div>
                </div>

                {/* Տնօրենի անձնագրի համարը * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Տնօրենի անձնագրի համարը *</label>
                  <input
                    type="text"
                    name="directorPassport"
                    value={formData.directorPassport}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.directorPassport ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.directorPassport && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Անձնագրի տրման ամսաթիվը * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Անձնագրի տրման ամսաթիվը *</label>
                  <input
                    type="date"
                    name="passportDate"
                    value={formData.passportDate}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.passportDate ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.passportDate && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Ում կողմից է տրված * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Ում կողմից է տրված *</label>
                  <input
                    type="text"
                    name="passportIssuer"
                    value={formData.passportIssuer}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.passportIssuer ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.passportIssuer && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Խնդրում ենք նշել իրավասու կոնտակտային անձի հեռախոսահամարները *</label>
                  <input
                    type="text"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.contactPhone ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.contactPhone && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ․ փոստի հասցեն */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Խնդրում ենք նշել իրավասու կոնտակտային անձի էլ․ փոստի հասցեն</label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  />
                </div>

                {/* Կազմակերպության իրավական ձևը * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Կազմակերպության իրավական ձևը *</label>
                  <div className="flex flex-wrap gap-4 pt-1">
                    {['ԱՁ', 'ՍՊԸ', 'ՓԲԸ', 'ԲԲԸ', 'Այլ'].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="legalForm"
                          value={item}
                          checked={formData.legalForm === item}
                          onChange={handleChange}
                          className="accent-[#6400dc]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                  {errors.legalForm && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Պահանջվող տերմինալի ձևը * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Պահանջվող տերմինալի ձևը *</label>
                  <div className="flex flex-wrap gap-4 pt-1">
                    {['POS', 'ՀԴՄ POS', 'V-POS', 'M-POS'].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="terminalType"
                          value={item}
                          checked={formData.terminalType === item}
                          onChange={handleChange}
                          className="accent-[#6400dc]"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                  {errors.terminalType && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Առևտրային և սպասարկման կետի անվանում * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Առևտրային և սպասարկման կետի անվանում (հայերեն և անգլերեն) *</label>
                  <input
                    type="text"
                    name="pointName"
                    value={formData.pointName}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.pointName ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.pointName && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Առևտրային և սպասարկման կետի հասցե */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Առևտրային և սպասարկման կետի հասցե</label>
                  <input
                    type="text"
                    name="pointAddress"
                    value={formData.pointAddress}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  />
                </div>

                {/* Ինտերնետային կայքի անվանում (V-POS-ի դեպքում) */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Ինտերնետային կայքի անվանում (V-POS-ի դեպքում)</label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  />
                </div>

                {/* Վերջին տարվա,ամսվա միջին շրջանառությունը ՀՀ դրամով */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Վերջին տարվա,ամսվա միջին շրջանառությունը ՀՀ դրամով</label>
                  <input
                    type="text"
                    name="avgTurnover"
                    value={formData.avgTurnover}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  />
                </div>

                {/* Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Կազմակերպության կողմից վաճառվող ապրանքների կամ ծառայությունների համառոտ նկարագիրը *</label>
                  <textarea
                    rows="3"
                    name="goodsDescription"
                    value={formData.goodsDescription}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.goodsDescription ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  ></textarea>
                  {errors.goodsDescription && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով... */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">
                    Արդյո՞ք նախկինում վճարումներն ընդունել եք վճարային քարտերով: Եթե այո, խնդրում ենք նշել նաև սպասարկող կազմակերպության անվանումը և վերջինիս հետ պայմանագիրը խզելու պատճառները:
                  </label>
                  <textarea
                    rows="3"
                    name="previousPayments"
                    value={formData.previousPayments}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  ></textarea>
                </div>

                {/* Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով * */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Որքան ամսական իրացում եք կանխատեսում վճարային քարտերով վճարումներով *</label>
                  <input
                    type="text"
                    name="expectedTurnover"
                    value={formData.expectedTurnover}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${errors.expectedTurnover ? 'border-red-500 bg-red-50/30' : 'border-gray-200 focus:border-[#6400dc]'}`}
                  />
                  {errors.expectedTurnover && <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>}
                </div>

                {/* Նշումների համար */}
                <div>
                  <label className="block font-bold text-gray-700 mb-2">Նշումների համար</label>
                  <textarea
                    rows="3"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#6400dc]"
                  ></textarea>
                </div>

                {/* Համաձայնության Checkbox * */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleChange}
                      className="mt-1 accent-[#6400dc]"
                    />
                    <span className={`text-xs text-gray-600 leading-relaxed ${errors.agreement ? 'text-red-500 font-medium' : ''}`}>
                      Սույն հայտը լրացնելով՝ հավաստում եմ, որ դրանում ներկայացված տվյալները ստույգ են, լրիվ և արժանահավատ: Տալիս եմ իմ համաձայնությունը, որպեսզի Բանկը ստուգի դրանց իսկությունը
                    </span>
                  </label>
                  {errors.agreement && <p className="text-red-500 text-xs mt-1 font-medium">Խնդրում ենք նշել համաձայնությունը</p>}
                </div>

                {/* Ուղարկել Կոճակ */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-sm px-10 py-3 rounded-full transition shadow-md cursor-pointer"
                  >
                    Ուղարկել
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>

        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}