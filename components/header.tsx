import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useTranslation, Trans } from 'next-i18next'

const items = [
  {
    id: 1,
    name: "Post",
    link: "/post",
  },
  {
    id: 2,
    name: "Project",
    link: "/project",
  },
  {
    id: 3,
    name: "Contact",
    link: '/contact'
  }
];


export default function Header() {
  const { t } = useTranslation('common');
  return (
    <div>
      <table className={utilStyles.menubarTable}>
        <tbody className={utilStyles.menubarName}>
          <tr>
            <td>
              <Link href="/">{`Haram Choi`}</Link>
            </td>
          </tr>
        </tbody>
        <tbody className={utilStyles.menubar}>
          <tr>
            <td className={utilStyles.menubarItem} />
            {
              items.map((item) => {
                const name = t(item.name);
                return (
                  <td
                    key={item.id}
                    className={utilStyles.menubarItem}>
                    <Link href={item.link}>{name}</Link></td>
                );
              })
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

