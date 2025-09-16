import Image from "next/image";

interface TabContentProps {
  title: string; // 👈 add title
  content: { icon: any; title: string; desc: string }[];
  image: string;
}

export default function TabContent({ title, content, image }: TabContentProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {/* Tab Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
        {title}
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: descriptions */}
        <div className="space-y-6">
          {content.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex gap-3">
                <Icon className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Action Buttons */}
          {content.length > 0 && (
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700">
                Try now
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl font-semibold hover:bg-blue-100">
                Join a demo
              </button>
            </div>
          )}
        </div>

        {/* Right: image */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt={`${title} illustration`} // 👈 use title in alt
            width={900}
            height={800}
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
}
