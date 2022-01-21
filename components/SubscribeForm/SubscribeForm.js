import React from 'react';

const SubscribeForm = () => {
  return (
    <section className="subscribe bg-blue-1 py-20 lg:py-24">
        <div className="container text-center text-white">
          <h4 className="mb-5 leading-115 text-[42px] lg:text-[60px] font-display">Stay in the <em>know</em></h4>
          <form className="inline-block max-w-[615px] w-full">
            <div className="border-b border-white flex space-x-5 justify-between">
              <input className="bg-transparent py-4 flex-1 outline-none" type="email" placeholder="Enter your email"/>
              <button className="uppercase text-[16px]" type="submit">Send</button>
            </div>
          </form>
        </div>

      </section>
    );
};

export default SubscribeForm;
