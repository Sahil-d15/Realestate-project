import { projectInfo } from "@/data/project";

export default function Footer() {
  return (
    <footer className="bg-[#f8f5f0] border-t border-[#e2dcd4] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-light text-[#1c1c1c] mb-2">
              Matoshree Gurukul
            </h2>
            <p className="text-sm text-[#8c7b6e]">{projectInfo.location}</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#7a8c72] mb-4">
              Contact
            </p>
            <div className="space-y-2 text-sm text-[#8c7b6e]">
              <div>
                <span className="text-[#1c1c1c]">Project by:</span> {projectInfo.projectBy}
              </div>
              {projectInfo.phones.map((ph) => (
                <div key={ph}>
                  <a
                    href={`tel:${ph}`}
                    className="hover:text-[#1c1c1c] transition-colors"
                  >
                    {ph}
                  </a>
                </div>
              ))}
              <div>
                <a
                  href={`mailto:${projectInfo.email}`}
                  className="hover:text-[#1c1c1c] transition-colors"
                >
                  {projectInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#7a8c72] mb-4">
              Address
            </p>
            <address className="text-sm text-[#8c7b6e] not-italic leading-relaxed">
              {projectInfo.address}
            </address>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#e2dcd4] pt-8 space-y-3">
          <p className="text-xs text-[#c9b89a] leading-relaxed max-w-3xl">
            Information and visuals are based on the project brochure and are for
            presentation purposes. Specifications and visual representations are
            subject to change. Please verify final details with the project team.
          </p>
          <p className="text-xs text-[#c9b89a] leading-relaxed max-w-3xl">
            This brochure is conceptual and does not constitute a legal document.
            Visual representations are not to be taken as representations of fact and
            do not form part of an offer or contract. Management reserves the right
            to add, delete or alter any specifications without prior notice.
          </p>
          <p className="text-xs text-[#e2dcd4] mt-4">
            &copy; {new Date().getFullYear()} Matoshree Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
