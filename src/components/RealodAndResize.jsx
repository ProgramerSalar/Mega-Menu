import React, { useEffect } from 'react';

const ReloadOnResize = () => {
  useEffect(() => {
    const handleResize = () => {
      // Reload the page when window is resized
      window.location.reload();
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Your component content */}
      <p>This component will reload when the window is resized.</p>
    </div>
  );
};

export default ReloadOnResize;
