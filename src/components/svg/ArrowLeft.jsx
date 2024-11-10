export const ArrowLeft = ({fillcolor}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillcolor}
      width="25"
      height="25"
      stroke="currentColor"
      className="cursor-pointer"
    >
      <path
        d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
};