const navLinks = [
  {id: 1, title: 'Portfolio' },
  {id: 2, title: 'Contact' },
  {id: 3, title: 'Projects' },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    }
]

const dockApps = [
    {
        id: "finder",
        name: "Finder",
        icon: "finder.png",
        canOpen: true
    },
    {
        id: "safari",
        name: "Articles",
        icon: "safari.png",
        canOpen: true
    },
    {
        id: "photos",
        name: "Gallery",
        icon: "photos.png",
        canOpen: true
    },
    {
        id: "contact",
        name: "Contact",
        icon: "contact.png",
        canOpen: true
    },
    {
        id: "terminal",
        name: "Skills",
        icon: "terminal.png",
        canOpen: true
    },
    {
        id: "trash",
        name: "Archive",
        icon: "trash.png",
        canOpen: false
    }
]

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
}

export { navLinks, navIcons, dockApps, WINDOW_CONFIG, INITIAL_Z_INDEX };