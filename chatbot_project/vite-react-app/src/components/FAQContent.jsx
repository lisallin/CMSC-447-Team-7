import { useState } from 'react';


export function FAQContent({ category, section }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    undergrad: {
      'Miscellaneous Questions': [
        {
          question: ' Where can I find out about general UMBC academic policies? Where can I find the requirements for graduation?', 
          answer: 'The Undergraduate catalog http://catalog.umbc.edu \nThe Division of Undergraduate Academic Affairs https://uaa.umbc.edu/ \nThe Registrar’s Office http://registrar.umbc.edu '
        },
        {
          question: 'What counts as academic misconduct? I am aware of academic misconduct that occurred in a class, what do I do?',
          answer: ' The UMBC policies on academic integrity and academic misconduct and the definition of misconduct.  If you are aware of academic misconduct that has occurred in one of your classes, please contact either the professor or a teaching assistant.'
        }
      ],
      'Advising': [
        {
          question: 'Advising',
          answer: 'Computer science and computer engineering majors who have passed their respective gateway requirements are assigned individual faculty advisors. Pre-gateway majors are advised by the advising staff. Their offices are located in the ITE Building in Rooms 203-206. For more information, please see the advising information provided by the Office of Undergraduate Student Services.'

        },
        {
          question: 'Who is my adviser?',
          answer: 'Declared CMSC or CMPE majors with under 30 credits are advised by the COEIT advising office. After 30 credits, majors receive a permanent adviser. You should receive an email from your adviser before the time to register for classes for the coming semester. If you have forgotten who your adviser is, contact the COEIT Advising office.'

        },
        {
          question: ' How often must I meet with my academic advisor?',
          answer: 'Once a semester at minimum. Degree-seeking students must meet with their academic advisor before they can register for the next semester’s courses (Fall and Spring semesters). To ensure that students do this, an electronic ‘advising hold’ is placed on the student’s account, which is lifted by the academic advisor after advising has occurred. You do not have to meet with an adviser before taking Summer or Winter session courses, or if you are in your final semester before graduation.'
        },
        {
          question: ' What do I need to do before showing up for my advising appointment?',
          answer: 'You should be familiar with the requirements for graduation and for completion of the major.\nYou can find general graduation requirements here: http://catalog.umbc.edu/content.php?catoid=6&navoid=233 \nCMSC requirements here: https://www.csee.umbc.edu/undergraduate/computer-science-bs/ \nCMPE requirements here: https://www.csee.umbc.edu/undergraduate/computer-engineering-bs/ \nYou can monitor your progress with ‘Degree Audit’ http://registrar.umbc.edu/services/degree-audit/ \n\nYou should arrive with a worksheet for the major filled out with courses you have already passed, and a list of courses you propose to take. Do not expect your adviser to do this work for you, it is your responsibility. Your adviser will mostly be concerned with your progress towards completing the requirements for the CSEE or CMPE major, but will be able to answer other questions you have (graduation, careers, etc), or at least be able to point you in the right direction to answers.'
        },
        {
          question: 'Where can I find advising about careers?',
          answer: 'Consult: your academic advisor http://www.umbc.edu/advising/'
        }
      ],
      'Registration': [
        {
          question: 'How do I manage classes? (add, drop, waitlist, register, graduation)',
          answer: 'For questions about registration, transfer courses, adding a class, dropping a class, wait lists, graduation, graduation requirements, or other general questions, please consult: \nThe Office of the Registrar http://registrar.umbc.edu'
        },
        {
          question: 'Why can’t I register for my classes?',
          answer: 'Have you been advised, and did your adviser clear you to register? All students must interact with their academic adviser each semester. Then, in order for the student to register, the adviser has to give ‘advising clearance’ in the SA system before the student can register.\n\nIs it too soon for you to be registering? Students may register for classes for the next semester only after a certain date called their ‘registration appointment’. These dates can be found on the Registrar’s web site here: http://registrar.umbc.edu/academic-calendar/registration-appointments/Registration dates are based on earned credits (not total credits), and students with more earned credits go first.\n\n Did you apply to graduate but not actually graduate? If you apply to graduate, you are automatically locked out of the registration system for future semesters. If you applied but did not graduate, you need to contact the Registrar’s Office and have them reactivate your account.\n\n Do you have a financial hold? You cannot register for classes if you have unpaid bills: this must be taken care of first.'
        },
        {
          question: 'Why can’t I register for a specific course?',
          answer: 'The course might require departmental consent, or you do not have all the prerequisites for the course. Sometimes a course you transferred in, thinking it qualifies as a prerequisite, may not have been deemed equivalent.'
        },
        {
          question: 'How do I get permission to enroll in a closed class?',
          answer: 'If a class is closed, then it has reached its capacity. You should select a different class for your schedule. Exceptions may be made for students graduating in the semester. See our wait list policy for more information.'
        },
        {
          question: ' How do I find out whether a class is an AH or SS?',
          answer: 'Go to the ‘Class Schedule’ link under ‘Academics’ on the UMBC home page, use the form to find the class you want, then click on it, the information is listed in the ‘Class Attributes’ box.'
        },
        {
          question: 'How do I find out what SS or AH classes are offered each semester?',
          answer: 'Go to the ‘Class Schedule’ link under ‘Academics’ on the UMBC home page. At the bottom of the form you can search for classes by Gen Ed type. Note that you have to fill in any two pieces of information in the top panel to make the search work.'
        },
        {
          question: 'I have taken Advanced Placement/International Baccalaureate/College-Level Examination Program exams. How can I receive credit?',
          answer: 'First, an official report of your score must be sent from the appropriate testing agency to the UMBC Office of Undergraduate Admissions. These scores will then be evaluated according to the standards listed in the UMBC Undergraduate Catalog.'
        },
        {
          question: ' I received course credit for Advanced Placement/International Baccalaureate/College-Level Examination Program exams at my previous institution. Is it possible to receive credit from UMBC as well?',
          answer: 'UMBC does not accept another institution’s assessment of AP/IB/CLEP exam scores for credit. In order for a student to receive credit for any of these exams, an official report of the student’s score must be sent directly from the appropriate testing agency to the UMBC Office of Undergraduate Admissions. These scores will then be evaluated according to the standards listed in the UMBC Undergraduate Catalog.'
        },
        {
          question: 'Do grades I receive when I take classes outside of UMBC count toward my GPA?',
          answer: ' Not usually. You receive credits toward the 120 credits needed to graduate (and toward the 45 upper level credits needed if the course is upper level), but only your grades in UMBC courses are used in your UMBC GPA calculation.'
        },
        {
          question: 'Can I take a course at a community college during my last semester?',
          answer: 'Yes, as long as you have not already transferred in the maximum of 60 credits from a 2-year institution, and you will satisfy the requirement of 30 credits taken at UMBC.'
        }
      ],
      'Graduation': [
        {
          question: 'How can I determine my progress toward graduation?\nHow can I see how my courses transferred in?\nHow can I see an unofficial transcript?',
          answer: 'You can use the Degree Audit function from myUMBC > Topics > Advising and Student Support.\nInstructions: http://registrar.umbc.edu/services/degree-audit/ \n\nNote that Degree Audit fills in all the courses you are currently enrolled in, assuming you will pass them, and uses these classes in calculating credits taken and progress towards graduation.'
        },
        {
          question: 'When do I have to apply for graduation?',
          answer: 'The deadlines to apply for graduation are: May Graduation: February 15; August Graduation: June 15 and December Graduation: September 15.\nAdditional information can be found on the registrar’s page on graduate requirements.'
        },
        {
          question: 'Can I still ‘walk’ in the graduation ceremony if I have not completed all the requirements for my major or for UMBC?',
          answer: 'Starting in the Fall 2015 (December graduation) students will only be allowed to participate in one graduation ceremony and will only be allowed to ‘walk’ if they complete all the requirements for graduation with courses they are currently enrolled in.'
        }
      ]
    },
    grad: {
      'General Questions': [
        {
          question: 'What are the application deadlines?',
          answer: ' International Applicants (any applicant who has attended or is attending a foreign school):\nFall Semester:       January 1\nSpring Semester:   June 1 of the prior calendar year\n\nDomestic Applicants (U.S. Citizens & U.S.-educated permanent residents):\nIf seeking financial assistance:\nFall Semester:        January 1\nSpring Semester:   June 1 of the prior calendar year\n\nIf not seeking financial assistance:\nFall Semester:       June 1\nSpring Semester:  November 1'
        },
        {
          question: 'What if I miss the deadline? Will my application still be reviewed?',
          answer: ' The department will accept late applications; however, it will not guarantee that they will be reviewed. If an application is received too late, the department will notify the applicant via email and give them a chance to defer their application. The applicant may defer their application only ONCE for up to one year. The email will let the applicant know the deadline by which they must respond in order to have their deferment request processed. Failure to complete the application by the deadline of the semester to which it was deferred will automatically result in denial of the application.'
        },
        {
          question: 'What tests are required for admission into the MS and PhD programs?',
          answer: 'Applicants must submit results of the GRE verbal, quantitative, and analytical reasoning tests. No subject area test is required, but good subject area test scores will greatly strengthen an application. In addition, students who graduated from foreign undergraduate institutions (even from English-speaking countries) must submit a TOEFL score which meets the graduate school’s minimum requirements (for the internet-based test the minimum is 80).'
        },
        {
          question: 'What is the Institution Code for UMBC? What are the department codes for CSEE?',
          answer: 'Yes, most doctoral students receive full funding through research assistantships, teaching assistantships, or fellowships that cover tuition and provide a stipend. Master\'s students may qualify for assistantships, scholarships, or loans.'
        },
        {
          question: 'Can I work while pursuing a graduate degree?',
          answer: 'Many students work as research or teaching assistants, which provides both income and valuable experience. Some professional master\'s programs are designed for working professionals with evening or weekend classes. International students should consult visa regulations.'
        },
        {
          question: 'What is the Institution Code for UMBC? What are the department codes for CSEE?',
          answer: 'UMBC’s institution code is 5835. You do not need to use a department code, as TOEFL and GRE score reports must be sent directly to the graduate school, NOT the department. Leave the department code section blank, if possible. If you are unable to leave the program code blank, then use the following:\nComputer Science = 78\nComputer Engineering = 99\nElectrical Engineering = 66\nKeep in mind that when scores are sent to the department, they will need to be forwarded to the graduate school and this takes time, so your file will be processed faster if your scores are sent directly to the graduate school.'
        },
        {
          question: 'I wish to be considered for financial support — What should I do ? I have been accepted into the MS or PhD program but I was not offered financial support. What are my chances for obtaining support? Should I do anything to increase my chances of obtaining support? ',
          answer: 'Yes, most doctoral students receive full funding through research assistantships, teaching assistantships, or fellowships that cover tuition and provide a stipend. Master\'s students may qualify for assistantships, scholarships, or loans.'
        },
        {
          question: 'I have applied or I have been admitted, but I would like to delay my matriculation. May I do so, and if so, what should I do?',
          answer: 'To delay matriculation, you must submit a request in writing to the department. Such requests are typically granted, but only once and only for up to one year. After one year, or on the second such request, a new application must be submitted, with an additional application fee. Please note that offers for financial support will not be carried over, nor will applications which delay matriculation be considered anew for support.'
        },
        {
          question: 'I submitted an application without the application fee. Will my application be reviewed?',
          answer: 'No. The admissions committee will never see or even know about your application. The Graduate School withholds from the Department all applications submitted without the mandatory application fee. Every year, hundreds of applicants fail to understand this rule. In extreme hardship cases, the applicant may petition the Graduate School to waive the required fee. Such waivers are rarely granted. We understand that for some people a $50 application fee is a tremendous barrier. On the other hand, reviewing each application costs UMBC more than $50, and University policy prevents us from reviewing applications without the fee.'
        },
        {
          question: 'What are the expectations for admission?',
          answer: 'Yes, most doctoral students receive full funding through research assistantships, teaching assistantships, or fellowships that cover tuition and provide a stipend. Master\'s students may qualify for assistantships, scholarships, or loans.'
        },
        {
          question: 'How many credit hours are required for the MS degree?',
          answer: 'The requirements vary based on whether you chose the thesis or the non-thesis options. Please carefully read the catalog for detailed descriptions of all degree requirements.'
        },
        {
          question: 'What if I\'m a part time student or if I plan to graduate online?',
          answer: 'Further details can be found by following these links: https://www.csee.umbc.edu/csee-graduate-programs-for-part-time-students/ \nPart Time Students: \nOnline Graduation Orientation: https://www.csee.umbc.edu/online-orientation/ '
        }
      ],
      'Computer Science Program Questions': [
        {
          question: 'How can I request a GRE Waiver? The catalog says that the Department may waive the GRE requirement.  Must I really take the GRE’s?',
          answer: 'Computer Science applicants, please read the following FAQ before applying for the CS GRE Waiver. (Link to form provided below).'
        },
        {
          question: 'Why does the Computer Science Graduate program require the GRE for admission?',
          answer: 'We receive applications from all over the world, often from unfamiliar universities. The GRE scores are standardized data that allows us to compare applicants with very different backgrounds.'
        },
        {
          question: 'What is the cutoff for GRE scores?',
          answer: 'There is no official cutoff for GRE scores. However, admission is competitive, so all other things being equal, the applicant with higher scores has the advantage. For your reference, the top 64 applicants for the Fall 2009 semester had average GRE scores of 544 Verbal, 756 Math and 3.97 Analytic.'
        },
        {
          question: 'Can I apply for a GRE waiver?',
          answer: 'Some applicants may request waivers. See the GRE Waiver Request Form for detailed instructions. Note that applicants seeking financial support must have GRE scores. Also, qualifying for a GRE Waiver Request does not imply that your request will be automatically approved. Your request will be approved only if the computer science graduate admissions committee agrees that GRE scores are not needed to make an admissions decision in your case.'
        },
        {
          question: 'Why is the deadline for requesting a GRE Waiver so early? What if I send in a request after the deadline?',
          answer: 'The deadlines are early enough so that if your request if denied, then you would still have time to take the GRE. If you send in a request after the deadline and your request is denied, then you will have to defer your application.Please complete the CS GRE waiver request form  or the CE/EE GRE waiver request form . The form must be submitted by March 1st for fall applicants and by September 1st for spring applicants.'
        },
        {
          question: 'I have completed a BS/MS degree in a closely-related field to Computer Science, and I have some computer experience. Can I be admitted into the MS program?',
          answer: 'Yes, we actively support graduate student participation in national and international conferences. The department provides travel grants to help cover conference expenses. Students are also encouraged to publish their research in peer-reviewed journals.'
        },
        {
          question: 'I have a degree in a field not related to CS, but have some experience with computers. Can I be admitted to the MS program in CS?',
          answer: ' An applicant who has not completed substantially all of the courses listed in response to the previous question will generally not be accepted as a degree-seeking student in our graduate program. However, such a student is invited to take these courses as a “special student” and to reapply after taking them.'
        }
      ]
    },
    faculty: {
      'Faculty Questions': [
        {
          question: 'Sample faculty question',
          answer: 'Sample faculty answer'
        }
      ]
    }
  };

  const faqs = faqData[category]?.[section] || [];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // Helper function to parse text and convert URLs to links
  const parseAnswer = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline break-all"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

 return (
    <div className="max-w-6xl">
      <h1 className="mb-2 text-3xl font-bold text-slate-900">{section}</h1>
      <p className="text-slate-600 mb-8">
        {category === 'undergrad' ? 'Undergraduate' : category === 'grad' ? 'Graduate' : 'Faculty'} / {section}
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
                <div className="pb-4 text-slate-700 whitespace-pre-line">
                  {parseAnswer(faq.answer)}
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