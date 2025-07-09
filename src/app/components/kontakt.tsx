import { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);  // reset error

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Wystąpił błąd podczas wysyłania wiadomości.");
      }
    } catch (error) {
      setError("Nie udało się wysłać formularza. Spróbuj ponownie.");
    }
  };

  return (
    <div id="kontakt" className="w-full bg-gray-800 py-[75px] px-6">
      <div className="w-full max-w-3xl mx-auto px-4 flex flex-col items-center">

        <div
          id="playfair"
          className="w-full text-center text-white text-5xl md:text-7xl font-black mb-[50px]"
        >
          NAPISZ DO NAS
        </div>
        <div
          id="poppins"
          className="w-[90%] text-center text-white mb-[60px] text-2xl md:text-2xl font-normal md:mb-[100px]"
        >
          SKONTAKTUJ SIĘ Z NAMI ABY OTRZYMAĆ WYCENĘ STRONY I ROZPOCZĄĆ WSPÓŁPRACĘ
        </div>

        {submitted && (
          <div
            className="bg-green-600 text-white font-medium px-6 py-4 rounded-md mb-6 w-full text-center"
            role="alert"
          >
            Dziękujemy za wiadomość. Skontaktujemy się wkrótce.
            <button
              onClick={() => setSubmitted(false)}
              className="ml-4 font-bold"
              aria-label="Zamknij alert"
            >
              ×
            </button>
          </div>
        )}

        {error && (
          <div
            className="bg-red-600 text-white font-medium px-6 py-4 rounded-md mb-6 w-full text-center"
            role="alert"
          >
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-4 font-bold"
              aria-label="Zamknij alert"
            >
              ×
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-[80%] space-y-6">

          <div>
            <label
              htmlFor="name"
              className="block font-medium text-white mb-2 ml-3"
            >
              Imię
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border-2 text-white bg-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-white mb-2 ml-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border-2 text-white bg-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium text-white mb-2 ml-3"
            >
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border-gray-300 border-2 text-white bg-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <button
            type="submit"
            aria-label="Wyślij formularz"
            className="border border-white text-white bg-transparent px-[50px] py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}
