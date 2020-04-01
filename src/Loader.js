import * as React from 'react';

export function Loader() {
  return (
    <div className="loader">
      <div className="loader-bar" style={{ '--i': 0 }}></div>
      <div className="loader-bar" style={{ '--i': 1 }}></div>
      <div className="loader-bar" style={{ '--i': 2 }}></div>
    </div>
  );
}
