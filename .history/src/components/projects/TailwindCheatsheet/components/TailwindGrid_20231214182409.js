import {copyToClipboard} from 

function TailwindGrid({ data }) {
  return (
    <div>
      {data.map((sectionData) => (
        <div key={sectionData.section}>
          <h2 className="text-2xl font-semibold mb-4">{sectionData.section}</h2>
          <div className="grid grid-cols-3 gap-4">
            {sectionData.items.map((item) => (
              <div key={item} className="border p-4 rounded-lg">
                <p className={item}>{item}</p>
                <div className={`bg-${item} h-8 w-8 rounded-full`} />
                <button onClick={() => copyToClipboard(item)}>Copy</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TailwindGrid;
