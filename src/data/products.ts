import { Product } from "@/types/product";
import productXX99Mark1 from "@/assets/images/desktop/image-xx99-mark-two-headphones.jpg";
import productXX99Mark2 from "@/assets/images/desktop/image-xx99-mark-one-headphones.jpg";
import productXX99Mark3 from "@/assets/images/desktop/image-xx59-headphones.jpg";
import productZX9Speaker1 from "@/assets/images/desktop/image-zx9-speaker.jpg";
import productZX9Speaker2 from "@/assets/images/desktop/image-zx7-speaker.jpg";
import productYX1Earphones from "@/assets/images/desktop/hero-3.png";
import gallery1 from "@/assets/images/desktop/image-xx99-mark-one-headphones.jpg";
import gallery2 from "@/assets/images/desktop/image-xx59-headphones.jpg";
import gallery3 from "@/assets/images/desktop/image-zx9-speaker.jpg";

export const products: Product[] = [
  {
    id: "1",
    slug: "xx99-mark-two-headphones",
    name: "XX99 Mark II Headphones",
    category: "headphones",
    price: 2999,
    image: productXX99Mark1,
    new: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you are taking a business call or just in your own personal space, the auto on/off and pause features ensure that you will never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
      { quantity: 1, item: "Travel bag" },
    ],
    gallery: [gallery1, gallery2, gallery3],
  },
  {
    id: "2",
    slug: "xx99-mark-one-headphones",
    name: "XX99 Mark I Headphones",
    category: "headphones",
    price: 1750,
    image: productXX99Mark2,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising listening sessions.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: [gallery2, gallery3, gallery1],
  },
  {
    id: "3",
    slug: "xx59-headphones",
    name: "XX59 Headphones",
    category: "headphones",
    price: 899,
    image: productXX99Mark3,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      { quantity: 1, item: "Headphone unit" },
      { quantity: 2, item: "Replacement earcups" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 5m audio cable" },
    ],
    gallery: [gallery3, gallery1, gallery2],
  },
  {
    id: "4",
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    category: "speakers",
    price: 4500,
    image: productZX9Speaker1,
    new: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. Its a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5" aluminum alloy bass unit. You will be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 10m audio cable" },
      { quantity: 1, item: "10m optical cable" },
    ],
    gallery: [gallery1, gallery3, gallery2],
  },
  {
    id: "5",
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    category: "speakers",
    price: 3500,
    image: productZX9Speaker2,
    description:
      "Stream high-fidelity sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high-quality sound. When not in use, it can be used as a book shelf or display piece in your living room or studio.",
    includes: [
      { quantity: 2, item: "Speaker unit" },
      { quantity: 2, item: "Speaker cloth panel" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "3.5mm 7.5m audio cable" },
      { quantity: 1, item: "7.5m optical cable" },
    ],
    gallery: [gallery2, gallery1, gallery3],
  },
  {
    id: "6",
    slug: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    category: "earphones",
    price: 599,
    image: productYX1Earphones,
    new: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and copper color scheme as well as the popular classic black finish.",
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size earplugs" },
      { quantity: 1, item: "User manual" },
      { quantity: 1, item: "USB-C charging cable" },
      { quantity: 1, item: "Travel pouch" },
    ],
    gallery: [gallery3, gallery2, gallery1],
  },
];
