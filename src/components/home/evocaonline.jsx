import React, { useState } from 'react';

export default function EvocaOnline() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Validation errors
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Modals
  const [showQrModal, setShowQrModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    let hasError = false;

    if (!username.trim()) {
      setUsernameError(true);
      hasError = true;
    } else {
      setUsernameError(false);
    }

    if (!password.trim()) {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (hasError) {
      return; // Dashty lracvac che error dikharshe
    }

    // Եթե ինչ-որ անկապ կամ սխալ բան է գրված կամ մուտք են գործում, բացում ենք սխալի մոդալը (3rd screenshot)
    setShowErrorModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col justify-between relative select-none">
      
      {/* Top Navigation / Header */}
      <header className="w-full bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center shadow-xs">
        <div className="flex items-center gap-1.5 cursor-pointer">
          <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
          <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
          <span className="text-xl font-bold text-neutral-700 ml-1">BANK</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <span className="cursor-pointer text-lg">🌐</span>
        </div>
      </header>

      {/* Main Login Container */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="bg-white rounded-[24px] shadow-xl w-full max-w-md p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-neutral-900 mb-6 text-center">
            Մուտք համակարգ
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Input */}
            <div>
              <input
                type="text"
                placeholder="Մուտքանուն"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (e.target.value.trim()) setUsernameError(false);
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition bg-white ${
                  usernameError ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#6400dc]'
                }`}
              />
              {usernameError && (
                <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Գաղտնաբառ"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value.trim()) setPasswordError(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition bg-white ${
                    passwordError ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-gray-300 focus:border-[#6400dc]'
                  }`}
                />
                <span className="absolute right-3 top-3.5 text-gray-400 cursor-pointer text-xs">👁️‍🗨️</span>
              </div>
              {passwordError && (
                <p className="text-red-500 text-xs mt-1 font-medium">Դաշտը լրացված չէ</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3 rounded-xl transition shadow-md cursor-pointer text-sm"
            >
              Մուտք
            </button>
          </form>

          {/* Forgot credentials */}
          <div className="text-center mt-4">
            <a href="#" className="text-xs text-gray-500 hover:text-[#6400dc] transition">
              Մոռաց՞ել եք մուտքանունը կամ գաղտնաբառը
            </a>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* QR Code Login Button */}
          <button
            onClick={() => setShowQrModal(true)}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-50 py-3 rounded-xl transition cursor-pointer text-xs font-bold text-neutral-700"
          >
            <span className="text-base">📱</span> Մուտք QR կոդով
          </button>
        </div>

        <div className="mt-8 text-xs text-gray-500 cursor-pointer hover:underline">
          Կայքի հին տարբերակ
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p>© 2026 Evocabank[cite: 4]</p>
          <p>Բանկը վերահսկվում է ՀՀ Կենտրոնական բանկի կողմից[cite: 4]</p>
          <p>Տարբերակ 8.19.0</p>
        </div>
        <div className="flex items-center gap-6">
          <span>📞 (+374 10) 60 55 55[cite: 4]</span>
          <span>✉️ hello@evoca.am[cite: 4]</span>
        </div>
        <div className="flex gap-3">
          <span className="bg-black text-white px-3 py-1 rounded text-[10px]">App Store</span>
          <span className="bg-black text-white px-3 py-1 rounded text-[10px]">Google Play</span>
        </div>
      </footer>

      {/* ================= QR MODAL (2nd Screenshot) ================= */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative shadow-2xl text-center space-y-4">
            <button 
              onClick={() => setShowQrModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-black text-lg cursor-pointer font-bold"
            >
              ✕
            </button>
            <div className="flex justify-center pt-2">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAEOAQAAAABQysQIAAACAklEQVR4nO2YXY6DMAyELfUAHImrcyQOgMTOj5NCd7V9HokIVTR8L04mYzt1fhtHPcizLo8Yvh+S4ljPvV548H8vPxj4m4hoej2W81i2WhTpvr721Z8iEYaLiQ2/oMSSwkpEI46yN1N/05Gj+r36JRmREjFBYdYKbR71p3ZjEJuHt+7y/PaXGMSDjsgoeeBeXom3wYch2DTaYRVeatmILwCLFpKJwAjxYEJflLu0BromIv9DXETQ3kxHfzSMMcTUhR5QkJUy7yAg6DdGEETqG8jDNA7+ZiHOUv+vYaQ2o1lREksTHfifYcU9hhiFjboMpzkJJ+3ldlyyEKRdBe2gbt247MhFMIGKmX7xImw46F5lzwwLJukqa2s1CEJzyLSNWQnZtfisrshDGWqNtGs0uywoVg6GIJOmsBT06CfcCJCK+eDAlbfLkdQuSibgdhCM6So/PsiIKccOhoo9e6HsjRzy2MQ5hEmagcEE6vQp2Zq151MIQTChBqSOUQuXx2sxMRBRBV3wa/R6KyMvZZ6g8d6FBO7wIMwzpuPvAUZtTnqGIS6ThGTXd/V7BJyHcLl1FOGIV5srDt8Y9CvFlv5pn7uAl0o/LlThEFR/t0D2He99opMbtlzOYhMkDF4lImE68XfFpVy8NRxhiDfJFFyp2QVaCt8uVJOT/8SDPujxi+HZIfgAGwfiL0iGekuAAAABJRU5ErkJggg==" 
                alt="QR Code" 
                className="w-48 h-48 object-contain mx-auto"
              />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Արագ և ապահով</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Եթե ունեք EvocaTOUCH հավելվածը, սկանավորեք QR կոդը՝ ավելի արագ մուտք գործելու համար[cite: 15]։
            </p>
          </div>
        </div>
      )}

      {/* ================= ERROR MODAL (3rd Screenshot) ================= */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl text-left space-y-4">
            <div className="flex items-center gap-2 text-red-600 font-bold text-lg">
              <span>⚠️</span> <span>Հաղորդագրություն</span>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed">
              Մուտքանունը կամ գաղտնաբառը սխալ է:<br />
              3 անընդմեջ անհաջող փորձերի դեպքում Ձեր մուտքը համակարգ կարգելափակվի[cite: 16]:<br />
              Եթե չեք հիշում Ձեր մուտքանունը կամ գաղտնաբառը, խնդրում ենք օգտվել «Մոռաց՞ել եք գաղտնաբառը» հղումից կամ զանգահարել Բանկ:<br />
              Հեռ.՝ (+374 10) 60 55 55[cite: 16]
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowErrorModal(false)}
                className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold px-6 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Լավ
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}