import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import styles from "./CustomDatePicker.module.css";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";

interface CustomDatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

export default function CustomDatePicker({
  value,
  onChange,
  disabled = false,
  placeholder = "Selecciona una fecha",
  className = "",
}: CustomDatePickerProps) {
  return (
    <div className={styles.datePickerContainer}>
      <DatePicker
        selected={value}
        onChange={(date: Date | null) => onChange(date)}
        disabled={disabled}
        placeholderText={placeholder}
        className={clsx(styles.datePickerInput, className)}
        wrapperClassName={styles.datePickerWrapper}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        dateFormat="yyyy-MM-dd"
        calendarStartDay={1}
      />
      <Calendar className={styles.calendarIcon} />
    </div>
  );
}
