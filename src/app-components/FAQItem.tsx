const FAQItem: React.FC<{ question: string; icon: string }> = ({
  question,
  icon,
}) => (
  <div className="border-b flex justify-between items-center py-5">
    <span>{question}</span>
    <img src={icon} alt="arror-right" className="bg-[#0A2640] py-2.5 rounded-full px-2" />
  </div>
);

export default FAQItem;
