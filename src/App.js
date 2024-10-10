// App.js
import React from 'react';
import Header from './components/Headermain'; // Adjust the path according to your project structure
import HeroSection from './components/HeroSection';
import ComparisonSection from './components/ComparisonSection';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ComparisonSection/>
      {/* Other components can go here */}
    </div>
  );
};

export default App;
