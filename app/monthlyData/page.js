import MonthlySummary from "../components/MonthlySummary";

export default function page() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full lg:w-[400px] md:w-[400px] p-3">
      <MonthlySummary year={currentYear} />
    </div>
  );
}
