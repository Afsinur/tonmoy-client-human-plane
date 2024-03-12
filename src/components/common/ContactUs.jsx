import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className="bg-[#142143]">
      <div className="container mx-auto py-32">
        <div className="grid gap-6 grid-cols-2 text-white">
          <div>
            <img src="/contact-us-img.png" alt="image" />
          </div>

          <div className="grid gap-8 px-5">
            <div className="grid gap-2">
              <h2 className="text-5xl font-semibold">İletişim Formu</h2>
              <p className="text-xl">
                Yıldızlı ile işaretlenmiş alanların doldurulması zorunludur.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid gap-4 w-full"
            >
              <div className="w-full grid text-lg">
                <p>Konu*</p>
                <input
                  type="text"
                  placeholder="Konu"
                  className="px-4 py-2 rounded-lg text-slate-600"
                />
              </div>
              <div className="w-full grid text-lg">
                <p>Adınız*</p>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="px-4 py-2 rounded-lg text-slate-600"
                />
              </div>
              <div className="w-full grid text-lg">
                <p>Soyadınız*</p>
                <input
                  type="text"
                  placeholder="Soyadınız"
                  className="px-4 py-2 rounded-lg text-slate-600"
                />
              </div>
              <div className="w-full grid text-lg">
                <p>Email*</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2 rounded-lg text-slate-600"
                />
              </div>
              <div className="w-full grid text-lg">
                <p>Mesaj*</p>
                <textarea
                  placeholder="Buraya mesajınızı yazınız"
                  className="px-4 py-2 rounded-lg text-slate-600"
                ></textarea>
              </div>
              <div className="w-full flex items-center gap-2 text-lg">
                <input type="checkbox" />
                <p>
                  <a href="#" className="underline">
                    Kişisel Verilerin İşlenmesı Aydınlatma Metni´ni
                  </a>{" "}
                  {` `}
                  okudum ve kabul ediyorum.
                </p>
              </div>
              <div className="w-full grid place-content-center text-lg">
                <ReCAPTCHA
                  sitekey="6Lf2BJYpAAAAALKamJh35QzcXrbwIAbz3DivFd-r"
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
  );
}

export default ContactUs;
