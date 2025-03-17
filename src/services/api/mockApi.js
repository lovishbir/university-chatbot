// This simulates API calls that would connect to a real backend in production
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchChatbotResponses = async () => {
  await delay(300); // Simulate network delay
  return {
    success: true,
    data: {
      responses: {
        greeting: "Hello! How can I help you today?",
        farewell: "Thank you for chatting. Have a great day!",
        // More predefined responses would come from the server
      }
    }
  };
};

export const logChatInteraction = async (message, response) => {
  await delay(200);
  console.log('Logged chat interaction:', { message, response });
  return { success: true };
};

export const fetchUniversityInfo = async (category) => {
  await delay(500);
  
  const info = {
    admissions: {
      title: "Admissions Information",
      content: "Our university accepts applications for Fall, Spring, and Summer semesters."
    },
    courses: {
      title: "Course Offerings",
      content: "We offer undergraduate, graduate, and doctoral programs across various disciplines."
    },
    // Other categories would be available in a real API
  };
  
  return {
    success: true,
    data: info[category] || { title: "Information", content: "Please specify what information you need." }
  };
};