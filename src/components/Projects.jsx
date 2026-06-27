import { projects } from '../data/content.js'

export default function Projects() {
  return (
    <div className="projects">
      {projects.map((p) => {
        const external = p.href.startsWith('http')
        return (
          <a
            className="proj"
            key={p.name}
            href={p.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            <div className="proj__head">
              <span className="proj__name">{p.name}</span>
              <span className="proj__arrow">&gt;</span>
            </div>
            <p className="proj__blurb">{p.blurb}</p>
            <div className="proj__tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </a>
        )
      })}
    </div>
  )
}
