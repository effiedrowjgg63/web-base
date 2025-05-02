import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import { admissionsInfo } from '../data/universityData';

const AdmissionsPage = () => {
  return (
    <div>
      <HeroBanner 
        title="Admissions"
        subtitle="Join our community of scholars and innovators shaping the future"
        buttonText="Apply Now"
        buttonLink="#apply"
        backgroundImage="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-8">Begin Your Journey at Dongshan University</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dongshan University of Technology welcomes applications from talented and motivated students from Kyrgyzstan and around the world. Our admission process is designed to identify students with strong academic potential, creativity, and a passion for learning.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We offer a wide range of undergraduate and graduate programs across various disciplines, providing students with opportunities to explore their interests and develop expertise in their chosen fields.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#0F3460] mx-auto mb-4">
                <GraduationCap size={36} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F3460] mb-2">Undergraduate</h3>
              <p className="text-gray-600">4-year bachelor's degree programs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#0F3460] mx-auto mb-4">
                <BookOpen size={36} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F3460] mb-2">Graduate</h3>
              <p className="text-gray-600">Master's and doctoral programs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-[#0F3460] mx-auto mb-4">
                <Calendar size={36} />
              </div>
              <h3 className="text-xl font-semibold text-[#0F3460] mb-2">Application Deadlines</h3>
              <p className="text-gray-600">Multiple intake periods per year</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Deadlines */}
      <section id="deadlines" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Application Deadlines</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0F3460] text-white p-4">
              <h3 className="text-xl font-semibold">Important Dates for 2025-2026 Academic Year</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">Undergraduate Programs</h4>
                  <p className="text-gray-700">Application Deadline: <span className="font-medium">{admissionsInfo.applicationDeadlines.undergraduate}</span></p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">Graduate Programs</h4>
                  <p className="text-gray-700">Application Deadline: <span className="font-medium">{admissionsInfo.applicationDeadlines.graduate}</span></p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">International Students</h4>
                  <p className="text-gray-700">Application Deadline: <span className="font-medium">{admissionsInfo.applicationDeadlines.international}</span></p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 italic">
                  Note: Some competitive programs may have earlier deadlines. Please check specific program requirements for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Requirements */}
      <section id="requirements" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Admission Requirements</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F3460] mb-6">Undergraduate Programs</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {admissionsInfo.requirements.undergraduate.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F3460] mb-6">Graduate Programs</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {admissionsInfo.requirements.graduate.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-[#0F3460] mb-6">International Students</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3">
                {admissionsInfo.requirements.international.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#FFD700] mr-2">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tuition and Fees */}
      <section id="tuition" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-12">Tuition and Fees</h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="bg-[#0F3460] text-white p-4">
              <h3 className="text-xl font-semibold">Undergraduate Programs</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">Domestic Students</h4>
                  <p className="text-gray-700">{admissionsInfo.tuitionFees.undergraduate.domestic}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">International Students</h4>
                  <p className="text-gray-700">{admissionsInfo.tuitionFees.undergraduate.international}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-[#0F3460] text-white p-4">
              <h3 className="text-xl font-semibold">Graduate Programs</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">Domestic Students</h4>
                  <p className="text-gray-700">{admissionsInfo.tuitionFees.graduate.domestic}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0F3460] mb-2">International Students</h4>
                  <p className="text-gray-700">{admissionsInfo.tuitionFees.graduate.international}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>Additional fees may apply for laboratory courses, materials, and student services.</p>
            <p>All fees are subject to change. Please contact the admissions office for the most current information.</p>
          </div>
        </div>
      </section>
      
      {/* Scholarships */}
      <section id="scholarships" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-8">Scholarships and Financial Aid</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Dongshan University is committed to making education accessible to talented students regardless of their financial circumstances.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-[#0F3460] mb-6">Available Scholarships</h3>
            <ul className="space-y-4">
              {admissionsInfo.scholarships.map((scholarship, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FFD700] mr-2 text-xl">•</span>
                  <span className="text-gray-700">{scholarship}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                For more information about scholarships and financial aid opportunities, please contact our Financial Aid Office or visit the campus.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Apply Now */}
      <section id="apply" className="py-16 bg-[#0F3460]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl">
              Take the first step toward your future at Dongshan University of Technology.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0F3460] mb-4">Online Application</h3>
                <p className="text-gray-700 mb-4">
                  Our online application system makes it easy to apply to Dongshan University. Create an account and follow the guided process.
                </p>
                <button className="bg-[#0F3460] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0F3460]/90 transition-colors">
                  Start Application
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#0F3460] mb-4">Need Assistance?</h3>
                <p className="text-gray-700 mb-4">
                  Our admissions team is here to help you through the application process. Contact us with any questions.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">Email: admissions@dongshan.edu.cn</p>
                  <p className="text-gray-700">Phone: +86 123 4567 8910</p>
                  <p className="text-gray-700">WeChat: DongshanAdmissions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#0F3460] mb-8">Visit Our Campus</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            Experience Dongshan University firsthand by touring our beautiful campus. See our facilities, meet with faculty, and get a feel for student life.
          </p>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Dongshan University Campus" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0F3460] mb-4">Campus Tours</h3>
              <p className="text-gray-700 mb-4">
                Campus tours are offered Monday through Friday at 10:00 AM and 2:00 PM, and on select Saturdays at 11:00 AM.
              </p>
              <button className="bg-[#0F3460] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0F3460]/90 transition-colors">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;