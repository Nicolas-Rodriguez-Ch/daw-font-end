interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  id: string;
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}
