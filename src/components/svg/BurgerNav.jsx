export const BurgerNav = ({fillcolor}) => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
      />
    </svg>
  );
};