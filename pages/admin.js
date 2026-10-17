import { useState, useEffect } from 'react'
export default function Admin(){
  const [pass, setPass] = useState(''); const [ok, setOk] = useState(false)
  const [list, setList] = useState([])
  if(!ok) return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <div className="bg-[#16161f] p-5 rounded-xl w-full max-w-xs">
        <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Password admin" className="w-full p-3 bg-black border rounded"/>
        <button onClick={()=>setPass==='ryzz123'?setOk(true):alert('salah')} className="w-full mt-3 bg-violet-600 p-2 rounded">LOGIN</button>
      </div>
    </div>
  )
  return <div className="p-5 text-white">Disini nanti list deposit pending + tombol ACC nambah saldo. (Gua sambungin ke Supabase setelah file lain jadi)</div>
    }
