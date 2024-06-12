import { data } from "../data";

function Info() {
  const boxStyle = "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center";
  return (
    <div className="grid md:grid-cols-4 auto-rows-[280px] gap-4">
      {data.map((item, i) => (
        <div key={i} className={`${boxStyle} ${i === 4 || i === 8? 'md:col-span-2':''} ${i === 3? 'md:row-span-2':''} hover:bg-sky-400`}>
          <h2 className="text-xl text-gray-600">{item.description}</h2>
          <p className="font-bold text-2xl">{item.precie}</p>
        </div>
      ))}
    </div>
  );
}

export default Info;
