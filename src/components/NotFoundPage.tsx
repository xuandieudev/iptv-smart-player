import { Link } from 'react-router-dom';
import { AlertTriangle, Home as HomeIcon } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 relative z-10 flex-1 w-full text-center flex flex-col items-center justify-center h-[80vh]">
      <div className="inline-flex items-center justify-center p-5 bg-[#FF002C]/10 rounded-full border border-[#FF002C]/20 mb-8 animate-pulse">
        <AlertTriangle className="w-14 h-14 text-[#FF002C]" />
      </div>
      <h1 className="text-6xl font-black text-white mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl font-bold text-gray-200 mb-4 uppercase tracking-wide">Destination Not Found</h2>
      <p className="text-gray-400 mb-10 leading-relaxed">
        The playlist source you are looking for has been moved or the link is expired.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-3 bg-[#FF002C] hover:bg-[#ff4d6d] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_25px_rgba(255,0,44,0.3)] hover:shadow-[0_0_40px_rgba(255,0,44,0.5)] active:scale-95"
      >
        <HomeIcon className="w-5 h-5" />
        Return to Home
      </Link>
    </div>
  );
}