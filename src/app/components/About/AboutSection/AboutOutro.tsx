export default function AboutOutro() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container mx-auto px-4 md:px-8 max-w-7xl">
        <h3 className="text-xl font-semibold text-slate-600 mb-3">
          SupportEngine&apos;s Take on Control
        </h3>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Left Column - Old Model */}
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              If you were looking for IT management solutions in 2001, you faced
              a market dominated by the “Big 4” vendors whose software was high
              priced, hard to deploy, and harder to use. Even a simple
              evaluation exposed you to an extended engagement with enterprise
              sales reps. Subsequent deployments required costly consultants to
              get the solutions up and running and get your IT team acquainted
              with the UIs and workflows. In short, you danced to the tune of
              the Big 4. They were in control, not you. And that meant you
              needed deep pockets, deep pools of talent, and plenty of time if
              you wanted the advantages of well-managed IT.
            </p>
          </div>

          {/* Right Column - New Model */}
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              In the early 2000s, that was the IT management landscape. At
              SupportEngine, we revolutionized that market, driven by corporate
              and product philosophies that empower you to take control of your
              IT, on your own terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  
}
