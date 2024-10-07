import React from 'react';

function Notfound() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <p>Not Found..</p>
      <button onClick={handleReload} className="bg-red-500 text-white py-2 px-4 rounded">
        Reload
      </button>
    </div>
  );
}

export default Notfound;
