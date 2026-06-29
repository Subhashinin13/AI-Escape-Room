export interface HotspotData {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  top: string;
  left: string;
  width: string;
  height: string;
}

const room1Hotspots: HotspotData[] = [

  {
    id: 1,
    title: "💻 Computer",
    subtitle: "Computer Locked",
    description: "Password required to unlock this workstation.",

    top: "54%",
    left: "12%",
    width: "18%",
    height: "20%",
  },

  {
    id: 2,
    title: "☕ Coffee Mug",
    subtitle: "Nothing Found",
    description: "Someone left coffee here recently.",

    top: "66%",
    left: "8%",
    width: "6%",
    height: "8%",
  },

  {
    id: 3,
    title: "📚 Bookshelf",
    subtitle: "Secret Note Found!",
    description: "Password : BLUE",

    top: "10%",
    left: "30%",
    width: "12%",
    height: "52%",
  },

  {
    id: 4,
    title: "📦 Storage Box",
    subtitle: "Dusty Documents",
    description: "Only old laboratory files.",

    top: "2%",
    left: "31%",
    width: "13%",
    height: "9%",
  },

  {
    id: 5,
    title: "🪴 Plant",
    subtitle: "Nothing Here",
    description: "Only a decorative plant.",

    top: "28%",
    left: "43%",
    width: "7%",
    height: "26%",
  },

  {
    id: 6,
    title: "🧪 Chemical Shelf",
    subtitle: "Chemical Samples",
    description: "Highly reactive chemicals.",

    top: "40%",
    left: "59%",
    width: "10%",
    height: "28%",
  },

  {
    id: 7,
    title: "🗄 Cabinet",
    subtitle: "Locked",
    description: "Requires a security card.",

    top: "16%",
    left: "68%",
    width: "15%",
    height: "47%",
  },

  {
    id: 8,
    title: "🔬 Microscope",
    subtitle: "DNA Sample",
    description: "A strange DNA sample is under observation.",

    top: "49%",
    left: "78%",
    width: "11%",
    height: "18%",
  },

  {
    id: 9,
    title: "📄 Clipboard",
    subtitle: "Research Notes",
    description: "One page says 'Trust BLUE'.",

    top: "71%",
    left: "74%",
    width: "12%",
    height: "11%",
  },

  {
    id: 10,
    title: "📦 Secret Box",
    subtitle: "Locked Box",
    description: "Looks valuable.",

    top: "70%",
    left: "44%",
    width: "12%",
    height: "15%",
  },

  {
    id: 11,
    title: "🧪 Test Tubes",
    subtitle: "Experiment",
    description: "Different coloured solutions.",

    top: "55%",
    left: "90%",
    width: "9%",
    height: "18%",
  },

  {
    id: 12,
    title: "🚪 Exit Door",
    subtitle: "Locked",
    description: "Escape door is locked.",

    top: "18%",
    left: "47%",
    width: "12%",
    height: "48%",
  }

];

export default room1Hotspots;