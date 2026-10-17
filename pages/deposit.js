export default function Deposit(){
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex justify-center p-4">
      <div className="w-full max-w-[380px] bg-[#16161f] rounded-2xl p-5 border border-gray-800">
        <h2 className="font-bold">Deposit Minimal Rp 2.000</h2>
        <p className="text-xs text-gray-500">Scan QRIS Ryzz Official</p>
        <img src="/qris.jpg" className="w-full rounded-xl mt-4 border border-gray-700"/>
        <div className="mt-4 text-xs bg-black p-3 rounded">
          <p>1. TF 2rb ke QRIS</p><p>2. Screenshot bukti</p><p>3. Hub admin / tunggu ACC</p>
        </div>
        <a href="/" className="block text-center mt-5 text-violet-400 text-sm">← Kembali Cek Gmail</a>
      </div>
    </div>
  )
    }
