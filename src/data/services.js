import {
  Scissors,
  Sparkles,
  Sun,
  Wand2,
  Hourglass,
  Droplets,
  Zap,
  Flower2,
  Eye,
  Leaf,
  Wind,
  Atom,
  Syringe,
  Crown,
  Brush,
  User,
  Pencil,
  Layers,
  TestTube2,
  Heart,
  Eraser,
  Target,
  Pipette,
  Waves,
} from "lucide-react";

// Treatment images
// Hair treatments — new images
import GlutathioneHairImg from "../assets/treatments/glutathione-hair.jpg";
import GcellImg from "../assets/treatments/gcell.jpg";
import HybridHairTransplantImg from "../assets/treatments/hybrid-hair-transplant.jpg";
import RegenPro9Img from "../assets/treatments/regen-pro9-new.png";
import GelPrpImg from "../assets/treatments/gel-prp.jpg";
import OltNewImg from "../assets/treatments/olt-new.png";
import CosmeticHairSystemImg from "../assets/treatments/cosmetic-hair-system.png";
import PrpStemX27Img from "../assets/treatments/prp-stemx27.png";
import BeardTransplantNewImg from "../assets/treatments/beard-transplant-new.png";
// Skin treatments — new images
import GlutaliteIvDripImg from "../assets/treatments/glutalite-iv-drip.jpg";
import ChemicalPeelImg from "../assets/treatments/chemical-peel.jpg";
import PhotoCarbonImg from "../assets/treatments/photo-carbon.png";
import LaserHairReductionImg from "../assets/treatments/laser-hair-reduction.jpg";
import HydraLiftImg from "../assets/treatments/hydra-lift.jpg";
import LipMicropigmentationNewImg from "../assets/treatments/lip-micropigmentation-new.png";
import BotoxFillersImg from "../assets/treatments/botox-fillers.jpg";
import MnrfImg from "../assets/treatments/mnrf.jpg";
import TattooRemovalImg from "../assets/treatments/tattoo-removal.jpg";

// Five top-level categories used on the Home overview.
export const serviceCategories = [
  {
    slug: "hair-care",
    title: "Hair Care",
    icon: Scissors,
    summary:
      "Targeted therapies for hair fall, thinning, and scalp health — built around your hair type and goals.",
    points: ["Hair fall analysis", "Scalp therapy", "Volume restoration"],
  },
  {
    slug: "skin-treatments",
    title: "Skin Treatments",
    icon: Sparkles,
    summary:
      "Dermatologist-led skincare for clarity, hydration, and tone — calm, clinical, and effective.",
    points: ["Acne care", "Pigmentation", "Glow facials"],
  },
  {
    slug: "laser-therapies",
    title: "Laser Therapies",
    icon: Zap,
    summary:
      "Precision laser solutions for pigmentation, unwanted hair, and skin resurfacing with minimal downtime.",
    points: ["Q-Switch", "Hair reduction", "Resurfacing"],
  },
  {
    slug: "cosmetic-procedures",
    title: "Cosmetic Procedures",
    icon: Wand2,
    summary:
      "Subtle, refined enhancements delivered by certified specialists in a sterile, premium setting.",
    points: ["Eyebrow restoration", "Lip & contour", "Skin tightening"],
  },
  {
    slug: "anti-aging",
    title: "Anti Aging",
    icon: Hourglass,
    summary:
      "Smoothing, lifting, and rejuvenation programs that respect your natural features and lifestyle.",
    points: ["Fine line care", "Collagen boost", "Radiance plans"],
  },
];

// Full hair treatment menu.
export const hairTreatments = [
  {
    slug: "glutathione-iv-drip",
    title: "Glutathione IV Drip Therapy",
    icon: TestTube2,
    image: GlutathioneHairImg,
    category: "Hair",
    summary:
      "Advanced wellness and skin rejuvenation treatment that delivers powerful antioxidants directly into the bloodstream. Known as the body's Master Antioxidant, Glutathione supports detoxification, skin radiance, and overall wellness.",
  },
  {
    slug: "g-cell-therapy",
    title: "G Cell Therapy",
    icon: Atom,
    image: GcellImg,
    category: "Hair",
    summary:
      "Growth-factor-rich cellular technology that stimulates dormant hair follicles, reduces hair fall, improves scalp health, and promotes natural hair regrowth. Ideal for hair thinning and early hair loss.",
  },
  {
    slug: "hybrid-hair-transplant",
    title: "Hybrid Hair Transplant",
    icon: Scissors,
    image: HybridHairTransplantImg,
    category: "Hair",
    summary:
      "Combines modern FUE technology with enhanced graft implantation techniques to deliver superior hair density, natural hairline design, and long-lasting results. Perfect for thinning hair and receding hairlines.",
  },
  {
    slug: "regen-pro-9-gfc",
    title: "Regen Pro 9 GFC",
    icon: Leaf,
    image: RegenPro9Img,
    category: "Hair",
    summary:
      "Highly concentrated growth factors derived from your own blood to stimulate dormant follicles, promote healthier hair growth, and improve scalp health. Safe, minimally invasive, and non-surgical.",
  },
  {
    slug: "advanced-gel-prp",
    title: "Advanced Gel PRP",
    icon: Droplets,
    image: GelPrpImg,
    category: "Hair",
    summary:
      "Combines PRP therapy with a specialized gel matrix for prolonged growth factor release, stimulating hair regrowth, improving scalp health, and reducing hair fall. Ideal for early to moderate hair loss.",
  },
  {
    slug: "oxygen-laser-therapy",
    title: "Oxygen Laser Therapy",
    icon: Wind,
    image: OltNewImg,
    category: "Hair",
    summary:
      "Advanced non-invasive treatment that improves scalp health, controls dandruff, reduces hair fall, and promotes natural hair growth using oxygen-powered laser technology.",
  },
  {
    slug: "cosmetic-hair-system",
    title: "Cosmetic Hair System",
    icon: Crown,
    image: CosmeticHairSystemImg,
    category: "Hair",
    summary:
      "A non-surgical solution for hair thinning or baldness. Customized to match your hair color, texture, and style, delivering immediate, natural-looking results safely and painlessly.",
  },
  {
    slug: "prp-pro-stemx27",
    title: "PRP Pro+ StemX27",
    icon: Sparkles,
    image: PrpStemX27Img,
    category: "Hair",
    summary:
      "Combines platelet-rich plasma with StemX27 growth factor technology to stimulate dormant follicles, strengthen roots, improve scalp health, and promote natural hair regrowth.",
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    icon: User,
    image: BeardTransplantNewImg,
    category: "Hair",
    summary:
      "Enhances facial hair density, fills patchy areas, and creates a natural, permanent beard using your own hair follicles. Delivers realistic, long-lasting results with a customized beard design.",
  },
  {
    slug: "scalp-micropigmentation",
    title: "Scalp Micropigmentation",
    icon: Brush,
    image: PrpStemX27Img,
    category: "Hair",
    summary:
      "A precision pigmentation technique that mimics the look of a fuller hairline — ideal for thinning crowns, scar camouflage, and clean buzz looks.",
  },
  {
    slug: "eyebrow-transplant",
    title: "Eyebrow Transplant",
    icon: Eye,
    image: BeardTransplantNewImg,
    category: "Hair",
    summary:
      "Restore sparse, over-plucked, or thinning brows using advanced follicle techniques — permanent, natural-looking results that age beautifully with you.",
  },
  {
    slug: "hair-extension",
    title: "Hair Extension",
    icon: Wand2,
    image: HybridHairTransplantImg,
    category: "Hair",
    summary:
      "High-grade extensions for instant length and volume, fitted by trained stylists to blend seamlessly with your natural hair.",
  },
  {
    slug: "eye-lash-lifting",
    title: "Eye Lash Lifting",
    icon: Sparkles,
    image: CosmeticHairSystemImg,
    category: "Hair",
    summary:
      "A gentle lift and curl that opens up the eyes for weeks at a time. No daily curling, no extensions — just elevated natural lashes.",
  },
  {
    slug: "microblading",
    title: "Microblading",
    icon: Pencil,
    image: OltNewImg,
    category: "Hair",
    summary:
      "A semi-permanent technique that crafts naturally fuller, hair-stroke brows — tailored shape, color, and density for an effortless everyday look.",
  },
  {
    slug: "mesotherapy",
    title: "Mesotherapy",
    icon: Syringe,
    image: GelPrpImg,
    category: "Hair",
    summary:
      "A minimally invasive scalp treatment that delivers vitamins, peptides, and growth factors directly into the dermis to strengthen roots and reduce hair fall.",
  },
];

// Full skin treatment menu.
export const skinTreatments = [
  {
    slug: "glutalite-iv-drip",
    title: "Glutalite IV Drip",
    icon: TestTube2,
    image: GlutaliteIvDripImg,
    category: "Skin",
    summary:
      "A nutrient-rich IV infusion of Glutathione, Vitamin C, and essential nutrients that brightens skin, reduces pigmentation, and supports full-body detoxification and anti-aging.",
  },
  {
    slug: "chemical-peel",
    title: "Chemical Peel",
    icon: Layers,
    image: ChemicalPeelImg,
    category: "Skin",
    summary:
      "Medical-grade chemical peels that gently resurface, brighten, and refine skin by exfoliating damaged layers and stimulating fresh, healthy cell renewal.",
  },
  {
    slug: "photo-carbon-skin-polish",
    title: "Photo Carbon Skin Polish",
    icon: Zap,
    image: PhotoCarbonImg,
    category: "Skin",
    summary:
      "Combines activated carbon technology with laser energy to deeply cleanse pores, control oil, reduce pigmentation, and restore a radiant complexion.",
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    icon: Target,
    image: LaserHairReductionImg,
    category: "Skin",
    summary:
      "Long-lasting, comfortable hair reduction across the face and body using next-generation lasers calibrated to your skin tone and hair type.",
  },
  {
    slug: "hydra-lift-skin-booster",
    title: "Hydra Lift Skin Booster",
    icon: Flower2,
    image: HydraLiftImg,
    category: "Skin",
    summary:
      "Deep skin hydration and collagen boost delivered to the dermis — improving elasticity, texture, and radiance for a naturally youthful glow.",
  },
  {
    slug: "lip-micropigmentation",
    title: "Lip Micropigmentation",
    icon: Heart,
    image: LipMicropigmentationNewImg,
    category: "Skin",
    summary:
      "A semi-permanent cosmetic procedure that enhances lip shape, color, and symmetry for naturally fuller, defined, and youthful-looking lips.",
  },
  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    icon: Sparkles,
    image: BotoxFillersImg,
    category: "Skin",
    summary:
      "Botox and dermal fillers to reduce wrinkles, restore facial volume, and enhance contours for a refreshed, youthful appearance without surgery.",
  },
  {
    slug: "mnrf",
    title: "MNRF",
    icon: Waves,
    image: MnrfImg,
    category: "Skin",
    summary:
      "Microneedling Radiofrequency that stimulates collagen, tightens skin, minimizes pores, and reduces acne scars for comprehensive skin rejuvenation.",
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    icon: Eraser,
    image: TattooRemovalImg,
    category: "Skin",
    summary:
      "Targeted laser sessions that safely break down tattoo pigments without harming surrounding tissue — suitable for complete removal or cover-up lightening.",
  },
];

// Featured popular treatments shown on the Home page.
export const popularTreatments = [...hairTreatments, ...skinTreatments];

// Combined list used by the Services page.
export const services = [...hairTreatments, ...skinTreatments];

// Department options for the Appointment form.
export const departments = serviceCategories.map((c) => c.title);
