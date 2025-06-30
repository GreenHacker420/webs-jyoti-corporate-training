export interface BrandLogo {
  src: string
  alt: string
  name: string
  id: string
}

const trustedBrands: BrandLogo[] = [
  {
    id: "makemytrip",
    src: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112019/mmt_fullcolor.png?JgFR3clMwpXRH2xztnw10uhf0tUSghgS&itok=2eLs41rV",
    alt: "MakeMyTrip",
    name: "MakeMyTrip",
  },
  {
    id: "bigbasket",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/BigBasket_Logo.svg/1200px-BigBasket_Logo.svg.png",
    alt: "BigBasket",
    name: "BigBasket",
  },
  {
    id: "ciena",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Ciena_logo.svg/2560px-Ciena_logo.svg.png",
    alt: "Ciena",
    name: "Ciena",
  },
  {
    id: "delmonte",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznXMi1W7C-J70coZjZa1Xuta9A43Ltx3hEw&s",
    alt: "Del Monte",
    name: "Del Monte",
  },
  {
    id: "mes",
    src: "https://mes.gov.in/sites/default/files/mes-logo_0_0.png",
    alt: "Commander Works Engineers",
    name: "Commander Works Engineers",
  },
  {
    id: "paras",
    src: "https://mma.prnewswire.com/media/2633113/Paras_Dairy_Logo.jpg?p=twitter",
    alt: "Paras Dairy",
    name: "Paras Dairy",
  },
  {
    id: "dcm",
    src: "https://getvectorlogo.com/wp-content/uploads/2019/03/dcm-shriram-vector-logo.png",
    alt: "DCM Shriram",
    name: "DCM Shriram",
  },
  {
    id: "continental",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ijDiTB_0ZwnsIrGxD45pBOaLF_Uz-2ZGwA&s",
    alt: "Continental Carriers",
    name: "Continental Carriers",
  },
  {
    id: "boston",
    src: "https://news.bostonscientific.com/download/BSC_541blue_RGB.jpg",
    alt: "Boston Scientific",
    name: "Boston Scientific",
  },
  {
    id: "yaskawa",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwY9E7G4KWPtxpz1QxikA9ZmVUeiy1_hkREQ&s",
    alt: "Yaskawa India",
    name: "Yaskawa India",
  },
  {
    id: "evident",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawUkW-cYaldWK5eNBl1pa-6le7YVb-4dI_Q&s",
    alt: "Evident Scientific",
    name: "Evident Scientific",
  },
  {
    id: "nestle",
    src: "https://logowik.com/content/uploads/images/nestle7563.logowik.com.webp",
    alt: "Nestle",
    name: "Nestle",
  },
  {
    id: "olam",
    src: "https://www.olamgroup.com/content/dam/olamgroup/webp/our-businesses/our-businesses-images/olamagri-logo.webp",
    alt: "Olam Agro",
    name: "Olam Agro",
  },
  {
    id: "cars24",
    src: "https://play-lh.googleusercontent.com/G7skapQg8LPBE6NfUKLBbrLh87JN4VMeM0OUqgTHC5tJS3PclGtMr3gcbRvABR9gCDM",
    alt: "Cars24",
    name: "Cars24",
  },
  {
    id: "beumer",
    src: "https://www.beumergroup.com/app/uploads/2020/01/Logo-BEUMER-Group.png",
    alt: "Beumer Group",
    name: "Beumer Group",
  },
  {
    id: "pgs",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qUAkO6dnN_BKJeV2ppUSwunx7ydy4U_u1g&s",
    alt: "PGS Partner",
    name: "PGS Partner",
  },
  {
    id: "get",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/getglobalgroup_logo-s9rocjQVvnF3gywUFx1xkPg924PqO5.jpeg",
    alt: "GET Global",
    name: "GET Global",
  },
  {
    id: "eximius",
    src: "https://eximiusvc.com/wp-content/uploads/2023/10/blue-eximius.webp",
    alt: "Eximius Ventures",
    name: "Eximius Ventures",
  },
  {
    id: "process9",
    src: "https://process9.com/wp-content/uploads/2020/07/site-black-logo.png",
    alt: "Process9",
    name: "Process9",
  },
  {
    id: "hema",
    src: "https://content.jdmagicbox.com/comp/hosur/u1/9999p4344.4344.150525181845.d9u1/catalogue/hema-engineering-industries-ltd-belagondapalli-hosur-engineering-job-works-3aclc27.jpg",
    alt: "Hema Engineering",
    name: "Hema Engineering",
  },
  {
    id: "nsg",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/National_security_guard_logo.png/1200px-National_security_guard_logo.png",
    alt: "National Security Guard",
    name: "National Security Guard",
  },
  {
    id: "realistic",
    src: "https://content3.jdmagicbox.com/comp/gurgaon/c8/011pxx11.xx11.090610150019.j4c8/catalogue/realistic-realtors-pvt-ltd-sector-25-gurgaon-estate-agents-for-commercial-spaces-a43zrnhpqp.jpg",
    alt: "Realistic Realtors",
    name: "Realistic Realtors",
  },
  {
    id: "pine",
    src: "https://mma.prnewswire.com/media/812226/Pine_Labs_Logo.jpg?p=facebook",
    alt: "Pine Labs",
    name: "Pine Labs",
  },
  {
    id: "sigma",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sigma%20consultancy-1YSQBW8xt81ARt8e10vWuDOQVOnQdS.jpeg",
    alt: "Sigma Consultancy",
    name: "Sigma Consultancy",
  },
  {
    id: "india-shelter",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/india%20shelter-LACBtLlJPrUA47uEZa42BVsLrw34Ml.jpeg",
    alt: "India Shelter Finance",
    name: "India Shelter Finance",
  },
  {
    id: "jastech",
    src: "https://static.wixstatic.com/media/e6b065_f1d84a188d424699ae346fe964073c98~mv2.jpg",
    alt: "Jastech Systems",
    name: "Jastech Systems",
  },
  {
    id: "nsf",
    src: "https://www.nsfindia.org/wp-content/uploads/2022/10/Asset-4Month-300x107.png",
    alt: "National Skills Foundation",
    name: "National Skills Foundation",
  },
  {
    id: "mb-informatics",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MB%20INFORMATICS-L1xF93EqtFw9f8jXwGsgyFjWP3whSt.jpeg",
    alt: "MB Informatics",
    name: "MB Informatics",
  },
  {
    id: "logenix",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyiyagYrF9z2bw5SukDbWNPNcX7yY-QhbLA&s",
    alt: "Logenix India",
    name: "Logenix India",
  },
  {
    id: "alpine",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOS4ktw6hbANhP_Q1fmo9L1Hm7TwNJCLi1A&s",
    alt: "Alpine India",
    name: "Alpine India",
  },
  {
    id: "fia-global",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fiaglobal_logo-FQmtrGv5MIC4G2yeAfvG8s4pezu4ms.jpeg",
    alt: "FIA Global Solutions",
    name: "FIA Global Solutions",
  },
  {
    id: "pace",
    src: "https://image-static.collegedunia.com/public/image/institute/cover_1635080228Logo.jpg",
    alt: "Pace Academy",
    name: "Pace Academy",
  },
  {
    id: "dudhi",
    src: "https://dudhi.in/wp-content/uploads/2023/04/logos.png",
    alt: "Dudhi Industries",
    name: "Dudhi Industries",
  },
  {
    id: "experion",
    src: "https://www.experion.co/img/logo/experion-logo.png",
    alt: "Experion Developers",
    name: "Experion Developers",
  },
  {
    id: "digiaccel",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digiaccel-RNR0FHzC6jvqtpyXU6p6QwXz2b7JQD.jpeg",
    alt: "Digiaccel Learning",
    name: "Digiaccel Learning",
  },
  {
    id: "altmobility",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/altmobility_logo-cCtvNtwITQnN8Hu7eEYtMeqqBWINA7.jpeg",
    alt: "Alt Mobility",
    name: "Alt Mobility",
  },
]

export default trustedBrands;
