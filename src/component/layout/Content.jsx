import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentSection = () => {
  return (
    <>
      <div className="bg-embroidery bg-cover h-auto w-full" id="about">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 justify-center items-center px-14 py-28 lg:p-64 bg-white/30 backdrop-blur-sm">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-48 text-black text-justify items-center justify-between">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-5 bg-gradient-to-br from-blue-400 to-blue-700 text-transparent bg-clip-text">
                  The Art of Embroidery
                </h1>

                <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-7">
                  <p className="">
                    Bordir adalah seni atau keterampilan dekoratif yang
                    melibatkan penggunaan jarum dan benang untuk membuat pola
                    atau gambar di atas suatu permukaan tekstil. Prosesnya
                    melibatkan penusukan jarum melalui bahan, seperti kain atau
                    bahan lainnya, untuk membentuk gambar atau desain. Bordir
                    dapat dilakukan dengan berbagai teknik dan gaya, termasuk
                    menggunakan berbagai jenis jahitan, benang, dan aksesoris
                    seperti cincin bordir. Tradisionalnya, bordir digunakan
                    untuk menghias pakaian, linen rumah tangga, dan kain
                    lainnya, tetapi saat ini juga dianggap sebagai bentuk seni
                    yang independen dengan banyak seniman dan perancang
                    menciptakan karya-karya unik yang menggabungkan tradisi
                    dengan inovasi
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                {/* <FontAwesomeIcon icon={faLocationDot} size="xl" />
                <p className="text-xs">
                  3JWR+8X Cikutra, Kota Bandung, Jawa Barat
                </p> */}
                <div className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-7">
                  <div className="flex flex-row justify-center gap-3 items-center mb-5">
                    <h1 className="text-3xl font-bold text-[#2F318B]">Find Us Here!</h1>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.886388182852!2d107.6424375!3d-6.904187500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7b92b82f6a7%3A0x49968edd83f92c86!2s3JWR%2B8X%2C%20Cikutra%2C%20Kec.%20Cibeunying%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1733463290476!5m2!1sen!2sid"
                    width="1000"
                    height="400"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-1/3">
            <Logo size="h-30 lg:h-auto" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContentSection;
