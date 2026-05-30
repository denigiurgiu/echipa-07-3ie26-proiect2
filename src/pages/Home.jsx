import { Link } from "react-router-dom";

export default function Home() {
  const members = [
    {
      name: "Giurgiu Denisa",
      role: "Studentă IE & Învățătoare",
      text: "Interesată de educație, tehnologie și organizare.",
    },
    {
      name: "Romaniuc Robert",
      role: "Student IE & Marketing",
      text: "Pasionat de comunicare, promovare și marketing digital.",
    },
    {
      name: "Berzescu Anamaria",
      role: "Studentă IE & Corporate",
      text: "Orientată spre business, procese și lucru în echipă.",
    },
    {
      name: "Alexandrescu Beatrice",
      role: "Studentă IE",
      text: "Axată pe studiu, dezvoltare academică și tehnologie.",
    },
  ];

  const articles = [
    "React pentru interfețe moderne",
    "Tailwind CSS pentru design responsive",
    "Strapi ca Headless CMS",
  ];

  return (
    <div>
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-blue-200 mb-4">
              Proiect Web Development
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Echipa 7 <br /> FEAA Timișoara
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Suntem patru studenți în anul III la Informatică Economică,
              iar acest site prezintă parcursul nostru, competențele,
              proiectele și modul în care folosim React, Tailwind, Strapi și Netlify.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/members"
                className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold"
              >
                Vezi membrii
              </Link>

              <Link
                to="/projects"
                className="border border-white px-6 py-3 rounded-2xl font-semibold"
              >
                Vezi proiectele
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Tehnologii utilizate</h2>

            <div className="grid grid-cols-2 gap-4">
              {["React", "Tailwind", "Strapi", "Netlify"].map((item) => (
                <div
                  key={item}
                  className="bg-white/20 rounded-2xl p-6 text-center font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-4">Membrii echipei</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10">
          Fiecare membru aduce o perspectivă diferită, din educație,
          marketing, mediul corporate și studiu academic.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800"
            >
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-5">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-600 font-medium mt-1">{member.role}</p>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                {member.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Articole și categorii</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article}
                className="bg-white dark:bg-slate-950 rounded-3xl p-8 shadow-lg"
              >
                <p className="text-sm text-blue-600 font-bold mb-3">
                  Web Development
                </p>
                <h3 className="text-2xl font-bold mb-4">{article}</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Articol demonstrativ care va putea fi ulterior conectat la Strapi CMS.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}