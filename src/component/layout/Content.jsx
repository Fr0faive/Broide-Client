import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentSection = () => {
  return (
    <>
      <div className="bg-embroidery bg-cover h-auto w-full" id="about">
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 justify-center items-center px-14 py-28 lg:p-64 bg-white/30 backdrop-blur-sm">
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col gap-48 text-white text-justify items-center justify-between">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-5">
                  The Art of Embroidery
                </h1>
                <p className="">
                  Bordir adalah seni atau keterampilan dekoratif yang melibatkan
                  penggunaan jarum dan benang untuk membuat pola atau gambar di
                  atas suatu permukaan tekstil. Prosesnya melibatkan penusukan
                  jarum melalui bahan, seperti kain atau bahan lainnya, untuk
                  membentuk gambar atau desain. Bordir dapat dilakukan dengan
                  berbagai teknik dan gaya, termasuk menggunakan berbagai jenis
                  jahitan, benang, dan aksesoris seperti cincin bordir.
                  Tradisionalnya, bordir digunakan untuk menghias pakaian, linen
                  rumah tangga, dan kain lainnya, tetapi saat ini juga dianggap
                  sebagai bentuk seni yang independen dengan banyak seniman dan
                  perancang menciptakan karya-karya unik yang menggabungkan
                  tradisi dengan inovasi
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
                <p className="text-xs">
                  3JWR+8X Cikutra, Kota Bandung, Jawa Barat
                </p>
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
