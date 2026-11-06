import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';
import EvocaOnlineMobile from './evocaonlinemobile';

export default function Bukletner() {
  const booklets = [
    {
      id: 1,
      title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
      image: "https://www.evoca.am/file_manager/Booklets/Images/Car%20Parking_Web_Visual.png",
      pdfUrl: "https://www.evoca.am/file_manager/parking%20loan.pdf"
    },
    {
      id: 2,
      title: "Ավտոմեքենայի ձեռքբերման նպատակով վարկ",
      image: "https://www.evoca.am/file_manager/Booklets/Images/%D4%B1%D5%BE%D5%BF%D5%B8%D5%B4%D5%B5%D5%B6%D5%A1%D5%B5%D5%AB-%D5%B1%D5%A5%D5%BC%D6%87%D5%A2%D5%A5%D6%87%D5%B4%D5%A1%D5%B6-%D5%B6%D5%BA%D5%A1%D5%B5%D5%A1%D5%AF%D5%B8%D5%BE-%D5%BE%D5%A1%D6%87%D5%AF.png",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/car-loan_Booklet.pdf"
    },
    {
      id: 3,
      title: "Անշարժ և շարժական գույքի գրավով վարկեր",
      image: "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%86%D5%87%D4%B1%D5%90%D4%BA-%D4%B5%D5%8E-%D5%87%D4%B1%D5%90%D4%BA%D4%B1%D4%BF%D4%B1%D5%86-%D4%B3%D5%88%D5%92%D5%85%D5%94%D4%BB-%D4%B3%D5%90%D4%B1%D5%8E%D5%88%D5%8E-%D5%8E%D4%B1%D5%90%D4%BF%D4%B5%D5%99.png",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/2026/%D4%B1%D5%B6%D5%B7%D5%A5%D6%87%D5%AA%20%D6%87%20%D5%B7%D5%A1%D6%87%D5%AA%D5%A1%D5%BA%D5%A1%D5%B6%20%D5%A3%D5%B8%D6%87%D5%B5%D6%84%D5%A1%20%D5%A3%D6%87%D5%A1%D5%BE%D5%B8%D5%BE%20%D5%BE%D5%A1%D6%87%D5%B5%D6%80.pdf"
    },
    {
      id: 4,
      title: "Հիփոթեքային վարկեր",
      image: "https://www.evoca.am/file_manager/Booklets/Images/5-mortgage-loans.jpg",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/2024/%D5%80%D5%B8%D5%A9%D5%A5%D6%87%D5%A1%D5%BA%D5%A1%D5%B5%D5%AB%D5%B6-%D5%BE%D5%A1%D6%87%D5%B5%D6%80-04.10.24.pdf"
    },
    {
      id: 5,
      title: "Բիզնես վարկեր",
      image: "https://www.evoca.am/file_manager/Booklets/Images/6-business-loans.jpg",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/%D4%B2%D5%AB%D5%A6%D5%B6%D5%A5%D5%BD-%D5%8E%D5%A1%D6%87%D5%AF%D5%B5%D6%80-19-08-2022%20.pdf"
    },
    {
      id: 6,
      title: "Ոսկու գրավով վարկեր",
      image: "https://www.evoca.am/file_manager/Booklets/Images/10-gold-secured-loans.jpg",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/%D5%88%D5%BD%D5%AF%D5%B8%D6%87%20%D5%A3%D6%87%D5%A1%D5%BE%D5%B8%D5%BE%20%D5%BE%D5%A1%D6%87%D5%B5%D6%80.pdf"
    },
    {
      id: 7,
      title: "Պահատուփեր",
      image: "https://www.evoca.am/file_manager/Booklets/Images/11-safe-deposit-boxes.jpg",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/%D5%8A%D5%A1%D5%B5%D5%B6%D5%B8%D6%87%D6%83%D5%A5%D6%8019-08-2022.pdf"
    },
    {
      id: 8,
      title: "Ֆակտորինգ",
      image: "https://www.evoca.am/file_manager/Booklets/Images/12-factoring.jpg",
      pdfUrl: "https://www.evoca.am/file_manager/Booklets/2026/%D6%86%D5%A1%D5%AF%D5%B4%D5%B8%D6%87%D5%B1%D5%AB%D5%B6%D5%B1.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Բուկլետներ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-10">
            Բուկլետներ
          </h1>

          {/* Բուկլետների քարտերի ցանց */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {booklets.map((item) => (
              <a
                key={item.id}
                href={item.pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#6400dc] transition-all group flex flex-col justify-between"
              >
                <div className="p-6 bg-gray-50 flex items-center justify-center h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#6400dc] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#6400dc] whitespace-nowrap ml-4 flex items-center gap-1">
                    PDF ⬇
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Տեղադրված են EvocaOnlineMobile և Footer բաղադրիչները */}
        <EvocaOnlineMobile />
      </div>

      <Footer />
    </div>
  );
}