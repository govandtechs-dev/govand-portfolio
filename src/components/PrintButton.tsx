'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-[#dc143c] hover:bg-[#a50e2d] text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors shadow-sm"
    >
      Download / Print PDF
    </button>
  )
}
