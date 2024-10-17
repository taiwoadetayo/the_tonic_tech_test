const TestimonialCard: React.FC<{
  quote: string;
  name: string;
  role: string;
  image: string;
}> = ({ quote, name, role, image }) => (
  <article>
    <div className="bg-white rounded-lg p-8 py-10">
      <p className="text-[24px] font-semibold mb-8">{quote}</p>
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={name}
          className="w-[58px] h-[58px] rounded-full"
        />
        <div>
          <p className="font-bold text-lg text-[#0A2640]">{name}</p>
          <p className="font-medium text-[#0A2640]">{role}</p>
        </div>
      </div>
    </div>
  </article>
);

export default TestimonialCard;
