import React from 'react';
import { copyToClipboard } from './TailwindGrid.utils';

function TailwindGrid({ data }) {
  console.log(data);
  return (
    <table className="min-w-full divide-y divide-gray-200">
      {data.map((sectionData) => (
       
  );
}

export default TailwindGrid;
