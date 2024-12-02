import imgscale1 from "@/assets/scale-1.png";
import imgscale2 from "@/assets/scale-2.png";
import imgscale3 from "@/assets/scale-3.png";
import imgscale4 from "@/assets/scale-4.png";

const scale = [
  {
    img: imgscale1.src,
    title: "190 Juta+",
    description: "jumlah install aplikasi kami.",
  },
  {
    img: imgscale2.src,
    title: "2 Juta+",
    description: "mitra Driver yang sudah bergabung dengan kami",
  },
  {
    img: imgscale3.src,
    title: "900.000+",
    description: "jumlah mitra GoFood",
  },
  {
    img: imgscale4.src,
    title: "2.448x",
    description:
      "lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020",
  },
];

export default function Scale() {
  return (
    <div>
      <section>
        <div className="pt-[70px] pb-[20px] opacity-[1] scroll-m-[40px] m-[auto] flex flex-col justify-center items-center text-center">
          <h1 className="text-black tracking-normal font-[700] text-[48px] mb-3">
            Skala Kami
          </h1>
          <a
            href="#"
            className="text-white leading-6 text-[16px] bg-[rgba(0,136,13,1)] rounded-[96px] flex justify-center items-center w-[120px] h-[44px] decoration-inherit font-bold"
          >
            Gabung
          </a>
        </div>
      </section>

      <section>
        <div className="py-[120px] bg-[rgba(255,255,255,1)] ">
          <div className="w-[80%] m-auto gap-10 grid-cols-4 grid">
            <div className="bg-[rgba(124,204,108,1)] w-full h-auto rounded-[40px] flex flex-col items-center justify-center shadow-2xl shadow-[#b2e5b8]">
              <img
                src={imgscale1.src}
                alt=""
                className="translate-y-[-110px] h-auto w-full border-none max-w-full mr-10 mb-[-60px]"
              />
              <div className="mx-[20px] text-left pt-0">
                <h3 className="text-[36px] leading-9 font-[700] mb-[10px]">
                  190 Juta+
                </h3>
                <p className="mt-3 mb-20 ">jumlah install aplikasi kami.</p>
              </div>
            </div>
            <div className="bg-[rgba(212,139,200,1)] w-full h-auto rounded-[40px] flex flex-col items-center justify-center shadow-2xl shadow-[#d0b4d4]">
              <img
                src={imgscale2.src}
                alt=""
                className="translate-y-[-110px] h-auto w-full border-none max-w-full mr-10 mb-[-60px]"
              />
              <div className="mx-[20px] text-left pt-0">
                <h3 className="text-[36px] leading-9 font-[700] mb-[10px]">
                  2 Juta+
                </h3>
                <p className="mt-3 mb-20 ">
                  mitra Driver yang sudah bergabung dengan kami
                </p>
              </div>
            </div>
            <div className="bg-[rgba(255,174,98,1)] w-full h-auto rounded-[40px] flex flex-col items-center justify-center shadow-2xl shadow-[#d0b4d4]">
              <img
                src={imgscale3.src}
                alt=""
                className="translate-y-[-110px] h-auto w-full border-none max-w-full mr-10 mb-[-60px]"
              />
              <div className="mx-[20px] text-left pt-0">
                <h3 className="text-[36px] leading-9 font-[700] mb-[10px]">
                  900.000+
                </h3>
                <p className="mt-3 mb-20 ">jumlah mitra GoFood</p>
              </div>
            </div>
            <div className="bg-[rgba(74,201,227,1)] w-full h-auto rounded-[40px] flex flex-col items-center justify-center shadow-2xl shadow-[#b2e6f2]">
              <img
                src={imgscale4.src}
                alt=""
                className="translate-y-[-110px] h-auto w-full border-none max-w-full mr-10 mb-[-60px]"
              />
              <div className="mx-[20px] text-left pt-0">
                <h3 className="text-[36px] leading-9 font-[700] mb-[10px]">
                  2.448x
                </h3>
                <p className="mt-3 mb-20 ">
                  lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai
                  2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
