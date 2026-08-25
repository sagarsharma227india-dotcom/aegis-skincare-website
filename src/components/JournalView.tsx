import React, { useState } from 'react';
import { JournalArticle, NavView } from '../types';
import { JOURNAL_ARTICLES } from '../data/journal';
import { Clock, ArrowRight, X, BookOpen, User } from 'lucide-react';

interface JournalViewProps {
  setCurrentView: (view: NavView) => void;
  onSelectProduct?: (productId: string) => void;
}

export const JournalView: React.FC<JournalViewProps> = ({ setCurrentView, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [readingArticle, setReadingArticle] = useState<JournalArticle | null>(null);

  const categories = ['ALL', 'FOUNDATIONS', 'INGREDIENTS', 'ROUTINES', "MEN'S SKIN", 'SCIENCE'];

  const filteredArticles =
    selectedCategory === 'ALL'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#E8E1D6] min-h-screen py-12 lg:py-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[3px] text-[#4B5848] text-[10px] font-mono-spec tracking-[0.2em] uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            <span>EDITORIAL & EDUCATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-normal text-[#20231F] leading-tight">
            THE AEGIS JOURNAL
          </h1>
          <p className="text-sm sm:text-base text-[#5C625B] leading-relaxed">
            Thoughtful perspectives on dermal biology, ingredient mechanisms, and simplifying your daily grooming architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[#CFC8BC]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[3px] text-xs font-mono-spec tracking-wider uppercase transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#4B5848] text-[#F8F5EF] font-bold'
                  : 'bg-[#F2EEE7] text-[#20231F] border border-[#CFC8BC] hover:border-[#20231F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setReadingArticle(article)}
              className="group cursor-pointer bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] overflow-hidden flex flex-col justify-between hover:border-[#4B5848] transition-all shadow-xs"
            >
              <div className="space-y-4">
                <div className="aspect-16/9 bg-[#F2EEE7] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono-spec text-[#5C625B]">
                    <span className="px-2 py-0.5 bg-[#E8E1D6] text-[#4B5848] rounded-[2px] font-bold uppercase">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-xl font-medium text-[#20231F] group-hover:text-[#4B5848] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#5C625B] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#CFC8BC]/50 mt-4 flex items-center justify-between text-[11px] font-mono-spec text-[#5C625B]">
                <span>By {article.author}</span>
                <span className="text-[#4B5848] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reading Modal */}
        {readingArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#20231F]/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] w-full max-w-3xl p-6 sm:p-10 space-y-6 relative shadow-2xl my-8">
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F2EEE7] hover:bg-[#E8E1D6] border border-[#CFC8BC] text-[#20231F]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3 border-b border-[#CFC8BC] pb-4 text-left">
                <div className="flex items-center gap-2 text-[10px] font-mono-spec text-[#4B5848] font-bold uppercase">
                  <span>{readingArticle.category}</span>
                  <span>·</span>
                  <span>{readingArticle.date}</span>
                  <span>·</span>
                  <span>{readingArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif-editorial text-[#20231F] leading-tight">
                  {readingArticle.title}
                </h2>

                <div className="text-xs font-mono-spec text-[#5C625B]">
                  Written by {readingArticle.author}
                </div>
              </div>

              <div className="aspect-16/9 bg-[#F2EEE7] rounded-[2px] overflow-hidden border border-[#CFC8BC]">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#20231F] leading-relaxed text-left font-serif-editorial">
                {readingArticle.content.map((p, i) => (
                  <p key={i} className="text-[#343A33] leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#CFC8BC] flex justify-end">
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-6 py-2.5 bg-[#4B5848] text-[#F8F5EF] rounded-[3px] text-xs font-mono-spec uppercase"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
