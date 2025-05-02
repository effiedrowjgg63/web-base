interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ value, label, icon }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-300">
      <div className="text-[#0F3460] mb-3">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2 text-[#0F3460]">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatCard;