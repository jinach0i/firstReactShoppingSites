import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="social-icons">
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fa-brands fa-tiktok" />
        </a>
      </div>
      <address></address>
    </footer>
  );
}
