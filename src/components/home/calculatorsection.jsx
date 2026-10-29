import React, { useState } from 'react';

export default function CalculatorSection() {
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' or 'deposit'

  // Loan State
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12); // months
  const [loanRate, setLoanRate] = useState(14); // %
  const [repaymentType, setRepaymentType] = useState('annuity'); // 'annuity' or 'bullet'

  // Deposit State
  const [depositAmount, setDepositAmount] = useState(1000000);
  const [depositTerm, setDepositTerm] = useState(365); // days
  const [depositRate, setDepositRate] = useState(9); // %

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loanSchedule, setLoanSchedule] = useState([]);
  const [loanSummary, setLoanSummary] = useState({ totalPayment: 0, totalInterest: 0 });

  // Handle Loan Calculation & Open Modal
  const handleCalculateLoan = () => {
    const principal = Number(loanAmount);
    const months = Number(loanTerm);
    const annualRate = Number(loanRate) / 100;
    const monthlyRate = annualRate / 12;

    let schedule = [];
    let remainingBalance = principal;
    let totalPay = 0;
    let totalInt = 0;

    if (repaymentType === 'annuity') {
      const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      
      for (let i = 1; i <= months; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        schedule.push({
          month: i,
          interest: interestPayment,
          principal: principalPayment,
          total: monthlyPayment,
        });

        totalPay += monthlyPayment;
        totalInt += interestPayment;
      }
    } else {
      const monthlyPrincipalPart = principal / months;
      for (let i = 1; i <= months; i++) {
        const interestPayment = remainingBalance * monthlyRate;
        const totalMonthly = interestPayment + monthlyPrincipalPart;
        remainingBalance -= monthlyPrincipalPart;

        schedule.push({
          month: i,
          interest: interestPayment,
          principal: monthlyPrincipalPart,
          total: totalMonthly,
        });

        totalPay += totalMonthly;
        totalInt += interestPayment;
      }
    }

    setLoanSchedule(schedule);
    setLoanSummary({ totalPayment: totalPay, totalInterest: totalInt });
    setIsModalOpen(true);
  };

  return (
    <section className="py-8 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-4 text-left">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
            Հաշվիչներ
          </h2>
        </div>

        {/* Main Box */}
        <div className="bg-white rounded-[24px] p-5 md:p-6 shadow-lg border border-gray-100">
          
          {/* Tabs Switcher */}
          <div className="flex items-center gap-6 border-b border-gray-100 pb-2 mb-4">
            <button
              onClick={() => setActiveTab('loan')}
              className={`text-sm font-bold pb-2 transition-all relative cursor-pointer ${
                activeTab === 'loan' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`text-sm font-bold pb-2 transition-all relative cursor-pointer ${
                activeTab === 'deposit' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {/* LOAN CALCULATOR */}
          {activeTab === 'loan' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 items-center">
                
                {/* Left Column: Inputs */}
                <div className="space-y-3">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Վարկի գումար</span>
                      <span className="text-[#6400dc] font-bold">{Number(loanAmount).toLocaleString()} ֏</span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="30000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>100,000 ֏</span>
                      <span>30,000,000 ֏</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Ժամկետ</span>
                      <span className="text-[#6400dc] font-bold">{loanTerm} ամիս</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="60"
                      step="1"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>1 ամիս</span>
                      <span>60 ամիս</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Տարեկան տոկոսադրույք</span>
                      <span className="text-[#6400dc] font-bold">{loanRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      step="0.5"
                      value={loanRate}
                      onChange={(e) => setLoanRate(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>1%</span>
                      <span>24%</span>
                    </div>
                  </div>

                  {/* Repayment Type */}
                  <div>
                    <span className="text-[11px] font-semibold text-gray-700 block mb-1">Մարման ձև</span>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-medium text-gray-700">
                        <input
                          type="radio"
                          name="repayment"
                          checked={repaymentType === 'annuity'}
                          onChange={() => setRepaymentType('annuity')}
                          className="accent-[#6400dc] w-3 h-3"
                        />
                        Անուիտետային
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-medium text-gray-700">
                        <input
                          type="radio"
                          name="repayment"
                          checked={repaymentType === 'bullet'}
                          onChange={() => setRepaymentType('bullet')}
                          className="accent-[#6400dc] w-3 h-3"
                        />
                        Մայր գումարի մարում վերջում
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Calculate Button Box */}
                <div className="bg-[#f0f7fe] rounded-xl p-5 flex flex-col justify-center items-center border border-blue-100 text-center h-full">
                  <p className="text-[11px] font-semibold text-gray-500 mb-3">
                    Սեղմեք «Հաշվել»՝ մանրամասն գրաֆիկը տեսնելու համար
                  </p>
                  <button 
                    onClick={handleCalculateLoan}
                    className="w-full bg-[#6400dc] hover:bg-[#5200b8] text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Հաշվել
                  </button>
                </div>

              </div>

              <p className="text-[10px] text-gray-400 text-left">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։
              </p>
            </div>
          )}

          {/* DEPOSIT CALCULATOR */}
          {activeTab === 'deposit' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 items-center">
                
                {/* Left Column: Inputs */}
                <div className="space-y-3">
                  {/* Deposit Amount */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Ներդրվող գումար</span>
                      <span className="text-[#6400dc] font-bold">{Number(depositAmount).toLocaleString()} ֏</span>
                    </div>
                    <input
                      type="range"
                      min="100000"
                      max="50000000"
                      step="50000"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>100,000 ֏</span>
                      <span>50,000,000 ֏</span>
                    </div>
                  </div>

                  {/* Deposit Term */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Ավանդի ժամկետ</span>
                      <span className="text-[#6400dc] font-bold">{depositTerm} օր</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="1095"
                      step="1"
                      value={depositTerm}
                      onChange={(e) => setDepositTerm(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>30 օր</span>
                      <span>1095 օր</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-gray-700 mb-0.5">
                      <span>Տարեկան տոկոսադրույք</span>
                      <span className="text-[#6400dc] font-bold">{depositRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="16"
                      step="0.5"
                      value={depositRate}
                      onChange={(e) => setDepositRate(e.target.value)}
                      className="w-full accent-[#6400dc] cursor-pointer h-1.5"
                    />
                    <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                      <span>1%</span>
                      <span>16%</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Info / Button */}
                <div className="bg-[#f0f7fe] rounded-xl p-5 flex flex-col justify-center items-center border border-blue-100 text-center h-full">
                  <p className="text-[11px] font-semibold text-gray-500 mb-3">
                    Հաշվարկեք Ձեր ավանդային եկամուտը պարզ և արագ
                  </p>
                  <button 
                    onClick={() => alert(`Ընդհանուր տոկոսային եկամուտը կազմում է՝ ${Math.round((depositAmount * (depositRate/100) * depositTerm) / 365).toLocaleString()} ֏`)}
                    className="w-full bg-[#6400dc] hover:bg-[#5200b8] text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all cursor-pointer"
                  >
                    Հաշվել
                  </button>
                </div>

              </div>

              <p className="text-[10px] text-gray-400 text-left">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։
              </p>
            </div>
          )}

        </div>

      </div>

      {/* LOAN RESULT MODAL (POPUP) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-xl font-black text-gray-900 mb-6 text-left">
              Վարկային հաշվիչի արդյունքներ
            </h3>

            {/* Top Summary Info inside Modal */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-2xl mb-6 text-left">
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Գումար</div>
                <div className="text-sm font-bold text-gray-900">{Number(loanAmount).toLocaleString()}</div>
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Տարեկան տոկոսադրույք</div>
                <div className="text-sm font-bold text-gray-900">{loanRate}%</div>
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Վարկի ժամկետը</div>
                <div className="text-sm font-bold text-gray-900">{loanTerm} ամիս</div>
              </div>
              <div>
                <div className="text-[11px] text-gray-500 font-medium">Ոմբ վճարվելը (Գումար + տոկոսագումար)</div>
                <div className="text-sm font-black text-[#6400dc]">{Math.round(loanSummary.totalPayment).toLocaleString()} ֏</div>
              </div>
            </div>

            {/* Schedule Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b text-gray-400 font-medium">
                    <th className="pb-3">Ամիս</th>
                    <th className="pb-3">Վճարվելիք տոկոսագումար</th>
                    <th className="pb-3">Վարկի մասնակի մարում</th>
                    <th className="pb-3 text-right">Վարկի ամսական վճար</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {loanSchedule.map((row) => (
                    <tr key={row.month} className="text-gray-700">
                      <td className="py-3 font-semibold">{row.month}</td>
                      <td className="py-3">{row.interest.toFixed(2)}</td>
                      <td className="py-3">{row.principal.toFixed(2)}</td>
                      <td className="py-3 text-right font-bold">{row.total.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}