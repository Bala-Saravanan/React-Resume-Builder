import { useState } from "react";
import Form from "./components/Form";
import {
  educationalInfoFields,
  experienceInfoFields,
  personalInfoFields,
  skillsInfoFields,
} from "./constants/constant";
import Button from "./components/ui/Button";
import Resume from "./components/Resume";

function App() {
  const [showResume, setShowResume] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [educationalInfo, setEducationalInfo] = useState({
    school: "",
    location: "",
    degree: "",
    branch: "",
    startYear: "",
    endYear: "",
  });
  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    role: "",
    startYear: "",
    endYear: "",
  });
  const [skillsInfo, setSkillsInfo] = useState({
    technicalSkills: "",
    softSkills: "",
  });
  return (
    <div>
      <div className="w-full bg-indigo-500 p-5">
        <h1 className="text-2xl font-bold text-white text-center">
          CV / Resume Builder
        </h1>
        <p className="text-center text-white my-2">
          Create your Resume with our Brand new application.
        </p>
      </div>
      {!showResume && (
        <>
          <div className="flex justify-center bg-blue-50">
            <div className="w-5xl h-fit grid grid-cols-1 grid-rows-8 md:grid-cols-2 gap-5 mt-10 ">
              <div className="row-span-4">
                <Form
                  title={"Personal Information"}
                  fields={personalInfoFields}
                  state={personalInfo}
                  changefn={setPersonalInfo}
                />
              </div>
              <div className="row-span-4">
                <Form
                  title={"Education"}
                  fields={educationalInfoFields}
                  state={educationalInfo}
                  changefn={setEducationalInfo}
                />
              </div>
              <div className="row-span-4">
                <Form
                  title={"Experience"}
                  fields={experienceInfoFields}
                  state={experienceInfo}
                  changefn={setExperienceInfo}
                />
              </div>
              <div className="row-span-4">
                <Form
                  title={"Skills"}
                  fields={skillsInfoFields}
                  state={skillsInfo}
                  changefn={setSkillsInfo}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-5 w-full bg-blue-50">
            <Button
              text={"Preview Resume"}
              onClick={() => setShowResume(true)}
            />
          </div>
        </>
      )}
      {showResume && (
        <Resume
          personalInfo={personalInfo}
          educationalInfo={educationalInfo}
          experinceInfo={experienceInfo}
          skillsInfo={skillsInfo}
          changefn={setShowResume}
        />
      )}
    </div>
  );
}

export default App;
