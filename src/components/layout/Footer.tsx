import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ft" data-tone="dark">
      <div className="wrap">
        <div className="ftg">
          <div>
            <Link className="logo" href="/">
              Softilect<i aria-hidden="true" />
            </Link>
            <p>A software development agency that designs and ships web, mobile, AI, Web3, healthcare and ecommerce products.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/web-development">Web development</Link></li>
              <li><Link href="/services/app-development">App development</Link></li>
              <li><Link href="/services/ux-ui-design">UX/UI design</Link></li>
              <li><Link href="/services/gen-ai">Gen AI</Link></li>
              <li><Link href="/services/blockchain">Blockchain</Link></li>
              <li><Link href="/services">All services</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a className="mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li><Link href="/contact">Book a discovery call</Link></li>
            </ul>
          </div>
        </div>
        <div className="ftb">
          <span>© {new Date().getFullYear()} Softilect. All rights reserved.</span>
          <span>Software development for web, mobile, AI and Web3.</span>
        </div>
      </div>
    </footer>
  );
}
