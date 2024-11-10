export const CloseCircle = ({ fillColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor || "currentColor"} // Establece el color de relleno
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width="28"
      height="28"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
