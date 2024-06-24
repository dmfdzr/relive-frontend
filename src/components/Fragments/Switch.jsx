import { useState } from 'react';

const Switch = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`${
        enabled ? 'bg-teal-500' : 'bg-gray-300'
      } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
      />
    </div>
  );
};

export default Switch;
