export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Contact
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Ne poți contacta pentru întrebări, colaborări sau feedback.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Formular */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">
              Trimite-ne un mesaj
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nume"
                className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
              />

              <input
                type="text"
                placeholder="Subiect"
                className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
              />

              <textarea
                rows="6"
                placeholder="Mesaj"
                className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700"
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Trimite mesaj
              </button>
            </form>
          </div>

          {/* Informații */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Echipa 7
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                Studenți în anul III la Informatică Economică,
                Facultatea de Economie și Administrare a Afacerilor,
                Universitatea de Vest din Timișoara.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Date de contact
              </h3>

              <div className="space-y-3">
                <p>📧 contact@echipa7.ro</p>
                <p>📍 FEAA Timișoara</p>
                <p>🌐 GitHub Repository</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Tehnologii utilizate
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  React
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  Tailwind
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  Strapi
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
                  Netlify
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}