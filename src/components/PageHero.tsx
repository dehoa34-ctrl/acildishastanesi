import Image from "next/image";

type PageHeroProps = {
  image: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHero({ image, kicker, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-900/70 to-brand-900/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {kicker && (
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">{kicker}</p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold text-white drop-shadow-sm sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-lg text-brand-50/90">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
