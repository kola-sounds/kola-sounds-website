import { siteConfig } from "@/data/siteConfig";
import SectionTitle from "@/components/SectionTitle";

export default function About() {
  return (
    ssName="fade-up bg-neutral-950 px-6 py-24 text-white"
>  id="about" className="fade-up" id="about" className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
          id="about"Title
          label="About Us"
          title="Who We Are"
          description={siteConfig.ministry.description}
        />

        <div className="mx-auto max-w-4xl space-y-8 text-center text-lg leading-8 text-gray-300">
          <p>
            Kola Sounds is a Gospel worship ministry committed to leading
            people into God's presence through passionate worship, praise,
            and Christ-centered music.
          </p>

          <p>
            Our vision is to impact churches, communities and nations by
            proclaiming the Gospel through music that glorifies Jesus Christ.
          </p>
        </div>
      </div>
    </section>
  );
}
