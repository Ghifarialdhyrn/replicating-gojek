import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="w-full h-[auto]">
      <nav className="fixed w-full h-[90px] bg-[#101820] flex py-[5px] px-[10px] justify-between z-[1]">
        <a href="">
          <img
            src={logo.src}
            alt=""
            width={100}
            className="max-w-[110px] h-[auto] ml-[40px] mt-[25px]"
          />
        </a>

        <span className="flex flex-row items-center gap-[50px] text-[17px] font-[600] mr-[40px]">
          <a href="#" className="text-white cursor-pointer hover:underline">
            Beranda
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Gabung Jadi Mitra
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Go Corp
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Karir
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Perusahaan
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Produk
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Blog
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            Bantuan
          </a>
          <a href="#" className="text-white cursor-pointer hover:underline">
            ID
          </a>
        </span>
      </nav>
    </div>
  );
}
