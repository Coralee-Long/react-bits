import TailwindGrid from '../components/projects/TailwindCheatsheet/components/TailwindGrid';
import { tailwindData } from '../components/projects/TailwindCheatsheet/data/tailwindData';
import SideNavBar from '../components/navigation/SideNavBar';

const TaiwindCheatsheet = () => {
  return (
    <div>
      SideNavBar 
    </div>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Tailwind CSS Cheatsheet</h1>
      <TailwindGrid data={tailwindData} />
    </div>
  );
};
export default TaiwindCheatsheet;
