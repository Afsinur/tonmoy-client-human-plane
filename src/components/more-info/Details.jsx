import React from "react";

function Details() {
  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-20">
        <div className="grid gap-20">
          <h2 className="text-[#1e73be] text-8xl font-bold">
            Kullanim <br /> alanlari
          </h2>

          <div className="flex pl-48 relative">
            <div className="grid gap-2 text-white general-info grid gap-8">
              <h2 className="text-xl font-semibold">
                Kullanım Alanları ve Teknik Özellikleri
              </h2>

              <p className="text-lg text-slate-400">
                Artan doğal afetler nedeniyle, yenilikçi ve hızlı tepki
                gerektiren çözümlere ihtiyaç duymaktayız. Gelişmiş mühendislikle
                son teknoloji itiş sistemlerini içeren CANKUŞU ilk müdahale
                ekipleri ve yardım çalışanları için özel olarak tasarlanmış çok
                yönlü ve verimli bir ulaşım aracı olmayı amaçlamaktadır.
                Depremler gibi doğal afetler genellikle sınırlı erişime ve
                geçilmez arazilere neden olur, bu da acil personelin ve yardımın
                etkilenen bölgelere zamanında ulaştırılmasını engeller. CANKUŞU
                bu zorlukları aşmayı amaçlayarak hızlı bir ulaşım sağlamaktadır.
                CANKUŞU özellikle acil durumlarda ek bir mağduru taşıma
                yeteneğine sahiptir, böylelikle kullanışlılığını ve afet yardım
                çabaları üzerindeki potansiyel etkisini genişletir.
              </p>
              <p className="text-lg text-slate-400">
                CANKUŞU operasyon sırasında kullanıcının güvenliğini sağlamak
                için acil durum paraşütleri, otomatik stabilizasyon sistemleri
                ve çarpışma önleme mekanizmaları gibi güvenlik özelliklerini
                birleştirir. Ayrıca, güvenli ve belirlenmiş bir çalışma için
                kontak anahtarı için parmak izi taraması da bulunmaktadır.
                Parmak izi tarayıcısının kontak anahtarı mekanizmasına entegre
                edilmesiyle çalışır. CANKUŞU´nu başlatmadan önce kullanıcının
                benzersiz parmak izi desenlerini yakalayan ve analiz eden
                tarayıcıya parmağını yerleştirmesi gerekiyor. Bu biyometrik
                veriler daha sonra önceden kayıtlı yetkili kullanıcılar veri
                tabanıyla karşılaştırılır. Parmak izi yetkili bir kullanıcının
                profiliyle eşleştiğinde kontak anahtarı etkinleştirilerek
                kişinin CANKUŞU´nu başlatmasına olanak sağlanır. Bu yenilikçi
                özellik CANKUŞU´nu yalnızca yetkili kişilerin çalıştırabilmesini
                sağlamak için biyometrik teknolojiden yararlanarakö güvenliği
                artırıyor ve yetkisiz kullanımı önlüyor. CANKUŞU bu sayede
                kişiselleştirilmiş erişim kontrolünü sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
