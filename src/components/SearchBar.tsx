"use client";

import { Input } from "@heroui/react";

interface Props {
    value: string;
    onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
    const handleClear = () => {
        onChange('');
    }
  return (
    <Input
      isClearable
      className="max-w-xl"
      defaultValue={value}
      label="Search"
      placeholder="Eg: Spain, France, Germany, etc..."
      type="search"
      variant="bordered"
      onClear={handleClear}
      onValueChange={(e) => onChange(e)}
    />
  );
}
