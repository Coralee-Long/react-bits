import { useState, useRef } from 'react';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
useClickAway(ref, () => setOpen)



  return (
    <div>
      <p>Side bar</p>
    </div>
  );
};
