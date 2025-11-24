import { useState } from 'react';


export function FAQSidebar({ onSectionChange, activeSection }) {
  const [isUndergradOpen, setIsUndergradOpen] = useState(false);
  const [isGradOpen, setIsGradOpen] = useState(false);
  const [isFacultyOpen, setIsFacultyOpen] = useState(false);

  return (
<aside 
  className="w-64 p-6 h-screen overflow-y-auto border-r-4 flex-shrink-0"
  style={{
    backgroundImage: 'url(https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/05/maryland-flag-background-gold.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
      <img src="https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/08/UMBC-justSHIELD-color-768x883.png" alt="FAQ icon" className="w-7 h-7" />
      FAQ Navigation
      </h2>
      
      {/* Undergraduate Section */}
      <div className="mb-4">
        <button 
          onClick={() => setIsUndergradOpen(!isUndergradOpen)}
          className="w-full flex items-center justify-between font-semibold mb-2 bg-yellow-50 hover:bg-yellow-200 px-3 py-2 rounded transition-all"
        >
          <span>Undergraduate</span>
          <span>{isUndergradOpen ? '▼' : '▶'}</span>
        </button>
        
        {isUndergradOpen && (
          <div className="ml-4 space-y-2">
            <button 
              onClick={() => onSectionChange('undergrad', 'Miscellaneous Questions')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Miscellaneous Questions' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              Miscellaneous Questions
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Advising')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Advising' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              Advising
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Registration')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Registration' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              Registration
            </button>
            <button 
              onClick={() => onSectionChange('undergrad', 'Graduation')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Graduation' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
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
          className="w-full flex items-center justify-between font-semibold mb-2 bg-yellow-50 hover:bg-yellow-200 px-3 py-2 rounded transition-all"
        >
          <span>Graduate</span>
          <span>{isGradOpen ? '▼' : '▶'} </span>
        </button>
        
        {isGradOpen && (
          <div className="ml-4 space-y-2">
            <button 
              onClick={() => onSectionChange('grad', 'General Questions')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'General Questions' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              General Questions
            </button>
            <button 
              onClick={() => onSectionChange('grad', 'Computer Science Program Questions')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Computer Science Program Questions' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              Computer Science Program Questions
            </button>
          </div>
        )}
      </div>

      {/* Faculty Section */}
      <div className="mb-4">
        <button 
          onClick={() => setIsFacultyOpen(!isFacultyOpen)}
          className="w-full flex items-center justify-between font-semibold mb-2 bg-yellow-50 hover:bg-yellow-200 px-3 py-2 rounded transition-all"
        >
          <span>Faculty</span>
          <span>{isFacultyOpen ? '▼' : '▶'}</span>
        </button>
        
        {isFacultyOpen && (
          <div className="ml-4 space-y-2">
            <button 
              onClick={() => onSectionChange('faculty', 'Faculty Questions')}
              className={`block w-full text-left px-3 py-2 rounded transition-all hover:underline ${
                activeSection.section === 'Faculty Questions' 
                  ? 'bg-yellow-200 font-bold' 
                  : 'bg-yellow-50 hover:bg-yellow-200'
              }`}
            >
              Faculty Questions
            </button>
          </div>
        )}
      </div>

      {/* Home Button */}
      <button 
        onClick={() => onSectionChange('home', 'home')}
        className={`block w-full text-left px-3 py-2 rounded mt-4 transition-all hover:underline ${
          activeSection.category === 'home' 
            ? 'bg-yellow-200 font-bold' 
            : 'bg-yellow-50 hover:bg-yellow-200'
        }`}
      >
        Home
      </button>
    </aside>
  );
}