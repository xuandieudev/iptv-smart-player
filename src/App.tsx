import React, { useState } from 'react';
import { Copy, Check, Tv, Sparkles } from 'lucide-react';

interface IptvItem {
  id: number;
  name: string;
  category: string;
  url: string;
}

const iptvData: IptvItem[] = [
  { id: 1, name: 'IPTV Org (30,000+ Channels)', category: 'Global', url: 'https://iptv-org.github.io/iptv/index.m3u' },
  { id: 2, name: 'IPTV Org (United States)', category: 'US', url: 'https://iptv-org.github.io/iptv/countries/us.m3u' },
  { id: 3, name: 'IPTV Org (Global Sports)', category: 'Sports', url: 'https://iptv-org.github.io/iptv/categories/sports.m3u' },
  { id: 4, name: 'IPTV Org (Movies)', category: 'Movies', url: 'https://iptv-org.github.io/iptv/categories/movies.m3u' },
  { id: 5, name: 'IPTV Org (Music)', category: 'Music', url: 'https://iptv-org.github.io/iptv/categories/music.m3u' },
  { id: 6, name: 'Free-TV (Mixed Playlist)', category: 'Mixed', url: 'https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8' }
];

export default function App() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (url: string, id: number) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Copy failed: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#FF002C]/30 selection:text-white relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF002C] opacity-[0.06] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20 relative z-10 flex-1 w-full">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center p-3.5 bg-[#121212] rounded-2xl border border-[#2B2B2B] mb-6 shadow-[0_0_20px_rgba(255,0,44,0.1)]">
            <Tv className="w-8 h-8 text-[#FF002C]" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Public <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF002C] to-[#ff4d6d]">IPTV</span> Sources
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF002C]" />
            Curated collection of high-quality M3U playlists.
          </p>
        </div>

        <div className="space-y-4">
          {iptvData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#121212] rounded-2xl p-5 border border-[#2B2B2B] hover:border-[#FF002C]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,44,0.06)]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase bg-[#FF002C]/10 text-[#FF002C] border border-[#FF002C]/20 shrink-0">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white truncate group-hover:text-[#FF002C] transition-colors">
                    {item.name}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between bg-[#050505] rounded-xl border border-[#2B2B2B] p-1.5 pl-4 group-hover:border-[#FF002C]/20 transition-colors">
                  <code className="text-sm text-gray-500 font-mono truncate mr-4">
                    {item.url}
                  </code>
                  <button
                    onClick={() => handleCopy(item.url, item.id)}
                    className={`shrink-0 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      copiedId === item.id
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]'
                        : 'bg-[#1a1a1a] text-gray-400 hover:text-white hover:bg-[#2B2B2B] border border-transparent'
                    }`}
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm font-medium text-gray-600">
          <p>Supports VLC, TiviMate, and other M3U players.</p>
        </div>
      </div>
    </div>
  );
}