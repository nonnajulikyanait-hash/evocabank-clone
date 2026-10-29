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

  // Calculations for Loan
  const calculateLoan = () => {
    const principal = Number(loanAmount);
    const months = Number(loanTerm);
    const annualRate = Number(loanRate) / 100;
    
    if (repaymentType === 'annuity') {
      const monthlyRate = annualRate / 12;
      if (monthlyRate === 0) return Math.round(principal / months);
      const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      return Math.round(monthlyPayment);
    } else {
      // Bullet / Non-annuity approximate monthly interest
      return Math.round((principal * annualRate * (months / 12)) / months);
    }
  };

  // Calculations for Deposit
  const calculateDeposit = () => {
    const principal = Number(depositAmount);
    const days = Number(depositTerm);
    const annualRate = Number(depositRate) / 100;

    const totalInterest = (principal * annualRate * days) / 365;
    const netInterest = totalInterest * 0.9; // 10% tax in Armenia
    const dailyInterest = totalInterest / days;

    return {
      daily: Math.round(dailyInterest),
      total: Math.round(totalInterest),
      net: Math.round(netInterest),
    };
  };

  const depositRes = calculateDeposit();

  return (
    <section className="py-16 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Հաշվիչներ
          </h2>
        </div>

        {/* Main Box */}
        <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-gray-100">
          
          {/* Tabs Switcher */}
          <div className="flex items-center gap-8 border-b border-gray-100 pb-4 mb-8">
            <button
              onClick={() => setActiveTab('loan')}
              className={`text-lg font-bold pb-2 transition-all relative cursor-pointer ${
                activeTab === 'loan' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Վարկ
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              className={`text-lg font-bold pb-2 transition-all relative cursor-pointer ${
                activeTab === 'deposit' ? 'text-gray-900 border-b-2 border-[#6400dc]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Ավանդ
            </button>
          </div>

          {/* LOAN CALCULATOR */}
          {activeTab === 'loan' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Left Column: Inputs */}
                <div className="space-y-6">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>100,000 ֏</span>
                      <span>30,000,000 ֏</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1 ամիս</span>
                      <span>60 ամիս</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1%</span>
                      <span>24%</span>
                    </div>
                  </div>

                  {/* Repayment Type */}
                  <div>
                    <span className="text-sm font-semibold text-gray-700 block mb-2">Մարման ձև</span>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                        <input
                          type="radio"
                          name="repayment"
                          checked={repaymentType === 'annuity'}
                          onChange={() => setRepaymentType('annuity')}
                          className="accent-[#6400dc] w-4 h-4"
                        />
                        Անուիտետային
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700">
                        <input
                          type="radio"
                          name="repayment"
                          checked={repaymentType === 'bullet'}
                          onChange={() => setRepaymentType('bullet')}
                          className="accent-[#6400dc] w-4 h-4"
                        />
                        Մայր գումարի մարում վերջում
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column: Result Card */}
                <div className="bg-[#f0f7fe] rounded-3xl p-8 flex flex-col justify-between border border-blue-100">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Ամսական մարում (մոտավոր)
                    </h4>
                    <div className="text-3xl md:text-4xl font-black text-[#6400dc]">
                      {calculateLoan().toLocaleString()} ֏
                    </div>
                  </div>

                  <div className="pt-6">
                    <button className="w-full bg-[#6400dc] hover:bg-[#5200b8] text-white font-bold text-base py-4 rounded-full shadow-lg transition-all cursor-pointer">
                      Հաշվել
                    </button>
                  </div>
                </div>

              </div>

              <p className="text-xs text-gray-400 mt-4 text-left">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։
              </p>
            </div>
          )}

          {/* DEPOSIT CALCULATOR */}
          {activeTab === 'deposit' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                
                {/* Left Column: Inputs */}
                <div className="space-y-6">
                  {/* Deposit Amount */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>100,000 ֏</span>
                      <span>50,000,000 ֏</span>
                    </div>
                  </div>

                  {/* Deposit Term */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>30 օր</span>
                      <span>1095 օր</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-gray-700 mb-2">
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
                      className="w-full accent-[#6400dc] cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1%</span>
                      <span>16%</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Results */}
                <div className="bg-[#f0f7fe] rounded-3xl p-6 flex flex-col justify-between border border-blue-100 space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Օրական կտրվածքով հաշվարկվող տոկոսագումար</div>
                    <div className="text-xl font-extrabold text-gray-900">{depositRes.daily.toLocaleString()} ֏</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 font-medium">Ավանդային պայմանագրի գործողության ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ</div>
                    <div className="text-xl font-extrabold text-gray-900">{depositRes.total.toLocaleString()} ֏</div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 font-medium">Ավանդային պայմանագրի գործողության ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ</div>
                    <div className="text-2xl font-black text-[#6400dc]">{depositRes.net.toLocaleString()} ֏</div>
                  </div>
                </div>

              </div>

              <p className="text-xs text-gray-400 mt-4 text-left">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ։
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}