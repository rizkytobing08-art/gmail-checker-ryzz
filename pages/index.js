import { useState } from 'react'
import QrisRyzz from '../components/QrisRyzz'

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
        <div className="bg-[#16161f] border border-violet-900/50 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <h1 className="font-black text-violet-400">RYZZ CHECKER</h1>
            <p className="text-[10px] text-gray-500">PREMIUM LIVE CHECKER</p>
          </div>
          <a href="/deposit" className="bg-violet-600 px-3 py-1.5 rounded-full text-xs font-bold">DEPOSIT 2RB</a>
        </div>

        <div className="bg-[#16161f] border border-gray-800 rounded-2xl p-5 mt-4">
          <label className="text-xs text-gray-400">EMAIL AKUN MU (SALDO)</label>
          <input value={userEmail} onChange={e=>setUserEmail(e.target.value)} placeholder="ryzz@gmail.com" className="w-full mt-1 p-3 rounded-xl bg-[#0f0f14] border border-gray-800 text-sm"/>
          <label className="text-xs text-gray-400 mt-4 block">TARGET GMAIL</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="target@gmail.com" className="w-full mt-1 p-3 rounded-xl bg-[#0f0f14] border border-gray-800 text-sm"/>
          <button onClick={cek} disabled={loading} className="w-full mt-5 bg-gradient-to-r from-violet-600 to-indigo-600 p-3.5 rounded-xl font-black text-sm">
            {loading ? 'CHECKING...' : 'CHECK - POTONG 80'}
          </button>
        </div>

        {hasil && (
          <div className="bg-[#16161f] border border-violet-900/30 rounded-2xl p-4 mt-4 text-sm">
            <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(hasil, null, 2)}</pre>
          </div>
        )}

        <div className="mt-4">
          <QrisRyzz />
        </div>

      </div>
    </div>
  )
    }
