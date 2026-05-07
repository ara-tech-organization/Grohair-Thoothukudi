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

// Treatment images — mapped from src/assets/treatments (WebP, ~1200px wide)
import HairTransplantImg from "../assets/treatments/basic-hair-transplant-fue.webp";
import CosmeticHairImg from "../assets/treatments/celebrity-choice.webp";
import OltImg from "../assets/treatments/olt.webp";
import MesotherapyImg from "../assets/treatments/mesotherapy.webp";
import RegenProImg from "../assets/treatments/regenpro9.webp";
import StemXImg from "../assets/treatments/stem-x-pro.webp";
import PrpImg from "../assets/treatments/prp.webp";
import SmpImg from "../assets/treatments/smp.webp";
import BeardTransplantImg from "../assets/treatments/beard-transplant.webp";
import EyebrowTransplantImg from "../assets/treatments/eyebrow-transplant.webp";
import HairExtensionImg from "../assets/treatments/hair-extension.webp";
import EyelashImg from "../assets/treatments/eyelash-extensions.webp";
import MicrobladingImg from "../assets/treatments/microblading.webp";
import SkinPeelsImg from "../assets/treatments/skin-peels.webp";
import QSwitchImg from "../assets/treatments/q-switched-lasers.webp";
import DiodeLaserImg from "../assets/treatments/diode-laser.webp";
import GlutathioneImg from "../assets/treatments/glutathioneiv.webp";
import DermaFillersImg from "../assets/treatments/dermal-fillers.webp";
import HydraFacialImg from "../assets/treatments/hydrafacial.webp";
import FacePrpImg from "../assets/treatments/face-prp.webp";
import CosmelanPeelImg from "../assets/treatments/cosmelanpeel.webp";
import RfFacialsImg from "../assets/treatments/rf-facials.webp";
import LipMicropigmentationImg from "../assets/treatments/lip-micropigmentation.webp";
import NdYagImg from "../assets/treatments/nd-yag-laser.webp";
import WartRemovalImg from "../assets/treatments/wart-removal.webp";

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
    slug: "hair-transplant",
    title: "Hair Transplant",
    icon: Scissors,
    image: HairTransplantImg,
    category: "Hair",
    summary:
      "Permanent, natural-looking hair restoration using your own follicles. Our surgeons apply refined FUE techniques for dense, undetectable results that beautifully frame your face.",
  },
  {
    slug: "cosmetic-hair-system",
    title: "Cosmetic Hair System",
    icon: Crown,
    image: CosmeticHairImg,
    category: "Hair",
    summary:
      "A non-surgical route to instant volume and coverage. Custom-fitted, breathable systems designed to look, move, and feel like your own hair.",
  },
  {
    slug: "oxygen-laser-therapy",
    title: "Oxygen Laser Therapy",
    icon: Wind,
    image: OltImg,
    category: "Hair",
    summary:
      "A scalp-rejuvenating session that pairs oxygenation with low-level laser light to revive follicles, calm inflammation, and support healthier growth.",
  },
  {
    slug: "mesotherapy",
    title: "Mesotherapy",
    icon: Syringe,
    image: MesotherapyImg,
    category: "Hair",
    summary:
      "A minimally invasive scalp treatment that delivers vitamins, peptides, and growth factors directly into the dermis to strengthen roots and reduce hair fall.",
  },
  {
    slug: "regen-pro-9",
    title: "Regen Pro 9",
    icon: Atom,
    image: RegenProImg,
    category: "Hair",
    summary:
      "An advanced regenerative protocol combining nine targeted growth factors to reactivate dormant follicles and accelerate visible regrowth.",
  },
  {
    slug: "stem-x-27",
    title: "Stem X 27",
    icon: Leaf,
    image: StemXImg,
    category: "Hair",
    summary:
      "A 27-factor stem-cell-derived therapy that nourishes the scalp at a cellular level — ideal for early thinning and chronic shedding.",
  },
  {
    slug: "prp",
    title: "PRP",
    icon: Droplets,
    image: PrpImg,
    category: "Hair",
    summary:
      "Platelet-rich plasma drawn from your own blood, processed and reintroduced into the scalp to stimulate natural growth and improve density.",
  },
  {
    slug: "scalp-micropigmentation",
    title: "Scalp Micropigmentation",
    icon: Brush,
    image: SmpImg,
    category: "Hair",
    summary:
      "A precision pigmentation technique that mimics the look of a fuller hairline — ideal for thinning crowns, scar camouflage, and clean buzz looks.",
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    icon: User,
    image: BeardTransplantImg,
    category: "Hair",
    summary:
      "Sculpt a fuller, well-defined beard with permanent follicle transfer, designed by our cosmetic team to suit your facial proportions.",
  },
  {
    slug: "eyebrow-transplant",
    title: "Eyebrow Transplant",
    icon: Eye,
    image: EyebrowTransplantImg,
    category: "Hair",
    summary:
      "Restore sparse, over-plucked, or thinning brows using advanced follicle techniques — permanent, natural-looking results that age beautifully with you.",
  },
  {
    slug: "hair-extension",
    title: "Hair Extension",
    icon: Wand2,
    image: HairExtensionImg,
    category: "Hair",
    summary:
      "High-grade extensions for instant length and volume, fitted by trained stylists to blend seamlessly with your natural hair.",
  },
  {
    slug: "eye-lash-lifting",
    title: "Eye Lash Lifting",
    icon: Sparkles,
    image: EyelashImg,
    category: "Hair",
    summary:
      "A gentle lift and curl that opens up the eyes for weeks at a time. No daily curling, no extensions — just elevated natural lashes.",
  },
  {
    slug: "microblading",
    title: "Microblading",
    icon: Pencil,
    image: MicrobladingImg,
    category: "Hair",
    summary:
      "A semi-permanent technique that crafts naturally fuller, hair-stroke brows — tailored shape, color, and density for an effortless everyday look.",
  },
];

// Full skin treatment menu.
export const skinTreatments = [
  {
    slug: "skin-peels",
    title: "Skin Peels",
    icon: Layers,
    image: SkinPeelsImg,
    category: "Skin",
    summary:
      "Medical-grade chemical peels that gently resurface, brighten, and refine the skin. Customized strength for acne, pigmentation, or dullness.",
  },
  {
    slug: "q-switch-laser",
    title: "Q-Switch Laser",
    icon: Zap,
    image: QSwitchImg,
    category: "Skin",
    summary:
      "Precision laser energy that targets deep pigmentation, melasma, and stubborn dark spots. Safe for all skin types with minimal downtime.",
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    icon: Target,
    image: DiodeLaserImg,
    category: "Skin",
    summary:
      "Long-lasting, comfortable hair reduction across the face and body using next-generation lasers calibrated to your skin tone and hair type.",
  },
  {
    slug: "glutathione-iv",
    title: "Glutathione IV",
    icon: TestTube2,
    image: GlutathioneImg,
    category: "Skin",
    summary:
      "A wellness-grade IV protocol designed to support skin clarity, even tone, and antioxidant balance — beauty supported from the inside out.",
  },
  {
    slug: "derma-fillers",
    title: "Derma Fillers",
    icon: Pipette,
    image: DermaFillersImg,
    category: "Skin",
    summary:
      "Hyaluronic-acid fillers used to refine contours, restore lost volume, and gently re-balance facial proportions for a natural finish.",
  },
  {
    slug: "hydra-facial",
    title: "HydraFacial",
    icon: Flower2,
    image: HydraFacialImg,
    category: "Skin",
    summary:
      "A multi-step facial that cleanses, exfoliates, and deeply hydrates the skin — ideal for instantly improved texture, hydration, and clarity.",
  },
  {
    slug: "face-prp",
    title: "Face PRP",
    icon: Droplets,
    image: FacePrpImg,
    category: "Skin",
    summary:
      "Your own platelet-rich plasma applied to the skin to support natural collagen, smoother tone, and a refreshed, lit-from-within glow.",
  },
  {
    slug: "cosmelan-peel",
    title: "Cosmelan Peel",
    icon: Sun,
    image: CosmelanPeelImg,
    category: "Skin",
    summary:
      "A globally recognized depigmenting protocol designed to fade stubborn melasma and uneven tone with measured, lasting results.",
  },
  {
    slug: "mnrf",
    title: "MNRF",
    icon: Waves,
    image: RfFacialsImg,
    category: "Skin",
    summary:
      "Microneedling Radiofrequency that combines micro-channels with controlled RF energy to firm skin, refine pores, and soften scars.",
  },
  {
    slug: "lip-micropigmentation",
    title: "Lip Micropigmentation",
    icon: Heart,
    image: LipMicropigmentationImg,
    category: "Skin",
    summary:
      "Subtle pigment placement to enhance the natural color and definition of the lips — soft, fresh, and beautifully understated.",
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    icon: Eraser,
    image: NdYagImg,
    category: "Skin",
    summary:
      "Targeted laser sessions that gently break down tattoo pigment, with treatment plans calibrated to ink color, depth, and skin tone.",
  },
  {
    slug: "wart-removal",
    title: "Wart Removal",
    icon: Sparkles,
    image: WartRemovalImg,
    category: "Skin",
    summary:
      "Quick, precise removal of warts and skin tags using safe clinical methods — minimal scarring and rapid recovery.",
  },
];

// Featured popular treatments shown on the Home page.
export const popularTreatments = [...hairTreatments, ...skinTreatments];

// Combined list used by the Services page.
export const services = [...hairTreatments, ...skinTreatments];

// Department options for the Appointment form.
export const departments = serviceCategories.map((c) => c.title);
