import React from 'react';
import Card from './Card';

export default function Results({ results }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
