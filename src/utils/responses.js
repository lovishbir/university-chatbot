import { 
    MAIN_OPTIONS, 
    ADMISSION_OPTIONS, 
    COURSE_OPTIONS, 
    FEES_OPTIONS, 
    CAMPUS_OPTIONS, 
    CONTACT_OPTIONS 
  } from '../constants/chatbotOptions';
  
  export const getInitialMessage = () => {
    return {
      text: "Hello! I'm the University Assistant. How can I help you today?",
      options: MAIN_OPTIONS
    };
  };
  
  export const getPredefinedOptions = () => {
    return MAIN_OPTIONS;
  };
  
  export const getResponseForIntent = (intent) => {
    const responses = {
      // Greeting responses
      greeting: {
        text: "Hello! How can I assist you with university information today?",
        options: MAIN_OPTIONS
      },
      
      // Main categories
      "Admission Information": {
        text: "Our university accepts applications for Fall, Spring, and Summer semesters. Would you like information about undergraduate or graduate admissions?",
        options: ADMISSION_OPTIONS
      },
      
      "Course Offerings": {
        text: "We offer a wide range of programs across multiple disciplines. Which faculty or program are you interested in?",
        options: COURSE_OPTIONS
      },
      
      "Tuition & Fees": {
        text: "Tuition varies by program and residency status. What specific information are you looking for?",
        options: FEES_OPTIONS
      },
      
      "Campus Facilities": {
        text: "Our campus features modern classrooms, research labs, libraries, sports facilities, and student housing. What would you like to know more about?",
        options: CAMPUS_OPTIONS
      },
      
      "Contact Information": {
        text: "You can reach our main office at (555) 123-4567 or email info@university.edu. Specific departments have their own contact information. Which department do you need?",
        options: CONTACT_OPTIONS
      },
      
      // Specific intents
      admission: {
        text: "Our admissions process involves submitting an online application, transcripts, and possibly standardized test scores. Applications for the Fall semester typically open in October. Would you like more specific information?",
        options: ADMISSION_OPTIONS
      },
      
      courses: {
        text: "We offer undergraduate, graduate, and doctoral programs across various disciplines. Our most popular programs include Computer Science, Business Administration, and Psychology.",
        options: COURSE_OPTIONS
      },
      
      fees: {
        text: "Tuition for in-state undergraduate students is approximately $10,000 per year, while out-of-state students pay around $25,000. Various scholarships and financial aid options are available.",
        options: FEES_OPTIONS
      },
      
      campus: {
        text: "Our main campus spans 200 acres and includes modern academic buildings, research facilities, student housing, and recreational areas. We also have satellite campuses downtown and in the neighboring city.",
        options: CAMPUS_OPTIONS
      },
      
      contact: {
        text: "Our main contact number is (555) 123-4567, and our email is info@university.edu. For specific departments, you can visit our directory on the university website.",
        options: CONTACT_OPTIONS
      },
      
      events: {
        text: "We host various academic and cultural events throughout the year, including conferences, workshops, performances, and sports competitions. Check our events calendar for upcoming activities.",
        options: ["Academic Events", "Cultural Events", "Sports Events", "Calendar"]
      },
      
      faculty: {
        text: "Our university employs over 500 faculty members who are experts in their fields. Many have received prestigious awards and grants for their research and teaching excellence.",
        options: ["Faculty Directory", "Research Highlights", "Department Chairs", "Office Hours"]
      },
      
      schedule: {
        text: "The academic year consists of Fall and Spring semesters, each 15 weeks long, plus optional Summer sessions. Classes typically run Monday through Friday, with some evening and weekend options available.",
        options: ["Academic Calendar", "Class Schedule", "Final Exam Schedule", "Registration Dates"]
      },
      
      deadlines: {
        text: "Application deadlines vary by program and semester. For Fall admission, most undergraduate applications are due by January 15, while graduate program deadlines range from December to March.",
        options: ["Undergraduate Deadlines", "Graduate Deadlines", "Transfer Deadlines", "International Deadlines"]
      },
      
      requirements: {
        text: "Admission requirements typically include academic transcripts, standardized test scores (SAT/ACT for undergraduates, GRE/GMAT for graduates), letters of recommendation, and a personal statement.",
        options: ["Undergraduate Requirements", "Graduate Requirements", "International Requirements", "Transfer Requirements"]
      },
      
      international: {
        text: "International students need to submit additional documents including proof of English proficiency (TOEFL/IELTS), financial statements, and visa documentation. We offer dedicated support services for international students.",
        options: ["English Requirements", "Visa Information", "International Scholarships", "Support Services"]
      },
      
      transfer: {
        text: "Transfer students can receive credit for courses completed at accredited institutions. We evaluate transcripts on a course-by-course basis, and generally accept credits with grades of C or higher.",
        options: ["Transfer Credit Policy", "Articulation Agreements", "Transfer Scholarships", "Apply as Transfer"]
      },
      
      online: {
        text: "We offer several fully online degree programs and numerous hybrid courses. Our online learning platform provides access to lectures, materials, and collaboration tools for remote students.",
        options: ["Online Degrees", "Hybrid Programs", "Technical Requirements", "Online Student Support"]
      },
      
      career: {
        text: "Our Career Center offers job placement assistance, resume workshops, interview preparation, and networking opportunities. We have strong relationships with employers across industries.",
        options: ["Career Services", "Job Placement Rates", "Internship Opportunities", "Alumni Network"]
      },
      
      thanks: {
        text: "You're welcome! I'm happy to help. Is there anything else you'd like to know about our university?",
        options: MAIN_OPTIONS
      },
      
      goodbye: {
        text: "Thank you for chatting with me today. If you have more questions later, feel free to return anytime. Have a great day!",
        options: ["Start New Conversation"]
      },
      
      // Specific admission options
      "Undergraduate Admissions": {
        text: "For undergraduate admissions, you'll need to submit your application through our online portal, along with high school transcripts, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement.",
        options: ["Application Process", "Requirements", "Deadlines", "Scholarships"]
      },
      
      "Graduate Admissions": {
        text: "Graduate admission requirements vary by program but generally include a bachelor's degree, GRE/GMAT scores, letters of recommendation, statement of purpose, and sometimes relevant work experience.",
        options: ["Master's Programs", "Doctoral Programs", "Application Process", "Funding Opportunities"]
      },
      
      "Application Deadlines": {
        text: "For Fall semester, undergraduate applications are due by January 15 (Early Decision) or March 1 (Regular Decision). Graduate program deadlines vary, with most between December 1 and February 1.",
        options: ["Early Decision", "Regular Decision", "Spring Deadlines", "Program-Specific Deadlines"]
      },
      
      "Admission Requirements": {
        text: "General requirements include academic transcripts, standardized test scores, letters of recommendation, and personal statements. Some programs have additional requirements like portfolios or interviews.",
        options: ["Academic Requirements", "Test Score Requirements", "International Requirements", "Transfer Requirements"]
      },
      
      "International Students": {
        text: "International applicants need to demonstrate English proficiency through TOEFL/IELTS scores, provide financial documentation, and meet visa requirements. We offer specialized orientation programs for international students.",
        options: ["English Requirements", "Visa Process", "Financial Requirements", "International Support"]
      },
      
      // Specific course options
      "Arts & Humanities": {
        text: "Our Arts & Humanities faculty offers programs in English, History, Philosophy, Languages, Art, Music, Theater, and more. These programs emphasize critical thinking, creativity, and communication skills.",
        options: ["Bachelor's Programs", "Master's Programs", "Faculty", "Career Outcomes"]
      },
      
      "Science & Engineering": {
        text: "The Science & Engineering departments offer degrees in Biology, Chemistry, Physics, Computer Science, Electrical Engineering, Mechanical Engineering, and related fields, with strong research opportunities.",
        options: ["STEM Programs", "Research Labs", "Internship Opportunities", "Faculty Experts"]
      },
      
      "Business": {
        text: "The Business School offers programs in Business Administration, Accounting, Finance, Marketing, Management, and Entrepreneurship, with opportunities for internships and industry connections.",
        options: ["BBA Programs", "MBA Programs", "Specializations", "Business Partnerships"]
      },
      
      "Medicine": {
        text: "Our Medical School offers MD programs, as well as degrees in Nursing, Public Health, Physical Therapy, and other health professions, with clinical rotations at affiliated hospitals.",
        options: ["MD Program", "Nursing Programs", "Allied Health", "Research Opportunities"]
      },
      
      "Law": {
        text: "The Law School offers JD programs with specializations in various legal fields, including corporate law, criminal law, environmental law, and international law, with moot court and clinic opportunities.",
        options: ["JD Program", "LLM Programs", "Legal Clinics", "Bar Passage Rates"]
      },
      
      "View All Programs": {
        text: "We offer over 100 undergraduate majors and 80 graduate programs across our colleges and schools. You can view the complete list on our academic programs webpage.",
        options: ["Undergraduate Catalog", "Graduate Catalog", "Online Programs", "Certificate Programs"]
      }
    };
    
    return responses[intent] || getFallbackResponse();
  };
  
  export const getFallbackResponse = () => {
    return {
      text: "I'm not sure I understand. Could you rephrase your question, or select one of these common topics?",
      options: MAIN_OPTIONS
    };
  };