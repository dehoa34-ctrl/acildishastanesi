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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/55 via-brand-900/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-950/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        {kicker && (
          <p className="text-sm font-bold uppercase tracking-wider text-brand-200 drop-shadow">{kicker}</p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] sm:text-lg">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
