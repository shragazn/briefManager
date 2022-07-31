import Project from "./Project/Project";
import { H1 } from "../Utils/Text/StyledComponents";
import { BriefsContainer, MainPageContainer } from "./StyledComponents";
import { Project as ProjectType } from "../Types/ProjectTypes";
import Filters from "./Filters";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

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
        brief: 45555,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "ido zrihen", link: "" }],
      },
      {
        brief: 55455,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "ido zrihen", link: "" }],
      },
      {
        brief: 55635,
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
  {
    name: "קמפיין כנס שקר כלשהו",
    client: "מיקרוסופט",
    date: "21.03.2022",
    brief: 12345,
    type: "מיניסייט",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 55098,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "דניאל חדד", link: "" }],
      },
    ],
  },
  {
    name: "קמפיין כנס שקר כלשהו",
    client: "מיקרוסופט",
    date: "21.03.2022",
    brief: 12305,
    type: "מיניסייט",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 55738,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "דניאל חדד", link: "" }],
      },
    ],
  },
  {
    name: "קמפיין כנס שקר כלשהו",
    client: "מיקרוסופט",
    date: "21.03.2022",
    brief: 92345,
    type: "מיניסייט",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 55698,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "דניאל חדד", link: "" }],
      },
    ],
  },
  {
    name: "קמפיין כנס שקר כלשהו",
    client: "מיקרוסופט",
    date: "21.03.2022",
    brief: 19345,
    type: "מיניסייט",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 56498,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "דניאל חדד", link: "" }],
      },
    ],
  },
  {
    name: "קמפיין כנס שקר כלשהו",
    client: "מיקרוסופט",
    date: "21.03.2022",
    brief: 12845,
    type: "מיניסייט",
    process: "בעבודה",
    users: [
      { userName: "עידו זריהן", link: "" },
      { userName: "רון כהן", link: "" },
      { userName: "מאור וקנין", link: "" },
    ],
    products: [
      {
        brief: 54798,
        date: "21.03.2022",
        details: { PO: 15528, invoice: 15528, size: "450*500" },
        description: "טקסט לדוגמה שמתאר את הפרוייקט",
        name: "סרט כלשהו",
        process: "בעבודה",
        type: "סרט",
        users: [{ userName: "דניאל חדד", link: "" }],
      },
    ],
  },
] as ProjectType[];
export default function Main({}: Props) {
  const [filters, setFilters] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState(MOCK);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) console.log(inView);
  }, [inView]);

  const handleTagDelete = (i: number) => {
    setFilters(filters.filter((item, idx) => i != idx));
  };
  const handleAddTag = (tag: string) => {
    setFilters([...filters, tag]);
  };

  const handleClearFilters = () => {
    setFilters([]);
    setFilteredData(MOCK);
  };

  useEffect(() => {
    let filtered = MOCK;
    filters.forEach(
      (keyWord) =>
        (filtered = filtered.filter((project) =>
          JSON.stringify(project).includes(keyWord)
        ))
    );
    setFilteredData(filtered);
  }, [filters]);

  return (
    <MainPageContainer>
      <BriefsContainer>
        <H1>בריפים כלליים</H1>
        {filteredData.map((project, i) => {
          if (i == filteredData.length - 1)
            return (
              <Project
                {...project}
                key={`${project.brief} ${project.client}`}
                ref={ref}
              />
            );
          else
            return (
              <Project
                {...project}
                key={`${project.brief} ${project.client}`}
              />
            );
        })}
      </BriefsContainer>
      <Filters
        tags={filters}
        onTagDelete={handleTagDelete}
        onTagAdd={handleAddTag}
        onFilterIconClick={handleClearFilters}
      />
    </MainPageContainer>
  );
}
