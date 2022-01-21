import Cta from "./Cta";

const Ctas = () => {
  return (
    <section>
        <div className="lg:flex">
        <Cta 
            copy="Looking to host a team away day? Somewhere for a workshop? We’ve got lots of spaces for you across our hotel."
            title="Need Space"
            img="/image/del/cta/cta1.jpg"
            btnTitle="Enquire" btnUrl="#" />
        <Cta 
        bgClass="bg-blue-1"
        textColor="text-white"
        copy="Celebrate occasions big and small, with our private spaces. You just bring your glam-rags, and we’ll sort the rest."
        title="Let’s Partaay"
        img="/image/del/cta/cta2.jpg"
        btnTitle="Enquire" btnUrl="#" />
        </div>
    </section>
  );
};

export default Ctas;
