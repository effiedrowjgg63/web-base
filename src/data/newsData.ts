export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Dongshan University Receives Major Research Grant",
    date: "April 15, 2025",
    category: "Research",
    excerpt: "The Department of Computer Science has been awarded a prestigious grant to advance research in artificial intelligence and machine learning.",
    content: "The Department of Computer Science at Dongshan University of Technology has been awarded a prestigious grant of $2.5 million to advance cutting-edge research in artificial intelligence and machine learning. This grant will fund a new research center that focuses on developing innovative solutions for real-world problems using AI technologies.",
    imageUrl: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "New Engineering Building Opening Ceremony",
    date: "April 10, 2025",
    category: "Campus",
    excerpt: "The state-of-the-art engineering building will be officially opened next month, featuring advanced laboratories and collaborative spaces.",
    content: "Dongshan University is proud to announce the opening ceremony for our new state-of-the-art engineering building. The facility spans 150,000 square feet and includes advanced laboratories, collaborative workspaces, and cutting-edge equipment to support our growing engineering programs. The ceremony will take place on May 15th with distinguished guests from industry and government in attendance.",
    imageUrl: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Dongshan Students Win International Robotics Competition",
    date: "April 5, 2025",
    category: "Student Achievement",
    excerpt: "A team of engineering students brought home the first prize from the Global Robotics Challenge held in Tokyo.",
    content: "A team of five engineering students from Dongshan University has won first place at the prestigious Global Robotics Challenge held in Tokyo last week. The team's innovative design for an autonomous rescue robot impressed the judges and outperformed entries from over 200 universities worldwide. This achievement highlights the exceptional quality of our engineering program and the dedication of our students.",
    imageUrl: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Distinguished Lecture Series Announced for Summer Semester",
    date: "April 1, 2025",
    category: "Events",
    excerpt: "The popular lecture series returns with renowned speakers from around the world discussing cutting-edge research and innovation.",
    content: "Dongshan University is pleased to announce the lineup for this summer's Distinguished Lecture Series. The program features world-renowned researchers, industry leaders, and innovators who will share their expertise on topics ranging from sustainable engineering to quantum computing. All lectures will be open to the public and streamed online for global access.",
    imageUrl: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "New International Exchange Programs with European Universities",
    date: "March 28, 2025",
    category: "International",
    excerpt: "Dongshan University has established new partnership agreements with leading universities in Germany and France.",
    content: "Dongshan University has signed new partnership agreements with Technical University of Munich and École Polytechnique in Paris, expanding our international exchange opportunities for students and faculty. These partnerships will facilitate study abroad programs, joint research initiatives, and collaborative academic projects. The first exchange students are expected to begin their programs in the fall semester.",
    imageUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "University Launches New Sustainability Initiative",
    date: "March 25, 2025",
    category: "Campus",
    excerpt: "The campus-wide initiative aims to achieve carbon neutrality by 2030 through innovative technologies and community engagement.",
    content: "Dongshan University has launched an ambitious sustainability initiative with the goal of achieving carbon neutrality by 2030. The comprehensive plan includes installing solar panels on all suitable campus buildings, implementing smart energy management systems, transitioning to electric vehicles for campus transportation, and integrating sustainability into the curriculum across all departments. Students and faculty are encouraged to participate in various sustainability projects and contribute ideas for a greener campus.",
    imageUrl: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];