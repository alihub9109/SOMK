import Layout from "@/components/site/Layout";
// import LogoMark from "@/components/site/LogoMark";
import Hero from "@/components/site/Hero";
import { ScrollBasedVelocity } from "@/components/site/Velocity";
import FeaturedWork from "@/components/site/Features";
import { PowerhouseBento } from "@/components/site/PowerHouse";
import Metrics from "@/components/site/Metrics";
import { Testimonials } from "@/components/site/Testimonials";
import { LogoCloudSimple } from "@/components/site/AnimatedLogos";
import Cta from "@/components/site/CTA";


export default function Index() {
  return (
    <Layout>
      <Hero />
      <ScrollBasedVelocity />
      <FeaturedWork />
      <PowerhouseBento />
      <Metrics />
      <Testimonials />
      <LogoCloudSimple />
      {/* <AwardsStrip /> */}
      <Cta />
    </Layout>
  );
}










// function AwardsStrip() {
//   const awards = [
//     "AWWWARDS",
//     "FWA",
//     "Communication Arts",
//     "Webby",
//     "D&AD",
//     "ADC",
//   ];
//   return (
//     <section className="relative overflow-x-clip py-10">
//       <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
//       <div className="animate-[scroll_25s_linear_infinite] whitespace-nowrap [--gap:4rem]">
//         {awards.concat(awards).map((a, i) => (
//           <span
//             key={i}
//             className="mx-[--gap] inline-block align-middle text-sm text-foreground/60"
//           >
//             {a}
//           </span>
//         ))}
//       </div>
//       <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
//     </section>
//   );
// }


