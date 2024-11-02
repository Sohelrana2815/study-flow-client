import SectionTitle2 from "../../../Components/SectionTitle2/SectionTitle2";

const UsageGuide = () => {
  return (
    <>
      <div className="my-20 animate-fade animate-duration-[3000ms] animate-delay-500">
        <SectionTitle2 heading="How It Works" />
        <p className="leading-relaxed text-xl my-4">
          Study Flow offers a streamlined way to manage your study tasks and
          assignments. Easily create and organize tasks, track your progress,
          and mark them as completed once finished. Our shared assignment
          feature allows users to post assignments for others, while protecting
          the original post. Here’s how it all works:
        </p>
        <div className="space-y-4 my-5 ">
          <p className="text-xl leading-relaxed">
            1.{" "}
            <span className="text-xl font-bold">Manage Your Study Tasks:</span>{" "}
            Create, complete, or remove study tasks as you progress.
            <p className="text-xl leading-relaxed">
              2.{" "}
              <span className="text-xl font-bold">
                Share and Submit Assignments:
              </span>{" "}
              Post assignments that others can view, take, and submit. Only the
              original poster can delete it, ensuring secure collaboration.
            </p>
            <p className="text-xl leading-relaxed">
              3.{" "}
              <span className="text-xl font-bold">
                Receive and View Feedback:
              </span>{" "}
              Teachers can review and grade submitted assignments, offering
              feedback and scores that are visible to students. Once reviewed,
              students can remove the assignment from their view if they wish.
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default UsageGuide;
