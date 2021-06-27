import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="Footer-copyright">
          <span>&copy;</span> 2021-2022 Dulles Computer Science<br/>
        </div>
        <div className="Footer-message">
          This is a student social media site. Opinions expressed on this site are not necessarily those held by Fort Bend ISD and shall not be attributed to Fort Bend ISD.<br />
          Created by Vikas Thoutam using React JS.
        </div>
      </footer>
    </div>
  );
}

export default Footer;