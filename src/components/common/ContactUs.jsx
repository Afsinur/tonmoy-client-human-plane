import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";

function ContactUs() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v5m0vpe",
        "template_5lsg87e",
        e.target,
        "QTXnQHa0lD8UZ3-8a"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-2 gap-8 font-semibold">
          <div className="flex flex-col gap-8">
            <h2 className="capitalize text-4xl text-slate-500">
              this is our location
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14569.760684023055!2d90.45909155!3d24.086011399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710416876439!5m2!1sen!2sbd"
              style={{
                border: 0,
                width: "100%",
                height: "350px",
                borderRadius: "1rem",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <div>
              <div className="flex items-center gap-2 text-slate-400">
                <FaLocationDot />

                <p>
                  Mustafa Kemal Mahallesi Şht. Öğrt. Şenay Aybüke Yalçın Cad.
                  No:39 P.K. : 06510 Çankaya/Ankara
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid gap-8 bg-gray-100 px-16 py-8 rounded-xl">
              <div className="grid gap-2">
                <h2 className="text-4xl font-semibold text-slate-500">
                  İletişim Formu
                </h2>
                <p className="text-lg text-slate-400">
                  Yıldızlı ile işaretlenmiş alanların doldurulması zorunludur.
                </p>
              </div>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className="grid gap-2 w-full"
              >
                <div className="grid gap-2 grid-cols-2">
                  <div className="w-full grid text-lg">
                    <p className="text-slate-500 text-sm">Konu*</p>
                    <input
                      type="text"
                      placeholder="Konu"
                      name="subject"
                      className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                    />
                  </div>
                  <div className="w-full grid text-lg">
                    <p className="text-slate-500 text-sm">Adınız*</p>
                    <input
                      type="text"
                      placeholder="Adınız"
                      name="from_name"
                      className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                    />
                  </div>
                </div>

                <div className="w-full grid text-lg">
                  <p className="text-slate-500 text-sm">Soyadınız*</p>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    name="surname"
                    className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p className="text-slate-500 text-sm">Email*</p>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p className="text-slate-500 text-sm">Telefon Numaranız*</p>
                  <input
                    type="text"
                    placeholder="Telefon Numaranız"
                    name="phone_number"
                    className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p className="text-slate-500 text-sm">Mesaj*</p>
                  <textarea
                    name="message"
                    placeholder="Buraya mesajınızı yazınız"
                    className="px-4 py-2 rounded-lg text-slate-600 border w-full"
                  ></textarea>
                </div>
                <div className="w-full flex items-center gap-2 text-lg">
                  <input type="checkbox" name="ckBox" />
                  <p className="text-slate-500 text-sm">
                    <a href="#" className="underline">
                      Kişisel Verilerin İşlenmesı Aydınlatma Metni´ni
                    </a>{" "}
                    {` `}
                    okudum ve kabul ediyorum.
                  </p>
                </div>
                <div className="w-full grid place-content-center text-lg">
                  <ReCAPTCHA
                    //6LeqD5YpAAAAAACGKKFNMb4NPUKrFkjqJ8QJx7-L
                    sitekey="6Lc2eZYpAAAAAARaaTLB0e2uxUmcSlBQMx13X3Dg"
                    onChange={onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="uppercase p-4 rounded-lg bg-white text-slate-600 font-semibold cursor-pointer hover:bg-slate-600 hover:text-white transition-colors"
                  value="send"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
