import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

export default async function handler(req, res){
  const { email, userEmail } = req.query
  if(!email || !userEmail) return res.status(400).json({error:'Lengkapi email'})

  // Ambil saldo
  let { data: profile } = await supabase.from('profiles').select('*').eq('email', userEmail).single()
  if(!profile){
    // bikin akun baru kalau belum ada
    await supabase.from('profiles').insert({email: userEmail, saldo: 0})
    return res.json({error:'Akun baru dibuat, deposit dulu 2rb', saldo:0})
  }

  if(profile.saldo < 80) return res.json({error:'Saldo kurang', saldo: profile.saldo})

  // POTONG 80 PERAK DI SINI
  const saldoBaru = profile.saldo - 80
  await supabase.from('profiles').update({saldo: saldoBaru}).eq('email', userEmail)

  try{
    const r = await fetch(`https://api.zerobounce.net/v2/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${email}`)
    const data = await r.json()
    let hasil = data.status === 'valid' ? 'live' : 'ga terdaftar / disable'
    return res.json({email, hasil, validator: data.status, sisa_saldo: saldoBaru})
  }catch(e){
    // balikin kalau gagal
    await supabase.from('profiles').update({saldo: profile.saldo}).eq('email', userEmail)
    return res.json({error:'API error, saldo balik'})
  }
                                          }
