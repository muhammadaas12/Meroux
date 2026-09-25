import React from "react";

import bgImg from "./assets/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg";

const DownloadPage = () => {
  // APK file must be located at:
  // public/downloads/meroux-work-grid.apk
  const apkUrl = "/downloads/meroux-work-grid.apk";

  return (
    <div
      className="min-h-screen bg-fixed bg-center bg-cover text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="min-h-screen bg-black/30 backdrop-blur-[1px]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

          {/* HERO */}

          <div className="text-center mb-14">
            <h1
              className="
                text-4xl
                md:text-6xl
                font-black
                tracking-[0.25em]
                text-[#F4C65B]
                drop-shadow-lg
              "
            >
              MEROUX
            </h1>

            <p
              className="
                mt-2
                text-xs
                md:text-sm
                font-bold
                tracking-[0.45em]
                text-[#C98A16]
              "
            >
              WORK GRID
            </p>

            <div className="flex justify-center mt-7">
              <div className="w-20 h-[3px] bg-[#C98A16]" />
            </div>

            <h2
              className="
                mt-10
                text-3xl
                md:text-5xl
                font-bold
                text-white
              "
            >
              Download MEROUX Work Grid
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                mx-auto
                text-base
                md:text-lg
                text-gray-200
                leading-relaxed
              "
            >
              Download the MEROUX Work Grid application directly
              to your Android device.
            </p>
          </div>


          {/* MAIN DOWNLOAD CARD */}

          <div className="max-w-3xl mx-auto">
            <div
              className="
                bg-black/50
                border
                border-[#F4C65B]/30
                rounded-3xl
                backdrop-blur-md
                p-8
                md:p-12
                shadow-2xl
                text-center
              "
            >
              <p
                className="
                  text-[#C98A16]
                  text-sm
                  font-bold
                  tracking-[0.2em]
                  uppercase
                "
              >
                Secure Download
              </p>

              <h3
                className="
                  mt-4
                  text-2xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                MEROUX Work Grid
              </h3>

              <p
                className="
                  mt-5
                  text-gray-300
                  leading-relaxed
                  max-w-xl
                  mx-auto
                "
              >
                Access the MEROUX workforce application directly
                from your Android device.
              </p>


              {/* FEATURES */}

              <div className="grid md:grid-cols-3 gap-4 mt-9">
                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    p-4
                  "
                >
                  <div className="text-[#F4C65B] text-xl mb-2">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm">
                    Direct Download
                  </p>
                </div>

                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    p-4
                  "
                >
                  <div className="text-[#F4C65B] text-xl mb-2">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm">
                    Secure Access
                  </p>
                </div>

                <div
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    p-4
                  "
                >
                  <div className="text-[#F4C65B] text-xl mb-2">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm">
                    Fast Installation
                  </p>
                </div>
              </div>


              {/* ANDROID DOWNLOAD BUTTON */}

              <div className="mt-10">
                <a
                  href={apkUrl}
                  download="Meroux-Work-Grid.apk"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    w-full
                    max-w-[340px]
                    px-8
                    py-4
                    rounded-xl
                    bg-[#C98A16]
                    hover:bg-[#AD7410]
                    text-white
                    text-lg
                    font-bold
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-[0_10px_30px_rgba(201,138,22,0.35)]
                    hover:-translate-y-1
                  "
                >
                  <span className="text-2xl">
                    ↓
                  </span>

                  Download Android App
                </a>

                <p className="mt-4 text-gray-400 text-sm">
                  MEROUX Work Grid APK
                </p>
              </div>


              {/* APPLE WARNING - ALWAYS VISIBLE */}

              <div
                className="
                  mt-10
                  max-w-xl
                  mx-auto
                  bg-[#F4C65B]/10
                  border
                  border-[#F4C65B]/40
                  rounded-2xl
                  p-7
                "
              >


                <h4
                  className="
                    text-[#F4C65B]
                    text-2xl
                    font-bold
                  "
                >
                  Apple Users
                </h4>

                <p
                  className="
                    mt-4
                    text-white
                    text-lg
                    font-semibold
                  "
                >
                  iPhone & iPad version coming soon.
                </p>

                <p
                  className="
                    mt-3
                    text-gray-300
                    text-sm
                    leading-relaxed
                  "
                >
                  The current download is for Android devices only.
                  The APK file cannot be installed on an iPhone or iPad.
                </p>

                <div
                  className="
                    mt-5
                    bg-black/30
                    border
                    border-[#F4C65B]/20
                    rounded-xl
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[#F4C65B]
                      font-bold
                    "
                  >
                    Apple version is coming soon.
                  </p>

                  <p
                    className="
                      mt-2
                      text-gray-300
                      text-sm
                    "
                  >
                    Please wait a little longer while we prepare
                    MEROUX Work Grid for iOS.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* ANDROID INSTALLATION NOTICE */}

          <div
            className="
              max-w-3xl
              mx-auto
              mt-8
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-6
              text-center
            "
          >
            <p
              className="
                text-[#F4C65B]
                font-bold
                text-sm
                uppercase
                tracking-[0.15em]
              "
            >
              Android Installation
            </p>

            <p
              className="
                mt-3
                text-gray-300
                text-sm
                leading-relaxed
                max-w-xl
                mx-auto
              "
            >
              Your Android device may ask you to allow installation
              from your browser because MEROUX Work Grid is being
              installed directly rather than through Google Play.
            </p>
          </div>


          {/* FOOTER */}

          <div className="text-center mt-14">
            <div className="flex justify-center mb-5">
              <div className="w-12 h-[2px] bg-[#C98A16]" />
            </div>

            <p
              className="
                text-[#F4C65B]
                font-bold
                tracking-[0.2em]
                text-sm
              "
            >
              MEROUX
            </p>

            <p
              className="
                text-gray-400
                text-sm
                tracking-[0.2em]
                mt-2
              "
            >
              WORK GRID
            </p>

            <p className="text-gray-500 text-xs mt-3">
              Internal MEROUX workforce application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;