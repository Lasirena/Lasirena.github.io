interface ProjectMenuItemProps {
  id: number;
  title: string;
  wip: boolean;
}

export function ProjectMenuItem({ id, title, wip }: ProjectMenuItemProps) {
  return (
    <>
      <a href={'#' + id.toString()}>
        <li className="btn">
          <span>
            {title} {wip ? <em className="wip">(WIP)</em> : null}
          </span>
        </li>
      </a>
    </>
  );
}
