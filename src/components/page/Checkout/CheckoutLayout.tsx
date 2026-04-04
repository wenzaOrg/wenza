import React from 'react';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import CheckoutDealsGrid from './CheckoutDealsGrid';

export default function CheckoutLayout() {
    return (
        <main className="w-full bg-[#fafafb] font-sans -mt-4 pb-0 pt-[80px]">
            {/* Split layout */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="flex-1 max-w-[700px]">
                    <PaymentForm />
                </div>
                <div className="w-full lg:w-[460px] shrink-0">
                    <OrderSummary />
                </div>
            </section>
            
            {/* Deals Grid */}
            <div className="mt-10">
                <CheckoutDealsGrid />
            </div>
        </main>
    );
}
