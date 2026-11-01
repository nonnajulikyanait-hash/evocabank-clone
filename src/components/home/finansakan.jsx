import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Finansakan() {
  const financialReports = [
    {
      year: '2026',
      items: [
        { title: '1-2026', url: 'https://www.evoca.am/files/financial_indicators/1/17772985879128.pdf' },
        { title: '2-2026', url: 'https://www.evoca.am/files/financial_indicators/1/17845698585063.pdf' },
        { title: '3-2026', url: 'https://www.evoca.am/files/financial_indicators/1/17925024759035.pdf' },
      ]
    },
    {
      year: '2025',
      items: [
        { title: '1-2025', url: 'https://www.evoca.am/files/financial_indicators/1/17452977348942.pdf' },
        { title: '2-2025', url: 'https://www.evoca.am/files/financial_indicators/1/17531169411087.pdf' },
        { title: '3-2025', url: 'https://www.evoca.am/files/financial_indicators/1/1760978850237.pdf' },
        { title: '4-2025', url: 'https://www.evoca.am/files/financial_indicators/1/17710070801957.pdf' },
      ]
    },
    {
      year: '2024',
      items: [
        { title: '1-2024', url: 'https://www.evoca.am/files/financial_indicators/1/17143979754635.pdf' },
        { title: '2-2024', url: 'https://www.evoca.am/files/financial_indicators/1/1721811290941.pdf' },
        { title: '3-2024', url: 'https://www.evoca.am/files/financial_indicators/1/17295285064899.pdf' },
        { title: '4-2024', url: 'https://www.evoca.am/files/financial_indicators/1/17374471571496.pdf' },
      ]
    },
    {
      year: '2023',
      items: [
        { title: '1-2023', url: 'https://www.evoca.am/files/financial_indicators/1/16895961054026.pdf' },
        { title: '2-2023', url: 'https://www.evoca.am/files/financial_indicators/1/16898539869225.pdf' },
        { title: '3-2023', url: 'https://www.evoca.am/files/financial_indicators/1/17036006082447.pdf' },
        { title: '4-2023', url: 'https://www.evoca.am/files/financial_indicators/1/17060119385429.pdf' },
      ]
    },
    {
      year: '2022',
      items: [
        { title: '1-2022', url: 'https://www.evoca.am/files/financial_indicators/1/16504532392049.pdf' },
        { title: '2-2022', url: 'https://www.evoca.am/files/financial_indicators/1/16583151562442.pdf' },
        { title: '3-2022', url: 'https://www.evoca.am/files/financial_indicators/1/16662555236032.pdf' },
        { title: '4-2022', url: 'https://www.evoca.am/files/financial_indicators/1/1674210538693.pdf' },
      ]
    },
    {
      year: '2021',
      items: [
        { title: '1-2021', url: 'https://www.evoca.am/files/financial_indicators/1/16200356945157.pdf' },
        { title: '2-2021', url: 'https://www.evoca.am/files/financial_indicators/1/16273834848155.pdf' },
        { title: '3-2021', url: 'https://www.evoca.am/files/financial_indicators/1/16347293224528.pdf' },
        { title: '4-2021', url: 'https://www.evoca.am/files/financial_indicators/1/16426844012099.pdf' },
      ]
    },
    {
      year: '2020',
      items: [
        { title: '1-2020', url: 'https://www.evoca.am/files/financial_indicators/1/16153988124297.pdf' },
        { title: '2-2020', url: 'https://www.evoca.am/files/financial_indicators/1/1615398812432.pdf' },
        { title: '3-2020', url: 'https://www.evoca.am/files/financial_indicators/1/16153988124323.pdf' },
        { title: '4-2020', url: 'https://www.evoca.am/files/financial_indicators/1/16153988124328.pdf' },
      ]
    },
    {
      year: '2019',
      items: [
        { title: '1-2019', url: 'https://www.evoca.am/files/financial_indicators/1/1615399356215.pdf' },
        { title: '2-2019', url: 'https://www.evoca.am/files/financial_indicators/1/16153993562156.pdf' },
        { title: '3-2019', url: 'https://www.evoca.am/files/financial_indicators/1/16153993562193.pdf' },
        { title: '4-2019', url: 'https://www.evoca.am/files/financial_indicators/1/16153993562197.pdf' },
      ]
    },
    {
      year: '2018',
      items: [
        { title: '1-2018', url: 'https://www.evoca.am/files/financial_indicators/1/16154007342162.pdf' },
        { title: '2-2018', url: 'https://www.evoca.am/files/financial_indicators/1/16154537743463.pdf' },
        { title: '3-2018', url: 'https://www.evoca.am/files/financial_indicators/1/16154537743469.pdf' },
        { title: '4-2018', url: 'https://www.evoca.am/files/financial_indicators/1/16154537743472.pdf' },
      ]
    },
    {
      year: '2017',
      items: [
        { title: '1-2017', url: 'https://www.evoca.am/files/financial_indicators/1/16154587383638.pdf' },
        { title: '2-2017', url: 'https://www.evoca.am/files/financial_indicators/1/16154587383642.pdf' },
        { title: '3-2017', url: 'https://www.evoca.am/files/financial_indicators/1/16154587383646.pdf' },
        { title: '4-2017', url: 'https://www.evoca.am/files/financial_indicators/1/1615458738365.pdf' },
      ]
    },
    {
      year: '2016',
      items: [
        { title: '1-2016', url: 'https://www.evoca.am/files/financial_indicators/1/16154609529116.pdf' },
        { title: '2-2016', url: 'https://www.evoca.am/files/financial_indicators/1/1615460952912.pdf' },
        { title: '3-2016', url: 'https://www.evoca.am/files/financial_indicators/1/1615460952916.pdf' },
        { title: '4-2016', url: 'https://www.evoca.am/files/financial_indicators/1/16154609529164.pdf' },
        { title: 'Տարեկան 2016', url: '#' },
      ]
    },
    {
      year: '2015',
      items: [
        { title: '1-2015', url: 'https://www.evoca.am/files/financial_indicators/1/16154632216899.pdf' },
        { title: '2-2015', url: 'https://www.evoca.am/files/financial_indicators/1/1615463221692.pdf' },
        { title: '3-2015', url: 'https://www.evoca.am/files/financial_indicators/1/16154632216923.pdf' },
        { title: '4-2015', url: 'https://www.evoca.am/files/financial_indicators/1/16154632216967.pdf' },
        { title: 'Տարեկան 2015', url: '#' },
      ]
    },
    {
      year: '2014',
      items: [
        { title: '1-2014', url: 'https://www.evoca.am/files/financial_indicators/1/16156322886074.pdf' },
        { title: '2-2014', url: 'https://www.evoca.am/files/financial_indicators/1/16156322886078.pdf' },
        { title: '3-2014', url: 'https://www.evoca.am/files/financial_indicators/1/16156322886082.pdf' },
        { title: '4-2014', url: 'https://www.evoca.am/files/financial_indicators/1/16156322886086.pdf' },
        { title: 'Տարեկան 2014', url: '#' },
      ]
    },
    {
      year: '2013',
      items: [
        { title: '1-2013', url: 'https://www.evoca.am/files/financial_indicators/1/1615653922582.pdf' },
        { title: '2-2013', url: 'https://www.evoca.am/files/financial_indicators/1/16156539225824.pdf' },
        { title: '3-2013', url: 'https://www.evoca.am/files/financial_indicators/1/16156539225828.pdf' },
        { title: '4-2013', url: 'https://www.evoca.am/files/financial_indicators/1/16156539225832.pdf' },
        { title: 'Տարեկան 2013', url: '#' },
      ]
    },
    {
      year: '2012',
      items: [
        { title: '1-2012', url: 'https://www.evoca.am/files/financial_indicators/1/16156541266361.pdf' },
        { title: '2-2012', url: 'https://www.evoca.am/files/financial_indicators/1/16156541266385.pdf' },
        { title: '3-2012', url: 'https://www.evoca.am/files/financial_indicators/1/16156541266389.pdf' },
        { title: '4-2012', url: 'https://www.evoca.am/files/financial_indicators/1/16156541266392.pdf' },
        { title: 'Տարեկան 2012', url: '#' },
      ]
    },
    {
      year: '2011',
      items: [
        { title: '1-2011', url: 'https://www.evoca.am/files/financial_indicators/1/1615654361989.pdf' },
        { title: '2-2011', url: 'https://www.evoca.am/files/financial_indicators/1/16156543619923.pdf' },
        { title: '3-2011', url: 'https://www.evoca.am/files/financial_indicators/1/16156543619927.pdf' },
        { title: '4-2011', url: 'https://www.evoca.am/files/financial_indicators/1/1615654361993.pdf' },
        { title: 'Տարեկան 2011', url: '#' },
      ]
    },
    {
      year: '2010',
      items: [
        { title: '1-2010', url: 'https://www.evoca.am/files/financial_indicators/1/16156544963741.pdf' },
        { title: '2-2010', url: 'https://www.evoca.am/files/financial_indicators/1/16156544963745.pdf' },
        { title: '3-2010', url: 'https://www.evoca.am/files/financial_indicators/1/1615654496377.pdf' },
        { title: '4-2010', url: 'https://www.evoca.am/files/financial_indicators/1/16156544963773.pdf' },
        { title: 'Տարեկան 2010', url: '#' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Reports Sub-header Purple Menu */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/hashvetvutyunner" className="text-purple-200 hover:text-white transition">Աուդիտորական եզրակացություն</Link>
            <Link to="/finansakan" className="border-b-2 border-white pb-1 cursor-pointer font-black">Ֆինանսական հաշվետվություններ</Link>
            <Link to="/nerdroxner" className="text-purple-200 hover:text-white transition">Ներդրողների համար</Link>
            <Link to="/kisamyakayin" className="text-purple-200 hover:text-white transition">Կիսամյակային հաշվետվություն</Link>
            <Link to="/mermasintarekan" className="text-purple-200 hover:text-white transition">Տարեկան հաշվետվություն</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Հաշվետվություններ</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Ֆինանսական հաշվետվություններ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Ֆինանսական հաշվետվություններ
          </h1>

          {/* Financial Reports List */}
          <div className="space-y-10">
            {financialReports.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-extrabold text-neutral-900">
                  {group.year}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item, itemIdx) => (
                    <a 
                      key={itemIdx}
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#f8f9fa] hover:bg-gray-100 border border-gray-100 rounded-2xl p-5 flex items-center justify-between transition group shadow-xs"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6400dc] flex items-center justify-center font-bold text-lg group-hover:bg-[#6400dc] group-hover:text-white transition">
                          📄
                        </div>
                        <span className="text-neutral-800 font-bold text-sm md:text-base group-hover:text-[#6400dc] transition">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-gray-400 group-hover:text-[#6400dc] text-sm font-bold">↓</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}