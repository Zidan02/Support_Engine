import Image from "next/image";

interface TabContentProps {
  title: string;
  content: { title: string; desc: string }[];
  image: string;
  actions: { text: string; style: "primary" | "secondary"; link: string }[];
}

const ButtonStyle: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border border-blue-600 text-blue-600 hover:bg-blue-100",
};

export default function TabContent({ title, content, image, actions }: TabContentProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      {/* Tab Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
        {title}
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Right: image (moved to the left) */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt={`${title} illustration`}
            width={900}
            height={800}
            className="rounded-xl w-full"
          />
        </div>
        
        {/* Left: descriptions (moved to the right) */}
        <div className="space-y-6">
          {content.map((item, i) => {
            return (
              <div key={i} className="flex gap-3">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Action Buttons */}
          {actions.length > 0 && (
            <div className="mt-6 flex gap-4">
              {actions.map((action, i) => (
                <a 
                  key={i} 
                  href={action.link} 
                  className={`px-6 py-2 rounded-full font-semibold transition ${ButtonStyle[action.style]}`}
                >
                  {action.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}