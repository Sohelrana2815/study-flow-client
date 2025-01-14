import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import SectionTitle2 from "../../../Components/SectionTitle2/SectionTitle2";

const UsageGuide = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Title Section */}
      <AnimatedComponent animation="zoom-in">
        <SectionTitle2
          heading="How It Works"
          subheading="Explore the steps to streamline your study tasks and assignments"
        />
      </AnimatedComponent>

      {/* Guide Content */}
      <AnimatedComponent animation="fade-in">
        <div className="animate-fade animate-duration-[3000ms] animate-delay-100">
          {/* Introductory Paragraph */}
          <p className="leading-relaxed md:text-lg text-base my-6 text-gray-700 dark:text-gray-300">
            Study Flow offers a streamlined way to manage your study tasks and
            assignments. Easily create and organize tasks, track your progress,
            and mark them as completed once finished. Our shared assignment
            feature allows users to post assignments for others while protecting
            the original post. Here’s how it all works:
          </p>

          {/* Guide Steps */}
          <div className="space-y-6 my-8">
            {/* Step 1 */}
            <div className="p-4 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-[#091057] dark:text-white">
                1. Manage Your Study Tasks
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Create, complete, or remove study tasks as you progress. Stay on
                top of your workload and maintain organization with ease.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-[#091057] dark:text-white">
                2. Share and Submit Assignments
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Post assignments that others can view, take, and submit. Only
                the original poster can delete it, ensuring secure collaboration
                and shared learning opportunities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg md:text-xl font-bold text-[#091057] dark:text-white">
                3. Receive and View Feedback
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                Teachers can review and grade submitted assignments, offering
                feedback and scores that are visible to students. Once reviewed,
                students can remove the assignment from their view if they wish.
              </p>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default UsageGuide;
