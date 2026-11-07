import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Hashvetvutyunner() {
  const auditReports = [
    { year: '2025', title: '2025 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/17775646365838.pdf' },
    { year: '2024', title: '2024 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/17460197066703.pdf' },
    { year: '2023', title: '2023 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/17144781486073.pdf' },
    { year: '2022', title: '2022 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16826787243136.pdf' },
    { year: '2021', title: '2021 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16512155005326.pdf' },
    { year: '2020', title: '2020 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/1620035951602.pdf' },
    { year: '2019', title: '2019 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16153934286757.pdf' },
    { year: '2018', title: '2018 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154514985097.pdf' },
    { year: '2017', title: '2017 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16153954693007.pdf' },
    { year: '2016', title: '2016 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16153956965747.pdf' },
    { year: '2015', title: '2015 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16153959849486.pdf' },
    { year: '2014', title: '2014 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154526891234.pdf' },
    { year: '2013', title: '2013 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154527971472.pdf' },
    { year: '2012', title: '2012 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154528636623.pdf' },
    { year: '2011', title: '2011 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154529291183.pdf' },
    { year: '2010', title: '2010 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154529976312.pdf' },
    { year: '2009', title: '2009 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154530674905.pdf' },
    { year: '2008', title: '2008 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154531385322.pdf' },
    { year: '2007', title: '2007 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/16154532712077.pdf' },
    { year: '2006', title: '2006 Աուդիտորական եզրակացություն', url: 'https://www.evoca.am/files/audit_reports/1/1615453320825.pdf' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Reports Sub-header Purple Menu */}
        <div className="bg-[#6400dc] text-white py-3 px-4 sm:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 sm:gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/hashvetvutyunner" className="border-b-2 border-white pb-1 cursor-pointer font-black">Աուդիտորական եզրակացություն</Link>
            <Link to="/finansakan" className="text-purple-200 hover:text-white transition cursor-pointer">Ֆինանսական հաշվետվություններ</Link>
            <Link to="/nerdroxner" className="text-purple-200 hover:text-white transition cursor-pointer">Ներդրողների համար</Link>
            <Link to="/kisamyakayin" className="text-purple-200 hover:text-white transition cursor-pointer">Կիսամյակային հաշվետվություն</Link>
            <Link to="/mermasintarekan" className="text-purple-200 hover:text-white transition cursor-pointer">Տարեկան հաշվետվություն</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-12 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Հաշվետվություններ</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Աուդիտորական եզրակացություն</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 md:mb-8">
            Աուդիտորական եզրակացություն
          </h1>

          {/* Audit Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditReports.map((report, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-4 mb-2">
                  {report.year}
                </h2>
                <a 
                  href={report.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#f8f9fa] hover:bg-gray-100 border border-gray-100 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6400dc] flex items-center justify-center font-bold text-lg group-hover:bg-[#6400dc] group-hover:text-white transition shrink-0">
                      📄
                    </div>
                    <span className="text-neutral-800 font-bold text-xs sm:text-sm md:text-base group-hover:text-[#6400dc] transition truncate">
                      {report.title}
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#6400dc] text-sm font-bold shrink-0 ml-2">↓</span>
                </a>
              </div>
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}