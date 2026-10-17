export default function QrisRyzz() {
  return (
    <div className="w-full bg-[#16161f] border border-violet-900/50 rounded-[20px] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-3 text-center">
        <h3 className="font-black text-white tracking-widest text-sm">RYZZ OFFICIAL • QRIS</h3>
        <p className="text-[10px] text-violet-200">SATU QRIS UNTUK SEMUA</p>
      </div>

      {/* QR Image - pake file public/qris.jpg */}
      <div className="p-3 bg-white">
        <img 
          src="/qris.jpg" 
          alt="QRIS Ryzz Official" 
          className="w-full rounded-xl"
        />
      </div>

      {/* Footer */}
      <div className="bg-black p-3 flex justify-between items-center">
        <div className="text-[9px] text-gray-500">
          <p>Dicetak: 93600915</p>
          <p>Ver: 1.0.13.10.26</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-violet-400 font-bold">MIN DEPOSIT 2RB</p>
          <p className="text-[9px] text-gray-500">Scan • Bayar • Auto Saldo</p>
        </div>
      </div>
    </div>
  )
            }
