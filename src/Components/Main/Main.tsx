import Project from "../Project/Project";
import { H1 } from "../Utils/Text/StyledComponents";
import { MainContainer } from "./StyledComponents";

type Props = {};

const MOCK = [
  { name: "קמפיין כנס שקר כלשהו", client: "מיקרוסופט", date: "21.03.2022" },
];
export default function Main({}: Props) {
  return (
    <MainContainer>
      <H1>בריפים כלליים</H1>
      <Project
        name="קמפיין כנס שקר כלשהו"
        client="מיקרוסופט"
        date="21.03.2022"
        brief={12345}
        type={"מיניסייט"}
        process={"בעבודה"}
        users={[
          { userName: "עידו זריהן", link: "" },
          { userName: "רון כהן", link: "" },
          { userName: "מאור וקנין", link: "" },
        ]}
        products={[
          {
            brief: 55555,
            date: "21.03.2022",
            details: {},
            name: "סרט כלשהו",
            process: "בעבודה",
            type: "סרט",
            users: [{ userName: "ido zrihen", link: "" }],
          },
        ]}
      ></Project>
    </MainContainer>
  );
}
