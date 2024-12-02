import Achievment from "@/components/achievment";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Scale from "@/components/scale";

export default function Home() {
  return (
    <div className="h-full">
      <section className="">
        <Navbar />
      </section>

      <section className="block">
        <Hero />
      </section>

      <section>
        <Achievment />
      </section>

      <section>
        <Scale />
      </section>
    </div>
  );
}
