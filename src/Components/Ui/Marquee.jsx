const items = [
  {
    name: "Gala",
    image:
      "https://res.cloudinary.com/diwna43hl/image/upload/v1747637912/WhatsApp_Image_2025-05-04_at_21.30.40_ecb3f0e7_hia6ho.jpg",
  },
  {
    name: "Milton",
    image:
      "https://www.milton.in/cdn/shop/files/1_aeac75fc-4aac-4cfe-b399-d0d7c749fd1b__1_-removebg-preview_1.png?v=1702367701&width=280",
  },
  {
    name: "wintex paper",
    image:
      "http://www.wintexpaper.com/wp-content/uploads/2023/01/wintex-logos.png",
  },
  {
    name: "classic",
    image:
      "https://res.cloudinary.com/diwna43hl/image/upload/v1747640840/WhatsApp_Image_2025-05-04_at_21.31.23_9114f5cf_puhcrp.jpg",
  },
  {
    name: "Unique",
    image:
      "https://res.cloudinary.com/diwna43hl/image/upload/v1747640936/WhatsApp_Image_2025-05-04_at_21.32.31_02808650_p0ztzz.jpg",
  },
  {
    name: "Unique",
    image:
      "https://res.cloudinary.com/diwna43hl/image/upload/v1747641019/WhatsApp_Image_2025-05-04_at_21.33.15_f0c96fbb_cd7ygi.jpg",
  },
];

export default function Page() {
  return (
    <div className="relative flex w-screen items-center bg-white py-5">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="flex w-max animate-marquee [--duration:20s] ">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="h-full px-4">
              <div className="relative h-full w-[20rem] rounded-2xl border border-gray-200 bg-white shadow-md flex items-center justify-center p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
