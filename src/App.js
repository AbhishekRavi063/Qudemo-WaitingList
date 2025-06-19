import { useState, useEffect } from 'react';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const style = document.createElement('style');
    style.textContent = `
      @keyframes breathing {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
      .animate-breathing {
        animation: breathing 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ background: 'black', minHeight: '100vh', width: '100vw' }}>
      <div className="bg-black flex flex-col min-h-screen">
        {/* Logo in top left */}
        <div className="mt-[-40px]  ml-[80px]">
          <img src="/mainlogo.png" alt="Logo" className="h-64 w-auto" />
        </div>
        {/* Grey div below logo */}
        <div
          className="mx-auto mb-20 max-w-[1200px] w-full h-[600px] rounded-[40px] flex"
          style={{
            backgroundColor: '#2a2a2a',
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06) 1px, transparent 1px),
              radial-gradient(circle at 40% 60%, rgba(255,255,255,0.04) 1px, transparent 1px),
              radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '25px 25px',
            backgroundPosition: '0 0, 12px 12px, 6px 18px, 18px 6px',
          }}
        >
          {/* Left side */}
          <div className="flex-1 flex flex-col justify-center pl-16 pr-2">
            <h1 className="text-[70px] font-bold text-white mb-6 leading-tight max-w-[650px]">
              Meet Your AI-Powered Demo Assistant
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-[550px]">
              Engage your leads with an AI-powered demo that answers questions in real-time and captures intent instantly.
            </p>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg  transition-colors duration-200 w-fit"
              style={{ minWidth: '162px', minHeight: '50px' }}
            >
              Get Early Access
            </button>
          </div>
          
          {/* Right side - image */}
          <div className="flex-1 flex items-center justify-center pl-20 mb-[100px]">
            <div className="animate-breathing">
              <img 
                src="/round.png" 
                alt="Round Demo Assistant" 
                className="w-80 h-80 object-contain transition-transform duration-300 ease-out"
                style={{
                  transform: `translateY(${Math.min(scrollY, 1200) * 0.7}px)`,
                }}
              />
            </div>
          </div>
        </div>
        {/* Second section */}
        <div className="mx-auto mt-[300px] max-w-[1200px] w-full h-[600px] rounded-[40px] flex">
          <div className="flex-1 flex flex-col justify-center pr-2 mt-32">
            <h1 className="text-[70px] font-bold text-white mb-6 leading-tight max-w-[800px]">
              Experience Seamless Product Discovery
            </h1>
            <p className="text-lg text-white mb-8 max-w-[680px]">
              Discover how our AI-Powered Demo Tool makes understanding products effortless. Just follow these simple steps to explore product features and get real-time answers instantly.
            </p>
            {/* 3 feature boxes */}
            <div className="flex gap-10 pt-20">
              {[{
                icon: "/star.png",
                title: "Record Demo",
                desc: "Create a quick demo video showcasing your product's key features."
              }, {
                icon: "/upload.png",
                title: "Product Knowledge",
                desc: "Add essential product information to answer buyer questions in real-time."
              }, {
                icon: "/rocket.png",
                title: "Launch Qudemo",
                desc: "Engage your buyers with easy, interactive demos powered by AI."
              }].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[400px] h-[250px] rounded-[20px] flex items-center justify-center relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,255,255,0.25)] cursor-pointer"
                  style={{
                    backgroundColor: '#2a2a2a',
                    backgroundImage: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 1px, transparent 1px),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.06) 1px, transparent 1px),
                      radial-gradient(circle at 40% 60%, rgba(255,255,255,0.04) 1px, transparent 1px),
                      radial-gradient(circle at 60% 40%, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '25px 25px',
                    backgroundPosition: '0 0, 12px 12px, 6px 18px, 18px 6px',
                  }}
                >
                  <span className="absolute top-5 left-5 w-14 h-14 rounded-full bg-purple-600 shadow-lg border-2 border-purple-700 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                  </span>
                  <div className="flex flex-col items-start mt-14 pl-6">
                    <h2 className="text-white text-3xl font-bold mb-2 text-left">{item.title}</h2>
                    <p className="text-gray-300 text-base text-left max-w-[90%]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Footer image below the 3 horizontal boxes */}
            <div className="w-full flex justify-center mt-[200px]">
              <img src="/footer.png" alt="Footer Decorative" className="w-[1200px] max-w-full h-auto rounded-[20px] mb-[100px]" />
            </div>
          </div>
        </div>
       
      </div>
        <div className="w-full flex pl-[240px] pt-[225px] ">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg  transition-colors duration-200 w-fit"
            style={{ minWidth: '162px', minHeight: '50px' }}
          >
            Get Early Access
          </button>
        </div>
    </div>
  );
};

export default App;
