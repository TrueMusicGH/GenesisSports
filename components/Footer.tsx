import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-black text-lg uppercase tracking-tight"><span className="text-[#c9a24b]">Genesis</span> Sports</p>
            <p className="mt-4 text-mist text-sm max-w-sm leading-relaxed">
              Sports Marketing · Sponsorship · Brand Activation · Talent · Events · Experiences
            </p>
            <Image src="/genesis-logo.png" alt="" width={40} height={40} className="mt-8 object-cover opacity-80" />
            <p className="mt-6 text-mist text-sm">Kolkata, India</p>
            <p className="mt-1 text-mist text-sm"><span className="text-[#c9a24b]">Address:</span> 422 Lake Gardens, Kolkata, West Bengal</p>
            <p className="mt-1 text-mist text-sm">
              <span className="text-[#c9a24b]">Contact:</span>{" "}
              <a href="tel:+9147726162" className="hover:text-bone transition-colors">+91 47726162</a>
            </p>
            <a href="mailto:sb@genesissports.co.in" className="text-sm hover:text-mist transition-colors">
              sb@genesissports.co.in
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-mist">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["About", "/about"],
                ["What We Do", "/what-we-do"],
                ["Our Approach", "/approach"],
                ["Our Work", "/our-work"],
                ["Partnerships", "/partnerships"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="hover:text-mist transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-mist">Social</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href="https://www.instagram.com/bengaltigers.ccl" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-[#c9a24b] transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/bengal-tigers-ccl/" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-[#c9a24b] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/bengaltigersteamofficial?mibextid=wwXIfr&rdid=mmOCdKBnMNxkyvVC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HRtoBdhDM%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-[#c9a24b] transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-mist">© 2026 Genesis Sports. All Rights Reserved.</p>
          <p className="font-black text-[clamp(2.5rem,8vw,7rem)] leading-none uppercase tracking-tighter text-[#c9a24b]/10 select-none">
            Genesis
          </p>
        </div>
      </div>
    </footer>
  );
}
