import { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible";



export function FAQContent({ category, section }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    undergrad: {
      'Miscellaneous Questions': [
        {
          question: 'What are the admission requirements for undergraduate programs?',
          answer: 'Undergraduate applicants must have a high school diploma or equivalent, submit official transcripts, SAT or ACT scores, letters of recommendation, and a personal statement. The minimum GPA requirement is 3.0, though most admitted students have higher GPAs.'
        },
        {
          question: 'When is the application deadline?',
          answer: 'We have two admission cycles: Early Action (November 1st) and Regular Decision (January 15th). We encourage students to apply early to increase their chances of admission and scholarship consideration.'
        },
        {
          question: 'Can I transfer credits from another institution?',
          answer: 'Yes, we accept transfer credits from accredited institutions. Transfer students must submit official transcripts from all previously attended colleges. Credits are evaluated on a case-by-case basis, and a maximum of 60 credits can be transferred.'
        },
        {
          question: 'Is there an application fee?',
          answer: 'Yes, there is a $75 application fee. Fee waivers are available for students who demonstrate financial need. You can request a fee waiver through your application portal.'
        }
      ],
      'Advising': [
        {
          question: 'What undergraduate majors do you offer?',
          answer: 'We offer over 50 undergraduate majors across various disciplines including sciences, humanities, engineering, business, and arts. Each program is designed to provide comprehensive education with opportunities for hands-on learning and research.'
        },
        {
          question: 'Can I double major or minor in another field?',
          answer: 'Absolutely! We encourage students to pursue double majors or add minors to complement their primary area of study. An academic advisor will help you plan your course schedule to accommodate multiple programs.'
        },
        {
          question: 'Are there opportunities for undergraduate research?',
          answer: 'Yes, undergraduate research is strongly encouraged. Students can work alongside faculty members on research projects, present at conferences, and even publish their findings. Research opportunities are available starting in your sophomore year.'
        },
        {
          question: 'What is the typical class size?',
          answer: 'Our average class size is 25 students, ensuring personalized attention from faculty. Introductory courses may be larger (50-100 students), while upper-level and seminar courses typically have 10-20 students.'
        }
      ],
      'Registration': [
        {
          question: 'What housing options are available?',
          answer: 'We offer traditional dormitories, suite-style housing, and apartment-style living for upperclassmen. All first-year students are required to live on campus. Housing assignments are made based on preferences and availability.'
        },
        {
          question: 'What student organizations can I join?',
          answer: 'There are over 200 student organizations covering academic clubs, cultural groups, sports clubs, service organizations, and special interest groups. Students can also start new organizations with faculty sponsorship.'
        },
        {
          question: 'What academic support services are available?',
          answer: 'We provide tutoring centers, writing labs, academic advising, career counseling, and disability services. The library offers extended hours during finals and provides access to extensive digital resources and study spaces.'
        },
        {
          question: 'Is there campus dining?',
          answer: 'Yes, we have multiple dining halls and cafes offering diverse meal options including vegetarian, vegan, and allergen-free choices. All meal plans include flex dollars that can be used at any campus dining location.'
        }
      ],
      'Graduation': [
        {
          question: 'What types of financial aid are available?',
          answer: 'We offer need-based financial aid, merit scholarships, work-study programs, and student loans. Over 85% of our students receive some form of financial assistance. Aid packages may combine multiple types of support.'
        },
        {
          question: 'How do I apply for financial aid?',
          answer: 'Complete the FAFSA (Free Application for Federal Student Aid) by March 1st for priority consideration. Some scholarships require additional applications. Our financial aid office is available to help with the process.'
        },
        {
          question: 'Are there scholarships specifically for incoming freshmen?',
          answer: 'Yes, we offer presidential scholarships ($10,000-$25,000), dean\'s scholarships ($5,000-$15,000), and departmental scholarships. All admitted students are automatically considered for merit scholarships based on their application.'
        },
        {
          question: 'Can international students receive financial aid?',
          answer: 'International students are eligible for merit-based scholarships but not federal financial aid. We offer limited institutional aid for international students with exceptional credentials. External scholarship opportunities are also available.'
        }
      ]
    },
    grad: {
      'Graduate Programs': [
        {
          question: 'What graduate programs do you offer?',
          answer: 'We offer Master\'s and Doctoral programs across multiple disciplines. Programs include traditional thesis-based degrees, professional master\'s degrees, and interdisciplinary programs. Each program is designed to provide advanced training and research opportunities.'
        },
        {
          question: 'What are the admission requirements for graduate programs?',
          answer: 'Requirements vary by program but generally include a bachelor\'s degree from an accredited institution, minimum GPA of 3.0, GRE scores (program-dependent), letters of recommendation, statement of purpose, and relevant work or research experience.'
        },
        {
          question: 'How long do graduate programs take to complete?',
          answer: 'Master\'s programs typically take 1.5-2 years for full-time students. Doctoral programs generally require 4-6 years depending on the field and research progress. Part-time options are available for select programs.'
        },
        {
          question: 'Is funding available for graduate students?',
          answer: 'Yes, most doctoral students receive full funding through research assistantships, teaching assistantships, or fellowships that cover tuition and provide a stipend. Master\'s students may qualify for assistantships, scholarships, or loans.'
        },
        {
          question: 'Can I work while pursuing a graduate degree?',
          answer: 'Many students work as research or teaching assistants, which provides both income and valuable experience. Some professional master\'s programs are designed for working professionals with evening or weekend classes. International students should consult visa regulations.'
        }
      ],
      'Research Opportunities': [
        {
          question: 'What research facilities are available?',
          answer: 'Our department features state-of-the-art laboratories, computing clusters, specialized equipment, and collaborative research spaces. Graduate students have access to all facilities necessary for their research, including shared instrumentation centers and libraries.'
        },
        {
          question: 'How do I find a research advisor?',
          answer: 'During the application process, you can indicate faculty members whose research interests align with yours. After admission, you\'ll have opportunities to meet with potential advisors and join research groups. Most students finalize their advisor selection by the end of their first year.'
        },
        {
          question: 'Are there opportunities for interdisciplinary research?',
          answer: 'Absolutely! We encourage interdisciplinary collaboration and have several cross-departmental research centers. Graduate students can form dissertation committees with faculty from multiple departments and participate in interdisciplinary research initiatives.'
        },
        {
          question: 'Can I present my research at conferences?',
          answer: 'Yes, we actively support graduate student participation in national and international conferences. The department provides travel grants to help cover conference expenses. Students are also encouraged to publish their research in peer-reviewed journals.'
        },
        {
          question: 'Are there industry partnerships or internship opportunities?',
          answer: 'We maintain strong connections with industry leaders and research institutions. Graduate students can participate in internships, collaborative research projects, and industry-sponsored research. These partnerships often lead to job opportunities after graduation.'
        }
      ]
    }
  };

  const faqs = faqData[category]?.[section] || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">{section}</h1>
      <p className="text-slate-600 mb-8">
        {category === 'undergrad' ? 'Undergraduate' : 'Graduate'} / {section}
      </p>

      {faqs.length > 0 ? (
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-lg px-6 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-slate-500">
                  {openIndex === index ? ' ▼' : ' ▶'}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-slate-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500">Select a section from the sidebar to view FAQs.</p>
      )}
    </div>
  );
}