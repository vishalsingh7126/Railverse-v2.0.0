"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface OTPInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  length?: number;
  disabled?: boolean;
  error?: boolean;
  mask?: boolean;
  type?: "numeric" | "alphanumeric";
  className?: string;
  autoFocus?: boolean;
}

export const OTPInput = React.forwardRef<HTMLInputElement, OTPInputProps>(
  (
    {
      value,
      defaultValue = "",
      onChange,
      length = 6,
      disabled = false,
      error = false,
      mask = false,
      type = "numeric",
      className,
      autoFocus = true,
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const isControlled = value !== undefined;
    const activeValue = isControlled ? value : uncontrolledValue;

    const inputRefs = React.useRef<HTMLInputElement[]>([]);

    React.useEffect(() => {
      if (autoFocus && inputRefs.current[0] && !disabled) {
        inputRefs.current[0].focus();
      }
    }, [autoFocus, disabled]);

    const getCells = () => {
      const cells = [];
      for (let i = 0; i < length; i++) {
        cells.push(activeValue[i] || "");
      }
      return cells;
    };

    const cells = getCells();

    const handleValueChange = (newVal: string) => {
      const trimmedVal = newVal.slice(0, length);
      if (!isControlled) {
        setUncontrolledValue(trimmedVal);
      }
      onChange?.(trimmedVal);
    };

    const validateInput = (char: string) => {
      if (type === "numeric") {
        return /^[0-9]$/.test(char);
      }
      return /^[a-zA-Z0-9]$/.test(char);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const val = e.target.value;
      const char = val.slice(-1); // Grab last char entered

      if (char === "") {
        const updatedCells = [...cells];
        updatedCells[index] = "";
        handleValueChange(updatedCells.join(""));
        return;
      }

      if (!validateInput(char)) return;

      const updatedCells = [...cells];
      updatedCells[index] = char;
      const combined = updatedCells.join("");
      handleValueChange(combined);

      // Auto advance focus to the next cell
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace") {
        if (cells[index] === "") {
          if (index > 0) {
            const updatedCells = [...cells];
            updatedCells[index - 1] = "";
            handleValueChange(updatedCells.join(""));
            inputRefs.current[index - 1]?.focus();
          }
        } else {
          const updatedCells = [...cells];
          updatedCells[index] = "";
          handleValueChange(updatedCells.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedText = e.clipboardData.getData("text").trim();
      const cleanChars = pastedText.split("").filter(validateInput).slice(0, length);

      handleValueChange(cleanChars.join(""));

      // Focus last pasted character input
      const targetFocusIndex = Math.min(cleanChars.length, length - 1);
      inputRefs.current[targetFocusIndex]?.focus();
    };

    return (
      <div className={cn("flex items-center gap-2", className)}>
        {cells.map((char, index) => (
          <input
            key={index}
            type={mask ? "password" : "text"}
            inputMode={type === "numeric" ? "numeric" : "text"}
            pattern={type === "numeric" ? "[0-9]*" : "[a-zA-Z0-9]*"}
            disabled={disabled}
            value={char}
            ref={(el) => {
              if (el) {
                inputRefs.current[index] = el;
                if (index === 0 && ref) {
                  if (typeof ref === "function") ref(el);
                  else (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
                }
              }
            }}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={cn(
              "h-12 w-10 rounded-md border border-input bg-background text-center text-lg font-bold text-foreground transition-all ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus-visible:ring-destructive"
            )}
            aria-label={`Digit ${index + 1} of ${length}`}
          />
        ))}
      </div>
    );
  }
);
OTPInput.displayName = "OTPInput";
