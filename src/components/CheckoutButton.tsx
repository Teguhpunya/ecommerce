'use client'

import React from 'react'

type Props = {
  total: number
}

export default function CheckoutButton({ total }: Props) {
  const handlePrint = () => {
    const content = `Total amount to pay: Rp. ${total}`;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
    }
  }
  return (
    <button onClick={handlePrint}
      className="flex bg-white/50 text-black items-center justify-center space-x-2 rounded-2xl px-4 py-2
    hover:border hover:cursor-pointer"
    >Checkout</button>

  )
}