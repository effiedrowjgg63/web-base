import { Users, GraduationCap, BookOpen, Globe, Award, Building, BookMarked, Trophy } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import StatCard from '../components/StatCard';
import { universityInfo, universityStats, facultyData } from '../data/universityData';

const AboutPage = () => {
  return (
    <div>
      <HeroBanner 
        title="About Dongshan University"
        subtitle="Excellence in Education, Research and Innovation since 1985"
        backgroundImage="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* University Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-8">{universityInfo.nameEn}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                {universityInfo.introduction}
              </p>
              <p className="text-lg text-gray-700">
                Located in the vibrant {universityInfo.location}, our university spans {universityInfo.campusSize} of modern facilities, cutting-edge laboratories, and beautiful green spaces, creating an ideal environment for learning and research.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="University Campus" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#0F3460]">Founded</p>
                  <p>{universityInfo.foundedYear}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-[#0F3460]">Motto</p>
                  <p>"{universityInfo.motto}"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#0F3460] mb-4">Accreditation</h3>
            <p className="text-gray-700">
              {universityInfo.accreditation}
            </p>
          </div>
        </div>
      </section>
      
      {/* University Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">University at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value={universityStats.students}
              label="Students"
              icon={<Users size={36} />}
            />
            <StatCard 
              value={universityStats.faculty}
              label="Faculty Members"
              icon={<GraduationCap size={36} />}
            />
            <StatCard 
              value={universityStats.internationalStudents}
              label="International Students"
              icon={<Globe size={36} />}
            />
            <StatCard 
              value={universityStats.alumniNetwork}
              label="Alumni Network"
              icon={<Award size={36} />}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <StatCard 
              value={universityStats.academicPrograms}
              label="Academic Programs"
              icon={<BookOpen size={36} />}
            />
            <StatCard 
              value={universityStats.researchCenters}
              label="Research Centers"
              icon={<Building size={36} />}
            />
            <StatCard 
              value={universityStats.partnerships}
              label="Global Partnerships"
              icon={<Globe size={36} />}
            />
          </div>
        </div>
      </section>
      
      {/* Faculty and Academics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Faculty Excellence</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0F3460] mb-6">Academic Departments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {facultyData.departments.map((department, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-[#FFD700] mr-2">•</div>
                    <div className="text-gray-700">{department}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#0F3460] mb-6">Faculty Composition</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#0F3460] mb-2">{facultyData.professors.full}</div>
                  <div className="text-gray-700">Full Professors</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#0F3460] mb-2">{facultyData.professors.associate}</div>
                  <div className="text-gray-700">Associate Professors</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-[#0F3460] mb-2">{facultyData.professors.assistant}</div>
                  <div className="text-gray-700">Assistant Professors</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-[#0F3460] mb-6">Academic Achievements</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {facultyData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FFD700] mr-2">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Life */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Campus Life</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Student Life" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-[#0F3460] mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Student Life</h3>
                <p className="text-gray-700">
                  A vibrant community with over 100 student organizations, cultural events, and recreational activities.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Research Facilities" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-[#0F3460] mb-4">
                  <BookMarked size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Research Facilities</h3>
                <p className="text-gray-700">
                  State-of-the-art laboratories and research centers supporting innovation and discovery.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8471835/pexels-photo-8471835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Sports and Recreation" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-[#0F3460] mb-4">
                  <Trophy size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F3460] mb-2">Sports and Recreation</h3>
                <p className="text-gray-700">
                  Comprehensive athletic facilities supporting varsity sports, intramural leagues, and fitness activities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Campus Map */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-[#0F3460] mb-6">Campus Map</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2883509/pexels-photo-2883509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dongshan University Campus Map" 
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-center">
                <button className="bg-[#0F3460] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0F3460]/90 transition-colors">
                  View Interactive Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* University Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">University Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="President" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-1">Dr. Wei Zhang</h3>
                <p className="text-gray-600 mb-4">President</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Provost" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-1">Dr. Mei Li</h3>
                <p className="text-gray-600 mb-4">Provost</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden text-center">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Dean of Research" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0F3460] mb-1">Dr. John Chen</h3>
                <p className="text-gray-600 mb-4">Dean of Research</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Contact Us</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-4">General Inquiries</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: info@dongshan.edu.cn</p>
                    <p>Phone: +86 123 4567 8910</p>
                    <p>Fax: +86 123 4567 8919</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F3460] mt-6 mb-4">Admissions Office</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Email: admissions@dongshan.edu.cn</p>
                    <p>Phone: +86 123 4567 8920</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-4">Visit Us</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>123 University Avenue</p>
                    <p>Dongshan District</p>
                    <p>Eastern China</p>
                    <p>Postal Code: 100000</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0F3460] mt-6 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Monday - Friday: 8:30 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <button className="bg-[#0F3460] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0F3460]/90 transition-colors">
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;