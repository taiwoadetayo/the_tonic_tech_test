const InfoCardRight: React.FC<{
  text: string;
}> = ({ text }) => (
  <div className={`mb-5 font-medium text-[16px] flex gap-5 items-center`}>
    <svg
      width="26"
      height="26"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#0A2640" />
      <path
        d="M26 12L15 23L10 18"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <span>{text}</span>
  </div>
);

export default InfoCardRight;
