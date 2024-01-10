import { useState } from 'react';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <div>
      <p>Side bar</p>
    </div>
  );
};
