
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Instagram, 
  Facebook,
  Skull,
  Flame,
  ArrowRight,
  Activity,
  Trophy,
  ZapOff,
  Dumbbell,
  Droplets,
  CreditCard
} from 'lucide-react';
import { Flavor, Product } from './types.ts';

const VAD_PRODUCT: Product = {
  id: 'vad-stim-free-original',
  name: 'V.A.D. STIMULANT FREE PREWORKOUT FORMULA',
  tagline: 'GET BIG, GET STRONG, GET VEINY',
  price: 49.99,
  description: 'Unleash absolute anarchy in your bloodstream. This isnt just a preworkout; its a vascular transformation. Formulated with clinical doses of L-Citrulline, Betaine Nitrate, and Glycerol to force-feed your muscles and create skin-splitting pumps that defy logic.',
  flavors: ['Consensual Grape', 'Juicy Jiggle Juice'],
  image: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/608700837_868241375797604_2790770691374060399_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQ9Cqs0_HjAQ7kNvwEbg4hO&_nc_oc=Adk0zmiNFyO8sx5vOO3j9_rVw062D8MNZO_S7Wv3P2VKvz5z-TCFyx1jtZp0ghkX5WAR7Tg_0E6UChUzkrS1lZRZ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=KOuwNGCIIxb5MzXcqhCVQw&oh=00_Afqp2dKV98LBd0-aS3U1gD6w7Ch39N96JGt_Qxk-X1pHOw&oe=697CD236'
};

const SupplementFacts: React.FC = () => (
  <div className="bg-white text-black p-4 md:p-8 font-sans border-2 md:border-4 border-black w-full max-w-2xl mx-auto shadow-[6px_6px_0px_#E31B23] md:shadow-[10px_10px_0px_#E31B23]">
    <h3 className="text-2xl md:text-4xl font-black border-b-4 md:border-b-8 border-black pb-1 mb-1 leading-none uppercase">Supplement Facts</h3>
    <div className="flex flex-col md:flex-row justify-between text-[10px] md:text-sm font-bold border-b border-black mb-1 pb-1">
      <div className="flex flex-col">
        <span>Serving Size: 1 Scoop (10.4 g) / 2 Scoops (20.8 g)</span>
        <span>Servings Per Container: 30 / 15</span>
      </div>
    </div>
    
    <div className="grid grid-cols-12 text-[9px] md:text-xs font-black border-b-2 md:border-b-4 border-black mb-1 py-1 uppercase italic">
      <div className="col-span-6">Amount Per Serving</div>
      <div className="col-span-3 text-center">1 Scoop</div>
      <div className="col-span-3 text-center">2 Scoops</div>
    </div>

    {[
      { name: 'L-Citrulline', s1: '4,000 mg', s2: '8,000 mg', dv: '†' },
      { name: 'Betaine Anhydrous', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Taurine', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Glycerol Monostearate', s1: '1,500 mg', s2: '3,000 mg', dv: '†' },
      { name: 'Agmatine Sulfate', s1: '500 mg', s2: '1,000 mg', dv: '†' },
      { name: 'Betaine Nitrate', s1: '1,000 mg', s2: '2,000 mg', dv: '†' },
      { name: 'Vitamin C (as Ascorbic Acid)', s1: '150 mg', s2: '300 mg', dv: '167%/334%' },
      { name: 'Sodium (as Sodium Chloride)', s1: '200 mg', s2: '400 mg', dv: '9%/18%' },
      { name: 'Potassium (as Potassium Citrate)', s1: '95 mg', s2: '190 mg', dv: '2%/4%' },
      { name: 'Magnesium (as Citrate Anhydrous)', s1: '30 mg', s2: '60 mg', dv: '7%/14%' },
    ].map((item, idx) => (
      <div key={idx} className="grid grid-cols-12 border-b border-black text-[8px] md:text-xs py-1 font-bold items-center">
        <div className="col-span-6">{item.name}</div>
        <div className="col-span-3 text-center border-l border-black/10">{item.s1}</div>
        <div className="col-span-3 text-center border-l border-black/10">{item.s2}</div>
      </div>
    ))}

    <div className="text-[8px] md:text-[10px] py-1 border-b border-black font-bold italic">
      † Daily Value (DV) not established. Percent Daily Values are based on a 2,000 calorie diet.
    </div>
    
    <div className="text-[8px] md:text-[10px] mt-2 font-bold leading-tight">
      <span className="uppercase">Other Ingredients:</span> Natural and artificial flavors, silicon dioxide, sucralose.
    </div>

    <div className="text-[8px] md:text-[10px] mt-2 font-bold leading-tight">
      <span className="uppercase">Directions:</span> Mix 1-2 scoops with 12–20 oz of water. Consume 20–30 minutes before training.
    </div>

    <div className="border border-black p-1 mt-4 text-[7px] md:text-[9px] font-black leading-tight uppercase">
      These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
    </div>
  </div>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor>(VAD_PRODUCT.flavors[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blood-red selection:text-white font-['Inter'] overflow-x-hidden">
      <div className="fixed inset-0 z-[-1]" style={{ backgroundImage: `url('data:image/jpeg;base64,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')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter: 'brightness(1.0)' }}></div>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[70] transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-blood-red/40 py-2' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative">
              <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/608700837_868241375797604_2790770691374060399_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQ9Cqs0_HjAQ7kNvwEbg4hO&_nc_oc=Adk0zmiNFyO8sx5vOO3j9_rVw062D8MNZO_S7Wv3P2VKvz5z-TCFyx1jtZp0ghkX5WAR7Tg_0E6UChUzkrS1lZRZ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=KOuwNGCIIxb5MzXcqhCVQw&oh=00_Afqp2dKV98LBd0-aS3U1gD6w7Ch39N96JGt_Qxk-X1pHOw&oe=697CD236" alt="V.A.D Logo" className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 shadow-[3px_3px_0px_#fff] md:shadow-[4px_4px_0px_#fff]" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-black text-lg md:text-2xl tracking-tighter uppercase italic text-white leading-none">Veiny Ah Dih Supplements</span>
              <span className="text-[7px] md:text-[9px] font-black text-white/40 tracking-[0.2em] md:tracking-[0.4em] uppercase">Get Big, Get Strong, Get VEINY</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 md:space-x-10">
            {['Home', 'The Formula', 'Facts', 'Connect'].map((link) => (
              <button 
                key={link} 
                onClick={() => scrollToSection(link === 'Facts' ? 'dosage-facts' : link === 'The Formula' ? 'the-formula' : link.toLowerCase().replace(' ', '-'))}
                className="text-[10px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.25em] uppercase hover:text-blood-red transition-all italic text-white"
              >
                {link}
              </button>
            ))}
            <button className="relative group p-2">
              <ShoppingBag strokeWidth={2.5} className="text-white group-hover:text-blood-red transition-colors w-5 h-5 md:w-[22px] md:h-[22px]" />
              <span className="absolute -top-1 -right-1 bg-blood-red text-[8px] font-black w-4 h-4 md:w-5 md:h-5 flex items-center justify-center border-2 border-black rotate-12 text-white">0</span>
            </button>
          </div>
          <button className="lg:hidden p-2 text-white bg-white/5 border border-white/10" onClick={() => scrollToSection('connect')} aria-label="Menu">
            <Skull size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          <img 
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/608700837_868241375797604_2790770691374060399_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQ9Cqs0_HjAQ7kNvwEbg4hO&_nc_oc=Adk0zmiNFyO8sx5vOO3j9_rVw062D8MNZO_S7Wv3P2VKvz5z-TCFyx1jtZp0ghkX5WAR7Tg_0E6UChUzkrS1lZRZ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=KOuwNGCIIxb5MzXcqhCVQw&oh=00_Afqp2dKV98LBd0-aS3U1gD6w7Ch39N96JGt_Qxk-X1pHOw&oe=697CD236" 
            alt="Intense Gym" 
            className="w-full h-full object-cover grayscale brightness-[0.1] contrast-150 scale-105"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
          <div className="space-y-4 md:space-y-6 max-w-5xl">
            <div className="flex flex-col items-center space-y-2 md:space-y-4 mb-4 md:mb-8">
               <span className="text-blood-red font-black text-sm md:text-3xl tracking-[0.2em] md:tracking-[0.4em] uppercase italic drop-shadow-[0_0_10px_#E31B23] animate-pulse">
                {VAD_PRODUCT.tagline}
              </span>
              <div className="h-0.5 md:h-1 w-24 md:w-48 bg-blood-red shadow-[0_0_15px_#E31B23]"></div>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-creepster leading-[0.9] md:leading-[0.85] text-white uppercase drop-shadow-[5px_5px_0px_#E31B23] md:drop-shadow-[10px_10px_0px_#E31B23]">
              GET READY TO <br /> <span className="glitch-text text-white block mt-2 md:mt-4 md:inline" data-text="GET VEINY">GET VEINY</span>
            </h1>

            <p className="text-white font-black text-xs sm:text-base md:text-xl uppercase italic tracking-tight max-w-2xl mx-auto py-6 md:py-10 border-y border-white/10">
              No stims, just crazy strength, skin tearing pumps, and ultimate veinyness
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-8 md:mt-12">
              <button 
                onClick={() => scrollToSection('product')}
                className="group relative bg-blood-red text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 md:gap-4 shadow-[8px_8px_0px_#fff] md:shadow-[15px_15px_0px_#fff] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_#fff] md:hover:shadow-[20px_20px_0px_#fff] active:translate-y-2 active:shadow-none"
              >
                SECURE THE BAG <ArrowRight className="w-[22px] h-[22px] md:w-7 md:h-7" />
              </button>
              <button 
                onClick={() => scrollToSection('the-formula')}
                className="group relative bg-transparent border-2 md:border-4 border-white text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center hover:bg-white hover:text-black italic"
              >
                THE SCIENCE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Slogan */}
      <div className="bg-blood-red py-4 md:py-6 overflow-hidden whitespace-nowrap border-y-2 md:border-y-4 border-white/30 md:rotate-1 relative z-30 shadow-[0_0_50px_rgba(227,27,35,0.7)]">
        <div className="inline-block animate-marquee text-white font-black italic text-xl md:text-5xl uppercase tracking-tighter">
          {Array(10).fill(`${VAD_PRODUCT.tagline} • `).join("")}
        </div>
      </div>

      {/* Lifestyle / "Trench" Photo Section */}
      <section className="relative py-24 md:py-48 overflow-hidden bg-black/60 border-b-4 md:border-b-8 border-blood-red">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 lg:order-1 group">
             <div className="absolute -inset-3 md:-inset-6 border-2 md:border-4 border-blood-red rotate-3 z-0 transition-transform group-hover:rotate-0" />
             <div className="relative bg-zinc-900 overflow-hidden shadow-[15px_15px_0px_#E31B23] md:shadow-[25px_25px_0px_#E31B23] transform -rotate-1">
                <img 
                  src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/608700837_868241375797604_2790770691374060399_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQ9Cqs0_HjAQ7kNvwEbg4hO&_nc_oc=Adk0zmiNFyO8sx5vOO3j9_rVw062D8MNZO_S7Wv3P2VKvz5z-TCFyx1jtZp0ghkX5WAR7Tg_0E6UChUzkrS1lZRZ&_nc_zt=23&_nc_ht=scontent-ord5-2.xx&_nc_gid=KOuwNGCIIxb5MzXcqhCVQw&oh=00_Afqp2dKV98LBd0-aS3U1gD6w7Ch39N96JGt_Qxk-X1pHOw&oe=697CD236" 
                  alt="V.A.D. in the trenches" 
                  className="w-full grayscale brightness-75 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-blood-red/90 p-4 md:p-10">
                   <p className="text-white font-black italic uppercase tracking-widest text-lg md:text-3xl">PROVEN IN THE IRON PIT</p>
                </div>
             </div>
          </div>
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-creepster text-white uppercase italic leading-[0.9] md:leading-[0.8] tracking-tighter">
               VASCULARITY <br /> <span className="text-blood-red">DEMANDED.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-2xl font-black italic tracking-tight leading-relaxed border-l-4 md:border-l-8 border-blood-red pl-4 md:pl-10">
              WE DON'T DO "CASUAL GYM SESSIONS", BUT IF YOU WANT TO BE BIG, STRONG, AND VEINY, YOU'RE IN THE RIGHT PLACE.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               <div className="p-6 md:p-10 bg-zinc-950/50 border border-white/10 flex flex-col items-center text-center group hover:border-blood-red transition-all">
                 <Dumbbell className="text-blood-red mb-3 md:mb-6 group-hover:scale-110 md:group-hover:scale-125 transition-transform w-8 h-8 md:w-12 md:h-12" />
                 <span className="text-white font-black uppercase italic tracking-widest text-[8px] md:text-xs">ELITE STRENGTH</span>
               </div>
               <div className="p-6 md:p-10 bg-zinc-950/50 border border-white/10 flex flex-col items-center text-center group hover:border-blood-red transition-all">
                 <Activity className="text-blood-red mb-3 md:mb-6 group-hover:scale-110 md:group-hover:scale-125 transition-transform w-8 h-8 md:w-12 md:h-12" />
                 <span className="text-white font-black uppercase italic tracking-widest text-[8px] md:text-xs">MAX VASCULARITY</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product & Purchase Section */}
      <section id="product" className="py-16 md:py-32 bg-black/40 relative border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <div className="relative group">
              <div className="bg-zinc-900 p-8 md:p-16 border-2 border-white/5 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_100px_rgba(227,27,35,0.2)] md:shadow-[inset_0_0_150px_rgba(227,27,35,0.2)]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
                <img src={VAD_PRODUCT.image} alt="VAD Product" className="max-h-[300px] md:max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(227,27,35,0.6)] md:drop-shadow-[0_0_100px_rgba(227,27,35,0.8)] transform group-hover:rotate-6 transition-transform duration-700 relative z-10" />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 md:space-y-12">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4 text-blood-red font-black text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] italic">
                   <Flame fill="currentColor" className="w-4 h-4 md:w-5 md:h-5" /> FREAK TIER ANARCHY
                </div>
                <h2 className="text-4xl md:text-8xl font-creepster text-white uppercase leading-[0.9] md:leading-none italic drop-shadow-[4px_4px_0px_#E31B23] md:drop-shadow-[8px_8px_0px_#E31B23]">
                  {VAD_PRODUCT.name}
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-10">
                 <div className="flex flex-col">
                   <span className="text-[8px] md:text-[10px] font-black uppercase text-white/40 tracking-[0.4em] md:tracking-[0.6em] mb-1 md:mb-2">FIXED TRENCH PRICING</span>
                   <span className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white leading-none">${VAD_PRODUCT.price}</span>
                 </div>
                 <div className="sm:mb-4">
                   <span className="text-blood-red font-black text-[10px] md:text-sm uppercase tracking-widest bg-blood-red/10 border border-blood-red/30 px-4 md:px-6 py-1 md:py-2 block">30 SERVINGS</span>
                 </div>
              </div>

              <p className="text-slate-400 text-lg md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-blood-red pl-6 md:pl-10 max-w-xl">
                {VAD_PRODUCT.description}
              </p>

              <div className="space-y-8 md:space-y-12">
                <div>
                   <h4 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] text-white/40 mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
                     CHOOSE YOUR POISON <div className="h-[1px] flex-grow bg-white/10"></div>
                   </h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {VAD_PRODUCT.flavors.map(f => (
                        <button key={f} onClick={() => setSelectedFlavor(f)}
                          className={`py-4 md:py-6 text-[9px] md:text-[11px] font-black uppercase tracking-widest border-2 transition-all italic shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] ${selectedFlavor === f ? 'bg-blood-red border-blood-red text-white translate-x-1 translate-y-1 shadow-none' : 'border-white/10 text-slate-500 hover:border-white/40 hover:text-white'}`}>
                          {f}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="pt-4 md:pt-8 space-y-6 md:space-y-10">
                  <div className="relative group">
                    <button className="w-full bg-white text-black py-5 md:py-8 px-8 md:px-12 text-2xl md:text-4xl font-black uppercase italic tracking-[0.1em] md:tracking-[0.2em] flex items-center justify-center gap-4 md:gap-10 hover:bg-blood-red hover:text-white transition-all transform active:scale-[0.97] shadow-[12px_12px_0px_#E31B23] md:shadow-[25px_25px_0px_#E31B23]">
                      <CreditCard strokeWidth={3} className="w-7 h-7 md:w-10 md:h-10" />
                      BUY NOW
                    </button>
                  </div>

                  <div className="flex flex-col items-center gap-4 py-6 md:py-10 border-y border-white/5">
                    <div className="flex items-center gap-3 text-white/30 font-black italic uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm">
                      POWERED BY <span className="text-white tracking-widest flex items-center gap-1 md:gap-2"><div className="w-4 h-4 md:w-6 md:h-6 border md:border-2 border-white/30 flex items-center justify-center font-black text-[7px] md:text-[10px]">S</div> SQUARE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Breakdown Section */}
      <section id="the-formula" className="py-24 md:py-48 bg-black/80 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center mb-16 md:mb-32 text-center space-y-4 md:space-y-8">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-blood-red flex items-center justify-center font-creepster text-2xl md:text-4xl italic shadow-[4px_4px_0px_#fff] md:shadow-[8px_8px_0px_#fff] mb-4 md:mb-6 opacity-40">VAD</div>
            <span className="text-blood-red font-black text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.7em] uppercase">STIM-FREE POTENCY (2 SCOOPS)</span>
            <h2 className="text-5xl sm:text-7xl md:text-[11rem] font-creepster text-white uppercase italic tracking-tighter leading-[0.9] md:leading-none drop-shadow-[10px_10px_0px_rgba(227,27,35,0.3)] md:drop-shadow-[20px_20px_0px_rgba(227,27,35,0.3)]">THE DOSAGE</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-24 md:mb-40">
             {[
               { title: "8,000mg L-Citrulline", desc: "Pure Nitric Oxide precursor for massive, skin-tightening fullness. (Max Dose)", icon: <Activity className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "3,000mg Glycerol", desc: "Monostearate goodness to hyper-hydrate your muscle fibers for peak volume.", icon: <Droplets className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "2,000mg Betaine Nitrate", desc: "Explosive vasodilation through the nitrate pathway for long-lasting pumps.", icon: <ZapOff className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> },
               { title: "1,000mg Agmatine Sulfate", desc: "The 'Super Arginine' that keeps the pump alive for hours after training.", icon: <Trophy className="text-blood-red w-8 h-8 md:w-11 md:h-11" /> }
             ].map((ing, i) => (
               <div key={i} className="group p-8 md:p-14 bg-zinc-950/90 border border-white/5 hover:border-blood-red transition-all relative overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.6)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.6)]">
                  <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[6rem] md:text-[12rem] font-creepster text-white/[0.04] transform -rotate-12 transition-all group-hover:text-blood-red/[0.1]">{i+1}</div>
                  <div className="relative z-10 space-y-6 md:space-y-10">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blood-red/10 group-hover:border-blood-red/50 transition-all duration-500">
                      {ing.icon}
                    </div>
                    <h4 className="text-2xl md:text-4xl font-black italic uppercase leading-tight md:leading-none">{ing.title}</h4>
                    <p className="text-slate-500 text-base md:text-xl font-bold tracking-wide uppercase italic leading-relaxed">{ing.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div id="dosage-facts" className="flex flex-col items-center pt-16 md:pt-32 border-t border-white/10">
            <div className="mb-12 md:mb-24 text-center space-y-4 md:space-y-8">
               <h3 className="text-3xl sm:text-5xl md:text-9xl font-black uppercase italic tracking-widest text-white leading-[0.9] md:leading-none">CLINICAL <br /> <span className="text-blood-red">TRANSPARENCY</span></h3>
               <p className="text-slate-500 font-black uppercase tracking-[0.4em] md:tracking-[1em] text-[10px] md:text-sm italic">FULL DUAL-COLUMN DISCLOSURE. ZERO SECRETS.</p>
            </div>
            <div className="w-full max-w-2xl mb-16 md:mb-32">
              <SupplementFacts />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="connect" className="bg-black pt-24 md:pt-48 pb-10 md:pb-20 border-t border-blood-red/50 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-16 md:gap-32 items-start">
            <div className="space-y-8 md:space-y-12 lg:w-1/2">
              <div className="flex items-center gap-6 md:gap-10">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-blood-red flex items-center justify-center font-creepster text-3xl md:text-5xl italic shadow-[5px_5px_0px_#fff] md:shadow-[10px_10px_0px_#fff]">VAD</div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl md:text-5xl tracking-tighter uppercase italic text-white leading-none">VEINY AH DIH</span>
                  <span className="text-[8px] md:text-xs font-black text-blood-red tracking-[0.3em] md:tracking-[0.7em] uppercase italic">BUILT FOR THE 1%</span>
                </div>
              </div>
              <h4 className="font-creepster text-3xl md:text-6xl text-white uppercase italic tracking-tighter max-w-lg leading-none">
                {VAD_PRODUCT.tagline}
              </h4>
              <div className="flex gap-6 md:gap-10">
                 <a href="https://www.instagram.com/veinyahdihsupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95">
                   <Instagram className="w-6 h-6 md:w-9 md:h-9" />
                 </a>
                 <a href="https://www.facebook.com/VeinyAhDihSupps" target="_blank" rel="noopener noreferrer" className="w-14 h-14 md:w-20 md:h-20 border-2 border-white/10 flex items-center justify-center text-white hover:bg-blood-red hover:text-white transition-all shadow-[6px_6px_0px_#fff] md:shadow-[10px_10px_0px_#fff] active:scale-95">
                   <Facebook className="w-6 h-6 md:w-9 md:h-9" />
                 </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="space-y-6 md:space-y-12">
                  <h5 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-white">NEWSLETTER</h5>
                  <div className="relative group w-full">
                    <input type="email" placeholder="YOUR@UNIT.COM" className="w-full bg-zinc-900 border-2 border-white/10 px-6 md:px-8 py-5 md:py-8 text-[11px] md:text-[13px] font-black uppercase tracking-widest focus:outline-none focus:border-blood-red italic placeholder:text-zinc-800 text-white" />
                    <button className="absolute right-2 top-2 bottom-2 px-6 md:px-10 bg-blood-red text-white font-black italic text-xs md:text-sm hover:bg-white hover:text-black transition-all">JOIN</button>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-white/20 font-black italic uppercase tracking-[0.2em] text-[9px] md:text-[10px]">
                    POWERED BY <span className="text-white flex items-center gap-1"><div className="w-3 h-3 md:w-4 md:h-4 border border-white/30 flex items-center justify-center font-black text-[7px] md:text-[8px]">S</div> SQUARE</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="mt-24 md:mt-48 pt-10 md:pt-16 border-t border-white/5 text-center">
            <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.6em] text-zinc-900 italic">
               © 2024 V.A.D. SUPPLEMENTS • VASCULARITY BY FORCE • MADE FOR FREAKS.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
