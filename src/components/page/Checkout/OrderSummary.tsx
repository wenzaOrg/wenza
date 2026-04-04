import React from 'react';
import Image from 'next/image';

export default function OrderSummary() {
    const cartItems = [
        {
            id: 1,
            title: "adipising elit, sed do eiusmod tempor",
            desc: "Lorem ipsum dollar...",
            price: "₦15,000",
            image: "/img/blog/team_presentation.png"
        },
        {
            id: 2,
            title: "sed do eiusmod tempor adipising elit",
            desc: "Lorem ipsum dollar...",
            price: "₦15,000",
            image: "/img/blog/team_presentation.png"
        }
    ];

    return (
        <div className="bg-[#f2f7fb] rounded-[24px] p-8 md:p-10 font-sans h-full flex flex-col">
            <h2 className="text-[20px] font-semibold text-[#1e293b] mb-10 tracking-tight">Summary</h2>

            {/* Selected Items */}
            <div className="flex flex-col gap-6 mb-8">
                {cartItems.map((item, idx) => (
                    <React.Fragment key={item.id}>
                        <div className="flex gap-4 items-center">
                            <div className="relative w-[110px] aspect-video rounded-xl overflow-hidden shrink-0 border border-black/5">
                                <Image src={item.image} alt="Cart item" fill sizes="110px" className="object-cover" />
                            </div>
                            <div className="flex flex-col gap-1.5 w-full">
                                <h3 className="text-[13px] font-bold text-[#334155] leading-snug line-clamp-2 pr-2">{item.title}</h3>
                                <p className="text-[11px] text-[#64748b] font-medium">{item.desc}</p>
                                <span className="text-[14px] font-black text-[#0f172a] tracking-wide mt-1">{item.price}</span>
                            </div>
                        </div>
                        {idx !== cartItems.length - 1 && <hr className="border-[#cbd5e1]/40" />}
                    </React.Fragment>
                ))}
            </div>

            <div className="mt-auto">
                <hr className="border-[#cbd5e1]/70 mb-8" />

                {/* Calculations Row */}
                <div className="flex justify-between items-center text-[14px] font-bold text-[#475569] mb-5">
                    <span>Subtotal</span>
                    <span className="text-[#1e293b]">₦30,000</span>
                </div>
                
                <div className="flex justify-between items-center text-[14px] font-bold text-[#475569] mb-5">
                    <span>Coupon Discount</span>
                    <span className="text-[#1e293b]">0 %</span>
                </div>
                
                <div className="flex justify-between items-center text-[14px] font-bold text-[#475569] mb-8">
                    <span>TAX</span>
                    <span className="text-[#1e293b]">₦1,500</span>
                </div>

                <hr className="border-[#94a3b8]/40 mb-8 border-b-2" />
                
                <div className="flex justify-between items-center text-[18px] font-black text-[#0f172a]">
                    <span>Total</span>
                    <span>₦31,500</span>
                </div>
            </div>
        </div>
    );
}
