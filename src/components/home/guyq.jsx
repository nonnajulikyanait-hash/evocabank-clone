import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Guyq() {
  // Օտարվող գույքի ցանկը՝ ըստ ձեր տրամադրած տվյալների
  const properties = [
    {
      id: 1,
      address: 'Կոտայքի մարզ, հ. Սոլակ 1-ին փող., 4-րդ նրբ., թիվ 2 հողամաս',
      description: 'հողատարածք',
      area: '1340 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/solak.png'
    },
    {
      id: 2,
      address: 'ք. Երևան, Արաբկիր, Բաղրամյան պողոտա 53շ. 69',
      description: 'ոչ բնակելի տարածք',
      area: '180 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/baghramyan-53.jpg'
    },
    {
      id: 3,
      address: 'Պռոշյան գյուղ, Մայիսյան 4-րդ նրբանցք, 21 տուն',
      description: 'բնակելի տուն',
      area: '1,400 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/proshyan.jpg'
    },
    {
      id: 4,
      address: 'Կոտայքի մարզ, գ. Մարմարիկ',
      description: 'հողամաս',
      area: '7600 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/marmarik.jpg'
    },
    {
      id: 5,
      address: 'Կոտայքի մարզ, Արտավազ համ., Կարմիր հովիտ',
      description: 'հողամաս, (նպատակային նշ.՝ արոտավայր)',
      area: '10000 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/karmir-hovit_0.jpg'
    },
    {
      id: 6,
      address: 'ք. Գյումրի, Ղուկասյան փողոց 8 շարք, թիվ 33 բն.',
      description: 'տուն',
      area: '115 քմ',
      image: 'https://www.evoca.am/file_manager/Alienated-Property/Gyumri.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Օտարվող գույք</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Օտարվող գույք
          </h1>

          {/* Աղյուսակ */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <th className="py-4 px-6 w-[35%]">Հասցե</th>
                    <th className="py-4 px-6 w-[25%]">Նկարագրություն</th>
                    <th className="py-4 px-6 w-[15%]">Մակերես</th>
                    <th className="py-4 px-6 w-[25%]">Նկար</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {properties.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-neutral-900 leading-snug">
                        {item.address}
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {item.description}
                      </td>
                      <td className="py-4 px-6 font-medium text-neutral-800">
                        {item.area}
                      </td>
                      <td className="py-4 px-6">
                        <div className="w-32 h-24 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                          <img 
                            src={item.image} 
                            alt={item.address} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}