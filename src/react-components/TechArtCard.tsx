interface TechArtCardProps {
  id: number;
  title: string;
  subtitle: string;
  coverMedia: string;
}

export function TechArtCard({
  id,
  title,
  subtitle,
  coverMedia,
}: TechArtCardProps) {
  return (
    <li className="proj" id={id.toString()}>
      <div className="proj-heading">
        <h2 className="proj-title">{title}</h2>
        <p className="proj-subtitle">{subtitle}</p>
      </div>
      <video autoPlay muted loop>
        <source src={coverMedia} />
      </video>
    </li>
  );
}
