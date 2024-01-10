import TailwindGrid from '../components/projects/TailwindCheatsheet/components/TailwindGrid';
import {tailwind}

const TaiwindCheatsheet = () => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-semibold mb-6">Tailwind CSS Cheatsheet</h1>
    <TailwindGrid data={tailwindData} />
  </div>
  );
};
export default TaiwindCheatsheet;
