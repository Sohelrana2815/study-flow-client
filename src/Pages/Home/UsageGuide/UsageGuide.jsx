import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import SectionTitle2 from "../../../Components/SectionTitle2/SectionTitle2";

const UsageGuide = () => {
  return (
    <div className="my-20">
      <AnimatedComponent animation="zoom-in">
        <SectionTitle2 heading="How It Works" />
      </AnimatedComponent>
      <AnimatedComponent animation="fade-right">
        <div className="animate-fade animate-duration-[3000ms] animate-delay-100">
          <p className="leading-relaxed md:text-xl text-lg my-4">
            Study Flow offers a streamlined way to manage your study tasks and
            assignments. Easily create and organize tasks, track your progress,
            and mark them as completed once finished. Our shared assignment
            feature allows users to post assignments for others while protecting
            the original post. Here’s how it all works:
          </p>
          <div className="space-y-4 my-5">
            <p className="md:text-xl leading-relaxed">
              1.{" "}
              <span className="md:text-xl text-lg font-bold">
                Manage Your Study Tasks:
              </span>{" "}
              Create, complete, or remove study tasks as you progress.
            </p>
            <p className="md:text-xl text-lg leading-relaxed">
              2.{" "}
              <span className="md:text-xl text-lg font-bold">
                Share and Submit Assignments:
              </span>{" "}
              Post assignments that others can view, take, and submit. Only the
              original poster can delete it, ensuring secure collaboration.
            </p>
            <p className="md:text-xl text-lg leading-relaxed">
              3.{" "}
              <span className="md:text-xl text-lg font-bold">
                Receive and View Feedback:
              </span>{" "}
              Teachers can review and grade submitted assignments, offering
              feedback and scores that are visible to students. Once reviewed,
              students can remove the assignment from their view if they wish.
            </p>
          </div>
        </div>
      </AnimatedComponent>
    </div>
  );
};

export default UsageGuide;
