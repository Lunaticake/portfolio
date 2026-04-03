import React, {useState, useEffect, useRef} from "react";
import {
  Main,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Imprint from "./components/Imprint";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    const [currentPage, setCurrentPage] = useState<string>('home');
    const sectionRef = useRef<string | null>(null);

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const handleNavigation = (page: string) => {
        setCurrentPage(page);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    useEffect(() => {
        if (currentPage === 'home' && sectionRef.current) {
            const section = sectionRef.current;
            sectionRef.current = null;
            
            // Use a small timeout to ensure the DOM has been updated
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [currentPage]);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange} onNavigate={handleNavigation} currentPage={currentPage} sectionRef={sectionRef}/>
        {currentPage === 'home' ? (
            <FadeIn transitionDuration={700}>
                <Main/>
                <Project/>
                <Contact/>
            </FadeIn>
        ) : currentPage === 'imprint' ? (
            <Imprint />
        ) : null}
        <Footer />
    </div>
    );
}

export default App;