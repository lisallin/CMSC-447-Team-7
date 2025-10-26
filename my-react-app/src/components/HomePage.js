export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="mb-8 text-slate-900">Welcome to the CSEE Department</h1>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src= "https://www.csee.umbc.edu/wp-content/uploads/sites/659/2022/02/computerLab.jpeg"
              alt="CSEE image"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <img
              src="https://coeit.umbc.edu/wp-content/uploads/sites/117/2016/01/Campus_Entrance_sign-2828-1-e1458838962758-1920x768.jpg"
              alt="university building"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>

      {/* Department Description */}
      <div className="prose prose-slate max-w-none">
        <h2 className="text-slate-900 mb-4">About Our Department</h2>
        <p className="text-slate-700 mb-4">
          Welcome to our department, where excellence in education meets innovation and research. 
          We are dedicated to providing world-class education and fostering an environment where 
          students can thrive academically and personally.
        </p>
        
        <h3 className="text-slate-900 mb-3">Our Mission</h3>
        <p className="text-slate-700 mb-4">
          Our mission is to prepare students for successful careers and meaningful lives through 
          rigorous academic programs, cutting-edge research opportunities, and comprehensive support 
          services. We believe in the transformative power of education and are committed to 
          nurturing the next generation of leaders, thinkers, and innovators.
        </p>

        <h3 className="text-slate-900 mb-3">What We Offer</h3>
        <ul className="text-slate-700 mb-4 space-y-2">
          <li>Comprehensive undergraduate and graduate programs</li>
          <li>State-of-the-art facilities and research laboratories</li>
          <li>Distinguished faculty with expertise in their fields</li>
          <li>Extensive internship and career development opportunities</li>
          <li>Active student organizations and community engagement</li>
          <li>Generous financial aid and scholarship programs</li>
        </ul>

        <h3 className="text-slate-900 mb-3">Join Our Community</h3>
        <p className="text-slate-700">
          Whether you're considering undergraduate or graduate studies, we invite you to explore 
          what our department has to offer. Browse through our FAQ sections to learn more about 
          admissions requirements, academic programs, student life, and research opportunities. 
          We look forward to welcoming you to our community.
        </p>
      </div>
    </div>
  );
}