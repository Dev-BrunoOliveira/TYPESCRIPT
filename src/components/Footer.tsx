import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="curriculo">
      <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
    </footer>
  );
}

export default Footer;