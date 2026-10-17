import QrisRyzz from '../components/QrisRyzz'

export default function Deposit(){
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex justify-center p-4">
      <div className="w-full max-w-[380px]">
        <QrisRyzz />
        <div className="mt-4 bg-[#16161f] p-4 rounded-2xl border border-gray-800 text-xs">
          <p className="text-gray-400">Cara deposit:</p>
          <p className="mt-2">1. Scan QR di atas 2rb</p>
          <p>2. Screenshot bukti</p>
          <p>3. Saldo auto masuk (potong 80/cek)</p>
        </div>
        <a href="/" className="block text-center mt-5 text-violet-400 text-sm">← Kembali ke Checker</a>
      </div>
    </div>
  )
}
