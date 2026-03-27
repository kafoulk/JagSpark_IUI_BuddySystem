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
  { id: "1", name: "Warren Green", avatar: "https://i.pravatar.cc/150?img=12", lastSeen: "You both were in AI event" },
  { id: "2", name: "Sarah Kim", avatar: "https://i.pravatar.cc/150?img=44", lastSeen: "You both were in HCI H543" },
  { id: "3", name: "Liam Brown", avatar: "https://i.pravatar.cc/150?img=33", lastSeen: "You both were in HCI H543" },
  { id: "4", name: "Laura Lynn", avatar: "https://i.pravatar.cc/150?img=48", lastSeen: "You both were in HCI H543" },
  { id: "5", name: "Gary Main", avatar: "https://i.pravatar.cc/150?img=11", lastSeen: "You both were in HCI H543" },
  { id: "6", name: "Jacob Davis", avatar: "https://i.pravatar.cc/150?img=13", lastSeen: "You both were in AI event" },
  { id: "7", name: "Sam Camperman", avatar: "https://i.pravatar.cc/150?img=15", lastSeen: "You both were in HCI H543" },
  { id: "8", name: "Jess Lee", avatar: "https://i.pravatar.cc/150?img=32", lastSeen: "You both were in HCI H543" },
  { id: "9", name: "Laura Jane Wilkins", avatar: "https://i.pravatar.cc/150?img=23", lastSeen: "You both were in HCI H543" },
  { id: "10", name: "Antonio Velacruz", avatar: "https://i.pravatar.cc/150?img=60", lastSeen: "You both were in HCI H543" },
  { id: "11", name: "Rahul Kabir", avatar: "https://i.pravatar.cc/150?img=7", lastSeen: "You both were in HCI H543" },
  { id: "12", name: "John Hancock", avatar: "https://i.pravatar.cc/150?img=69", lastSeen: "You both were in HCI H543" },
  { id: "13", name: "Maya Robinson", avatar: "https://i.pravatar.cc/150?img=49", lastSeen: "You both were in HCI H543" },
];

export const recentCompliments: Compliment[] = [
  {
    id: "1",
    text: "You always help people in class 🤝",
    recipientId: "13",
    recipientName: "Maya Robinson",
    isAnonymous: true,
    likes: 12,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    text: "You made the group project easier 🙂 THANKS.",
    recipientId: "1",
    recipientName: "Warren Green",
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
  avatar: "https://i.pravatar.cc/150?img=56",
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
  "13": {
    id: "13",
    name: "Maya Robinson",
    avatar: "https://i.pravatar.cc/150?img=49",
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