export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="mb-8 text-slate-900 text-4xl font-bold">Welcome to the CSEE Department!</h1>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://coeit.umbc.edu/wp-content/uploads/sites/117/2016/01/Campus_Entrance_sign-2828-1-e1458838962758-1920x768.jpg"
              alt="university building"
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <img
              
              src= "https://www.csee.umbc.edu/wp-content/uploads/sites/659/2022/02/computerLab.jpeg"
              alt="CSEE image"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>

      {/* Department Description */}
      <div className="prose prose-slate max-w-none">
        <h2 className="text-slate-900 mb-4">About Our Department</h2>
        <p className="text-slate-700 mb-4">
          Welcome to the UMBC Computer Science and Electrical Engineering (CSEE) department page.
          For more than 30 years, the Department of Computer Science and Electrical Engineering (CSEE) at UMBC has produced the Computer Science, 
          Computer Engineering, and Electrical Engineering leaders of tomorrow. Currently, the department offers two undergraduate degrees in computer 
          science and computer engineering with approximately 2300 students, and graduate degrees in five programs computer science (MS and PhD), computer 
          engineering (MS and PhD), electrical engineering (MS and PhD), data science (MS), and cybersecurity (MS) with a total of approximately 1270 students.
          </p>

          <p className="text-slate-700 mb-4">
          The department has 41 tenured and tenure-track faculty, 18 full-time instructional faculty, 15 research faculty, and over 20 affiliate and part-time 
          adjunct faculty, whose research are in five clusters (i) artificial intelligence, machine learning, and signal processing; (ii) communications and 
          photonics; (iii) computer architecture and hardware systems; (iv) cyber-physical systems; and (v) graphics and visualization.
          </p>

          <p className="text-slate-700 mb-4">
          The department is centered in the Information Technology and Engineering (ITE) building, which has an excellent laboratory and computing environment, 
          and in the Technology Research Center, which has specialized research laboratories. You can find directions to UMBC and information on parking here.
          </p>

          <p className="text-slate-700 mb-4">
          A variety of governmental and industrial sponsors including the National Science Foundation (NSF), the National Security Agency (NSA), the National 
          Institutes of Standards and Technology (NIST), and the Department of Defense (DoD) provided more than $5.5M in research expenditures in 2023.
          </p>
        
        <h3 className="text-slate-900 mb-3">What We Offer</h3>
        <p className="text-slate-700 mb-4">
          <li>Computer Science (BS/MS/PhD)</li>
          <li>Computer Engineering (BS/MS/PhD)</li>
          <li>Electrical Engineering (MS/PhD)</li>
          <li>Data Science (MPS)</li>
          <li>Cyber Security (MS)</li>
          <li>Certificates (Data Science, Cyber Security)</li>
          The CSEE also offers a variety of research areas, including Artificial Intelligence, Robotics, and Quantum Computing.
          There are many research-focus labs spreading across the fields of Computer Science, Computer Engineering, and Electrical Engineering, 
          ranging from CDL - Cyber Defense Lab to the Remote Sensing Singal and Image Processing Lab.
        </p>

        <h3 className="text-slate-900 mb-3">Location</h3>
        <ul className="text-slate-700 mb-4 space-y-2">
          CSEE Main Office: ITE 325 1000 Hilltop Circle, Baltimore, MD 21250
        </ul>

        <h3 className="text-slate-900 mb-3">Contact Us</h3>
        <p className="text-slate-700">
          Phone: 410-455-3500
        </p>

      </div>
    </div>
  );
}