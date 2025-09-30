import Button from "./ui/Button";

export default function Resume({
  personalInfo,
  educationalInfo,
  experinceInfo,
  skillsInfo,
  changefn,
}) {
  return (
    <>
      <div className="flex flex-col items-center gap-5 pt-10 text-gray-800 bg-blue-50">
        <div className="w-4xl h-fit flex flex-col space-y-5 rounded-2xl ring-1 bg-white ring-gray-300 shadow-lg p-7">
          {/* Personal Info */}
          <div className="ms-4">
            <h1 className="text-5xl text-black font-extrabold mt-4">
              {personalInfo.name}
            </h1>
            <h3 className="text-xl text-black font-medium my-4">
              {personalInfo.job}
            </h3>
            <hr />
            <div className="py-2">
              <ul className="flex justify-between">
                <li>
                  <span className="font-medium text-black">Location:</span>{" "}
                  {personalInfo.location}
                </li>
                <li>
                  <span className="font-medium text-black">E-mail:</span>{" "}
                  {personalInfo.email}
                </li>
                <li>
                  <span className="font-medium text-black">Phone:</span> +91{" "}
                  {personalInfo.phone}
                </li>
              </ul>
            </div>
            <hr />
          </div>
          {/* Education */}
          <div className="ms-4">
            <h1 className="text-xl text-black font-bold uppercase">
              Education:
            </h1>
            <ul className="flex flex-col pb-4">
              <li>
                <div className="flex justify-between">
                  <h2 className="font-medium text-black text-lg mt-2">
                    {educationalInfo.school}, {educationalInfo.location}
                  </h2>
                  <span>
                    {educationalInfo.startYear} - {educationalInfo.endYear}
                  </span>
                </div>
                <p>
                  {educationalInfo.degree} in {educationalInfo.branch}
                </p>
              </li>
            </ul>
            <hr />
          </div>
          {/* Experience */}
          <div className="ms-4">
            <h1 className="text-xl text-black font-bold uppercase">
              Experience
            </h1>
            <ul className="flex flex-col pb-4">
              <li>
                <div className="flex justify-between">
                  <h2 className="font-medium text-black text-lg mt-2">
                    {experinceInfo.company}, {experinceInfo.location}
                  </h2>
                  <span>
                    {experinceInfo.startYear} - {experinceInfo.endYear}
                  </span>
                </div>
                <p>{experinceInfo.role}</p>
              </li>
            </ul>
            <hr />
          </div>
          {/* Skills */}
          <div className="ms-4">
            <h1 className="text-xl text-black font-bold uppercase mb-2">
              Skills
            </h1>
            <h3 className="text-md font-medium text-black inline">
              Technical Skills:{" "}
            </h3>
            <span>{skillsInfo.technicalSkills}</span>
            <br />
            <h3 className="text-md font-medium text-black inline">
              Soft Skills:{" "}
            </h3>
            <span>{skillsInfo.softSkills}</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 py-5">
        <div className="w-4xl mx-auto">
          <div className="flex justify-start gap-5">
            <Button text={"Edit"} onClick={() => changefn(false)} />
            <Button text={"Print"} onClick={() => window.print()} />
          </div>
        </div>
      </div>
    </>
  );
}
