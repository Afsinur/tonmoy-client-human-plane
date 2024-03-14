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

              <h2 className="text-xl font-semibold">
                Areas of Application and Technical Specifications
              </h2>

              <p className="text-lg text-slate-400">
                Due to increasing natural disasters, there is a need for
                innovative and rapid-response solutions. CANKUŞU, incorporating
                advanced engineering with state-of-the-art propulsion systems,
                aims to be a versatile and efficient mode of transportation
                specially designed for first responders and relief workers.
                Natural disasters, such as earthquakes, often lead to restricted
                access and impassable terrain, hindering the timely deployment
                of emergency personnel and aid to affected areas. CANKUŞU aims
                to overcome these challenges by providing swift transportation.
                Specifically, CANKUŞU has the capability to carry an additional
                victim in emergencies, thereby expanding its utility and
                potential impact on disaster relief efforts.
              </p>

              <p className="text-lg text-slate-400">
                To ensure user safety during operation, CANKUŞU combines safety
                features such as emergency parachutes, automatic stabilization
                systems, and collision prevention mechanisms. Additionally,
                there is fingerprint scanning for the ignition switch to ensure
                safe and authorized operation. The fingerprint scanner is
                integrated into the ignition switch mechanism. Before starting
                CANKUŞU, the user needs to place their finger on the scanner,
                which captures and analyzes their unique fingerprint patterns.
                These biometric data are then compared with the database of
                pre-registered authorized users. When the fingerprint matches an
                authorized user's profile, the ignition switch is activated,
                allowing the person to start CANKUŞU. This innovative feature
                enhances security and prevents unauthorized use by leveraging
                biometric technology to ensure that only authorized individuals
                can operate CANKUŞU. Thus, CANKUŞU provides personalized access
                control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
