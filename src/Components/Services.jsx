import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";
import service4 from "../assets/service4.webp";

const Services = () => {
  return (
    <>
      <div id="services" className="bg-[#f7f8fc]">
        <div className="pt-28 px-4 container mx-auto">
          <div className="text-center space-y-5">
            <h2 className="tex-4xl font-bold font-secondary text-heroBg">
              What Can We Do Together
            </h2>
            <p className="md:w-1/2 mx-auto">
              If you need emotional support, you can call or text 988 to reach
              the 988 Suicide & Crisis Lifeline. You can also chat with a
              trained crisis counselor at 988lifeline.org/chat
            </p>
          </div>
          {/* services category*/}
          <div className="py-12 md:w-4/5 mx-auto">
            <Tabs>
              <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 ">
                <Tab>Couple Counseling</Tab>
                <Tab>Parenting Skills</Tab>
                <Tab>Felling Stuck</Tab>
                <Tab>Self-Confidences</Tab>
              </TabList>
              <TabPanel>
                <div className="flex flex-col md:flex-row gap-8 mt-8">
                  {/* Text Content */}
                  <div className="md:w-1/2 bg-white rounded-lg p-10 font-secondary">
                    <h3 className="text-3xl font-semibold text-primary mb-4">
                      Couple Counseling
                    </h3>
                    <p className="mb-8">
                      Couples therapy is a form of psychotherapy that can help
                      you and your partner improve your relationship. If you are
                      having relationship difficulties, you can seek couples
                      therapy to help rebuild your relationship.
                    </p>
                    <h4 className="text-xl font-medium text-black">Benefits</h4>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understand each other better</li>
                      <li>Identify relationship issues</li>
                      <li>Improve communication skills</li>
                      <li>Resolve conflicts</li>
                      <li>Strengthen friendship and attachment</li>
                    </ul>
                  </div>

                  {/* Image Content */}
                  <div className="md:w-1/2">
                    <img
                      src={service1}
                      alt="Couple Counseling"
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="flex flex-col md:flex-row gap-8 mt-8">
                  {/* Text Content */}
                  <div className="md:w-1/2 bg-white rounded-lg p-10 font-secondary">
                    <h3 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                    </h3>
                    <p className="mb-8">
                      Couples therapy is a form of psychotherapy that can help
                      you and your partner improve your relationship. If you are
                      having relationship difficulties, you can seek couples
                      therapy to help rebuild your relationship.
                    </p>
                    <h4 className="text-xl font-medium text-black">Benefits</h4>
                    <ul className="list-disc list-inside space-y-3">
                      <li>Understand each other better</li>
                      <li>Identify relationship issues</li>
                      <li>Improve communication skills</li>
                      <li>Resolve conflicts</li>
                      <li>Strengthen friendship and attachment</li>
                    </ul>
                  </div>

                  {/* Image Content */}
                  <div className="md:w-1/2">
                    <img
                      src={service2}
                      alt="Couple Counseling"
                      className="w-full md:h-[446px] rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel >
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                  {/* Text Content */}
                  <div className="md:w-1/2 bg-white rounded-lg p-10 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                  Felling Stuck
                  </h3>
                  <p className="mb-8">
                    Couples therapy is a form of psychotherapy that can help you
                    and your partner improve your relationship. If you are
                    having relationship difficulties, you can seek couples
                    therapy to help rebuild your relationship.
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understand each other better</li>
                    <li>Identify relationship issues</li>
                    <li>Improve communication skills</li>
                    <li>Resolve conflicts</li>
                    <li>Strengthen friendship and attachment</li>
                  </ul>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2">
                  <img
                    src={service3}
                    alt="Couple Counseling"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
              </TabPanel>
              <TabPanel>
               <div  className="flex flex-col md:flex-row gap-8 mt-8">
                 {/* Text Content */}
                 <div className="md:w-1/2 bg-white rounded-lg p-10 font-secondary">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                  Self-Confidences
                  </h3>
                  <p className="mb-8">
                    Couples therapy is a form of psychotherapy that can help you
                    and your partner improve your relationship. If you are
                    having relationship difficulties, you can seek couples
                    therapy to help rebuild your relationship.
                  </p>
                  <h4 className="text-xl font-medium text-black">Benefits</h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understand each other better</li>
                    <li>Identify relationship issues</li>
                    <li>Improve communication skills</li>
                    <li>Resolve conflicts</li>
                    <li>Strengthen friendship and attachment</li>
                  </ul>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2">
                  <img
                    src={service4}
                    alt="Couple Counseling"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
               </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
