import mayonnaiseImg from '../assets/menu/Mayonnaise.png'

import pattasChickenLegImg from '../assets/menu/Pattas-Chicken-Leg.png'
import malaiChickenLegImg from '../assets/menu/Malai-chicken.png'
import tandooriBBQImg from '../assets/menu/Tandoori-BBQ.png'
import lemonMintMojitoImg from '../assets/menu/Lemon-mint-mojito.png'
import cottonCandyMojitoImg from '../assets/menu/Cotton-candy-mojito.png'
import blueCuracaoMojitoImg from '../assets/menu/Blue-Curacao-Mojito.png'
import chickenWings2Img from '../assets/menu/Chicken-Wings-2.png'
import hariyaliKebabImg from '../assets/menu/Hariyali-Kebab.png'
import specialPooriShawarmaImg from '../assets/menu/Spcl-Poori-Shawarma.png'
import hariyaliTikkaImg from '../assets/menu/Hariyali-Tikka.png'
import chickenWings3Img from '../assets/menu/Chicken-Wings-3.png'
import malaiKebabImg from '../assets/menu/Malai-Kebab.png'
import hariyaliChickenLegImg from '../assets/menu/Hariyali-Chicken.png'
import reshmiLegImg from '../assets/menu/Reshmi-Leg.png'
import seekhKebabImg from '../assets/menu/Seekh-Kebab.png'
import plainLegImg from '../assets/menu/Plain-Leg.png'
import malaiBBQImg from '../assets/menu/Malai-BBQ.png'
import plainBBQImg from '../assets/menu/Plain-BBQ.png'
import chickenWings5Img from '../assets/menu/Chicken-Wings-5.png'
import specialAlfahamChickenImg from '../assets/menu/Spcl-Alfaham-Chicken.png'
import specialChickenChipsImg from '../assets/menu/Spcl-Chicken-Chips.png'

import bubbleGumMojitoImg from '../assets/menu/Bubble-Gum-Mojito.png'
import malaiTikkaImg from '../assets/menu/Malai-Tikka.png'
import chickenTikkaImg from '../assets/menu/Chicken-Tikka.png'
import cheeseShawarmaImg from '../assets/menu/cheese_shawarma.png'
import chilliGarlicShawarmaImg from '../assets/menu/chilli_garlic_shawarma.png'
import classicShawarmaImg from '../assets/menu/classic_shawarma.png'
import greenPepperBBQImg from '../assets/menu/green_pepper_bbq_chicken.png'
import mexicanShawarmaImg from '../assets/menu/mexican_shawarma.png'
import pepperBBQImg from '../assets/menu/pepper_bbq_chicken.png'
import periPeriBBQImg from '../assets/menu/peri_peri_bbq_chicken.png'
import periPeriShawarmaImg from '../assets/menu/peri-peri-shawarma.png'
import schezwanShawarmaImg from '../assets/menu/schezwan_shawarma.png'
import specialBunShawarmaImg from '../assets/menu/Spcl-Bun-Shawarma.png'

import {
  BadgeIndianRupee,
  Building2,
  ChartNoAxesCombined,
  Flame,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Rocket,
  Salad,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from 'lucide-react'

export const brand = {
  ownerName: 'Santhosh Kumar',
  ownerTitle: 'Founder, Big Bites',
  phone: '7397045556',
  phoneDisplay: '+91 73970 45556',
  phoneHref: 'tel:+917397045556',
  instagram: 'https://www.instagram.com/big.bites_official?igsh=MWV1NTYwOW1rOHFuMw==',
  youtube: 'https://m.youtube.com/@big.bites_official',
  email: 'hello@bigbites.in',
  franchiseEmail: 'franchise@bigbites.in',
  location: 'Tiruvallur, Tamil Nadu — 602 001',
}

export const stats = [
  { label: 'Customers Served', value: 50000, suffix: '+', icon: Users },
  { label: 'Outlets Running', value: 9, suffix: '+', icon: MapPin },
  { label: 'Own Stores', value: 3, suffix: '', icon: Store },
  { label: 'Franchise Partners', value: 6, suffix: '+', icon: Handshake },
]

export const menuPreview = [
  {
    category: 'special',
    badge: 'Special',
    image: specialPooriShawarmaImg,
    name: 'Poori Shawarma (6)',
    desc: 'A Big Bites special item that brings a different shawarma experience to the menu.',
    price: '₹100',
    spice: 1,
  },
  {
    category: 'barbeque',
    badge: 'Popular',
    image: pepperBBQImg,
    name: 'Pepper BBQ',
    desc: 'Smoky barbeque chicken with pepper-forward flavour and juicy finish.',
    price: '₹130 • ₹240 • ₹430',
    spice: 2,
  },
  {
    category: 'mojito',
    badge: 'Refreshing',
    image: blueCuracaoMojitoImg,
    name: 'Blue Curacao',
    desc: 'Cool, bright, and refreshing mojito to pair with shawarma and grills.',
    price: '₹70',
    spice: 0,
  },
]

export const fullMenu = [
  {
    category: 'special',
    badge: 'Special',
    image: specialPooriShawarmaImg,
    name: 'Poori Shawarma (6)',
    desc: 'Big Bites special poori shawarma platter with 6 pieces.',
    price: '₹100',
    spice: 1,
  },
  {
    category: 'special',
    badge: 'Special',
    image: specialBunShawarmaImg,
    name: 'Bun Shawarma',
    desc: 'A unique shawarma-style filling served in a bun.',
    price: '₹120',
    spice: 1,
  },
  {
    category: 'special',
    badge: 'Special',
    image: specialChickenChipsImg,
    name: 'Chicken Chips Pack',
    desc: 'Big Bites special chicken chips pack.',
    price: '₹130 (Without Chips)',
    spice: 2,
  },
  {
    category: 'special',
    badge: 'Special',
    image: specialAlfahamChickenImg,
    name: 'Alfaham BBQ',
    desc: 'Special alfaham barbeque available in multiple portion sizes.',
    price: '₹130 • ₹240 • ₹430',
    spice: 2,
  },

  {
    category: 'shawarma',
    badge: 'Signature',
    image: classicShawarmaImg,
    name: 'Classic Shawarma',
    desc: 'Classic shawarma wrap from the core Big Bites menu.',
    price: 'Roll ₹90 • Plate ₹140 • Spl Plate ₹160',
    spice: 1,
  },
  {
    category: 'shawarma',
    badge: 'Popular',
    image: mexicanShawarmaImg,
    name: 'Mexican Shawarma',
    desc: 'A bolder shawarma with extra flavour and premium upgrade options.',
    price: 'Roll ₹100 • Spl Roll ₹130 • Plate ₹150 • Spl Plate ₹170',
    spice: 2,
  },
  {
    category: 'shawarma',
    badge: 'Spicy',
    image: periPeriShawarmaImg,
    name: 'Peri Peri Shawarma',
    desc: 'Peri peri style shawarma with a stronger spicy kick.',
    price: 'Roll ₹100 • Spl Roll ₹130 • Plate ₹150 • Spl Plate ₹170',
    spice: 3,
  },
  {
    category: 'shawarma',
    badge: 'Cheesy',
    image: cheeseShawarmaImg,
    name: 'Cheese Shawarma',
    desc: 'Creamy cheese-forward shawarma with premium serving options.',
    price: 'Roll ₹100 • Spl Roll ₹130 • Plate ₹150 • Spl Plate ₹170',
    spice: 1,
  },
  {
    category: 'shawarma',
    badge: 'Hot',
    image: schezwanShawarmaImg,
    name: 'Schezwan Shawarma',
    desc: 'Schezwan-inspired shawarma with a spicy, street-style flavour profile.',
    price: 'Roll ₹100 • Spl Roll ₹130 • Plate ₹150 • Spl Plate ₹170',
    spice: 3,
  },
  {
    category: 'shawarma',
    badge: 'Garlic',
    image: chilliGarlicShawarmaImg,
    name: 'Chilli Garlic Shawarma',
    desc: 'Chilli-garlic style shawarma with a punchy savoury finish.',
    price: 'Roll ₹100 • Spl Roll ₹130 • Plate ₹150 • Spl Plate ₹170',
    spice: 3,
  },

  {
    category: 'barbeque',
    badge: 'Classic',
    image: plainBBQImg,
    name: 'Plain BBQ',
    desc: 'Classic barbeque chicken available in quarter, half, and full portions.',
    price: 'Quarter ₹120 • Half ₹230 • Full ₹430',
    spice: 1,
  },
  {
    category: 'barbeque',
    badge: 'Popular',
    image: pepperBBQImg,
    name: 'Pepper BBQ',
    desc: 'Pepper-seasoned barbeque chicken with smoky flavour.',
    price: 'Quarter ₹130 • Half ₹240 • Full ₹430',
    spice: 2,
  },
  {
    category: 'barbeque',
    badge: 'Spicy',
    image: periPeriBBQImg,
    name: 'Peri Peri BBQ',
    desc: 'Peri peri barbeque with stronger heat and bold flavour.',
    price: 'Quarter ₹130 • Half ₹240 • Full ₹430',
    spice: 3,
  },
  {
    category: 'barbeque',
    badge: 'Chef Pick',
    image: greenPepperBBQImg,
    name: 'Green Pepper BBQ',
    desc: 'Green pepper flavoured barbeque with rich grilled taste.',
    price: 'Quarter ₹130 • Half ₹240 • Full ₹430',
    spice: 2,
  },
  {
    category: 'barbeque',
    badge: 'Creamy',
    image: malaiBBQImg,
    name: 'Malai BBQ',
    desc: 'Malai-style creamy barbeque with softer spice profile.',
    price: 'Quarter ₹130 • Half ₹240 • Full ₹430',
    spice: 1,
  },
  {
    category: 'barbeque',
    badge: 'Tandoori',
    image: tandooriBBQImg,
    name: 'Tandoori',
    desc: 'Tandoori barbeque in quarter, half, and full portions.',
    price: 'Quarter ₹120 • Half ₹220 • Full ₹400',
    spice: 2,
  },

  {
    category: 'leg',
    badge: '',
    image: plainLegImg,
    name: 'Plain Leg (1)',
    desc: 'Single barbeque-style chicken leg piece.',
    price: '₹50',
    spice: 1,
  },
  {
    category: 'leg',
    badge: '',
    image: hariyaliChickenLegImg,
    name: 'Hariyali Leg (1)',
    desc: 'Herb-marinated chicken leg with green masala flavour.',
    price: '₹70',
    spice: 1,
  },
  {
    category: 'leg',
    badge: '',
    image: malaiChickenLegImg,
    name: 'Malai Leg (1)',
    desc: 'Creamy malai-marinated chicken leg piece.',
    price: '₹70',
    spice: 1,
  },
  {
    category: 'leg',
    badge: '',
    image: pattasChickenLegImg,
    name: 'Pattas Leg (1)',
    desc: 'Spiced chicken leg with bolder masala profile.',
    price: '₹70',
    spice: 2,
  },
  {
    category: 'leg',
    badge: '',
    image: reshmiLegImg,
    name: 'Reshmi Leg (1)',
    desc: 'Soft, mild, reshmi-style chicken leg preparation.',
    price: '₹70',
    spice: 1,
  },

  {
    category: 'kebab',
    badge: '',
    image: hariyaliKebabImg,
    name: 'Hariyali Kebab (6)',
    desc: 'Hariyali-marinated kebab portion.',
    price: '₹100',
    spice: 1,
  },
  {
    category: 'kebab',
    badge: '',
    image: malaiKebabImg,
    name: 'Malai Kebab (6)',
    desc: 'Creamy malai-style kebab portion.',
    price: '₹100',
    spice: 1,
  },
  {
    category: 'kebab',
    badge: '',
    image: seekhKebabImg,
    name: 'Seekh Kebab',
    desc: 'Seekh-style kebab with bold grilled flavour.',
    price: '₹110',
    spice: 2,
  },

  {
    category: 'wings',
    badge: '',
    image: chickenWings2Img,
    name: 'Big Bites Wings (2)',
    desc: 'Crispy, juicy wings in a 2-piece serving.',
    price: '₹80',
    spice: 2,
  },
  {
    category: 'wings',
    badge: '',
    image: chickenWings3Img,
    name: 'Big Bites Wings (3)',
    desc: '3-piece serving of Big Bites wings.',
    price: '₹110',
    spice: 2,
  },
  {
    category: 'wings',
    badge: '',
    image: chickenWings5Img,
    name: 'Big Bites Wings (5)',
    desc: '5-piece serving for a bigger appetite.',
    price: '₹160',
    spice: 2,
  },

  {
    category: 'tikka',
    badge: '',
    image: hariyaliTikkaImg,
    name: 'Hariyali Tikka (6)',
    desc: 'Hariyali tikka portion with fresh herb flavour.',
    price: '₹100',
    spice: 1,
  },
  {
    category: 'tikka',
    badge: '',
    image: chickenTikkaImg,
    name: 'Chicken Tikka (6)',
    desc: 'Classic chicken tikka with grilled masala flavour.',
    price: '₹100',
    spice: 2,
  },
  {
    category: 'tikka',
    badge: '',
    image: malaiTikkaImg,
    name: 'Malai Tikka (6)',
    desc: 'Creamy malai tikka with a softer, rich profile.',
    price: '₹100',
    spice: 1,
  },

  {
    category: 'mojito',
    badge: 'Refreshing',
    image: blueCuracaoMojitoImg,
    name: 'Blue Curacao',
    desc: 'Cool and refreshing mojito-style drink.',
    price: '₹70',
    spice: 0,
  },
  {
    category: 'mojito',
    badge: 'Refreshing',
    image: cottonCandyMojitoImg,
    name: 'Cotton Candy',
    desc: 'Sweet and colourful mojito-style cooler.',
    price: '₹70',
    spice: 0,
  },
  {
    category: 'mojito',
    badge: 'Refreshing',
    image: bubbleGumMojitoImg,
    name: 'Bubble Gum',
    desc: 'Fun, sweet cooler with bubble gum flavour.',
    price: '₹70',
    spice: 0,
  },
  {
    category: 'mojito',
    badge: 'Refreshing',
    image: lemonMintMojitoImg,
    name: 'Lemon Mint',
    desc: 'Classic lemon mint cooler for a fresh finish.',
    price: '₹70',
    spice: 0,
  },

  {
    category: 'addons',
    badge: '',
    image: mayonnaiseImg,
    name: 'Extra Mayonnaise',
    desc: 'Creamy extra mayonnaise add-on.',
    price: '₹20',
    spice: 0,
  },
]

export const timeline = [
  {
    year: '13 Apr 2024',
    title: 'The First Pushcart Begins',
    desc: 'Santhosh Kumar started the first Big Bites pushcart at Tiruvallur Oil Mill, marking the beginning of the brand’s journey.',
  },
  {
    year: '2025',
    title: 'Second Pushcart in Tiruvallur',
    desc: 'Big Bites expanded with its second pushcart branch on C.V. Naidu Road, opposite Ganga Sweets, Tiruvallur.',
  },
  {
    year: '30 Oct 2025',
    title: 'First Franchise Launch',
    desc: 'Big Bites launched its first franchise in Sriperumbudur — a major milestone in transforming the business into a growing brand.',
  },
  {
    year: 'Jan 2026',
    title: 'Second Franchise in Pattabiram',
    desc: 'The second franchise was launched in Pattabiram, showing continued trust in the Big Bites model.',
  },
  {
    year: 'Feb 2026',
    title: 'Third Franchise in Uthukottai',
    desc: 'The third franchise opened in Uthukottai, strengthening Big Bites’ expanding regional presence.',
  },
  {
    year: 'Mar 2026',
    title: 'Third Own Pushcart Branch',
    desc: 'Big Bites opened its third own pushcart branch in Tiruvallur, opposite LIC, adding to its directly operated presence.',
  },
  {
    year: '11 Apr 2026',
    title: 'Fourth Franchise in Andhra',
    desc: 'Big Bites is set to open its fourth franchise in Andhra, marking the brand’s first step into another state.',
  },
]

export const values = [
  { icon: Flame, title: 'Uncompromising Quality', desc: 'Every wrap, every plate, every store — the same benchmark, every day.' },
  { icon: Handshake, title: 'Community First', desc: 'We grew because of Tiruvallur. Every partner and team member is part of the family.' },
  { icon: Rocket, title: 'Bold Growth', desc: 'Fast, data-backed expansion with quality still at the center.' },
  { icon: Salad, title: 'Fresh Always', desc: 'Fresh ingredients, fresh prep, no frozen shortcuts.' },
  { icon: ShieldCheck, title: 'Accessible Premium', desc: 'Premium food experiences at prices everyday customers can enjoy.' },
  { icon: ChartNoAxesCombined, title: 'Partner Success', desc: 'We are invested in franchise profitability from day one.' },
]

export const franchiseBenefits = [
  { icon: Building2, title: 'Complete Setup Support', desc: 'Interior planning, sourcing, training, and launch readiness from one team.' },
  { icon: ChartNoAxesCombined, title: 'Proven Profitable Model', desc: 'A tested operating model already running across multiple franchise outlets.' },
  { icon: Users, title: 'Full Training Programme', desc: 'Recipes, operations, customer service, quality systems, and staff onboarding.' },
  { icon: Rocket, title: 'Marketing & Brand Support', desc: 'Campaigns, social assets, promotional guidance, and a recognisable local brand.' },
  { icon: Handshake, title: 'Supply Chain Access', desc: 'Vetted suppliers and repeatable sourcing standards to protect consistency.' },
  { icon: Phone, title: 'Ongoing Operations Support', desc: 'Regular support, audits, reviews, and business growth consultations post-launch.' },
]

export const processSteps = [
  { num: '01', title: 'Apply & Connect', desc: 'Submit your enquiry and our team will contact you within 48 hours.' },
  { num: '02', title: 'Discovery Meeting', desc: 'We discuss your market, location potential, investment capacity, and expectations.' },
  { num: '03', title: 'Agreement & Setup', desc: 'Finalize the franchise agreement and begin store setup with our team.' },
  { num: '04', title: 'Training & Launch', desc: 'Complete training and launch with full brand and operations support.' },
]

export const testimonials = [
  {
    name: 'Franchise Partner',
    title: 'Tiruvallur District',
    quote: 'Big Bites gave us a model that felt structured, premium, and practical from day one.',
  },
  {
    name: 'Loyal Customer',
    title: 'Regular since 2024',
    quote: 'The flavour is consistent, the service is quick, and it always feels better than regular fast food.',
  },
  {
    name: 'Launch Team Member',
    title: 'Operations',
    quote: 'The growth has been fast, but the standards have stayed strong. That is what makes the brand exciting.',
  },
]

export const footerSocials = [
  { label: 'Instagram', href: brand.instagram, icon: Instagram },
  { label: 'YouTube', href: brand.youtube, icon: Play },
  { label: 'WhatsApp', href: brand.phoneHref, icon: MessageCircle },
]

export const contactCards = [
  {
    icon: MapPin,
    title: 'Our Location',
    value: brand.location,
    sub: '9+ outlets across the district',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: brand.phoneDisplay,
    sub: 'Mon–Sat, 9AM – 8PM',
    href: brand.phoneHref,
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: brand.email,
    sub: brand.franchiseEmail,
    href: `mailto:${brand.email}`,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: 'Message us on WhatsApp',
    sub: 'Fastest response channel',
    href: brand.phoneHref,
  },
]

export const faqs = [
  {
    q: 'How do I apply for a franchise?',
    a: 'Fill out the form on the franchise page. The team will contact you within 48 hours.',
  },
  {
    q: 'Can I order online?',
    a: 'Not yet. The current site is for brand presence, menu browsing, and franchise lead generation.',
  },
  {
    q: 'Where are your outlets?',
    a: 'Big Bites has 9+ outlets across Tiruvallur district, including own stores and franchise locations.',
  },
  {
    q: 'Do you do catering?',
    a: 'Yes — bulk orders and event catering can be discussed over phone or WhatsApp.',
  },
]

export const investmentCards = [
  {
    icon: BadgeIndianRupee,
    tag: 'Total Investment',
    value: '₹2,60,000',
    sub: 'A low-investment entry point for entrepreneurs starting with a proven food business model.',
  },
  {
    icon: TrendingUp,
    tag: 'Expected Monthly Profit',
    value: '₹20,000 – ₹35,000',
    sub: 'Expected monthly profit during the first 3 months based on operations and location performance.',
    highlight: true,
    badge: 'Fast ROI',
  },
  {
    icon: Store,
    tag: 'Business Model',
    value: 'Low Investment',
    sub: 'Designed for scalable growth with controlled startup cost and practical setup requirements.',
    badge: 'Low Investment Business',
  },
]

export const franchiseOpportunityStats = [
  {
    icon: BadgeIndianRupee,
    label: 'Total Investment',
    value: '₹2,60,000',
    sub: 'A practical startup amount for launching a Big Bites franchise outlet.',
  },
  {
    icon: TrendingUp,
    label: 'Expected Monthly Profit',
    value: '₹20,000 – ₹35,000',
    sub: 'Expected monthly profit in the first 3 months based on location and execution.',
  },
  {
    icon: Store,
    label: 'Business Type',
    value: 'Low Investment',
    sub: 'An accessible format designed for entrepreneurs who want a scalable food business.',
  },
  {
    icon: ChartNoAxesCombined,
    label: 'Payback Potential',
    value: 'Fast ROI',
    sub: 'A strong early-return model when supported by the right location and operations discipline.',
  },
]

export const franchiseSupport = [
  'Site selection guidance',
  'Store design and branding kit',
  'Staff hiring and training',
  'Vendor onboarding support',
  'Launch marketing plan',
  'Ongoing operations reviews',
]