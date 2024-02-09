import { useState, useRef } from 'react';
import { useClickAway } from 'react-use'
import { Link } from 'react-router-dom';
import pages

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleList = () => setOpen((prev) => !prev);

  return (
    <div>
      <p>Things</p>
    </div>
  );
};
