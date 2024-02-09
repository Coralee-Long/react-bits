import { useState, useRef } from 'react';
import { useClickAway } from 'react-use'

export const Drop = () => {
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
