import React, { forwardRef } from "react";

export const InputForm = forwardRef(
  (
    {
      label,
      type,
      id,
      className,
      placeholder,
      ...props // Resto de props (register, onBlur, etc.)
    },
    ref
  ) => {
    return (
      <div className="mb-4 w-full">
        {/* Label: Texto blanco */}
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-white mb-2"
        >
          {label}
        </label>

        {/* Input: Fondo oscuro, Borde sutil, Texto blanco */}
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`
            block w-full rounded-xl border-0 py-3 px-4 
            bg-zinc-800 text-white shadow-sm 
            ring-1 ring-inset ring-zinc-700 
            placeholder:text-zinc-500 
            focus:ring-2 focus:ring-inset focus:ring-white 
            sm:text-sm sm:leading-6 transition-all duration-200
            ${className}
          `}
          {...props}
        />
      </div>
    );
  }
);

// Esto ayuda a React DevTools a identificar el componente
InputForm.displayName = "InputForm";
