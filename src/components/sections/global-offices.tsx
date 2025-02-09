import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "usa-hq",
    name: "Maryland HQ",
    type: "headquarters",
    position: { x: 25, y: 35 },
    region: "North America",
  },
  {
    id: "uk",
    name: "London",
    type: "office",
    position: { x: 45, y: 30 },
    region: "Europe",
  },
  {
    id: "germany",
    name: "Berlin",
    type: "office",
    position: { x: 48, y: 28 },
    region: "Europe",
  },
  {
    id: "india-hq",
    name: "Bengaluru HQ",
    type: "headquarters",
    position: { x: 65, y: 45 },
    region: "Asia",
  },
  {
    id: "singapore",
    name: "Singapore",
    type: "office",
    position: { x: 72, y: 50 },
    region: "Asia",
  },
  {
    id: "australia",
    name: "Sydney",
    type: "office",
    position: { x: 82, y: 65 },
    region: "Oceania",
  },
];

const LocationMarker = ({ location }) => {
  const isHQ = location.type === "headquarters";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      className="absolute cursor-pointer group"
      style={{
        left: `${location.position.x}%`,
        top: `${location.position.y}%`,
      }}
    >
      <motion.div
        className={`relative ${isHQ ? "text-orange-500" : "text-blue-500"}`}
      >
        <MapPin className="w-6 h-6" />
        <motion.div
          className={`absolute inset-0 ${isHQ ? "bg-orange-500" : "bg-blue-500"} rounded-full -z-10 opacity-20`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white px-2 py-1 rounded shadow-lg text-sm whitespace-nowrap">
            <span className="font-medium text-slate-900">{location.name}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ConnectionLines = () => (
  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      d="M250 175 L480 150 L650 225"
      stroke="rgba(99, 102, 241, 0.2)"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export function GlobalOffices() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-[21/9] bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
          {/* World Map Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[url('/world-map.svg')] bg-no-repeat bg-contain bg-center"
          />

          {/* Connection Lines */}
          <ConnectionLines />

          {/* Location Markers */}
          {locations.map((location) => (
            <LocationMarker key={location.id} location={location} />
          ))}

          {/* Region Stats */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white/80 text-sm">
            {["North America", "Europe", "Asia", "Oceania"].map((region) => (
              <motion.div
                key={region}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {region}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
