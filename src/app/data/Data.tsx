interface ListingCard {
    id: number;
    title: string;
    rating: string;
    ratingCount: string;
    category: string;
    address: string;
    website: string;
    phone: string;
    openStatus: string;
    closeStatus: string;
    imageUrl: string;
    categoryIcon: JSX.Element;
    heartIcon: JSX.Element;
  }
  interface Blog {
    id: number;
    title: string;
    imageUrl: string;
    author: string;
    date: string;
    category: string;
    description: string;
    detailsLink: string;
    icons: {
        authorIcon: JSX.Element;
        dateIcon: JSX.Element;
        categoryIcon: JSX.Element;
    };
}
interface Listing {
    id: number;
    title: string;
    imageUrl: string;
    address: string;
    website: string;
    phone: string;
    openStatus: string;
    closeStatus: string;
    rating: number;
  }



interface BlogPost {
    id: number;
    title: string;
    date: string;
    description: string;
    tag: string;
    imageUrl: string;
}

interface BlogCard {
    id: number;
    title: string;
    author: string;
    description: string;
    date: string;
    category: string;
    imageUrl: string;
    authorIcon: JSX.Element;
    calendarIcon: JSX.Element;
    categoryIcon: JSX.Element;
}

interface UpcomingCard {
    id: number;
    title: string;
    dateRange: string;
    location: string;
    imageUrl: string;
    icon: JSX.Element;
    heartIcon: JSX.Element;
  }

  interface WorkingCard {
    id: number;
    step: string;
    title: string;
    description: string;
    icon: JSX.Element;
  }

const listings: Listing[] = [
  {
    id: 1,
    title: "Facil Restaurant",
    imageUrl:
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg",
    address: "Potsdamer Straße 3, 10785 Berlin",
    website: "www.example.com",
    phone: "+49 30 000000000",
    openStatus: "Open at 9pm tomorrow",
    closeStatus: "Close Now",
    rating: 22,
  },
  {
    id: 2,
    title: "Delicious Cafe",
    imageUrl:
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/moviehall.jpg",
    address: "Kurfürstendamm 12, 10719 Berlin",
    website: "www.deliciouscafe.com",
    phone: "+49 30 123456789",
    openStatus: "Open Now",
    closeStatus: "Close at 11pm",
    rating: 35,
  },
  {
    id: 3,
    title: "Modern Bistro",
    imageUrl:
      "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/shopping-1.jpg",
    address: "Alexanderplatz 4, 10178 Berlin",
    website: "www.modernbistro.com",
    phone: "+49 30 987654321",
    openStatus: "Open at 10am",
    closeStatus: "Close Now",
    rating: 18,
  },
];
const workingCards: WorkingCard[] = [
    {
      id: 1,
      step: "01.",
      title: "Search Listing",
      description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M464 428L339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37a110.5 110.5 0 0 1-110.37 110.37"
          />
        </svg>
      ),
    },
    {
      id: 2,
      step: "02.",
      title: "Choose A Location",
      description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m20.5 3l-.16.03L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99l3-1.01v11.7l-3 1.16zm14 11.08l-3 1.01V6.86l3-1.16z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      step: "03.",
      title: "Find What You Want",
      description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="2.7em" height="2.7em" viewBox="0 0 496 512">
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200s-89.7 200-200 200m-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32m160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32m4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1c-10.2 8.5-11.5 23.6-3.1 33.8c30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8c-10.1-8.4-25.3-7.1-33.8 3.1"
          />
        </svg>
      ),
    },
  ];
const upcomingCards: UpcomingCard[] = [
    {
      id: 1,
      title: "Rock&Roll Concert",
      dateRange: "12-15 NOV",
      location: "Adirondack, New York, USA",
      imageUrl: "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/event-1.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" className="mr-2">
          <path
            fill="currentColor"
            d="M12 2C8.14 2 5 5.14 5 9c0 4.92 5 11 7 11s7-6.08 7-11c0-3.86-3.14-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5Z"
          />
        </svg>
      ),
      heartIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Winter Concert",
      dateRange: "21 NOV",
      location: "Brooklyn, New York, USA",
      imageUrl: "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/event-2.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" className="mr-2">
          <path
            fill="currentColor"
            d="M12 2C8.14 2 5 5.14 5 9c0 4.92 5 11 7 11s7-6.08 7-11c0-3.86-3.14-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5Z"
          />
        </svg>
      ),
      heartIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Concerts For No Racism",
      dateRange: "17-18 Dec",
      location: "Boston, New York, USA",
      imageUrl: "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/event-3.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" className="mr-2">
          <path
            fill="currentColor"
            d="M12 2C8.14 2 5 5.14 5 9c0 4.92 5 11 7 11s7-6.08 7-11c0-3.86-3.14-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5Z"
          />
        </svg>
      ),
      heartIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"
          />
        </svg>
      ),
    },
  ];
const categories = [
    {
        name: "Restaurant",
        svg: (
            <svg className="w-10 h-10 text-orange-600 svg-icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                <path fill="currentColor" d="M19 1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0v9c0 .127.021.249.051.367c-.03.207-.051.417-.051.633c0 2.316 1.75 5.957 4 6.442V33.5a2.5 2.5 0 1 0 5 0V17.942c2.25-.485 4-4.126 4-6.442c0-.216-.021-.426-.051-.633c.03-.118.051-.24.051-.367zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11c0 4.658 1.275 8.56 3 9.672V33.5a2.5 2.5 0 1 0 5 0v-31A2.5 2.5 0 0 0 27.5 0" />
            </svg>
        )
    },
    {
        name: "Shopping",
        svg: (
            <svg className="w-10 h-10 text-orange-600 svg-icon" xmlns="http://www.w3.org/2000/svg" width="1792" height="1792" viewBox="0 0 1792 1792">
                <path fill="currentColor" d="m1757 1408l35 313q3 28-16 50q-19 21-48 21H64q-29 0-48-21q-19-22-16-50l35-313zm-93-839l86 775H42l86-775q3-24 21-40.5t43-16.5h256v128q0 53 37.5 90.5T576 768t90.5-37.5T704 640V512h384v128q0 53 37.5 90.5T1216 768t90.5-37.5T1344 640V512h256q25 0 43 16.5t21 40.5m-384-185v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-106-75-181t-181-75t-181 75t-75 181v256q0 26-19 45t-45 19t-45-19t-19-45V384q0-159 112.5-271.5T896 0t271.5 112.5T1280 384" />
            </svg>
        )
    },
    {
        name: "Hotels",
        svg: (
            <svg className="w-10 h-10 text-orange-600 svg-icon" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32s-14.3 32-32 32v384c17.7 0 32 14.3 32 32s-14.3 32-32 32H304v-48c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32m96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m-240 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-40 192c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8z" />
            </svg>
        )
    },
    {
        name: "Movie",
        svg: (
            <svg className="w-10 h-10 text-orange-600 svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="m20.5 3l-.16.03L15 5.1L9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5M10 5.47l4 1.4v11.66l-4-1.4zm-5 .99l3-1.01v11.7l-3 1.16zm14 11.08l-3 1.01V6.86l3-1.16z" />
            </svg>
        )
    },
    {
        name: "Beauty & Spa",
        svg: (
            <svg className="w-10 h-10 text-orange-600 svg-icon" xmlns="http://www.w3.org/2000/svg" width="576" height="512" viewBox="0 0 576 512">
                <path fill="currentColor" d="M568.25 192c-29.04.13-135.01 6.16-213.84 83c-33.12 29.63-53.36 63.3-66.41 94.86c-13.05-31.56-33.29-65.23-66.41-94.86c-78.83-76.84-184.8-82.87-213.84-83c-4.41-.02-7.79 3.4-7.75 7.82c.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3c.04-4.42-3.34-7.84-7.75-7.82M287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52c19.09-18.61 39.58-33.3 60.26-45.18c-16.44-70.5-51.72-133.05-96.73-172.22c-4.11-3.58-11.02-3.58-15.14 0c-44.99 39.14-80.27 101.63-96.74 172.07c20.37 11.7 40.5 26.14 59.22 44.39a282.8 282.8 0 0 1 45.04 51.46" />
            </svg>
        )
    }
];


// Convert blogs array
const blogs: Blog[] = [
    {
        id: 1,
        title: "Open Air Concerts",
        imageUrl: "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/event-1.jpg",
        author: "Mark Harmisson",
        date: "10 Oct, 2027",
        category: "Music",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos tempora magnam ratione hic officia enim, quidem...",
        detailsLink: "#",
        icons: {
            authorIcon: (
                <svg className='text-orange-600 mr-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" />
                </svg>
            ),
            dateIcon: (
                <svg className='text-orange-600 mr-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                    <path fill="currentColor" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z" />
                </svg>
            ),
            categoryIcon: (
                <svg className='text-orange-600 mr-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                    <path fill="currentColor" d="m345 39.1l127.8 129.3c52.4 53 52.4 138.2 0 191.2l-112 113.3c-9.3 9.4-24.5 9.5-33.9.2s-9.5-24.5-.2-33.9l111.9-113.3c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6.2-33.9s24.6-9.2 33.9.2zM0 229.5V80c0-26.5 21.5-48 48-48h149.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5M144 144a32 32 0 1 0-64 0a32 32 0 1 0 64 0" />
                </svg>
            )
        }
    }
    // Add additional blog objects here
];

// Convert blogPosts array
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Samsung Galaxy Ring: The Future of Health Monitoring",
        date: "Thu Sep 19 2024",
        description: "Samsung has done it again! At the Galaxy Unpacked event, the tech giant unveiled one of its most anticipated gadgets...",
        tag: "Tech",
        imageUrl: "https://via.placeholder.com/400x250"
    },
    {
        id: 2,
        title: "Apple's New Vision: What We Know So Far",
        date: "Mon Aug 18 2024",
        description: "Apple has announced a bold new vision for its product lineup, focusing on innovative technologies and sustainability...",
        tag: "Tech",
        imageUrl: "https://via.placeholder.com/400x250"
    }
    // Add additional blogPost objects here
];

// Convert BlogCardsData array
const BlogCardsData: BlogCard[] = [
    {
        id: 1,
        title: "Facil Restaurant",
        author: "Mark Harmisson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos tempora magnam ratione hic officia enim.",
        date: "10 Oct, 2027",
        category: "Restaurant",
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        authorIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12c2.7 0 4.86-2.16 4.86-4.86S14.7 2.28 12 2.28 7.14 4.44 7.14 7.14 9.3 12 12 12zm0 2.28c-3.24 0-9.72 1.62-9.72 4.86v1.62h19.44v-1.62c0-3.24-6.48-4.86-9.72-4.86z" />
            </svg>
        ),
        calendarIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11z" />
            </svg>
        ),
        categoryIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-3V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3ZM6 12h12v8H6v-8Zm4 2v4h2v-4h-2Zm4 0v4h2v-4h-2Z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Facil Restaurant",
        author: "Mark Harmisson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos tempora magnam ratione hic officia enim.",
        date: "10 Oct, 2027",
        category: "Restaurant",
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        authorIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12c2.7 0 4.86-2.16 4.86-4.86S14.7 2.28 12 2.28 7.14 4.44 7.14 7.14 9.3 12 12 12zm0 2.28c-3.24 0-9.72 1.62-9.72 4.86v1.62h19.44v-1.62c0-3.24-6.48-4.86-9.72-4.86z" />
            </svg>
        ),
        calendarIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11z" />
            </svg>
        ),
        categoryIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-3V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3ZM6 12h12v8H6v-8Zm4 2v4h2v-4h-2Zm4 0v4h2v-4h-2Z" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Facil Restaurant",
        author: "Mark Harmisson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos tempora magnam ratione hic officia enim.",
        date: "10 Oct, 2027",
        category: "Restaurant",
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        authorIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 12c2.7 0 4.86-2.16 4.86-4.86S14.7 2.28 12 2.28 7.14 4.44 7.14 7.14 9.3 12 12 12zm0 2.28c-3.24 0-9.72 1.62-9.72 4.86v1.62h19.44v-1.62c0-3.24-6.48-4.86-9.72-4.86z" />
            </svg>
        ),
        calendarIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 21c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V10h14v11z" />
            </svg>
        ),
        categoryIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-3V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3ZM6 12h12v8H6v-8Zm4 2v4h2v-4h-2Zm4 0v4h2v-4h-2Z" />
            </svg>
        )
    }
    // Add additional BlogCard objects here
];
  
  const listingcards: ListingCard[] = [
    {
      id: 1,
      title: "Facil Restaurant",
      rating: "4.3/5",
      ratingCount: "22",
      category: "Restaurant",
      address: "Potsdamer Straße 3, 10785 Berlin",
      website: "www.example.com",
      phone: "+49 30 00000000",
      openStatus: "Open at 9pm tomorrow",
      closeStatus: "Close Now",
      imageUrl:
        "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-3V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3ZM6 12h12v8H6v-8Zm4 2v4h2v-4h-2Zm4 0v4h2v-4h-2Z" />
        </svg>
      ),
      heartIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.48 5.48 0 0 1 7.5 3C9.24 3 11 4.4 11.25 4.71A5.454 5.454 0 0 1 16.5 3C19.54 3 22 5.44 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Amikon Blue Hotel",
      rating: "4.3/5",
      ratingCount: "22",
      category: "Hotel",
      address: "Landsberger Allee 106, 10369 Berlin",
      website: "www.example.com",
      phone: "+49 30 00000000",
      openStatus: "Open Now",
      closeStatus: "Close at 11pm",
      imageUrl:
        "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/moviehall.jpg",
      categoryIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M7 4v3H3V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm10 0v3h-4V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM3 8h18v11H3V8Zm9 4a2 2 0 0 0-2 2v2h4v-2a2 2 0 0 0-2-2ZM8 17v-3a4 4 0 1 1 8 0v3h2v2H6v-2h2Zm8.83-7c.23.35.17.81-.14 1.1l-1.92 1.75l.48 2.44c.08.41-.15.83-.53 1.04c-.38.21-.84.16-1.16-.12L12 14.8l-1.56 1.38c-.32.28-.78.33-1.16.12c-.38-.21-.61-.63-.53-1.04l.48-2.44L7.3 11.1c-.31-.29-.37-.75-.14-1.1c.23-.35.67-.48 1.06-.34l2.36.85l2.36-.85c.39-.14.83-.01 1.06.34Z" />
        </svg>
      ),
      heartIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.48 5.48 0 0 1 7.5 3C9.24 3 11 4.4 11.25 4.71A5.454 5.454 0 0 1 16.5 3C19.54 3 22 5.44 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
        </svg>
      )
    }
  ];
  
  const listingCardData: { id: number; title: string; imageUrl: string; address: string; website: string; phone: string; openStatus: string; closeStatus: string; rating: number; }[] = [
    {
        id: 1,
        title: 'Facil Restaurant',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        address: 'Potsdamer Straße 3, 10785 Berlin',
        website: 'www.example.com',
        phone: '+49 30 000000000',
        openStatus: 'Open at 9pm tomorrow',
        closeStatus: 'Close Now',
        rating: 22,
    },
    {
        id: 2,
        title: 'Delicious Cafe',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/moviehall.jpg',
        address: 'Kurfürstendamm 12, 10719 Berlin',
        website: 'www.deliciouscafe.com',
        phone: '+49 30 123456789',
        openStatus: 'Open Now',
        closeStatus: 'Close at 11pm',
        rating: 35,
    },
    {
        id: 3,
        title: 'Modern Bistro',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/shopping-1.jpg',
        address: 'Alexanderplatz 4, 10178 Berlin',
        website: 'www.modernbistro.com',
        phone: '+49 30 987654321',
        openStatus: 'Open at 10am',
        closeStatus: 'Close Now',
        rating: 18,
    },
    {
        id: 4,
        title: 'Urban Eatery',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        address: 'Friedrichstraße 43, 10117 Berlin',
        website: 'www.urbaneatery.com',
        phone: '+49 30 555555555',
        openStatus: 'Open at 8am tomorrow',
        closeStatus: 'Close Now',
        rating: 28,
    },
    {
        id: 5,
        title: 'Classic Cinema',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/moviehall.jpg',
        address: 'Karl-Liebknecht-Straße 32, 10178 Berlin',
        website: 'www.classiccinema.com',
        phone: '+49 30 666666666',
        openStatus: 'Open Now',
        closeStatus: 'Close at midnight',
        rating: 42,
    },
    {
        id: 6,
        title: 'Elegant Shopping',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/shopping-1.jpg',
        address: 'Tauentzienstraße 21-24, 10789 Berlin',
        website: 'www.elegantshopping.com',
        phone: '+49 30 777777777',
        openStatus: 'Open at 9am tomorrow',
        closeStatus: 'Close Now',
        rating: 30,
    },
    {
        id: 7,
        title: 'Trendy Bistro',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        address: 'Unter den Linden 15, 10117 Berlin',
        website: 'www.trendybistro.com',
        phone: '+49 30 888888888',
        openStatus: 'Open at 7am tomorrow',
        closeStatus: 'Close Now',
        rating: 25,
    },
    {
        id: 8,
        title: 'Grand Cinema',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/moviehall.jpg',
        address: 'Schönhauser Allee 80, 10439 Berlin',
        website: 'www.grandcinema.com',
        phone: '+49 30 999999999',
        openStatus: 'Open Now',
        closeStatus: 'Close at 2am',
        rating: 47,
    },
    {
        id: 9,
        title: 'Modern Mall',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/shopping-1.jpg',
        address: 'Wilhelmstraße 118, 10963 Berlin',
        website: 'www.modernmall.com',
        phone: '+49 30 101010101',
        openStatus: 'Open at 9am tomorrow',
        closeStatus: 'Close Now',
        rating: 32,
    },
    {
        id: 10,
        title: 'Luxury Eatery',
        imageUrl: 'https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/restaurent-3.jpg',
        address: 'Leipziger Straße 12, 10117 Berlin',
        website: 'www.luxuryeatery.com',
        phone: '+49 30 111111111',
        openStatus: 'Open at 8am tomorrow',
        closeStatus: 'Close Now',
        rating: 29,
    }
  ];
  
  export { listingcards, listingCardData,  blogs, blogPosts, BlogCardsData, categories, listings, upcomingCards, workingCards };
  