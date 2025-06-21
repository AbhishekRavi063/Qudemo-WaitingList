import VideoDemoChatPopup from "./VideoDemoChatPopup";

const App = () => {



  return (
    <div style={{ background: 'black', width: '100vw' }}>
      <div className="bg-black flex flex-col min-h-screen">
        {/* Logo in top left */}
        <div className="mt-[-60px]  ml-[80px]">
          <img src="/mainlogo.png" alt="Logo" className="h-64 w-auto" />
        </div>
        {/* Grey div below logo */}
        <div
          className="mx-auto mt-[-40px] max-w-[1200px] w-full h-[550px] rounded-[40px] flex overflow-hidden"
          style={{
            backgroundColor: '#1d1d1d',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.015) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.01) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(255,255,255,0.012) 1px, transparent 1px),
              radial-gradient(circle at 10% 90%, rgba(255,255,255,0.02) 1px, transparent 1px),
              radial-gradient(circle at 90% 10%, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px, 5px 15px, 15px 5px, 8px 8px',
          }}
          
        >
          {/* Left side */}
          <div className="flex-1 flex flex-col justify-center ml-16 ">
            <h1 className="text-[70px] font-bold text-white mb-6 leading-tight max-w-[800px]">
              Meet Your AI Powered Demo Assistant
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-[800px]">
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
          <div className="flex-1 flex items-center justify-center ml-20 mb-[100px]">
            <div>
              <img 
                src="/round.png" 
                alt="Round Demo Assistant" 
                className=" h-[600px] ml-[120px] mt-[340px] object-contain transition-transform duration-300 ease-out"
              />
            </div>
          </div>
        </div>

             {/* Video Demo Chat Popup */}
             <h2 className="text-white text-5xl font-bold text-center mt-44 ">See how it works - Instantly</h2>
             <h2 className="text-white text-3xl font-bold text-center mt-20 ">Interact with a real Qudemo, like your buyer explore your product</h2>

             <div className="flex justify-center -mt-6 mb-8">
               <div className="w-[340px] h-4 bg-gradient-to-b from-transparent via-purple-500/60 to-purple-500/0 blur-2xl rounded-b-full"></div>
             </div>

          <div className="mt-20">
            <VideoDemoChatPopup />
          </div>
            

        {/* Second section */}
        <div className="mx-auto mt-[500px] max-w-[1200px] w-full h-[600px] rounded-[40px] flex">
          <div className="flex-1 flex flex-col justify-center pr-2 mt-32">
            <h1 className="text-[70px] font-bold text-white mb-6 leading-tight max-w-[800px]">
              Experience Seamless Product Discovery
            </h1>
            <p className="text-lg text-white mb-8 max-w-[680px]">
              Discover how our AI-Powered Demo Tool makes understanding products effortless. Just follow these simple steps to explore product features and get real-time answers instantly.
            </p>
            {/* 3 feature boxes */}
            <div className="flex gap-8 pt-20 ml-[-60px]">
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
                  className="w-[420px] h-[230px] rounded-[20px] flex items-center justify-center relative transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,255,255,0.25)] cursor-pointer"
                  style={{
                    backgroundColor: '#1d1d1d',
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.015) 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.01) 1px, transparent 1px),
                      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.012) 1px, transparent 1px),
                      radial-gradient(circle at 10% 90%, rgba(255,255,255,0.02) 1px, transparent 1px),
                      radial-gradient(circle at 90% 10%, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px, 5px 15px, 15px 5px, 8px 8px',
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

       
            {/* Footer image below the 3 horizontal boxes with button bottom left */}
            <div className="w-full mt-[200px] relative flex justify-center">
              <img src="/footer.jpg" alt="Footer Decorative" className="w-[1200px] max-w-full h-auto rounded-[20px] mb-[100px] mx-auto block" />
              <button
                className="absolute left-20 bottom-36 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 w-fit"
                style={{ minWidth: '162px', minHeight: '50px' }}
              >
                Get Early Access
              </button>
            </div>

            
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default App;
