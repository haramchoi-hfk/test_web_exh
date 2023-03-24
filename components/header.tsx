import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useTranslation, Trans } from 'next-i18next'


const items = [
  {
    id: 1,
    name: "post",
    link: "/post",
  },
  {
    id: 2,
    name: "project",
    link: "/project",
  }
];


export default function Header() {
  const { t } = useTranslation('common');
  const me = t('haramchoi');
  console.log("me is : ", me);
  return (
    <div>
      <table className={utilStyles.menubarTable}>
        <tbody className={utilStyles.menubarName}>
          <tr>
            <td>
              <Link href="/">{me}</Link>
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

