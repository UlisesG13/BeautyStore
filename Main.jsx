import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, MessageCircle, Star, Sparkles, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Soft Pinch Liquid Blush",
        brand: "Rare Beauty",
        type: "Rubor Líquido",
        price: 250,
        image: "/images/products/face-RareBeautyBlush/face-RareBlush.png",
        shades: [
            { name: "Joy", image: "/images/products/face-RareBeautyBlush/shades/Joy.png" },
            { name: "Hope", image: "/images/products/face-RareBeautyBlush/shades/Hope.png" },
            { name: "Happy", image: "/images/products/face-RareBeautyBlush/shades/Happy.png" },
            { name: "Love", image: "/images/products/face-RareBeautyBlush/shades/Love.png" },
            { name: "Lucky", image: "/images/products/face-RareBeautyBlush/shades/Lucky.png" },
            { name: "Grace", image: "/images/products/face-RareBeautyBlush/shades/Grace.jpeg" },
            { name: "Grateful", image: "/images/products/face-RareBeautyBlush/shades/Grateful.png" },
            { name: "Believe", image: "/images/products/face-RareBeautyBlush/shades/Believe.png" },
            { name: "Encourage", image: "/images/products/face-RareBeautyBlush/shades/Eucorage.png" },
            { name: "Virtue", image: "/images/products/face-RareBeautyBlush/shades/Virtue.png" },
            { name: "Worth", image: "/images/products/face-RareBeautyBlush/shades/Worth.png" }
        ],
        description: "Un rubor líquido ligero y duradero que se difumina maravillosamente para un acabado suave y saludable.",
        category: "rostro"
    },
    {
        id: 2,
        name: "3D Hydra Lipgloss",
        brand: "Kiko Milano",
        type: "Gloss Hidratante",
        price: 300,
        image: "/images/products/lip-KikoGloss/lip-KikoGloss.png",
        shades: [
            { name: "Brun Rose", image: "/images/products/lip-KikoGloss/shades/BrunRose.png" },
            { name: "Cherry Red", image: "/images/products/lip-KikoGloss/shades/CherryRed.png" },
            { name: "Pearly Mauve", image: "/images/products/lip-KikoGloss/shades/PearlyMauve.png" },
            { name: "Pearly Natural Rose", image: "/images/products/lip-KikoGloss/shades/PearlyNaturalRose.png" },
            { name: "Pearly Peach Rose", image: "/images/products/lip-KikoGloss/shades/PearlyPeachRose.png" },
            { name: "Pearly Watermelon", image: "/images/products/lip-KikoGloss/shades/PearlyWatermelon.png" }
        ],
        description: "Brillo de labios suavizante para un efecto 3D brillante. Textura no pegajosa y ultra hidratante.",
        category: "labios"
    },
    {
        id: 3,
        name: "Positive Light Luminizer",
        brand: "Rare Beauty",
        type: "Iluminador en crema",
        price: 300,
        image: "/images/products/face-RareBeautyIluminador/face-RareIluminador.png",
        shades: [
            { name: "Enlighten", image: "/images/products/face-RareBeautyIluminador/shades/Enlightenn.png" },
            { name: "Exhilarate", image: "/images/products/face-RareBeautyIluminador/shades/Exhilarate.png" },
            { name: "Mesmerize", image: "/images/products/face-RareBeautyIluminador/shades/Mesmerize.png" }
        ],
        description: "Iluminador en crema que brinda a la piel un brillo instantáneo similar al vidrio.",
        category: "rostro"
    },
    {
        id: 4,
        name: "Soft Pinch Tinted Lip Oil",
        brand: "Rare Beauty",
        type: "Aceite Labial",
        price: 200,
        image: "/images/products/lip-RareBeautyGloss/lip-RareGloss.png",
        shades: [
            { name: "Happy", image: "/images/products/lip-RareBeautyGloss/shades/Happy.png" },
            { name: "Honesty", image: "/images/products/lip-RareBeautyGloss/shades/Honesty.png" },
            { name: "Hope", image: "/images/products/lip-RareBeautyGloss/shades/Hope.png" },
            { name: "Joy", image: "/images/products/lip-RareBeautyGloss/shades/Joy.png" },
            { name: "Serenity", image: "/images/products/lip-RareBeautyGloss/shades/Serenity.png" }
        ],
        description: "Aceite labial con color que hidrata y nutre los labios con un acabado brillante.",
        category: "labios"
    },
    {
        id: 5,
        name: "Jelly Wow Hydrating Lip Oil",
        brand: "Sheglam",
        type: "Aceite Labial",
        price: 150,
        image: "/images/products/lip-sheglamglaze/lip-sheglamglaze.png",
        shades: [
            { name: "Candy Lane", image: "/images/products/lip-sheglamglaze/shades/candyLane.png" },
            { name: "Cocoa Cookie", image: "/images/products/lip-sheglamglaze/shades/cocoaCookie.png" },
            { name: "Melon Pop", image: "/images/products/lip-sheglamglaze/shades/melonPop.png" },
            { name: "Strawberry Milk", image: "/images/products/lip-sheglamglaze/shades/strawberryMilk.png" }
        ],
        description: "Aceite labial hidratante con textura de gelatina para labios suaves y jugosos.",
        category: "labios"
    },
    {
        id: 6,
        name: "Sun Sculpt Bronzer",
        brand: "Sheglam",
        type: "Bronceador",
        price: 150,
        image: "/images/products/face-sheglamBronzer/face-bronzerSheglam.png",
        shades: [
            { name: "Caramel", image: "/images/products/face-sheglamBronzer/shades/Caramel.png" },
            { name: "Golden Sun", image: "/images/products/face-sheglamBronzer/shades/GoldenSun.png" },
            { name: "Terracota", image: "/images/products/face-sheglamBronzer/shades/Terracota.png" },
            { name: "Umber", image: "/images/products/face-sheglamBronzer/shades/Umber.png" }
        ],
        description: "Bronceador en crema para un acabado soleado y natural.",
        category: "rostro"
    },
    {
        id: 7,
        name: "Max Volume Mascara",
        brand: "Sheglam",
        type: "Máscara de Pestañas",
        price: 130,
        image: "/images/products/face-sheglamMascaraPestañas/MaskEyes.png",
        shades: [
            { name: "Waterproof Black", image: "/images/products/face-sheglamMascaraPestañas/shades/WaterProofBlack.png" }
        ],
        description: "Máscara de pestañas de máximo volumen resistente al agua.",
        category: "ojos"
    },
    {
        id: 8,
        name: "Pout Perfect Shine Lip Glaze",
        brand: "Sheglam",
        type: "Gloss Labial",
        price: 150,
        image: "/images/products/lip-sheglamlabialglaze/lip-labialglaze.png",
        shades: [
            { name: "Berry Spritz", image: "/images/products/lip-sheglamlabialglaze/shades/berrySpritz.png" },
            { name: "Honey Glaze", image: "/images/products/lip-sheglamlabialglaze/shades/honeyGlaze.png" },
            { name: "Latte Luxe", image: "/images/products/lip-sheglamlabialglaze/shades/latteLuxe.png" },
            { name: "Rose Veil", image: "/images/products/lip-sheglamlabialglaze/shades/roseVeil.png" },
            { name: "Strawberry Fields", image: "/images/products/lip-sheglamlabialglaze/shades/strawberryFields.png" }
        ],
        description: "Gloss labial con acabado brillante y duradero para labios perfectos.",
        category: "labios"
    },
    {
        id: 9,
        name: "Color Bloom Liquid Blush",
        brand: "Sheglam",
        type: "Rubor Líquido",
        price: 150,
        image: "/images/products/lipAndFace-sheglamBlush/lipAndFace-SheglamBlush.png",
        shades: [
            { name: "Ahoy", image: "/images/products/lipAndFace-sheglamBlush/shades/Ahoy.png" },
            { name: "Cheerio", image: "/images/products/lipAndFace-sheglamBlush/shades/Cheerio.png" },
            { name: "Coucou", image: "/images/products/lipAndFace-sheglamBlush/shades/Coucou.png" },
            { name: "Howdy", image: "/images/products/lipAndFace-sheglamBlush/shades/Howdy.png" }
        ],
        description: "Rubor líquido multiusos para labios y mejillas con acabado natural.",
        category: "rostro"
    },
    {
        id: 10,
        name: "Poudre Universelle Libre",
        brand: "Chanel",
        type: "Polvo",
        price: 280,
        image: "/images/products/face-ChanelPolvo/face-ChanelPolvo.png",
        shades: [
            { name: "Ligth", image: "/images/products/face-ChanelPolvo/shades/Light.png" },
            { name: "MediumLigth", image: "/images/products/face-ChanelPolvo/shades/MediumLight.png" },
            { name: "RosiLigth", image: "/images/products/face-ChanelPolvo/shades/RosiLight.png" },
        ],
        description: "Polvos perfeccionadores de textura ultraligera que matifican la piel sin dejar marcas y realzan delicadamente la tez.",
        category: "rostro"
    },
    {
        id: 11,
        name: "All Hours Concealer",
        brand: "YSL Beauty",
        type: "Corrector",
        price: 270,
        image: "/images/products/face-YslCorrector/face-YslCorrector.png",
        shades: [
            { name: "LC1", image: "/images/products/face-YslCorrector/shades/LC1.png" },
            { name: "LC2", image: "/images/products/face-YslCorrector/shades/LC2.png" },
            { name: "LN4", image: "/images/products/face-YslCorrector/shades/LN4.png" },
        ],
        description: "Un corrector multiusos para ocultar, esculpir o realzar con precisión con un acabado mate luminoso. Hidratado hasta 24 horas.",
        category: "rostro"
    },
    {
        id: 12,
        name: "Le Volume De Chanel",
        brand: "Chanel",
        type: "Máscara de Pestañas",
        price: 200,
        image: "/images/products/face-ChanelMascaraPestañas/Chanel-MaskEyes.png",
        shades: [
            { name: "Noir", image: "/images/products/face-ChanelMascaraPestañas/shades/Noir.png" },
        ],
        description: "Esta innovadora máscara de pestañas de alta precisión logra un volumen instantáneo y un color intenso en un solo trazo para unas pestañas más largas y de aspecto más grueso.",
        category: "ojos"
    },
    {
        id: 13,
        name: "Huile Makeup Remover",
        brand: "Chanel",
        type: "Desmaquillante",
        price: 350,
        image: "/images/products/face-ChanelDesmaquillante/ChanelDesmaquillante.png",
        shades: [
            { name: "L'Huile", image: "/images/products/face-ChanelDesmaquillante/shades/L'Huile.png" },
        ],
        description: "Desmaquillar cuidadosamente la piel es una disciplina diaria, marcada por gestos esenciales. CHANEL crea La Colección de Limpiadores y Desmaquillantes con fórmulas sensoriales adaptadas a todos los tipos de piel.",
        category: "rostro"
    },
    {
        id: 14,
        name: "Color Liquid Rouge",
        brand: "Chanel",
        type: "Rubor Líquido",
        price: 140,
        image: "/images/products/face-SheglamRubor/SheglamRubor.png",
        shades: [
            { name: "Devoted", image: "/images/products/face-SheglamRubor/shades/Devoted.png" },
            { name: "LoveCake", image: "/images/products/face-SheglamRubor/shades/LoveCake.png" },
            { name: "NightDrive", image: "/images/products/face-SheglamRubor/shades/NightDrive.png" },
            { name: "RiskyBusiness", image: "/images/products/face-SheglamRubor/shades/RiskyBusiness.png" },
            { name: "RoseRitual", image: "/images/products/face-SheglamRubor/shades/RoseRitual.png" },
            { name: "SwipeRight", image: "/images/products/face-SheglamRubor/shades/SwipeRight.png" },
        ],
        description: "Rubor Liquido resistente al agua larga duración alta pigmentación natural.",
        category: "rostro"
    },
    {
        id: 15,
        name: "Glamour Multi Finish Eyeshadow Palette",
        brand: "Kiko",
        type: "Paleta de Sombras",
        price: 290,
        image: "/images/products/eyes-KikoSombra/EyesSombra.png",
        shades: [
            { name: "01EarthTones", image: "/images/products/eyes-KikoSombra/shades/01EarthTones.png" },
            { name: "02SunsetVibes", image: "/images/products/eyes-KikoSombra/shades/02SunsetVibes.png" },
            { name: "03BurgundyNotes", image: "/images/products/eyes-KikoSombra/shades/03BurgundyNotes.png" },
            { name: "04MauveSelection", image: "/images/products/eyes-KikoSombra/shades/04MauveSelection.png" },
        ],
        description: "Paleta de sombras Kiko que permite hacer que la mirada se convierta en la auténtica protagonista y crear looks de ojos coloridos y de tendencia, naturales para el día o intensos para la noche.",
        category: "ojos"
    },
    {
        id: 16,
        name: "LE ROUGE DUO ULTRA TENUE",
        brand: "Chanel",
        type: "Labial",
        price: 200,
        image: "/images/products/lip-ChanelLabial/LabialChanel.png",
        shades: [
            { name: "40-Ligth Rose", image: "/images/products/lip-ChanelLabial/shades/40-LightRose.png" },
            { name: "47-Darin Gred", image: "/images/products/lip-ChanelLabial/shades/47-DaringRed.png" },
            { name: "48-Soft Rose", image: "/images/products/lip-ChanelLabial/shades/48-SoftRose.png" },
            { name: "49-Ever Red", image: "/images/products/lip-ChanelLabial/shades/49-EverRed.png" },
            { name: "54-Strawberry Red", image: "/images/products/lip-ChanelLabial/shades/54-StrawberryRed.png" },
            { name: "69-Tender Beige", image: "/images/products/lip-ChanelLabial/shades/69-TenderBeige.png" },
            { name: "174-Endless Pink", image: "/images/products/lip-ChanelLabial/shades/174-EndlessPink.png" },
            { name: "176-Burning Red", image: "/images/products/lip-ChanelLabial/shades/176-BurningRed.png" },
            { name: "182-Light Brown", image: "/images/products/lip-ChanelLabial/shades/182-LightBrown.png" },
            { name: "186-Pink Nude", image: "/images/products/lip-ChanelLabial/shades/186-PinkNude.png" },
            { name: "188-Caramel Beige", image: "/images/products/lip-ChanelLabial/shades/188-CaramelBeige.png" },
            { name: "192-Coral Pink", image: "/images/products/lip-ChanelLabial/shades/192-CoralPink.png" },
            { name: "194-Intense Nude", image: "/images/products/lip-ChanelLabial/shades/194-IntenseNude.png" },
            { name: "196-Red Brown", image: "/images/products/lip-ChanelLabial/shades/196-RedBrown.png" },
        ],
        description: "Un lápiz labial líquido ultrasaturado combinado con un brillo de alto brillo para una cobertura total y un color de larga duración.",
        category: "labios"
    },
    {
        id: 17,
        name: "Air Matte Ultra",
        brand: "Nars",
        type: "Labial",
        price: 200,
        image: "/images/products/lip-NarsLabial/NarsLabial.png",
        shades: [
            { name: "317-Sex Kitten", image: "/images/products/lip-NarsLabial/shades/317-SexKitten.png" },
            { name: "318-Shows Topper", image: "/images/products/lip-NarsLabial/shades/318-ShowsTopper.png" },
            { name: "319-Muse", image: "/images/products/lip-NarsLabial/shades/319-Muse.png" },
            { name: "320-Gone Wild", image: "/images/products/lip-NarsLabial/shades/320-GoneWild.png" },
            { name: "321-Turned On", image: "/images/products/lip-NarsLabial/shades/321-TurnedOn.png" },
            { name: "888-Donce Vita", image: "/images/products/lip-NarsLabial/shades/888-DonceVita.png" },
        ],
        description: "Es la elección perfecta para quienes desean un maquillaje de labios sofisticado y de larga duración. Su fórmula innovadora, ligera y aterciopelada, garantiza una aplicación uniforme y un acabado mate aterciopelado sin efecto seco. Gracias a su textura ultra fina, se adhiere perfectamente a los labios, ofreciendo un color intenso y vibrante que resiste durante mucho tiempo sin correrse. ",
        category: "labios"
    },
    {
        id: 18,
        name: "Prada Monochrome Hyper Matte, Sotf Mate & Light Glowing",
        brand: "Prada",
        type: "Labial",
        price: 250,
        image: "/images/products/lip-PradaLabial/PradaLabial.png",
        shades: [
            { name: "B01-Argile", image: "/images/products/lip-PradaLabial/shades/B01-Argile.png" },
            { name: "B02-Quartz", image: "/images/products/lip-PradaLabial/shades/B02-Quartz.png" },
            { name: "B03-Mahogany", image: "/images/products/lip-PradaLabial/shades/B03-Mahogany.png" },
            { name: "B05-Fauve", image: "/images/products/lip-PradaLabial/shades/B05-Fauve.png" },
            { name: "B07-Arancio", image: "/images/products/lip-PradaLabial/shades/B077-Arancio.png" },
            { name: "B101-Tiepolo", image: "/images/products/lip-PradaLabial/shades/B101-Tiepolo.png" },
            { name: "B103-Auburn", image: "/images/products/lip-PradaLabial/shades/B103-Auburn.png" },
            { name: "U014-White", image: "/images/products/lip-PradaLabial/shades/U014-White.png" },
            { name: "U019-Brown", image: "/images/products/lip-PradaLabial/shades/U019-Brown.png" },

        ],
        description: "Un labial mate recargable de larga duración, ligero y con una cobertura de una sola pasada. Un labial recargable, ligero y con un acabado mate difuso y modulable que dura hasta 6 horas.",
        category: "labios"
    },
];

export default function BeautyLanding() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedShade, setSelectedShade] = useState(null);
    const [filter, setFilter] = useState('todos');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const phoneNumber = "+529615618512";

    const handleWhatsAppClick = (product) => {
        const message = `Hola! Me interesa pedir el ${product.name} de ${product.brand}. ¿Qué tonos tienes disponibles?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const filteredProducts = filter === 'todos'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className={`min-h-screen bg-rose-50 font-sans selection:bg-rose-200 selection:text-rose-900 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-rose-100">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Sparkles className="text-rose-500 w-6 h-6 animate-pulse" />
                        <span className="text-2xl font-bold tracking-tighter text-gray-800">BEAUTY<span className="text-rose-500">STORE</span></span>
                    </div>
                    <a
                        href={`https://wa.me/${phoneNumber}`}
                        className="hidden md:flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all shadow-md transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={18} />
                        <span>Contacto Directo</span>
                    </a>
                </div>
            </header>

            <section className="relative overflow-hidden bg-white mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-transparent opacity-50"></div>
                <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-semibold tracking-wide mb-4 animate-bounce">
                        PEDIDOS ABIERTOS ✨
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Tu Belleza, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">
                            Tu Elección.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Marcas exclusivas sobre pedido. Elige tus favoritos, checa los tonos y pide directamente por WhatsApp.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 mb-10 flex justify-center gap-3 flex-wrap">
                {['todos', 'labios', 'rostro', 'ojos'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
              ${filter === cat
                                ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 scale-105'
                                : 'bg-white text-gray-600 hover:bg-rose-50 border border-rose-100'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <main className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-rose-50 hover:-translate-y-2"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                                    {product.brand}
                                </div>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Ver Tonos
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 leading-tight">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.type}</p>
                                    </div>
                                    <span className="text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded text-lg">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedProduct(null)}
                    ></div>

                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">

                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                            <div className="mb-6">
                                <span className="text-rose-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    {selectedProduct.brand} — {selectedProduct.category}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                                <p className="text-2xl font-light text-gray-600">${selectedProduct.price} MXN</p>
                            </div>

                            <div className="mb-6">
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {selectedProduct.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="flex items-center gap-2 font-bold text-gray-800 mb-4 text-lg">
                                    <Heart size={20} className="text-rose-500 fill-current" />
                                    Tonos Disponibles
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {selectedProduct.shades.map((shade, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedShade(shade)}
                                            className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-rose-300 active:scale-95"
                                        >
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={shade.image}
                                                    alt={shade.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Sparkles size={14} className="text-rose-500" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                                <span className="text-white font-semibold text-sm px-3 py-1 bg-rose-500/80 rounded-full backdrop-blur-sm">
                                                    Click para ver
                                                </span>
                                            </div>
                                            <div className="p-3 text-center bg-gradient-to-r from-rose-50 to-pink-50">
                                                <span className="text-gray-700 font-medium text-sm">{shade.name}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-4 italic text-center">
                                    ✨ Pregunta disponibilidad exacta al momento de ordenar
                                </p>
                            </div>

                            <button
                                onClick={() => handleWhatsAppClick(selectedProduct)}
                                className="w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                            >
                                <MessageCircle size={24} />
                                Pedir por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            )
            }

            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-40 hover:scale-110"
            >
                <MessageCircle size={28} />
            </a>

            <footer className="bg-white border-t border-rose-100 py-8 text-center">
                <p className="text-gray-500 font-light">
                    © 2026 bySmartHill | BeautyStore. Entregas seguras y productos 100% originales.
                </p>
            </footer>

            {selectedShade && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
                    onClick={() => setSelectedShade(null)}
                >
                    <div
                        className="relative max-w-2xl w-full max-h-[85vh] animate-[fadeIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedShade(null)}
                            className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={selectedShade.image}
                                alt={selectedShade.name}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />
                            <div className="p-6 text-center bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50">
                                <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedShade.name}</h4>
                                <p className="text-rose-500 font-medium">
                                    {selectedProduct?.name} • {selectedProduct?.brand}
                                </p>
                            </div>
                        </div>

                        <p className="text-white/60 text-center mt-4 text-sm">
                            Toca fuera de la imagen para cerrar
                        </p>
                    </div>
                </div>
            )}
        </div >
    );
}