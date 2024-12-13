import imgscale1 from "@/assets/scale-1.png";
import imgscale2 from "@/assets/scale-2.png";
import imgscale3 from "@/assets/scale-3.png";
import imgscale4 from "@/assets/scale-4.png";

const scale = [
  {
    img: imgscale1.src,
    title: "190 Juta+",
    description: "jumlah install aplikasi kami.",
    bgColor: "bg-[rgba(124,204,108,1)]",
    shadowColor: "shadow-[#b2e5b8]",
  },
  {
    img: imgscale2.src,
    title: "2 Juta+",
    description: "mitra Driver yang sudah bergabung dengan kami",
    bgColor: "bg-[rgba(212,139,200,1)]",
    shadowColor: "shadow-[#d0b4d4]",
  },
  {
    img: imgscale3.src,
    title: "900.000+",
    description: "jumlah mitra GoFood",
    bgColor: "bg-[rgba(255,174,98,1)]",
    shadowColor: "shadow-[#f8d6ba]",
  },
  {
    img: imgscale4.src,
    title: "2.448x",
    description:
      "lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020",
    bgColor: "bg-[rgba(74,201,227,1)]",
    shadowColor: "shadow-[#b2e6f2]",
  },
];

export default function Scale() {
  return (
    <div>
      <section>
        <div className="pt-[70px] pb-[20px] opacity-[1] scroll-m-[40px] m-[auto] flex flex-col justify-center items-center text-center">
          <h1 className="text-black tracking-normal font-[700] text-[36px] sm:text-[48px] mb-3">
            Skala Kami
          </h1>
          <a
            href="#"
            className="text-white leading-6 text-[14px] sm:text-[16px] bg-[rgba(0,136,13,1)] rounded-[96px] flex justify-center items-center w-[100px] h-[40px] sm:w-[120px] sm:h-[44px] decoration-inherit font-bold"
          >
            Gabung
          </a>
        </div>
      </section>

      <section>
        <div className="py-[60px] sm:py-[120px] bg-[rgba(255,255,255,1)]">
          <div className="w-[90%] sm:w-[80%] m-auto gap-5 sm:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {scale.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} w-full h-auto rounded-[40px] flex flex-col items-center justify-center shadow-2xl ${item.shadowColor}`}
              >
                <img
                  src={item.img}
                  alt=""
                  className="translate-y-[-60px] sm:translate-y-[-110px] h-auto w-[80%] sm:w-full border-none max-w-full mb-[-40px] sm:mb-[-60px]"
                />
                <div className="mx-[10px] sm:mx-[20px] text-center sm:text-left pt-0">
                  <h3 className="text-[28px] sm:text-[36px] leading-9 font-[700] mb-[10px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[16px] mt-3 mb-10 sm:mb-20">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
