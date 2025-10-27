import { useState } from 'react';


export function FAQSidebar({ onSectionChange, activeSection }) {
  const [isUndergradOpen, setIsUndergradOpen] = useState(false);
  const [isGradOpen, setIsGradOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-50 p-6 min-h-screen border-r">
      <h2 className="text-xl font-bold mb-6">FAQ Navigation</h2>
      
      {/* Undergraduate Section */}
      <div className="mb-4">
        <button 
          onClick={() => setIsUndergradOpen(!isUndergradOpen)}
          className="w-full flex items-center justify-between font-semibold mb-2"
        >
          <span>Undergraduate</span>
          <span>{isUndergradOpen ? '▼' : '▶'}</span>
        </button>
        
        {isUndergradOpen && (
          <div className="ml-4 space-y-2">
            <button 
              onClick={() => onSectionChange('undergrad', 'Miscellaneous Questions')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Miscellaneous Questions' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Miscellaneous Questions
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Advising')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Advising' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Advising
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Registration')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Registration' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Registration
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Graduation')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Graduation' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Graduation
            </button>
          </div>
        )}
      </div>

      {/* Graduate Section */}
      <div className="mb-4">
        <button 
          onClick={() => setIsGradOpen(!isGradOpen)}
          className="w-full flex items-center justify-between font-semibold mb-2"
        >
          <span>Graduate</span>
          <span>{isGradOpen ? '▼' : '▶'} </span>
        </button>
        
        {isGradOpen && (
          <div className="ml-4 space-y-2">
            <button 
              onClick={() => onSectionChange('grad', 'Graduate Programs')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Graduate Programs' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Graduate Programs
            </button>
            <button 
              onClick={() => onSectionChange('grad', 'Research Opportunities')}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection.section === 'Research Opportunities' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Research Opportunities
            </button>
          </div>
        )}
      </div>

      {/* Home Button */}
      <button 
        onClick={() => onSectionChange('home', 'home')}
        className={`block w-full text-left px-3 py-2 rounded mt-4 ${
          activeSection.category === 'home' 
            ? 'bg-blue-100 text-blue-700' 
            : 'hover:bg-gray-200'
        }`}
      >
        Home
      </button>
    </aside>
  );
}

