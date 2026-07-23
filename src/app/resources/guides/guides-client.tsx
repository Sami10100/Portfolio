"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { books, faqs, type GuideBook } from "./guides-data";

function bookDownloadHref(book: GuideBook) {
  return book.id === "geo-accountability-checklist" ? "/free-audit#geo-accountability-checklist" : book.href;
}

function EbookModal({ book, onClose }: { book: GuideBook; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-[#01040c]/75 p-5 backdrop-blur-[14px]" role="presentation" onMouseDown={onClose}>
      <section
        aria-labelledby="ebook-modal-title"
        aria-modal="true"
        className="relative max-h-[calc(100vh-40px)] w-full max-w-[1040px] overflow-auto rounded-[26px] border border-[#00e5ff]/30 bg-[radial-gradient(circle_at_86%_15%,rgba(0,229,255,.14),transparent_34%),linear-gradient(145deg,rgba(15,25,55,.98),rgba(4,9,22,.98))] p-6 text-white shadow-[0_40px_110px_-38px_rgba(0,0,0,.92)] sm:p-8"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button aria-label="Close eBook details" className="absolute right-5 top-5 grid h-[42px] w-[42px] place-items-center rounded-full border border-white/15 bg-white/5" type="button" onClick={onClose}>
          <span className="col-start-1 row-start-1 h-0.5 w-[17px] rotate-45 rounded-full bg-white" />
          <span className="col-start-1 row-start-1 h-0.5 w-[17px] -rotate-45 rounded-full bg-white" />
        </button>
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <div className="grid min-h-[360px] place-items-center rounded-[22px] border border-white/10 bg-[radial-gradient(circle,rgba(0,229,255,.12),transparent_64%)] p-6">
            <Image className="h-auto w-full max-w-[330px] rounded-[12px] shadow-[0_30px_80px_-42px_rgba(0,0,0,.92)]" src={book.image} alt="" width={595} height={842} sizes="330px" />
          </div>
          <div className="pt-10 sm:pt-0">
            <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#00e5ff]">eBook Detail</p>
            <h2 id="ebook-modal-title" className="font-display mt-3 text-[clamp(32px,4vw,54px)] font-extrabold leading-[1.02] text-white">
              {book.title}
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#c8d0ea]">{book.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {book.badges.map((item) => (
                <span key={item} className="rounded-[12px] border border-white/10 bg-white/[.07] px-4 py-3 text-center text-[13px] font-black text-white">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 text-[14px] leading-7 text-[#c8d0ea] sm:grid-cols-2">
              <p>
                <strong className="text-white">Format:</strong> PDF download
              </p>
              <p>
                <strong className="text-white">Length:</strong> {book.pages} pages
              </p>
              <p>
                <strong className="text-white">Updated:</strong> {book.updated}
              </p>
              <p>
                <strong className="text-white">Use case:</strong> {book.useCase}
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {book.id === "geo-accountability-checklist" ? (
                <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5" href={bookDownloadHref(book)}>
                  Get PDF by Email
                </Link>
              ) : (
                <a className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5" href={book.href} download>
                  Download eBook
                </a>
              )}
              <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] border border-white/[.18] bg-white/10 px-6 text-[14px] font-black text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/[.16]" href="/free-audit">
                Get a Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EbookCard({ book, onOpen }: { book: GuideBook; onOpen: (book: GuideBook) => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[#dfe5f0] bg-white shadow-[0_24px_70px_-52px_rgba(26,27,65,.48)] transition hover:-translate-y-1 hover:border-[#00b7d6]/45">
      <button className="relative block overflow-hidden bg-[#070819] text-left" type="button" onClick={() => onOpen(book)} aria-label={`Open ${book.title} details`}>
        <Image
          className="aspect-[16/9] h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          src={book.image}
          alt={book.imageAlt}
          width={920}
          height={520}
          loading="lazy"
          sizes="(min-width: 1024px) 430px, 100vw"
        />
        <div className="absolute left-4 top-4 rounded-[8px] border border-[#00e5ff]/30 bg-[#071026]/85 px-3 py-1 text-[12px] font-black uppercase tracking-[.08em] text-[#00e5ff]">
          PDF
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-[#11162a]/90 px-3 py-1 text-[12px] font-bold text-white">
          {book.pages} pages
        </div>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[#656984]">
          <span className="text-[#0077ff]">eBook</span>
          <span aria-hidden="true">|</span>
          <time dateTime={book.updated}>{book.updated}</time>
        </div>
        <h2 className="font-display mt-3 text-[22px] font-bold leading-[1.2] text-[#1a1b41]">
          <button className="text-left text-[#1a1b41]" type="button" onClick={() => onOpen(book)}>
            {book.title}
          </button>
        </h2>
        <p className="mt-3 text-[14.5px] leading-7 text-[#5b5d77]">{book.description}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="inline-flex min-h-10 items-center justify-center rounded-[10px] bg-[#1a1b41] px-4 text-[13px] font-black text-white shadow-[0_16px_34px_-22px_rgba(26,27,65,.9)] transition hover:-translate-y-0.5 hover:bg-[#101735]" type="button" onClick={() => onOpen(book)}>
            View eBook
          </button>
          {book.id === "geo-accountability-checklist" ? (
            <Link className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-[#ccd6e6] bg-[#f8fafd] px-4 text-[13px] font-black text-[#1a1b41] no-underline transition hover:-translate-y-0.5 hover:border-[#00b7d6]/45" href={bookDownloadHref(book)}>
              Get PDF by Email
            </Link>
          ) : (
            <a className="inline-flex min-h-10 items-center justify-center rounded-[10px] border border-[#ccd6e6] bg-[#f8fafd] px-4 text-[13px] font-black text-[#1a1b41] no-underline transition hover:-translate-y-0.5 hover:border-[#00b7d6]/45" href={book.href} download>
              Download PDF
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function GuidesClient({ calendlyUrl }: { calendlyUrl: string }) {
  const [selectedBook, setSelectedBook] = useState<GuideBook | null>(null);

  return (
    <>
      <section className="border-y border-[#dde4ef] bg-white px-5 py-8 sm:px-7">
        <div className="mx-auto max-w-[760px]">
          <form action="/search" className="grid gap-3 sm:grid-cols-[190px_1fr]" role="search">
            <label className="sr-only" htmlFor="ebook-category">eBook category</label>
            <select id="ebook-category" className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none">
              <option>All eBook categories</option>
            </select>
            <label className="sr-only" htmlFor="ebook-search">Search eBooks</label>
            <input id="ebook-search" suppressHydrationWarning className="min-h-12 rounded-[10px] border border-[#d8e0ec] bg-[#f8fafd] px-4 text-[14px] text-[#1a1b41] outline-none placeholder:text-[#7a8098]" name="q" placeholder="Search eBooks..." type="search" />
          </form>
          <div className="mt-4 flex flex-wrap gap-2 rounded-[12px] bg-[#eef3f9] p-1 text-[14px] text-[#5b5d77]">
            <span className="rounded-[9px] bg-[#1a1b41] px-5 py-2 text-white">All ({books.length})</span>
            <span className="px-5 py-2">PDF ({books.length})</span>
          </div>
          <p className="mt-6 text-center text-[14px] text-[#656984]">Showing 1-{books.length} of {books.length} eBooks</p>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-7 sm:py-14">
        <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <EbookCard key={book.id} book={book} onOpen={setSelectedBook} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-7">
        <div className="mx-auto grid max-w-[1180px] gap-6 rounded-[22px] border border-[#00e5ff]/24 bg-[radial-gradient(circle_at_88%_18%,rgba(0,229,255,.2),transparent_32%),linear-gradient(135deg,#1a1b41_0%,#071026_100%)] p-7 text-white shadow-[0_34px_90px_-56px_rgba(26,27,65,.9)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[12px] font-black uppercase tracking-[.16em] text-[#00e5ff]">Next step</p>
            <h2 className="font-display mt-2 text-[clamp(26px,4vw,42px)] font-extrabold">Use the framework on your own website.</h2>
            <p className="mt-3 max-w-[680px] text-[15px] leading-7 text-[#aeb6d5]">Get a free audit and see which SEO, AI search, and SXO fixes matter first.</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#00e5ff] to-[#35d4ff] px-6 text-[14px] font-black text-[#070819] no-underline shadow-[0_18px_38px_-18px_rgba(0,229,255,.8)] transition hover:-translate-y-0.5" href="/free-audit">
              Get a Free Audit
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-[12px] border border-white/[.18] bg-white/10 px-6 text-[14px] font-black text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/[.16]" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-7">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-display text-[34px] font-extrabold text-[#1a1b41]">eBook FAQ</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="rounded-[12px] border border-[#dfe5f0] bg-white p-5 shadow-[0_18px_50px_-42px_rgba(26,27,65,.45)]">
                <summary className="cursor-pointer font-display text-[17px] font-bold text-[#1a1b41]">{question}</summary>
                <p className="mt-3 text-[14px] leading-7 text-[#5b5d77]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {selectedBook ? <EbookModal book={selectedBook} onClose={() => setSelectedBook(null)} /> : null}
    </>
  );
}
