import SectionHeading from "@/components/SectionHeading";
import MaterialCard from "@/components/MaterialCard";
import Button from "@/components/Button";
import { materials } from "@/data/materials";



export default function MaterialsPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading
        title="Luxury begins with thoughtful material selection"
        subtitle="We carefully select finishes that balance aesthetics, durability, and timeless appeal — every material here is one we actually specify in our own completed projects."
      />
      <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5">
        {materials.map((m) => (
          <MaterialCard key={m.slug} material={m} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Button to="/contact">Book a Consultation</Button>
      </div>
    </section>
  );
}
