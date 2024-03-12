import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

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
    <div className="bg-[#142143]">
      <div className="container mx-auto py-32">
        <div className="grid gap-6 grid-cols-2 text-white">
          <div>
            <img src="/contact-us-img.png" alt="image" />
          </div>

          <div className="flex justify-center">
            <div className="grid gap-8 px-5 max-w-[600px]">
              <div className="grid gap-2">
                <h2 className="text-5xl font-semibold">İletişim Formu</h2>
                <p className="text-xl">
                  Yıldızlı ile işaretlenmiş alanların doldurulması zorunludur.
                </p>
              </div>

              <form
                onSubmit={(e) => handleSubmit(e)}
                className="grid gap-4 w-full"
              >
                <div className="w-full grid text-lg">
                  <p>Konu*</p>
                  <input
                    type="text"
                    placeholder="Konu"
                    name="subject"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p>Adınız*</p>
                  <input
                    type="text"
                    placeholder="Adınız"
                    name="from_name"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p>Soyadınız*</p>
                  <input
                    type="text"
                    placeholder="Soyadınız"
                    name="surname"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p>Email*</p>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p>Telefon Numaranız*</p>
                  <input
                    type="text"
                    placeholder="Telefon Numaranız"
                    name="phone_number"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  />
                </div>
                <div className="w-full grid text-lg">
                  <p>Mesaj*</p>
                  <textarea
                    name="message"
                    placeholder="Buraya mesajınızı yazınız"
                    className="px-4 py-2 rounded-lg text-slate-600"
                  ></textarea>
                </div>
                <div className="w-full flex items-center gap-2 text-lg">
                  <input type="checkbox" name="ckBox" />
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
