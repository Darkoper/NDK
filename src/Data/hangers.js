const hangers = [
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557455/251_w8armf.jpg",
    heading: "Hanger 1",
    para: "Sturdy plastic hanger for everyday use.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557454/244_xbtzho.jpg",
    heading: "Hanger 2",
    para: "Wooden hanger with smooth finish.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557453/243_jotkwu.jpg",
    heading: "Hanger 3",
    para: "Metal hanger with anti-slip design.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557451/242_wwsy2z.jpg",
    heading: "Hanger 4",
    para: "Slim hanger for saving closet space.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557449/241_liubrb.jpg",
    heading: "Hanger 5",
    para: "Velvet hanger for delicate clothing.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557449/230_snscgn.jpg",
    heading: "Hanger 6",
    para: "Strong hanger for heavy garments.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557448/229_nqpmql.jpg",
    heading: "Hanger 7",
    para: "Non-slip hanger with extra grip.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557448/223_xdw2en.jpg",
    heading: "Hanger 8",
    para: "Multipurpose hanger for coats and suits.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557446/221_jwox9b.jpg",
    heading: "Hanger 9",
    para: "Durable hanger for long-term use.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557444/20_skmi21.jpg",
    heading: "Hanger 10",
    para: "Thin hanger ideal for small closets.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557444/19_lhl6mr.jpg",
    heading: "Hanger 11",
    para: "Elegant black hanger for formal wear.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557443/18_ibt71v.jpg",
    heading: "Hanger 12",
    para: "Adjustable hanger for multiple clothing types.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557441/17_csmhcl.jpg",
    heading: "Hanger 13",
    para: "Compact hanger for easy storage.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557440/16_eanqly.jpg",
    heading: "Hanger 14",
    para: "Plastic hanger with strong support.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557438/15_kjwihh.jpg",
    heading: "Hanger 15",
    para: "Lightweight hanger for daily use.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557437/14_cizba5.jpg",
    heading: "Hanger 16",
    para: "Metal hanger with anti-rust coating.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557436/13_mcfjd5.jpg",
    heading: "Hanger 17",
    para: "Space-saving hanger for organizing clothes.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557436/12_ebcmge.jpg",
    heading: "Hanger 18",
    para: "Versatile hanger for shirts and jackets.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557433/10_drzrlg.jpg",
    heading: "Hanger 19",
    para: "Classic hanger with a strong frame.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557431/9_xkxcm6.jpg",
    heading: "Hanger 20",
    para: "Durable hanger for all types of clothing.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557431/8_vkxvlb.jpg",
    heading: "Hanger 21",
    para: "Non-marking hanger to protect delicate fabrics.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557429/7_tcmdwh.jpg",
    heading: "Hanger 22",
    para: "Heavy-duty hanger for coats and outerwear.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557426/5_qhyfm0.jpg",
    heading: "Hanger 23",
    para: "Slim profile hanger to maximize closet space.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557426/6_sc3be8.jpg",
    heading: "Hanger 24",
    para: "Contoured hanger to prevent shoulder bumps.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557425/1_gxz6cb.jpg",
    heading: "Hanger 25",
    para: "Basic and reliable plastic hanger.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557425/2_umrai5.jpg",
    heading: "Hanger 26",
    para: "Elegant wooden finish hanger.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557424/4_souvof.jpg",
    heading: "Hanger 27",
    para: "Strong metal construction hanger.",
    showArrow: false
  },
  {
    image: "https://res.cloudinary.com/diwna43hl/image/upload/v1744557424/3_ifnlwt.jpg",
    heading: "Hanger 28",
    para: "Space-efficient slim design hanger.",
    showArrow: false
  },
];

export { hangers };