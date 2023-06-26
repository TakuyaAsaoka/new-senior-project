import Link from 'next/link';
import { Prefecture } from '@/globals';
import './Icons.css';

type Props = { favoriteData: Array<Prefecture> };

export default function Icons({ favoriteData }: Props): JSX.Element {
  const icons: Array<JSX.Element> = [];

  favoriteData.forEach((dataObj) => {
    let icon = (
      <Link href="/favorites/[prefecture]" as={`/favorites/${dataObj.name}`} key={dataObj.name}>
        <div className="icons__icon-wrapper">
          <span className="icons__number">{dataObj.number}</span>
          <div className="icons__image-wrapper">
            <img className="icons__photo" src={dataObj.imgSrc} alt="" />
          </div>
          <span className="icons__name">{dataObj.name}</span>
        </div>
      </Link>
    );
    icons.push(icon);
  });

  return <div className="icons__wrapper">{icons}</div>;
}
