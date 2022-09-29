import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saeed Khalid Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-Archivo">Abdulrahman Alblooshi</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-3 text-teal-600 font-semibold">
              Saeed Khalid
            </h2>
            <h3 className="text-2xl py-2">Developer and Designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing web development and design services. I have
              been working in the industry for 5 years. I have worked with
              companies like Google, Facebook, and Amazon.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} alt="dev ed" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="py-20">
          <div>
            <h3 className="text-3xl py-1">Services</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer nearly 10 years ago, I've done remote work for
              <span className="text-teal-500"> agencies</span>,consulted for
              <span className="text-teal-500"> startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use. I'm quietly confident, naturally curious, and
              perpetually working on improving my chops one design problem at a
              time.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited to your brand and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Creating elegant designs suited to your brand and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited to your brand and business
                needs.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer nearly 10 years ago, I've done remote work for
              <span className="text-teal-500"> agencies</span>,consulted for
              <span className="text-teal-500"> startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use. I'm quietly confident, naturally curious, and
              perpetually working on improving my chops one design problem at a
              time.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div>
            <div>
              <Image src={web1} alt="web1"  />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
