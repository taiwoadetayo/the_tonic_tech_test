const InfoCard: React.FC<{
  bgColor: string;
  textColor: string;
  borderColor: string;
  text: string;
  icon: JSX.Element;
}> = ({ bgColor, textColor, borderColor, text, icon }) => (
  <div
    className={`mb-5 ${bgColor} ${borderColor} border font-medium text-[16px] ${textColor} p-5 px-6 flex gap-5 items-center rounded-lg shadow-lg`}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export default InfoCard;
