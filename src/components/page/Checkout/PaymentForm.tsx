import React from 'react';
import { FaCcPaypal, FaCcAmex, FaCcVisa, FaCcMastercard } from 'react-icons/fa';

export default function PaymentForm() {
    return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8 md:p-12 border border-[#f1f5f9]">
            <h1 className="text-3xl font-extrabold text-[#1e293b] mb-10 font-sans tracking-tight">Checkout</h1>
            
            {/* Cart Type Selector */}
            <div className="mb-10">
                <label className="text-[13px] font-bold text-[#64748b] mb-4 block">Cart Type</label>
                <div className="flex gap-4 items-center">
                    <button className="flex-1 h-16 bg-white rounded-xl border border-[#e2e8f0] hover:border-wenza-primary flex justify-center items-center cursor-pointer transition-colors shadow-sm focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary outline-none">
                        <FaCcPaypal className="text-[#00457C] text-[42px]" />
                    </button>
                    <button className="flex-1 h-16 bg-white rounded-xl border border-[#e2e8f0] hover:border-wenza-primary flex justify-center items-center cursor-pointer transition-colors shadow-sm focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary outline-none">
                        <FaCcAmex className="text-[#016FD0] text-[42px]" />
                    </button>
                    <button className="flex-1 h-16 bg-white rounded-xl border border-[#e2e8f0] hover:border-wenza-primary flex justify-center items-center cursor-pointer transition-colors shadow-sm focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary outline-none">
                        <FaCcVisa className="text-[#1434CB] text-[42px]" />
                    </button>
                    <button className="flex-1 h-16 bg-white rounded-xl border border-[#e2e8f0] hover:border-wenza-primary flex justify-center items-center cursor-pointer transition-colors shadow-sm focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary outline-none">
                        <FaCcMastercard className="text-[#EB001B] text-[42px]" />
                    </button>
                </div>
            </div>

            {/* Form Inputs */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="text-[13px] font-bold text-[#334155] mb-2.5 block">Name on Card</label>
                    <input 
                        type="text" 
                        placeholder="Enter name on Card" 
                        className="w-full h-[52px] rounded-[10px] border border-[#cbd5e1] px-4 placeholder:text-[#94a3b8] focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-all text-[#1e293b] font-medium" 
                    />
                </div>
                
                <div>
                    <label className="text-[13px] font-bold text-[#334155] mb-2.5 block">Card Number</label>
                    <input 
                        type="text" 
                        placeholder="Enter Card Number" 
                        className="w-full h-[52px] rounded-[10px] border border-[#cbd5e1] px-4 placeholder:text-[#94a3b8] focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-all text-[#1e293b] font-medium" 
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                        <label className="text-[13px] font-bold text-[#334155] mb-2.5 block">Expiration Date ( MM/YY )</label>
                        <input 
                            type="text" 
                            placeholder="Enter Expiration Date" 
                            className="w-full h-[52px] rounded-[10px] border border-[#cbd5e1] px-4 placeholder:text-[#94a3b8] focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-all text-[#1e293b] font-medium" 
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-[13px] font-bold text-[#334155] mb-2.5 block">CVC</label>
                        <input 
                            type="text" 
                            placeholder="Enter CVC" 
                            className="w-full h-[52px] rounded-[10px] border border-[#cbd5e1] px-4 placeholder:text-[#94a3b8] focus:outline-none focus:border-wenza-primary focus:ring-1 focus:ring-wenza-primary transition-all text-[#1e293b] font-medium" 
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-4 mb-6">
                    <input type="checkbox" id="save-info" className="w-4 h-4 rounded text-wenza-primary focus:ring-wenza-primary border-[#cbd5e1]" />
                    <label htmlFor="save-info" className="text-[13px] text-[#64748b] font-medium cursor-pointer">
                        Save my information for faster checkout
                    </label>
                </div>

                <button type="submit" className="w-full h-[56px] bg-wenza-primary hover:brightness-110 text-white font-bold rounded-[10px] transition-all shadow-md text-[17px]">
                    Confirm Payment
                </button>
            </form>
        </div>
    );
}
