import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const items = [
  {
    id: 1,
    name: "Post",
    link: "/post",
  },
];


export default function Header() {
  const { t } = useTranslation('common');
  return (
    <div>
      <table>
        <tbody className={utilStyles.menubarName}>
          <tr>
            <td>
              <Link href="/">Haram Choi</Link>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className={utilStyles.menubar}>
            <td className={utilStyles.menubarItem} />
            {
              items.map((item) => {
                return (
                  <td
                    key={item.id}
                    className={utilStyles.menubarItem}>
                    <Link href={item.link}>{t(item.name)}</Link></td>
                );
              })
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

