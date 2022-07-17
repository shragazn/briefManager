import Project from "../Project/Project";
import { H1 } from "../Utils/Text/StyledComponents";
import { MainContainer } from "./StyledComponents";
import { Project as ProjectType } from "../Types/ProjectTypes";
type Props = {};

const MOCK = [
  {
    name: "פרוייקט מספר2",
    client: "אל על",
    date: "21.06.2022",
    brief: 12648,
    type: "סרטונים",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 55555,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "ido zrihen", link: "" }],
      },
      {
        brief: 55555,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "ido zrihen", link: "" }],
      },
      {
        brief: 55555,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "ido zrihen", link: "" }],
      },
    ],
  },
  // {
  //   name: "קמפיין כנס שקר כלשהו",
  //   client: "מיקרוסופט",
  //   date: "21.03.2022",
  //   brief: 12345,
  //   type: "מיניסייט",
  //   process: "בעבודה",
  //   users: [
  //     { userName: "עידו זריהן", link: "" },
  //     { userName: "רון כהן", link: "" },
  //     { userName: "מאור וקנין", link: "" },
  //   ],
  //   products: [
  //     {
  //       brief: 55555,
  //       date: "21.03.2022",
  //       details: { PO: 15528, invoice: 15528, size: "450*500" },
  //       description: "טקסט לדוגמה שמתאר את הפרוייקט",
  //       name: "סרט כלשהו",
  //       process: "בעבודה",
  //       type: "סרט",
  //       users: [{ userName: "ido zrihen", link: "" }],
  //     },
  //   ],
  // },
] as ProjectType[];
export default function Main({}: Props) {
  return (
    <MainContainer>
      <H1>בריפים כלליים</H1>

      {MOCK.map((project) => (
        <Project {...project} />
      ))}
    </MainContainer>
  );
}
