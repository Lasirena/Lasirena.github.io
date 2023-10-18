import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Projects.css';

interface ProjectCardProps {
  id: number;
  title: string;
  subtitle: string;
  media: string[];
  playableUrl: string;
  playableTitle: string;
  techStack: string[];
  description: string[];
  features: string[];
}

export function ProjectCard({
  id,
  title,
  subtitle,
  media,
  playableUrl,
  playableTitle,
  techStack,
  description,
  features,
}: ProjectCardProps) {
  return (
    <li className="proj" id={id.toString()}>
      <div className="proj-heading">
        <h2 className="proj-title">{title}</h2>
        <p className="proj-subtitle">{subtitle}</p>
      </div>
      <Carousel
        showArrows={true}
        autoPlay={false}
        emulateTouch={true}
        dynamicHeight={true}
        showStatus={false}
      >
        {media.map((asset) => (
          <div>
            <img key={asset} src={asset} alt="" />
          </div>
        ))}
      </Carousel>
      <div className="proj-info-card">
        <h3>Info</h3>
        {playableUrl ? (
          <>
            <p>
              Play it here:{' '}
              <span className="info-emphasis">
                <a href={playableUrl}>
                  {playableTitle ? playableTitle : playableUrl}
                </a>
              </span>
            </p>
          </>
        ) : null}
        <p>
          Programmed in:{' '}
          <span className="info-emphasis">
            {techStack.map((tech) => tech + ', ')}
          </span>{' '}
        </p>
      </div>
      {description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <div className="proj-info-card">
        <h3>Features</h3>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
