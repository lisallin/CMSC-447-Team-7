import { useState } from 'react';
import './App.css';
import { FAQSidebar } from './components/FAQSidebar';
import { FAQContent } from './components/FAQContent';
import { HomePage } from './components/HomePage';
import ChatbotIcon from './components/Chatbot';
import AdminLoginButton from './components/AdminLogin';


function App() {
  const [activeSection, setActiveSection] = useState({
    category: 'home',
    section: 'home'
  });

  const handleSectionChange = (category, section) => {
    setActiveSection({ category, section });
  };

return (
<div className="flex h-full w-full overflow-hidden bg-white">
    {/* sidebar*/}
    <FAQSidebar
      onSectionChange={handleSectionChange}
      activeSection={activeSection}
    />
   
    {/* main content*/ }
    <main className="flex-1 p-8 overflow-y-auto relative">
      <AdminLoginButton />
      
      {activeSection.category === 'home' ? (
        <HomePage />
      ) : (
        <FAQContent
          category={activeSection.category}
          section={activeSection.section}
        />
      )}
    </main>
    <ChatbotIcon />
  </div>
);
}


export default App;


