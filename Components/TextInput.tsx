// components/TextInput.tsx
import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleInputChange}
      placeholder="Enter text..."
      rows={5}
      cols={50}
      className="w-full p-2 border border-gray-300 rounded"
    />
  );
};

export default TextInput;
