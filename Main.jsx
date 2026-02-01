import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, MessageCircle, Star, Sparkles, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Soft Pinch Liquid Blush",
        brand: "Rare Beauty",
        type: "Rubor Líquido",
        price: 580,
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
        price: 450,
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
        name: "Positive Light Liquid Luminizer",
        brand: "Rare Beauty",
        type: "Iluminador Líquido",
        price: 600,
        image: "/images/products/face-RareBeautyIluminador/face-RareIluminador.png",
        shades: [
            { name: "Enlighten", image: "/images/products/face-RareBeautyIluminador/shades/Enlightenn.png" },
            { name: "Exhilarate", image: "/images/products/face-RareBeautyIluminador/shades/Exhilarate.png" },
            { name: "Mesmerize", image: "/images/products/face-RareBeautyIluminador/shades/Mesmerize.png" }
        ],
        description: "Iluminador líquido que brinda a la piel un brillo instantáneo similar al vidrio.",
        category: "rostro"
    },
    {
        id: 4,
        name: "Soft Pinch Tinted Lip Oil",
        brand: "Rare Beauty",
        type: "Aceite Labial",
        price: 520,
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
        price: 180,
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
        price: 220,
        image: "/images/products/face-sheglamBronzer/face-bronzerSheglam.png",
        shades: [
            { name: "Caramel", image: "/images/products/face-sheglamBronzer/shades/Caramel.png" },
            { name: "Golden Sun", image: "/images/products/face-sheglamBronzer/shades/GoldenSun.png" },
            { name: "Terracota", image: "/images/products/face-sheglamBronzer/shades/Terracota.png" },
            { name: "Umber", image: "/images/products/face-sheglamBronzer/shades/Umber.png" }
        ],
        description: "Bronceador en polvo para un acabado soleado y natural.",
        category: "rostro"
    },
    {
        id: 7,
        name: "Max Volume Mascara",
        brand: "Sheglam",
        type: "Máscara de Pestañas",
        price: 150,
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
        price: 160,
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
        price: 170,
        image: "/images/products/lipAndFace-sheglamBlush/lipAndFace-SheglamBlush.png",
        shades: [
            { name: "Ahoy", image: "/images/products/lipAndFace-sheglamBlush/shades/Ahoy.png" },
            { name: "Cheerio", image: "/images/products/lipAndFace-sheglamBlush/shades/Cheerio.png" },
            { name: "Coucou", image: "/images/products/lipAndFace-sheglamBlush/shades/Coucou.png" },
            { name: "Howdy", image: "/images/products/lipAndFace-sheglamBlush/shades/Howdy.png" }
        ],
        description: "Rubor líquido multiusos para labios y mejillas con acabado natural.",
        category: "rostro"
    }
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
        const message = `Hola! Me interesa pedir el ${product.name} de ${product.brand}. ¿Qué tonos tienes disponibles para entrega inmediata o pedido?`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const filteredProducts = filter === 'todos'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className={`min-h-screen bg-rose-50 font-sans selection:bg-rose-200 selection:text-rose-900 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>

            {/* --- HEADER --- */}
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

            {/* --- HERO SECTION --- */}
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

            {/* --- FILTROS --- */}
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

            {/* --- GRID DE PRODUCTOS --- */}
            <main className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-rose-50 hover:-translate-y-2"
                        >
                            {/* Imagen */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                                    {product.brand}
                                </div>
                                {/* Overlay al hacer hover en desktop */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Ver Tonos
                                    </span>
                                </div>
                            </div>

                            {/* Info Rápida */}
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

            {/* --- MODAL DETALLE DE PRODUCTO --- */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop con blur */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedProduct(null)}
                    ></div>

                    {/* Modal Card */}
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">

                        {/* Botón Cerrar */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Imagen Modal */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Contenido Modal */}
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

                            {/* Sección de Tonos */}
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
                                            {/* Imagen del tono */}
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={shade.image}
                                                    alt={shade.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            {/* Icono de zoom */}
                                            <div className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Sparkles size={14} className="text-rose-500" />
                                            </div>
                                            {/* Overlay con nombre */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                                <span className="text-white font-semibold text-sm px-3 py-1 bg-rose-500/80 rounded-full backdrop-blur-sm">
                                                    Click para ver
                                                </span>
                                            </div>
                                            {/* Nombre siempre visible debajo */}
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

                            {/* Botón de Acción Principal */}
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

            {/* --- FLOATING WHATSAPP BUTTON --- */}
            <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-40 hover:scale-110"
            >
                <MessageCircle size={28} />
            </a>

            {/* --- FOOTER --- */}
            <footer className="bg-white border-t border-rose-100 py-8 text-center">
                <p className="text-gray-500 font-light">
                    © 2024 bySmartHill | BeautyStore. Envíos seguros y productos 100% originales.
                </p>
            </footer>

            {/* --- LIGHTBOX PARA TONO SELECCIONADO --- */}
            {selectedShade && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]"
                    onClick={() => setSelectedShade(null)}
                >
                    {/* Contenedor de imagen */}
                    <div
                        className="relative max-w-2xl w-full max-h-[85vh] animate-[fadeIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setSelectedShade(null)}
                            className="absolute -top-12 right-0 text-white hover:text-rose-300 transition-colors"
                        >
                            <X size={32} />
                        </button>

                        {/* Imagen grande */}
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={selectedShade.image}
                                alt={selectedShade.name}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />
                            {/* Nombre del tono */}
                            <div className="p-6 text-center bg-gradient-to-r from-rose-50 via-pink-50 to-rose-50">
                                <h4 className="text-2xl font-bold text-gray-800 mb-2">{selectedShade.name}</h4>
                                <p className="text-rose-500 font-medium">
                                    {selectedProduct?.name} • {selectedProduct?.brand}
                                </p>
                            </div>
                        </div>

                        {/* Indicador de cerrar */}
                        <p className="text-white/60 text-center mt-4 text-sm">
                            Toca fuera de la imagen para cerrar
                        </p>
                    </div>
                </div>
            )}
        </div >
    );
}