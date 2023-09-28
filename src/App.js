import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cevap, setCevap] = useState(null);

  const mesajlar = [
    "ATAKAŞ HATAYSPOR",
    "FENERBAHÇE A.Ş.",
    "İSTANBULSPOR A.Ş.",
    "MONDİHOME KAYSERİSPOR",
    "TRABZONSPOR A.Ş.",
    "BEŞİKTAŞ A.Ş.",
    "GALATASARAY A.Ş.",
    "KASIMPAŞA A.Ş.",
    "PENDİKSPOR FUTBOL A.Ş.",
    "TÜMOSAN KONYASPOR",
    "BITEXEN ANTALYASPOR",
    "GAZİANTEP FUTBOL KULÜBÜ A.Ş.",
    "MKE ANKARAGÜCÜ",
    "RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ",
    "VAVACARS FATİH KARAGÜMRÜK",
    "YUKATEL ADANA DEMİRSPOR A.Ş.",
    "YILPORT SAMSUNSPOR",
    "CORENDON ALANYASPOR",
    "ÇAYKUR RİZESPOR A.Ş.",
    "EMS YAPI SİVASSPOR"
  ];

  function cevapVer() {
    const sayi = Math.floor(Math.random() * 20);
    setCevap(mesajlar[sayi]);
  }

  return (
    <div className="App">
      <h1 contentEditable>Bu Sene Kim Şampiyon OLUR?</h1>
      <div className="buyuk-top" onClick={cevapVer}>
        <div className="kucuk-top">
          {cevap ? <div>{cevap}</div> : <div className="sekiz">Touch</div>}
        </div>
      </div>
    </div>
  );
}
