import { useState } from 'react'

export default function Home(){
  const [email, setEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [hasil, setHasil] = useState(null)
  const [loading, setLoading] = useState(false)

  const cek = async () => {
    if(!email || !userEmail) return alert('Isi 2 email dulu co!')
    setLoading(true)
    setHasil(null)
    const res = await fetch(`/api/check?email=${email}&userEmail=${userEmail}`)
    const data = await res.json()
    setHasil(data)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex justify-center p-4">
      <div className="w-full max-w-[380px]">
        {/* Header kayak di video */}
        <div className="bg-[#16161f] border border-violet-900/50 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h1 className="font-black text-violet-400">RYZZ CHECKER</h1>
            <p className="text-[10px] text-gray-500">PREMIUM LIVE CHECKER</p>
          </div>
          <a href="/deposit" className="bg-violet-600 px-3 py-1.5 rounded-full text-xs font-bold">DEPOSIT 2RB</a>
        </div>

        {/* Card Cek */}
        <div className="bg-[#16161f] border border-gray-800 rounded-2xl p-5 mt-4">
          <label className="text-xs text-gray-400">EMAIL AKUN MU (SALDO)</label>
          <input value={userEmail} onChange={e=>setUserEmail(e.target.value)} placeholder="ryzz@gmail.com" className="w-full mt-1 p-3 rounded-xl bg-[#0f0f14] border border-gray-800 text-sm focus:border-violet-600 outline-none"/>
          
          <label className="text-xs text-gray-400 mt-4 block">TARGET GMAIL</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="target@gmail.com" className="w-full mt-1 p-3 rounded-xl bg-[#0f0f14] border border-gray-800 text-sm focus:border-violet-600 outline-none"/>

          <button onClick={cek} disabled={loading} className="w-full mt-5 bg-gradient-to-r from-violet-600 to-indigo-600 p-3.5 rounded-xl font-black text-sm tracking-widest">
            {loading ? 'CHECKING...' : 'CHECK - POTONG 80'}
          </button>
          <p className="text-center text-[10px] text-gray-500 mt-2">Biaya 80 perak / cek • Hasil Real API</p>
        </div>

        {/* Hasil */}
        {hasil && (
          <div className="bg-[#16161f] border border-violet-900/30 rounded-2xl p-4 mt-4">
            {hasil.error ? (
              <p className="text-red-400 text-sm">{hasil.error} - Saldo: {hasil.saldo || 0}</p>
            ) : (
              <>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">{hasil.email}</span>
                  <span className={`font-bold ${hasil.hasil==='live'?'text-green-400':'text-red-400'}`}>{hasil.hasil.toUpperCase()}</span>
                </div>
                <div className="text-[11px] text-gray-500 mt-2">Sisa Saldo: Rp {hasil.sisa_saldo}</div>
              </>
            )}
          </div>
        )}

        {/* QRIS preview */}
        <div className="mt-4 rounded-2xl overflow-hidden border border-gray-800">
          <img src="/qris.jpg" className="w-full"/>
        </div>
      </div>
    </div>
  )
}
