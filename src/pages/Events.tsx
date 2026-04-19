import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, ArrowLeft, Trophy, Users, MoveRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  type: 'Tournament' | 'Trade Night' | 'Convention';
  status: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "*complete* Finland Card Expo Ratina",
    date: "April 11th, 2026",
    location: "Tampere, Finland",
    description: "Vedning at Finland Card Expo in Ratina shopping center from 10:00-17:00.",
    icon: <Trophy className="w-5 h-5 text-pokemon-yellow" />,
    type: 'Convention',
    status: 'Completed Event'
  },
  {
    id: 2,
    title: "FINLAND CARD EXPO MEGA Tampereen Messukeskus Lauantai",
    date: "June 26th, 2026",
    location: "Tampere, Finland",
    description: "The legendary Tampere Exhibition and Sports Centre. The 3,600 square meter D-hall is filled with the trading card craze at the end of June!",
    icon: <Users className="w-5 h-5 text-pokemon-red" />,
    type: 'Convention',
    status: 'Confirmed Deployment'
  },
  {
    id: 3,
    title: "Pokémon TCG: Trade & Play @ Mabrik",
    date: "TBD",
    location: "Tallinn, Estonia",
    description: "The Pokémon community is quite scattered, and many fans struggle to find others to play with. Let's change that! Whether you're a collector, a casual fan, or a competitive player, this is the perfect chance to meet fellow Trainers and maybe even set up future battles!",
    icon: <Trophy className="w-5 h-5 text-pokemon-yellow" />,
    type: 'Trade Night',
    status: 'Unconfirmed'
  }
];

export default function Events({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-[0.2em]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Terminal
        </button>

        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.85]">
            Archive <br />
            <span className="text-premium-gold">Intelligence</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-tight font-bold uppercase tracking-widest italic">
            Deployment Log: Where the Archive meets the community. Join us at these upcoming exhibits across Scandinavia and the Baltics.
          </p>
        </header>

        <div className="space-y-4">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass p-10 group border-white/[0.05] hover:border-premium-gold/30 transition-all cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-white text-obsidian text-[10px] font-black uppercase tracking-[0.2em]">
                      {event.type}
                    </span>
                    <span className="text-premium-gold flex items-center gap-2 text-sm font-black italic">
                      <CalendarIcon className="w-4 h-4" /> {event.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter italic">{event.title}</h3>
                  <p className="text-zinc-500 mb-6 font-bold leading-relaxed">{event.description}</p>
                  <div className="flex items-center gap-2 text-zinc-300 font-black uppercase text-xs tracking-widest">
                    <MapPin className="w-4 h-4 text-premium-crimson" />
                    {event.location}
                  </div>
                </div>
                
                <div className="flex items-center gap-6 bg-white/[0.03] p-8 border border-white/5">
                  <div className="p-4 bg-premium-gold/10 rounded-sm">
                    {event.icon}
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-600 font-bold uppercase block tracking-[0.3em] mb-1">Status</span>
                    <span className="text-premium-gold text-sm font-black uppercase italic tracking-widest">{event.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[2rem] border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
          <MoveRight className="w-12 h-12 text-zinc-700 mb-6" />
          <h2 className="text-2xl font-bold text-zinc-500 uppercase tracking-widest">More Events TBA</h2>
          <p className="text-zinc-600 mt-2 max-w-xs">Connecting collectors, one show at a time. Follow my TikTok for live venue updates.</p>
        </div>
      </div>
    </div>
  );
}
