import { useState, useRef } from 'react';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <div>
      <p>Side bar</p>
    </div>
  );
};
