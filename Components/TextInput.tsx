import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      defaultValue="Initial text..."
      placeholder="Enter text..."
      rows={5}
      cols={50}
    />
  );
};

export default TextInput;
