export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage:
          "url(https://cdn-site.gojek.com/uploads/hero_b18c33ed07.jpg)",
      }}
    >
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-5 sm:px-10 lg:px-40 text-center lg:text-left">
        <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
          3 negara. 20+ layanan. 1 Platform <br /> on-demand terkemuka.
        </h1>
      </div>
    </section>
  );
}
