'use client';

import { useEffect, useState } from 'react';

export default function Switch({
  onChange,
  defaultChecked = false,
}: {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(defaultChecked);
  }, [defaultChecked]);

  return (
    <button
      type='button'
      role='switch'
      aria-checked={enabled}
      onClick={() => {
        setEnabled((prev) => !prev);
        onChange?.(!enabled);
      }}
      className={`relative inline-flex cursor-pointer h-5 w-10 items-center rounded-full transition-colors duration-300 focus:outline-none ${
        enabled ? 'bg-purple-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition-transform duration-300 ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}
