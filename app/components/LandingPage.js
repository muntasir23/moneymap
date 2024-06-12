import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="">
      <h1 className="text-gray-900 mb-4">
        <strong>MoneyMap </strong>
        it is build to track your <strong> daily transition.</strong> We are in{" "}
        <strong>development </strong>
        process so we have some glich in our site and some of the page are not
        build properly, we are working on our site. Soon we will complete this
        site properly.
      </h1>

      <Link
        href="/signin"
        className="mt-4 bg-zinc-200 border-2 border-zinc-500 rounded p-2 hover:bg-gray-950 hover:text-lime-300"
      >
        Getting Started
      </Link>
    </div>
  );
}
