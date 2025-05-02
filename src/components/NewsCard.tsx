interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}

const NewsCard = ({ title, date, excerpt, imageUrl, category }: NewsCardProps) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-[#0F3460] text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold mb-2 text-[#0F3460] hover:text-[#0F3460]/80 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <button className="text-[#0F3460] font-medium hover:text-[#FFD700] transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default NewsCard;