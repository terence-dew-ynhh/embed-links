import * as React from "react";
import EmbedLogo from "../images/embedlogo.jpg";
import Emergency from "../images/emergencymed.png";
import BUPinit from "../images/bup.png";
import MDCalc from "../images/mdcalc.png";
import Treatment from "../images/treatment.png";
import NIHCollab from "../images/nihcollab.png";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// styles
const pageStyles = {
  color: "#232129",
  padding: 7,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const listStyles = {
  marginTop: 50,
};

const sublistStyles = {
  marginBottom: 10,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: "1.2rem",
  maxWidth: 560,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "1rem",
  verticalAlign: "5%",
};

const img = {
  width: "100%",
  marginTop: 50,
};

const headerimg = {
  height: 130,
};

const horizontalimg = {
  width: 150,
  marginTop: 50,
};

// data
const links = [
  {
    text: "EMBED web application (formatted for Epic integration) ",
    url: "https://embedv2.ynhh.org/",
    color: "#E95800",
    header: "Where can you find EMBED?",
    subheader:
      "EMBED can be installed within the EHR or accessed via a smartphone app.",
  },
  {
    text: "EMBED BUP initiation iPhone app",
    url: "https://apps.apple.com/us/app/bup-initiation/id1574350314#?platform=iphone",
    color: "#1099A8",
  },
  {
    text: "EMBED BUP initiation Android/Google smartphone app",
    url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.amstonstudio.yaleembed&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341568203%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=jzB%2BX%2FHDAX1WzOvNHcKh2prMeZCJ2lI0aCduA%2FuI6ZQ%3D&reserved=0",
    color: "#BC027F",
  },
  {
    text: "EMBED on MDCalc (web version)",
    url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.mdcalc.com%2Femergency-department-initiated-buprenorphine-opioid-use-disorder-embed&data=04%7C01%7Cterence.dew%40yale.edu%7Cec4a4484063d4b73271a08d994b7974d%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637704338502789632%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mqyAJT45emw3rePt5ulltcleiT6xbC15ANYjDe%2F1U8M%3D&reserved=0",
    color: "#0D96F2",
  },
  {
    header: "Additional Resources on ED-Initiated Buprenorphine",
    text: "Yale ED-Initiated Buprenorphine resources ",
    url: "https://medicine.yale.edu/edbup/",
    sublinks: [
      {
        text: "Treatment Algorithm",
        url: "https://medicine.yale.edu/edbup/treatment/Algorithm_338052_284_42796_v2.pdf",
        color: "#E95800",
      },
      {
        text: "Diagnosing OUD ",
        url: " https://medicine.yale.edu/edbup/assessment/Identification%20of%20OUD.%20IWP.%206.18_338466_284_42795_v2.docx",
        color: "#1099A8",
      },
      {
        text: "Clinical Opioid Withdrawal Scale (COWS) ",
        url: "https://medicine.yale.edu/edbup/assessment/COWS_338055_284_42795_v4.pdf",
        color: "#BC027F",
      },
      {
        text: "Home Induction instructions ",
        url: "https://medicine.yale.edu/edbup/discharge/Home_Buprenorphine_Initiation_338574_284_42799_v1.pdf",
        color: "#0D96F2",
      },
      {
        text: "Home Induction Instructions in Spanish",
        url: "https://medicine.yale.edu/edbup/discharge/Take%20home%20bup%20for%20spanish%20translation%205.7.21%20%281%29_ESUS_413576_284_42799_v2.pdf",
        color: "#8EB814",
      },
      {
        text: "BUP Referral Form ",
        url: "https://medicine.yale.edu/edbup/discharge/BUPRENORPHINE%20REFERRAL%20FORM_8.20.18v3_338054_284_42799_v3.docx",
        badge: true,
        color: "#663399",
      },
      {
        text: "Screening Brief Intervention & Referral Treatment (SBIRT)  ",
        url: "https://medicine.yale.edu/sbirt/",
        color: "#8EB814",
      },
    ],
    color: "#663399",
  },
  {
    text: "EMBED NIH Collaboratory Project Page ",
    url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Frethinkingclinicaltrials.org%2Fdemonstration-projects%2Fug3-project-pragmatic-trial-of-user-centered-clinical-decision-support-to-implement-emergency-department-initiated-buprenorphine-for-opioid-use-disorder-embed%2F&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341588189%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=WuHQoDyTj6duirKSGqLnLIThvuME5Y4SQ23pcB0dsP8%3D&reserved=0",
    color: "#8EB814",
    img: NIHCollab,
  },
  {
    text: "EMBED Related Publications",
    url: "",
    sublinks: [
      {
        text: "Protocol for EMBED Trial ",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fbmjopen.bmj.com%2Fcontent%2F9%2F5%2Fe028488&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341598182%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=4sNsXARqRJPCeiImgKndorNp6MQMtvEeo4lZg7%2Be%2B48%3D&reserved=0",
        color: "#E95800",
      },
      {
        text: "User-centered design ",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fhumanfactors.jmir.org%2F2019%2F1%2Fe13121%2F&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341608176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=Vf6ORb1PDmBCEc9REknByAMY4swRJROPgQNLlNeBnt8%3D&reserved=0",
        color: "#1099A8",
      },
      {
        text: "EHR Phenotype ",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmedinform.jmir.org%2F2019%2F4%2Fe15794&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341608176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=Sl66Ht%2FNyyexy%2BpBCxwfxysqrVcIqGuLn%2BeBpUkgIV8%3D&reserved=0",
        color: "#BC027F",
      },
      {
        text: "IT integration",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Facademic.oup.com%2Fjamiaopen%2Farticle%2F2%2F4%2F434%2F5599847&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341618171%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=00pGPgDWKjcfa17GrHQ5CK4tms3uQdOa9WwG6tQu8qk%3D&reserved=0",
        color: "#0D96F2",
      },
      {
        text: "Automating the warm handoff ",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.sciencedirect.com%2Fscience%2Farticle%2Fpii%2FS0740547219300078&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341618171%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=kxeXDg3%2F%2BKOe7BgRAyEWyt7ArV7vCEcp5W%2BBIJ%2BZn6M%3D&reserved=0",
        color: "#8EB814",
      },
      {
        text: "Pilot study/Interrupted time series ",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fonlinelibrary.wiley.com%2Fdoi%2Ffull%2F10.1111%2Facem.14002&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341628176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=CsA%2FhwqO7nI%2FmgRJq3bJNFLMjKfPn5Dt4217kQy6r40%3D&reserved=0",
        badge: true,
        color: "#663399",
      },
      {
        text: "Project Update",
        url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fjpbs.hapres.com%2Fhtmls%2FJPBS_1192_Detail.html&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341628176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=PuJJiM4G6fQJh1V1TnIKalmiQPsa49oBAvPHo%2BDGpGc%3D&reserved=0",
        badge: true,
        color: "#663399",
      },
    ],
    color: "#663399",
  },
  {
    text: "EMBED NIH RePORTER ",
    url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Freporter.nih.gov%2Fproject-details%2F9671625&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341638160%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=TAxxRD%2FGEsi545NpTJAxxs3BAVHmLL36Q679zij%2BS%2B0%3D&reserved=0",
    color: "#BC027F",
  },
  {
    text: "EMBED on Clinicaltrials.gov",
    url: "https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fclinicaltrials.gov%2Fct2%2Fshow%2FNCT03658642&data=04%7C01%7Cterence.dew%40yale.edu%7Ccb8daefb1f1f4a4e178708d9875d5db2%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637689657341648154%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=hhZ%2FBwmiG38BnMjmEaXpgKSl1HOAfEPCj538%2BOrxEPY%3D&reserved=0",
    color: "#0D96F2",
  },
];

const modal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// markup
const IndexPage = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <main style={pageStyles}>
      <title>EMBED</title>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 3% 0 1%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 3% 0 1%",
          }}
        >
          <img style={headerimg} alt="topic logo" src={Treatment} />
          <img style={headerimg} alt="topic logo" src={EmbedLogo} />
          {/* <img style={headerimg} alt="topic logo" src={Emergency} /> */}
          <h3>
            EMBED: Tools & Resources for ED Initiation of Buprenorphine for
            Opioid Use Disorder Patients
          </h3>
        </Box>
      </Box>
      <Box>
        <p>
          <h3>What is EMBED?</h3>
          EMBED is an electronic tool that can help clinicians initiate
          buprenorphine in the ED for patients with opioid use disorder.
        </p>
        <p>
          <h3>What can EMBED do?</h3>
          <ol>
            <li>Diagnose OUD</li>
            <li>Assess withdrawal severity with the COWS scale</li>
            <li>Motivate patient readiness to to start medication for OUD</li>
            <li>Determine buprenorphine dosing strategy</li>
            <li>
              Automate EHR activities including notes, discharge instructions,
              orders, prescriptions, and referral
            </li>
          </ol>
        </p>
        <p>
          <h3> Demo video of EMBED</h3>
          <a
            style={linkStyle}
            target="_blank"
            rel="noreferrer"
            href={"https://www.youtube.com/watch?v=-XY4EIdaNKw"}
          >
            https://www.youtube.com/watch?v=-XY4EIdaNKw
          </a>
        </p>
      </Box>
      <ul style={listStyles}>
        {links.map((link, idx) => (
          <>
            {link.img && (
              <img
                style={idx === 6 || idx === 9 ? horizontalimg : img}
                alt="topic logo"
                src={link.img}
              />
            )}
            {link.header && <h3>{link.header}</h3>}
            {link.subheader && <p>{link.subheader}</p>}
            <li key={link.url} style={{ ...listItemStyles, color: "#000000" }}>
              <span>
                {link.url !== "" ? (
                  <a
                    style={linkStyle}
                    target="_blank"
                    rel="noreferrer"
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                  >
                    {link.text}
                  </a>
                ) : (
                  <h3>{link.text}</h3>
                )}
              </span>
              <ul style={sublistStyles}>
                {link.sublinks &&
                  link.sublinks.map((sublink) => (
                    <li
                      key={sublink.url}
                      style={{ ...listItemStyles, color: "#000000" }}
                    >
                      <span>
                        <a
                          style={linkStyle}
                          target="_blank"
                          rel="noreferrer"
                          href={`${sublink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                        >
                          {sublink.text}
                        </a>
                        {/* <p style={descriptionStyle}>{link.description}</p> */}
                      </span>
                    </li>
                  ))}
              </ul>
            </li>
          </>
        ))}
      </ul>
      <ul>
        <h2>Contact:</h2>
        <li>
          For EMBED IT Installation questions, contact:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medicine.yale.edu/profile/terence_dew/"
          >
            Terence Dew
          </a>{" "}
          - <a href="mailto:terence.dew@yale.edu">terence.dew@yale.edu</a>
        </li>
        <li>
          For all other general questions, contact:           <a
            target="_blank"
            rel="noreferrer"
            href="https://medicine.yale.edu/profile/bidisha_nath/"
          >Bidisha Nath Bidisha</a> -{" "}
          <a href="mailto:nath@yale.edu">nath@yale.edu</a>
        </li>
      </ul>
      <h3>
        Project PI:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medicine.yale.edu/profile/edward_melnick/"
        >
          Edward Melnick, MD, MHS{" "}
        </a>
      </h3>
    </main>
  );
};

export default IndexPage;
