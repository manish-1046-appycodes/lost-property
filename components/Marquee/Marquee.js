import Script from "next/script";

const Marquee = () => {
  return (
    <section className="marquee overflow-hidden relative font-display text-[50px] lg:text-[140px] leading-none lg:leading-none">
        <div className="marquee__inner w-fit flex flex-row" aria-hidden="true">
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
            <div className="marquee__part  shrink-0">
            craft.  <em>entertainment</em>.  art. events.  music.
            </div>
        </div>
        <Script id="Marquee" strategy="afterInteractive" src="/js/marquee.js"/>
    </section>)
}

export default Marquee;
