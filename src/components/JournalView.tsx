import React, { useState, useEffect } from "react";
import { JournalArticle, NavView, Product } from "../types";
import { JOURNAL_ARTICLES } from "../data/journal";
import { PRODUCTS } from "../data/products";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  X,
  BookOpen,
  User,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  ShoppingBag,
} from "lucide-react";
import { useImageStore } from "../hooks/useImageStore";
import { motion, AnimatePresence } from "motion/react";

interface JournalViewProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct?: (productId: string) => void;
  onAddToCart?: (product: Product, quantity?: number) => void;
}

const JournalReadingHero: React.FC<{
  article: JournalArticle;
}> = ({ article }) => {
  const { image } = useImageStore(article.id, article.image);

  return (
    <div className="relative aspect-16/9 bg-[#151714] rounded-[4px] overflow-hidden border border-[#CFC8BC] shadow-xs group/hero">
      <img
        src={image}
        alt={article.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-[1.01]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

const JournalCard: React.FC<{
  article: JournalArticle;
  onSelect: (article: JournalArticle) => void;
}> = ({ article, onSelect }) => {
  const { image } = useImageStore(article.id, article.image);

  return (
    <article
      id={`journal-card-${article.id}`}
      onClick={() => onSelect(article)}
      className="group bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] overflow-hidden flex flex-col justify-between hover:border-[#4B5848] transition-all duration-300 shadow-xs hover:shadow-md text-left cursor-pointer"
    >
      <div className="space-y-4">
        {/* Cover Image */}
        <div
          className="aspect-16/9 bg-[#1F221E] overflow-hidden relative group/img"
        >
          <img
            src={image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Category & Read Time Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            <span className="px-2.5 py-1 bg-[#20231F]/90 text-[#F8F5EF] text-[9px] font-mono-spec tracking-wider font-bold rounded-[2px] backdrop-blur-xs uppercase">
              {article.category}
            </span>
            <span className="px-2 py-1 bg-[#4B5848] text-[#F8F5EF] text-[9px] font-mono-spec font-bold rounded-[2px] flex items-center gap-1 backdrop-blur-xs">
              <Clock className="w-2.5 h-2.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Summary & Details */}
        <div className="p-6 sm:p-7 space-y-3">
          <div className="text-[11px] font-mono-spec text-[#7A8279] flex items-center gap-2">
            <span>{article.date}</span>
            <span>·</span>
            <span className="text-[#4B5848] font-medium">In-Depth Clinical Guide</span>
          </div>

          <h3
            className="font-serif-editorial text-xl sm:text-2xl font-normal text-[#20231F] group-hover:text-[#4B5848] transition-colors leading-snug"
          >
            {article.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#5C625B] leading-relaxed pt-1">
            {article.summary}
          </p>

          {/* Key Clinical Takeaways Preview */}
          {article.clinicalKeypoints && article.clinicalKeypoints.length > 0 && (
            <div className="mt-3 p-3 bg-[#F2EEE7] rounded-[3px] border border-[#CFC8BC]/60 space-y-1.5">
              <span className="text-[9px] font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider block">
                CORE CLINICAL INSIGHT
              </span>
              <p className="text-[11px] text-[#20231F] leading-relaxed font-medium">
                {article.clinicalKeypoints[0]}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Author & Read Action */}
      <div className="p-6 sm:p-7 pt-0 border-t border-[#CFC8BC]/40 mt-4 flex items-center justify-between text-[11px] font-mono-spec text-[#5C625B]">
        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-[#4B5848]" />
          <span className="text-[#20231F] font-medium">{article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[#4B5848] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1.5"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};

export const JournalView: React.FC<JournalViewProps> = ({
  setCurrentView,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [readingArticle, setReadingArticle] = useState<JournalArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    "ALL",
    "MEN'S SKIN",
    "FOUNDATIONS",
    "SCIENCE",
    "INGREDIENTS",
    "ROUTINES",
  ];

  const filteredArticles =
    selectedCategory === "ALL"
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  // Scroll to top when opening an article
  useEffect(() => {
    if (readingArticle) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [readingArticle]);

  const handleCopyCitation = (article: JournalArticle) => {
    const citation = `${article.author}. "${article.title}." AEGIS Clinical Journal (${article.date}). https://aegis-men.com/journal/${article.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(citation);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const handleAddRelatedProduct = (product: Product) => {
    if (onAddToCart) {
      onAddToCart(product, 1);
      setAddedProductId(product.id);
      setTimeout(() => setAddedProductId(null), 2000);
    }
  };

  return (
    <div id="aegis-journal-root" className="min-h-screen bg-[#F8F5EF] pb-24">
      {/* Editorial Journal Top Ribbon */}
      <div className="bg-[#20231F] text-[#F8F5EF] py-2.5 px-4 text-center border-b border-[#3E453D]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono-spec">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9B7B7] animate-pulse" />
            <span className="font-semibold tracking-wider uppercase">
              THE AEGIS JOURNAL OF DERMATOLOGICAL PRECISION
            </span>
          </div>
          <span className="hidden sm:inline text-[#CFC8BC] tracking-widest text-[10px]">
            PEER-REVIEWED ACTIVE INGREDIENT DOSSIERS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <AnimatePresence mode="wait">
          {/* VIEW 1: Full Article Reading View */}
          {readingArticle ? (
            <motion.div
              key={`article-${readingArticle.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Back to Index Navigation */}
              <div className="flex items-center justify-between border-b border-[#CFC8BC] pb-4">
                <button
                  id="journal-back-btn"
                  onClick={() => setReadingArticle(null)}
                  className="flex items-center gap-2 text-xs font-mono-spec text-[#4B5848] font-bold uppercase tracking-wider hover:text-[#20231F] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Journal Index</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyCitation(readingArticle)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8E1D6] hover:bg-[#DDD0BC] text-[#20231F] text-[11px] font-mono-spec uppercase rounded-[2px] transition-colors cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#4B5848]" />
                        <span>Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-[#5C625B]" />
                        <span>Cite Article</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Main Reading Frame */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left: Article Narrative Body (8 cols) */}
                <div className="lg:col-span-8 space-y-10">
                  {/* Article Masthead */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono-spec font-bold uppercase text-[#4B5848]">
                      <span className="px-2 py-0.5 bg-[#E8E1D6] rounded-[2px]">
                        {readingArticle.category}
                      </span>
                      <span>·</span>
                      <span>{readingArticle.date}</span>
                      <span>·</span>
                      <span className="px-2 py-0.5 bg-[#4B5848] text-[#F8F5EF] rounded-[2px]">
                        {readingArticle.readTime}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial text-[#20231F] leading-[1.12] tracking-tight">
                      {readingArticle.title}
                    </h1>

                    {readingArticle.subtitle && (
                      <p className="text-base sm:text-lg font-serif-editorial italic text-[#5C625B] leading-relaxed">
                        {readingArticle.subtitle}
                      </p>
                    )}

                    <div className="pt-2 flex items-center gap-3 border-t border-[#CFC8BC]/60 text-xs font-mono-spec text-[#5C625B]">
                      <div className="w-8 h-8 rounded-full bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center font-bold">
                        {readingArticle.author.charAt(0)}
                      </div>
                      <div>
                        <strong className="text-[#20231F] block">{readingArticle.author}</strong>
                        {readingArticle.authorRole && (
                          <span className="text-[11px] text-[#7A8279]">{readingArticle.authorRole}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hero Cover Image */}
                  <JournalReadingHero
                    article={readingArticle}
                  />

                  {/* Executive Summary & Clinical Keypoints Box */}
                  {readingArticle.clinicalKeypoints && (
                    <div className="p-6 sm:p-7 bg-[#F8F5EF] border-l-4 border-[#4B5848] border-y border-r border-[#CFC8BC] rounded-[3px] space-y-4 shadow-xs">
                      <div className="flex items-center gap-2 text-[#4B5848] text-xs font-mono-spec font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>CLINICAL SUMMARY &amp; KEY PROTOCOL FINDINGS</span>
                      </div>
                      <p className="text-sm font-medium text-[#20231F] leading-relaxed">
                        {readingArticle.summary}
                      </p>
                      <ul className="space-y-2.5 pt-2 border-t border-[#CFC8BC]/60">
                        {readingArticle.clinicalKeypoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#5C625B]">
                            <CheckCircle2 className="w-4 h-4 text-[#4B5848] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Multi-Section Narrative */}
                  <div className="space-y-8 text-[#20231F] font-serif-editorial leading-relaxed">
                    {readingArticle.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h2 className="text-2xl font-serif-editorial text-[#20231F] font-semibold tracking-tight pt-3 border-b border-[#CFC8BC]/50 pb-2">
                          {section.heading}
                        </h2>
                        <div className="text-base text-[#464D44] font-sans font-light leading-relaxed space-y-4">
                          {section.content.split("\n\n").map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* INCI Clinical Footnotes & Studies */}
                  {readingArticle.studies && readingArticle.studies.length > 0 && (
                    <div className="pt-6 border-t border-[#CFC8BC] space-y-3">
                      <h3 className="text-xs font-mono-spec uppercase text-[#4B5848] font-bold tracking-wider">
                        REFERENCED CLINICAL LITERATURE
                      </h3>
                      <ul className="space-y-1.5 text-xs font-mono-spec text-[#7A8279]">
                        {readingArticle.studies.map((study, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span>[{idx + 1}]</span>
                            <span>{study}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right: Formulation Synergies & Author Credentialing (4 cols) */}
                <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
                  {/* Related Clinical Formulation Card */}
                  {readingArticle.relatedProductId && (() => {
                    const relatedProduct = PRODUCTS.find((p) => p.id === readingArticle.relatedProductId);
                    if (!relatedProduct) return null;

                    return (
                      <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-6 space-y-4 shadow-sm text-left">
                        <div className="flex items-center justify-between text-[10px] font-mono-spec uppercase text-[#4B5848] font-bold pb-2 border-b border-[#CFC8BC]">
                          <span>CORRESPONDING FORMULATION</span>
                          <span>{relatedProduct.stepNumber}</span>
                        </div>

                        <div className="aspect-square bg-[#151714] rounded-[3px] overflow-hidden">
                          <img
                            src={relatedProduct.image}
                            alt={relatedProduct.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-serif-editorial text-lg font-medium text-[#20231F]">
                            {relatedProduct.name}
                          </h4>
                          <p className="text-xs text-[#5C625B]">
                            {relatedProduct.subtitle}
                          </p>
                          <div className="flex items-baseline justify-between pt-2">
                            <span className="font-mono-spec font-bold text-[#20231F] text-base">
                              ₹{relatedProduct.price}
                            </span>
                            <span className="text-[10px] font-mono-spec text-[#4B5848] font-bold">
                              {relatedProduct.formulaSpec}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#CFC8BC]">
                          <button
                            onClick={() => handleAddRelatedProduct(relatedProduct)}
                            className={`w-full py-2.5 rounded-[3px] font-mono-spec text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                              addedProductId === relatedProduct.id
                                ? "bg-[#20231F] text-[#F8F5EF]"
                                : "bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF]"
                            }`}
                          >
                            {addedProductId === relatedProduct.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#A9B7B7]" />
                                <span>ADDED TO BAG</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5 text-[#E8E1D6]" />
                                <span>ADD TO BAG · ₹{relatedProduct.price}</span>
                              </>
                            )}
                          </button>

                          {onSelectProduct && (
                            <button
                              onClick={() => onSelectProduct(relatedProduct.id)}
                              className="w-full py-2 rounded-[3px] border border-[#CFC8BC] hover:border-[#20231F] text-[#20231F] font-mono-spec text-[11px] uppercase tracking-wider font-medium text-center transition-colors cursor-pointer"
                            >
                              VIEW CLINICAL DOSSIER
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Dermatological Standard Guarantee */}
                  <div className="p-5 bg-[#E8E1D6]/60 border border-[#CFC8BC] rounded-[3px] space-y-2.5 text-xs font-mono-spec text-[#5C625B] text-left">
                    <div className="flex items-center gap-2 text-[#20231F] font-bold uppercase text-[11px]">
                      <ShieldCheck className="w-4 h-4 text-[#4B5848]" />
                      <span>THE AEGIS CLINICAL STANDARD</span>
                    </div>
                    <p className="text-[11px] text-[#5C625B] leading-relaxed">
                      All articles are authored by cosmetic chemists, board-certified dermatologists, and clinical researchers. We cite randomized double-blind placebo trials.
                    </p>
                    <div className="pt-2 border-t border-[#CFC8BC]/60 flex items-center justify-between text-[10px] text-[#4B5848] font-bold uppercase">
                      <span>100% INDEPENDENT RESEARCH</span>
                      <span>NO SPONSORED BIAS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* VIEW 2: Journal Directory / Catalog Index */
            <motion.div
              key="catalog-index"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Journal Masthead / Editorial Header */}
              <div className="text-left space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8E1D6] border border-[#CFC8BC] rounded-[3px] text-[10px] font-mono-spec uppercase font-bold text-[#4B5848]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CLINICAL ARCHIVES · DERMATOLOGICAL SCIENCE FOR MEN</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-editorial font-normal text-[#20231F] leading-[1.08] tracking-tight">
                  The Clinical Journal.
                </h1>
                <p className="text-base sm:text-lg text-[#5C625B] font-light leading-relaxed">
                  Rigorous physiological guides on male stratum corneum mechanics, active ingredient bioavailability, barrier recovery from shaving friction, and non-comedogenic sunscreen technology.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-[#CFC8BC]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-[3px] text-[11px] font-mono-spec uppercase font-medium transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#20231F] text-[#F8F5EF] font-bold shadow-xs"
                        : "bg-[#F2EEE7] text-[#5C625B] hover:text-[#20231F] hover:bg-[#E8E1D6] border border-[#CFC8BC]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Journal Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <JournalCard
                    key={article.id}
                    article={article}
                    onSelect={(a) => setReadingArticle(a)}
                  />
                ))}
              </div>

              {/* Personalized Routine Diagnostic Prompt */}
              <div className="p-8 sm:p-10 bg-[#20231F] text-[#F8F5EF] rounded-[4px] border border-[#3E453D] relative overflow-hidden text-left shadow-md">
                <div className="max-w-2xl space-y-3 relative z-10">
                  <span className="text-[10px] font-mono-spec uppercase tracking-[0.2em] text-[#A9B7B7] block font-bold">
                    SYSTEM FORMULATION ENGINE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-editorial text-[#F8F5EF]">
                    Unsure which clinical active matches your skin barrier?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CFC8BC] font-light leading-relaxed">
                    Take our 60-second physiological diagnostic to receive a tailored routine matched to your sebum level, shave frequency, and environment.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setCurrentView("quiz");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-6 py-3 bg-[#F8F5EF] hover:bg-[#E8E1D6] text-[#20231F] text-xs font-mono-spec uppercase font-bold tracking-wider rounded-[3px] transition-colors cursor-pointer"
                    >
                      START SKIN DIAGNOSTIC
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
