"use client";

import Image from "next/image";
import { useState } from "react";
import { media, type Img } from "@/lib/media";

export type ApproachItem = { title: string; text: string; img: Img };

/* Our Approach: pick a focus area on the left, the photo and description change on the right. */
export default function ApproachExplorer({ items }: { items: ApproachItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="explorer">
      <ul className="explorer__list" role="tablist" aria-label="Our approach" aria-orientation="vertical">
        {items.map((a, i) => (
          <li key={a.title} role="presentation">
            <button
              type="button"
              role="tab"
              id={`ap-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`ap-panel-${i}`}
              className="explorer__item"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="explorer__title">{a.title}</span>
              <svg className="explorer__chev" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* On small screens the description sits under its title */}
            <p className="explorer__inline" hidden={i !== active}>{a.text}</p>
          </li>
        ))}
      </ul>

      <div className="explorer__stage">
        {items.map((a, i) => (
          <div
            key={a.title}
            role="tabpanel"
            id={`ap-panel-${i}`}
            aria-labelledby={`ap-tab-${i}`}
            className={`explorer__panel${i === active ? " is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <div className="explorer__img">
              <Image src={media(a.img.path)} alt={a.img.alt} fill sizes="(min-width: 960px) 55vw, 100vw" />
            </div>
            <div className="explorer__caption">
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
