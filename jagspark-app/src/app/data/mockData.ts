export interface User {
  id: string;
  name: string;
  avatar?: string;
  lastSeen?: string;
}

export interface Compliment {
  id: string;
  text: string;
  recipientId: string;
  recipientName: string;
  senderId?: string;
  isAnonymous: boolean;
  likes: number;
  timestamp: Date;
}

export const users: User[] = [
  { id: "1", name: "Warren Green", avatar: "figma:asset/01f566f6130910006a0314b0638a02f56f8942ce.png", lastSeen: "You both were in AI event" },
  { id: "2", name: "Sarah Kim", avatar: "figma:asset/ad36f37d20734737d00738978d52e0fa453e756b.png", lastSeen: "You both were in HCI H543" },
  { id: "3", name: "Liam Brown", avatar: "figma:asset/f12dd32c1fea17543ccfce3233695d2ee83fb8e5.png", lastSeen: "You both were in HCI H543" },
  { id: "4", name: "Laura Lynn", avatar: "figma:asset/b02173ef0ad76f1db0b4be5fde917e8b75f560b9.png", lastSeen: "You both were in HCI H543" },
  { id: "5", name: "Gary Main", avatar: "figma:asset/ba0b95eea7ab122d260fb002c57145a5f7034559.png", lastSeen: "You both were in HCI H543" },
  { id: "6", name: "Jacob Davis", avatar: "figma:asset/1527fbc84ce347041b486093b5185a008e09eb5f.png", lastSeen: "You both were in AI event" },
  { id: "7", name: "Sam Camperman", avatar: "figma:asset/0cb1f5d707e7af16ea3fcf1aa764a51bf75cd400.png", lastSeen: "You both were in HCI H543" },
  { id: "8", name: "Jess Lee", avatar: "figma:asset/4a8e05c8d0e3615314c400e455f3befb6e4eb108.png", lastSeen: "You both were in HCI H543" },
  { id: "9", name: "Laura Jane Wilkins", avatar: "figma:asset/b92add89ddd3407a4230fd868134aa166b2978e0.png", lastSeen: "You both were in HCI H543" },
  { id: "10", name: "Antonio Velacruz", avatar: "figma:asset/02925d2e68097a2762680b1cc8aba5ba95a553a3.png", lastSeen: "You both were in HCI H543" },
  { id: "11", name: "Rahul Kabir", avatar: "figma:asset/0acbb35f53977bf45fdfe4d7769e884a55f39dc2.png", lastSeen: "You both were in HCI H543" },
  { id: "12", name: "John Hancock", avatar: "figma:asset/7922de96ea8b811f796d72fd4341d7968e59e0bc.png", lastSeen: "You both were in HCI H543" },
  { id: "13", name: "Maya Robinson", avatar: "figma:asset/ad36f37d20734737d00738978d52e0fa453e756b.png", lastSeen: "You both were in HCI H543" },
];

export const recentCompliments: Compliment[] = [
  {
    id: "1",
    text: "You always help people in class 🤝",
    recipientId: "7",
    recipientName: "Maya Robinson",
    isAnonymous: true,
    likes: 12,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    text: "You made the group project easier 🙂 THANKS.",
    recipientId: "1",
    recipientName: "Mariah Greer",
    isAnonymous: true,
    likes: 3,
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "3",
    text: "Thank you for always helping people around 😊",
    recipientId: "2",
    recipientName: "Sarah Kim",
    isAnonymous: true,
    likes: 18,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
];

export const complimentSuggestions = [
  "You explain things really clearly in the class.",
  "Your presentations are always great!! 💯",
  "You bring positive energy to group meetings 😁",
  "Thanks for helping me understand assignments.",
];

// Mock user data for the logged-in user
export const currentUser = {
  id: "current",
  name: "Current User",
  stats: {
    sent: 14,
    received: 12,
    likes: 6,
  },
  pinnedCompliments: [
    {
      id: "pinned1",
      text: "Thanks for helping me today in class!",
      isAnonymous: true,
    },
  ],
  recentCompliments: [
    {
      id: "recent1",
      text: "You're the best programmer ever!",
      isAnonymous: true,
    },
  ],
};

export const userProfiles: { [key: string]: any } = {
  "7": {
    id: "7",
    name: "Maya Robinson",
    stats: {
      sent: 14,
      received: 12,
      likes: 6,
    },
    pinnedCompliments: [
      {
        id: "p1",
        text: "Thanks for helping me today in class!",
        isAnonymous: true,
      },
    ],
    recentCompliments: [
      {
        id: "r1",
        text: "You're the best programmer ever!",
        isAnonymous: true,
      },
    ],
  },
};