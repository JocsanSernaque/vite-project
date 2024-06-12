import Data from "./Data.jsx";
// import Info from "./Info.jsx";
const logoDisney =
  "https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original";

function Main() {
  return (
    <>
      <section className="flex-1 w-full mx-4 p-3 text-gray-600">
        <header className="flex flex-col justify-center items-center h-32 m-12 gap-5">
          <img src={logoDisney} className="w-40" />
          <h1 className="flex text-3xl font-bold">Personajes de Disney</h1>
        </header>
        <main className="flex-1">
          <Data />
        </main>
      </section>
    </>
  );
}
export default Main;
