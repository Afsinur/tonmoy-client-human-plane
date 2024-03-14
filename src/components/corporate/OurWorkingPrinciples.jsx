import React, { useEffect } from "react";
import { srcChangeFn } from "./Corporate";

function OurWorkingPrinciples() {
  const { setImageSrc, setTitle } = srcChangeFn();
  useEffect(() => {
    setImageSrc("/about-us-bg.jpg");
    setTitle("Çalışma Prensiplerimiz");
  }, []);

  return (
    <>
      <h2 className="text-white text-4xl">Çalışma Prensiplerimiz</h2>

      <p className="text-white text-xl">
        Hedeflerimiz doğrultusunda Tuipaş olarak çalışmalarımızdan doğan
        sorumluluğu, tüm çabamızla üstlenmeye ve ilerlemeye gayret gösteriyoruz.
      </p>

      <h2 className="text-white text-4xl">Disiplin</h2>

      <p className="text-white text-xl">
        Çaba ve azim ne kadar çok olursa olsun, disiplinin olmadığı bir yerde,
        bir adım ilerlemek oldukça zordur. Ülkemizi daha iyi yarınlara
        taşıyabilmek için çalışma alanlarımızı genişletiyor ve süreçleri
        yakından takip ediyoruz. Başarının disiplinden doğduğuna inananarak bu
        doğrultuda ilerlemeye gayret gösteriyoruz. Bu nedenle çalışma
        prensiplerimizden biri de; faaliyetlerimizi yasal mevzuat doğrultusunda
        hazırlanan sözleşmeler çerçevesinde yürütmektir.
      </p>

      <h2 className="text-white text-4xl">Kişisel Gelişim ve Özgüven</h2>

      <p className="text-white text-xl">
        Kişisel yeteneklerimizin en üst sınırına kadar kendimizi gelirştirmeyi
        hakkımız ve görevimiz olarak biliriz. Bu anlamda kendimize güvenmesek
        şayet içimizdeki hazineyi sergileyemeyiz ve olduğumuz yerde kalırız.
        Joseph Camphellin de dediği gibi aradığımız hazine, belki de girmekten
        korktuğumuz mağarada saklıdır. Biz Tuipaş ailesi olarak içimizdeki
        hazineyi ortaya çıkarmayı ve devletimizin hizmetine sunmayı
        hedeflemekteyiz.
      </p>

      <h2 className="text-white text-4xl">Sorumluluk Sahibi</h2>

      <p className="text-white text-xl">
        Tarihimize sahip çıkmak ve geleceğimizin temelini kurmak, her birimize
        düşen bir görev ve aynı zamanda haktır. Bu görevi üstlenmek ve
        hakkımızdan istifade etmek, bugünün topraklarını inşa eden aziz
        milletimize karşı duydugumuz ilelebet borcumuzdur. Bizi bir kılan bu
        zihniyettir.{" "}
      </p>
    </>
  );
}

export default OurWorkingPrinciples;
