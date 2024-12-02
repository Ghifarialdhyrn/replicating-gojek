import imgachievment1 from "@/assets/achievement-1.png";
import imgachievment2 from "@/assets/achievement-2.png";
import imgachievment3 from "@/assets/achievement-3.png";
import imgachievment4 from "@/assets/achievement-4.png";

const achievements = [
  {
    img: imgachievment1.src,
    title: "Fortune Top 20",
    description:
      "Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune",
  },
  {
    img: imgachievment2.src,
    title: "Berkontribusi lebih dari $7.1 triliun",
    description: "Penggerak roda perekonomian Indonesia",
  },
  {
    img: imgachievment3.src,
    title: "Jaket hijau, pergerakan juga hijau",
    description:
      "Gojek mengurangi pemakaian plastik ingga 11.3 ton sejak Oktober 2020",
  },
  {
    img: imgachievment4.src,
    title: "Tumbuh 80% sejak pandemi",
    description:
      "Mitra food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.",
  },
];

export default function Achievment() {
  return (
    <div>
      <section>
        <div className="pt-[40px] pb-[20px] opacity-[1] bg-[rgba(16,24,32,1)] scroll-m-[40px] m-[auto] flex flex-col justify-center items-center text-center">
          <h1 className="text-white tracking-normal font-[700] text-[48px] mb-3">
            Kenalin, Gojek. Si pembawa perubahan
          </h1>
          <a
            href="#"
            className="text-white leading-6 text-[16px] bg-[rgba(0,136,13,1)] rounded-[96px] flex justify-center items-center w-[120px] h-[44px] decoration-inherit font-bold"
          >
            Gabung
          </a>
        </div>
      </section>

      <section className="relative">
        <div className="absolute bg-[rgba(16,24,32,1)] items-end w-full h-[166px] flex top-0">
          <div className="bg-[rgba(255,255,255,1)] rounded-t-[90px] w-full h-[100px]"></div>
        </div>
        <div className="container mx-auto relative overflow-hidden list-none px-5 z-0 flex flex-wrap justify-center gap-32">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center items-center justify-center flex-col flex w-[250px]"
            >
              <div className="relative bg-transparent items-center justify-center flex">
                <img
                  src={achievement.img}
                  alt={achievement.title}
                  className="w-[150px] max-w-[200px]"
                />
              </div>
              <h3 className="text-[23px] font-bold mb-3 text-black">
                {achievement.title}
              </h3>
              <p className="text-[16px] text-black">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
