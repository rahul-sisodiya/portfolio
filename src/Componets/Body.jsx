import rahulimg from "../assets/WhatsApp Image 2025-04-30 at 21.35.27_d7b8a2d0.jpg"
function Body() {
  return (
    <section className="max-w-6xl mx-auto p-6 flex flex-wrap-reverse items-center justify-between gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold mb-4">
          I am Rahul<br />Singh
        </h1>
        <hr className="w-40 border border-dashed mb-4" />
        <p className="text-sm text-gray-600">
          CS student exploring the intersection of technology, accessibility, and inclusive user experience.
        </p>
      </div>

      <div className="relative w-60 h-60">
       
        <img src={rahulimg} alt="Rahul" className="w-64 h-64 rounded-full border-4 border-white shadow-xl object-cover transition-transform duration-300 hover:scale-105" />
      </div>
    </section>
  );
}

export default Body;
