const FeatureCard: React.FC<{
  imageSrc: string;
  title: string;
  description: string;
  altText: string;
}> = ({ imageSrc, title, description, altText }) => (
  <article>
    {/* Image */}
    <figure>
      <img src={imageSrc} alt={altText} className="w-full" />
    </figure>

    {/* Title */}
    <div className="flex gap-3 py-3 text-lg">
      <h5 className="font-bold text-[#0A2640]">{title}</h5>
    </div>

    {/* Description */}
    <p className="text-lg text-[#777777] font-medium">{description}</p>

    {/* Button */}
    <button className="flex items-center gap-4 mt-5 border-b-[2px] border-[#0A2640] py-3">
      <span className="font-bold text-lg text-[#0A2640]">Explore page</span>
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 14H19"
          stroke="#0A2640"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 7L19 14L12 21"
          stroke="#0A2640"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </article>
);
export default FeatureCard;
