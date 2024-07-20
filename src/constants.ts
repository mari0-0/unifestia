export const heroImages = [
  { src: "/hero-1.jpg", alt: "Image 1" },
  { src: "/hero-2.jpg", alt: "Image 2" },
  { src: "/hero-3.jpg", alt: "Image 3" },
  { src: "/hero-4.jpg", alt: "Image 4" },
  { src: "/hero-5.jpg", alt: "Image 5" },
]


interface EventDetails {
  name: string;
  month: string;
  date: string;
  fromTime: string;
  toTime: string;
  imgSrc: string;
  registerLink: string,
  description: string;
  clubName: string;
  cashPrice: {
    [key: string]: number;
  };
}

interface Place {
  name: string;
  x: number;
  y: number;
  events: EventDetails[];
}

export const upComingPlaces: Place[] = [
  {
    name: "Decinial Seminar Hall",
    x: 58,
    y: 45,
    events: [
      {
        name: "Orphange, Blind School, Aged Home etc.,",
        month: "Oct",
        date: "02",
        fromTime: "",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Service event by Helping Hands (Service Club)",
        clubName: "Helping Hands (Service Club)",
        cashPrice: {}
      }
    ]
  },
  {
    name: "SJB Ground",
    x: 78,
    y: 42,
    events: [
      {
        name: "Antakshari & Dance Competitions for Faculty",
        month: "Mar",
        date: "04",
        fromTime: "01:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Antakshari and dance competitions for faculty members",
        clubName: "",
        cashPrice: {}
      },
      {
        name: "Fine Arts Competitions for Faculty",
        month: "Mar",
        date: "03",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Fine arts competition for faculty members",
        clubName: "",
        cashPrice: {}
      }
    ]
  },
  {
    name: "OAT",
    x: 29,
    y: 39,
    events: [
      {
        name: "International Yoga Day",
        month: "Jun",
        date: "21",
        fromTime: "01:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Yoga event organized by the college",
        clubName: "",
        cashPrice: {}
      },
      {
        name: "Poster Presentation",
        month: "Jul",
        date: "12",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Poster presentation by Renewable Energy Club",
        clubName: "Renewable Energy Club",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Classical Dance, Folk Dance & Jodi Round",
        month: "Sep",
        date: "28",
        fromTime: "12:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Dance event by Club Waltz",
        clubName: "Club Waltz",
        cashPrice: { "Group I": 3000, "Group II": 2000, "Group III": 1500, "Solo I": 1500, "Solo II": 1000, "Solo III": 750 }
      },
      {
        name: "Cultural & Sports Competitions (Colorido – 2025)",
        month: "Mar",
        date: "06",
        fromTime: "",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Cultural and sports competitions as part of Colorido 2025",
        clubName: "",
        cashPrice: {}
      },
      {
        name: "Technical & Sports Competitions (Colorido – 2026)",
        month: "Mar",
        date: "07",
        fromTime: "",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Technical and sports competitions as part of Colorido 2026",
        clubName: "",
        cashPrice: {}
      },
      {
        name: "80th Annual Day Celebrations",
        month: "Mar",
        date: "08",
        fromTime: "",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Celebration of the 80th annual day",
        clubName: "",
        cashPrice: {}
      },
      {
        name: "Face Painting, Pencil Shading, Conceptual Painting, Outfit Designing",
        month: "Aug",
        date: "24",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Art competitions organized by RED ANTS (Fine Arts Club)",
        clubName: "RED ANTS (Fine Arts Club)",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Engineer's Day Celebrations",
        month: "Sep",
        date: "07",
        fromTime: "10:00 AM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Celebration of Engineer's Day",
        clubName: "",
        cashPrice: {}
      }
    ]
  },
  {
    name: "SJB Seminar Hall",
    x: 69.5,
    y: 32,
    events: [
      {
        name: "Anime Making Video",
        month: "Jul",
        date: "20",
        fromTime: "04:00 PM",
        toTime: "4:30 PM",
        imgSrc: "",
        registerLink: "https://qr.me-qr.com/fwTbSR1r",
        description: "Event by Digital Club",
        clubName: "Digital Club",
        cashPrice: { "1": 3000, "2": 2000, "3": 1500 }
      },
      {
        name: "Website Development",
        month: "Jul",
        date: "20",
        fromTime: "04:00 PM",
        toTime: "4:30 PM",
        imgSrc: "",
        registerLink: "https://qr.me-qr.com/UpOoxea7",
        description: "Event by Digital Club",
        clubName: "Digital Club",
        cashPrice: { "1": 3000, "2": 2000, "3": 1500 }
      },
      {
        name: "Guest Lecture",
        month: "Jun",
        date: "29",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Guest Lecture by Renewable Energy Club",
        clubName: "Renewable Energy Club",
        cashPrice: {}
      },
      {
        name: "Inspirational Talk",
        month: "Jul",
        date: "06",
        fromTime: "01:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Inspirational Talk by Club Inspiraze",
        clubName: "Club Inspiraze",
        cashPrice: {}
      },
      {
        name: "Photography Contest",
        month: "Aug",
        date: "03",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Photography contest by Photography Club",
        clubName: "Photography Club",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Any short film with time limit of 15 minutes",
        month: "Aug",
        date: "09",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Short film event by Club Spectrum",
        clubName: "Club Spectrum",
        cashPrice: { "Best I Film": 4000, "Best II Film": 2500, "Best Director": 1500, "Best Editor": 1000 }
      },
      {
        name: "Mime Group & Puppet Show",
        month: "Aug",
        date: "31",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Mime group and puppet show by Club Theatrix",
        clubName: "Club Theatrix",
        cashPrice: { "1": 2000, "2": 1500, "3": 1000 }
      },
      {
        name: "General Quiz & Visible Narration",
        month: "Sep",
        date: "04",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Quiz event by Club Endeavour",
        clubName: "Club Endeavour",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Paper Presentation, Software Development & Technical Working Models",
        month: "Oct",
        date: "05",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Technical event by Club Spark",
        clubName: "Club Spark",
        cashPrice: { "1": 3000, "2": 1500, "3": 1000 }
      },
      {
        name: "Poetry",
        month: "Dec",
        date: "28",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Poetry event by Recondite Writer's Club",
        clubName: "Recondite Writer's Club",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Rangoli & Kites Competition",
        month: "Jan",
        date: "09",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Rangoli and kites competition by Fine Arts Club",
        clubName: "RED ANTS (Fine Arts Club)",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Classical Western Light Music, Rap, Beat Boxing",
        month: "Jan",
        date: "10",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Music competition by Music Club",
        clubName: "Music Club",
        cashPrice: { "Group I": 3000, "Group II": 2000, "Group III": 1500, "Solo I": 1500, "Solo II": 1000, "Solo III": 750 }
      },
      {
        name: "Logo / Poster Design",
        month: "Feb",
        date: "13",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Logo and poster design competition by Digital Club",
        clubName: "Digital Club",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      },
      {
        name: "Talk About a General Book",
        month: "Feb",
        date: "28",
        fromTime: "02:00 PM",
        toTime: "",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "Book discussion by Club Tone",
        clubName: "Club Tone (Book Club)",
        cashPrice: { "1": 1500, "2": 1000, "3": 750 }
      }
    ]
  },
];

export const completedPlaces: Place[] = [
  {
    name: "SAC",
    x: 61.5,
    y: 32.5,
    events: [
      {
        name: "Hackathon",
        month: "Apr",
        date: "30",
        fromTime: "09:00 AM",
        toTime: "09:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A full-day hackathon event",
        clubName: "",
        cashPrice: { "1": 2000, "2": 1000, "3": 500 }
      }
    ]
  },
  {
    name: "Open Air Theatre",
    x: 30,
    y: 40,
    events: [
      {
        name: "Science Fair",
        month: "Mar",
        date: "05",
        fromTime: "09:00 AM",
        toTime: "05:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A science fair showcasing various projects and experiments",
        clubName: "",
        cashPrice: { "1": 3000, "2": 2000, "3": 1000 }
      },
      {
        name: "Guest Lecture on AI",
        month: "Apr",
        date: "15",
        fromTime: "10:00 AM",
        toTime: "12:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A guest lecture on advancements in AI technology",
        clubName: "",
        cashPrice: {}
      }
    ]
  },
  {
    name: "Library",
    x: 48.3,
    y: 44,
    events: [
      {
        name: "Book Fair",
        month: "Jan",
        date: "12",
        fromTime: "09:00 AM",
        toTime: "05:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A fair displaying a variety of books for sale",
        clubName: "",
        cashPrice: {}
      }
    ]
  },
  {
    name: "Chemistry Lab",
    x: 82.5,
    y: 32,
    events: [
      {
        name: "Chemistry Workshop",
        month: "Mar",
        date: "25",
        fromTime: "10:00 AM",
        toTime: "01:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A workshop on chemical reactions and laboratory techniques",
        clubName: "",
        cashPrice: {}
      }
    ]
  },
  {
    name: "Sports Complex",
    x: 65,
    y: 42,
    events: [
      {
        name: "Basketball Tournament",
        month: "Feb",
        date: "20",
        fromTime: "02:00 PM",
        toTime: "06:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A basketball tournament for college teams",
        clubName: "",
        cashPrice: { "1": 3000, "2": 2000, "3": 1000 }
      },
      {
        name: "Football Match",
        month: "May",
        date: "10",
        fromTime: "04:00 PM",
        toTime: "06:00 PM",
        imgSrc: "/path/to/image",
        registerLink: "",
        description: "A friendly football match between teams",
        clubName: "",
        cashPrice: {}
      }
    ]
  }
];




