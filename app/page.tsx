"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const weddingDate = new Date("2027-06-20T20:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const diff =
        weddingDate.getTime() -
        now.getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(
          diff /
          (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (diff %
            (1000 *
              60 *
              60 *
              24)) /
          (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (diff %
            (1000 *
              60 *
              60)) /
          (1000 * 60)
        ),

        seconds: Math.floor(
          (diff %
            (1000 * 60)) /
          1000
        ),
      });
    };

    update();

    const timer =
      setInterval(update, 1000);

    return () =>
      clearInterval(timer);
  }, []);

  const scrollTo = (
    id: string
  ) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <main className="overflow-x-hidden">

      {/* PAGE 1 */}

      <section className="h-screen">

        <button
          onClick={() =>
            scrollTo(
              "section2"
            )
          }
          className="w-full h-screen"
        >
          <Image
            src="/cover.png"
            alt=""
            width={1080}
            height={1920}
            priority
            className="
              w-full
              h-screen
              object-cover
            "
          />
        </button>

      </section>

      {/* PAGE 2 */}

      <motion.section
        id="section2"
        className="
          relative
          h-screen
        "
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >

        <Image
          src="/invitation.png"
          alt=""
          width={1080}
          height={1920}
          className="
            w-full
            h-screen
            object-cover
          "
        />

        <button
          onClick={() =>
            scrollTo(
              "section3"
            )
          }
          className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-3xl
          text-[#b89b5e]
          animate-bounce
          "
        >
          ♡
        </button>

      </motion.section>


      {/* PAGE 3 */}

      <motion.section
        id="section3"
        className="
        relative
        h-screen
        "
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <Image
          src="/programme.png"
          alt=""
          width={1080}
          height={1920}
          className="
          w-full
          h-screen
          object-cover
          "
        />

        <button
          onClick={() =>
            scrollTo(
              "section4"
            )
          }
          className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-3xl
          text-[#b89b5e]
          animate-bounce
          "
        >
          ♡
        </button>

      </motion.section>


      {/* PAGE 4 */}

      <section
        id="section4"
        className="
        relative
        h-screen
        "
      >

        <Image
          src="/countdown-clean.png"
          alt=""
          fill
          className="
          object-cover
          "
        />


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
absolute
inset-0
flex
flex-col
items-center
text-[#b89b5e]
"
        >

          {/* TITRE */}

          <div className="mt-[220px] text-center">

            <h2
              className="
text-[26px]
tracking-[4px]
font-light
"
            >
              COMPTE À REBOURS
            </h2>

            <div
              className="
mt-15
mb-8
text-[16px]
tracking-[3px]
"
            >
              JUSQU&apos;À NOTRE GRAND JOUR
            </div>

          </div>


          {/* COMPTEUR */}

          <div
            className="
w-full
px-10
grid
grid-cols-4
text-center
mt-[30px]
"
          >

            {[
              timeLeft.days,
              timeLeft.hours,
              timeLeft.minutes,
              timeLeft.seconds,
            ].map(
              (value, index) => (

                <div key={index}>

                  <div
                    className="
text-[34px]
font-light
leading-none
"
                  >
                    {String(value).padStart(2, "0")}
                  </div>

                  <div
                    className="
mt-4
text-[10px]
tracking-[2px]
"
                  >
                    {
                      [
                        "JOURS",
                        "HEURES",
                        "MINUTES",
                        "SECONDES"
                      ][index]
                    }
                  </div>

                </div>

              )
            )}

          </div>


          {/* TEXTE BAS */}

          <div
            className="
mt-[70px]
text-center
text-[16px]
tracking-[2px]
leading-8
px-8
"
          >
            NOUS AVONS HÂTE DE PARTAGER
            <br />
            CE MOMENT AVEC VOUS
          </div>

        </motion.div>

        <button
          onClick={() =>
            scrollTo("section5")
          }
          className="
absolute
bottom-8
left-1/2
-translate-x-1/2
text-3xl
text-[#b89b5e]
animate-bounce
"
        >
          ♡
        </button>

      </section>

      {/* PAGE 5 */}

      <section
        id="section5"
        className="
relative
h-screen
"
      >

        <Image
          src="/location.png"
          alt=""
          fill
          className="object-cover"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
absolute
inset-0
flex
flex-col
items-center
"
        >

          <a
            href="https://maps.google.com/?q=Haifa+Palace+Mornag"
            target="_blank"
            className="
absolute
bottom-[205px]
w-[220px]
h-[60px]
rounded-[20px]
"
          >
          </a>

          <button
            onClick={() =>
              scrollTo("section6")
            }
            className="
absolute
bottom-8
left-1/2
-translate-x-1/2
text-3xl
text-[#b89b5e]
animate-bounce
"
          >
            ♡
          </button>

        </motion.div>

      </section>

    </main>
  );
}