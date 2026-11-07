import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Akreditiv() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span>{t('akreditiv.breadcrumbBusiness')}</span> &gt; <span>{t('akreditiv.breadcrumbTrade')}</span> &gt; <span className="text-gray-700 font-medium">{t('akreditiv.breadcrumbCurrent')}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-neutral-900 mb-8">
            {t('akreditiv.title')}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            {/* Սոց․ ցանցերի կոճակներ */}
            <div className="hidden md:flex flex-col gap-3 p-3 bg-gray-50 rounded-2xl border border-gray-100 text-gray-500 sticky top-28">
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">f</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm font-bold">in</span>
              <span className="cursor-pointer hover:text-[#6400dc] text-sm">📷</span>
            </div>

            {/* Հիմնական բովանդակություն */}
            <div className="flex-1 space-y-6 text-xs md:text-sm text-gray-700 leading-relaxed w-full">
              <p className="text-gray-800 leading-relaxed">
                {t('akreditiv.p1')}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {t('akreditiv.p2')}
              </p>

              <h3 className="text-base font-bold text-[#6400dc] pt-2">
                {t('akreditiv.conditionsTitle')}
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>{t('akreditiv.cond1')}</li>
                <li>{t('akreditiv.cond2')}</li>
                <li>{t('akreditiv.cond3')}</li>
              </ul>

              <p className="text-gray-800 leading-relaxed pt-2">
                {t('akreditiv.p3')}
              </p>

              <h2 className="text-xl font-bold text-neutral-900 tracking-wide pt-6 mb-4">
                {t('akreditiv.tariffsTitle')}
              </h2>

              {/* Սակագների աղյուսակ */}
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white w-full">
                <table className="w-full text-left border-collapse text-xs md:text-sm min-w-[450px]">
                  <thead>
                    <tr className="bg-purple-50/50 border-b border-gray-200">
                      <th className="p-3 font-bold text-neutral-900">{t('akreditiv.tableHead1')}</th>
                      <th className="p-3 font-bold text-neutral-900">{t('akreditiv.tableHead2')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t1')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price1')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t2')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t3')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t4')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t5')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t6')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t7')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price1')}</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-gray-800">{t('akreditiv.t8')}</td>
                      <td className="p-3 text-gray-700">{t('akreditiv.price2')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Նշում */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                <strong>{t('akreditiv.noteTitle')}</strong> {t('akreditiv.noteText')}
              </div>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}