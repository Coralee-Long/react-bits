import { copyToClipboard } from './TailwindGrid.utils';

function TailwindGrid({ data }) {
  console.log(data);
  return (
    <table className="min-w-full divide-y divide-gray-200">
              {data.map((item) => (
      <thead>
        <tr>
          <th className="py-3 px-6 text-left">Class</th>
          <th className="py-3 px-6 text-left">Properties</th>
          <th className="py-3 px-6 text-left">Example</th>
          <th className="py-3 px-6 text-left">Code</th>
          <th className="py-3 px-6 text-left">Copy</th>
        </tr>
      </thead>
      <tbody>
  
          <tr key={item.class}>
            <td className="py-4 px-6">{item.class}</td>
            <td className="py-4 px-6">
              <ul>
                {Object.entries(item.properties).map(([key, value]) => (
                  <li key={key}>{`${key}: ${value}`}</li>
                ))}
              </ul>
            </td>
            <td className="py-4 px-6">
              {/* Rendered example */}
              <p className={item.class}>The quick brown fox ...</p>
            </td>
            <td className="py-4 px-6">
              {/* Code block */}
              <code>{`<p class="${item.class}">The quick brown fox ...</p>`}</code>
            </td>
            <td className="py-4 px-6">
              {/* Copy button (You can implement the copy functionality here) */}
              <button onClick={() => copyToClipboard(item.class)}>Copy</button>
            </td>
          </tr>
       
      </tbody>
      ))}
    </table>
  );
}

export default TailwindGrid;
