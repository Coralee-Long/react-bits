import React from 'react';
import { copyToClipboard } from './TailwindGrid.utils';

function TailwindGrid({ data }) {
  console.log(data);
  return (
    <table className="min-w-full divide-y divide-gray-200">
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
        {data.map((sectionData) => (
          <React.Fragment key={sectionData.section}>
            <tr>
              <th
                colSpan="5"
                className="py-4 px-6 bg-black text-white text-lg font-semibold"
              >
                {sectionData.section}
              </th>
            </tr>
            {sectionData.items.map((item) => (
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
                  <p className={`text-black ${item.class}`}>
                    The quick brown fox ...
                  </p>
                </td>
                <td className="py-4 px-6">
                  <code>{`<p class="${item.class}">The quick brown fox ...</p>`}</code>
                </td>
                <td className="py-4 px-6">
                  <button onClick={() => copyToClipboard(item.class)}>
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default TailwindGrid;
