export default function About() {
  const technologies = ["React", "Tailwind CSS", "Strapi CMS", "Netlify"];

  const stats = [
    { value: "4", label: "Membri" },
    { value: "III", label: "An de studiu" },
    { value: "4", label: "Tehnologii principale" },
    { value: "1", label: "Echipă" },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-blue-400">
            Despre noi
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
            Echipa 7
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-slate-300 text-lg">
            Suntem studenți în anul III la Informatică Economică,
            Facultatea de Economie și Administrare a Afacerilor,
            Universitatea de Vest din Timișoara.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Specializarea Informatică Economică
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Programul de studiu Informatică Economică combină domeniul
          tehnologiei informației cu cel economic și managerial. În cadrul
          specializării dezvoltăm competențe în programare, baze de date,
          dezvoltare web, analiză economică și sisteme informatice.
        </p>
      </section>

      <section className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Tehnologii utilizate
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-slate-950 rounded-3xl p-8 shadow-lg text-center"
              >
                <h3 className="font-bold text-xl">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Statistici proiect
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-extrabold text-blue-600">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Obiectivul proiectului
          </h2>

          <p className="text-xl leading-relaxed">
            Acest proiect a fost realizat în cadrul disciplinei Web Development
            și are scopul de a demonstra utilizarea tehnologiilor moderne React,
            Tailwind, Strapi și Netlify pentru dezvoltarea unei aplicații web
            complete.
          </p>
        </div>
      </section>
    </div>
  );
}