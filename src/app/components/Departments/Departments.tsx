import { departments } from "./departmentsData";
import DepartmentCard from "./DepartmentCard";

export default function Departments() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        {/* Title + Description */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-4">
          Comprehensive Support for Every Department
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          SupportEngine offers specialized templates tailored to various business functions,
          ensuring seamless request handling, workflow automation, and efficient collaboration
          across departments. From IT and HR to Sales and Finance, our system streamlines
          operations for maximum productivity.
        </p>

        {/* Grid of Departments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <DepartmentCard
              key={idx}
              icon={<dept.icon className="w-6 h-6 text-blue-600" />}
              title={dept.title}
              desc={dept.desc}
              link={dept.link}
              direction={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
