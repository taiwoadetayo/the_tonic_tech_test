const BlogCard: React.FC<{
  image: string;
  category: string;
  date: string;
  caption: string;
  author: string;
  authorImg: string;
}> = ({ image, category, date, caption, author, authorImg }) => (
  <div className="col-span-1 flex flex-col h-full">
    {/* Blog Image */}
    <img src={image} className="lg:h-[170px] shadow-sm rounded-3xl w-full object-cover" alt="Blog" />

    {/* Blog Category and Date */}
    <div className="flex gap-2 py-3 text-[16px] items-center">
      <h5 className="font-bold text-[#0A2640]">{category}</h5>
      <span className="text-[#777777] text-[14px] font-medium">{date}</span>
    </div>

    {/* Blog Caption */}
    <p className="text-[16px] font-medium flex-grow pr-6">{caption}</p>

    {/* Author Section */}
    <div className="flex gap-2 mt-5 items-center">
      <img
        src={authorImg}
        alt={author}
        className="shadow-sm w-[32px] h-[32px] rounded-full"
      />
      <span className="font-semibold">{author}</span>
    </div>
  </div>
);

export default BlogCard;
