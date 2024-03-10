import React from "react";
import { MdDone } from "react-icons/md";

function DetailsCard() {
  const cardInfo = [
    {
      title: "Entegre Güvenlik artırıcı Unsurlar",
      detailList: [
        "Haberleşme Sistemleri",
        "Hava Durumu İzleme ve Sınırlamalar",
        "Çarpışma Önleme Sensörleri",
        "Parmak izi taraması",
        "Hız - Dayanıklılık göstergesi ve Yakıt göstergesi",
        "LED",
        "Paraşüt",
        "Otomatik Stabilizasyon Sistemi",
      ],
    },
    {
      title: "Tasarım özellikleri",
      detailList: [
        "Uçuş süresi: 28 dk",
        "Acil durumda	: 1 yaralı taşıma kapasitesi",
        "Maksimum Yükseklik: 3000 m",
        "Pitot tüpü",
        "Ayak standı",
        "Kontrol yüzeyler",
        "1) Aileron",
        "2) Flaplar",
        "3) Dümen",
        "4) Asansörler",
      ],
    },
  ];

  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-8">
          {cardInfo &&
            cardInfo.map((obj, i) => (
              <div key={i}>
                <Card obj={obj} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function Card({ obj }) {
  return (
    <div className="px-10 py-6 rounded-3xl text-white drop-shadow-md font-semibold text-2xl bg-[#283c6bbf] h-full flex flex-col gap-6">
      <div>
        <h2>{obj.title}</h2>
      </div>

      <div>
        <ul className="text-slate-300 text-base grid gap-3 drop-shadow-md">
          {obj.detailList.map((itm, i) => (
            <li key={i} className="flex gap-4 items-center">
              <div className="self-start w-5 h-5 p-4 rounded-full bg-[#142143] grid place-content-center">
                <MdDone className="text-white" />
              </div>
              {itm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsCard;
