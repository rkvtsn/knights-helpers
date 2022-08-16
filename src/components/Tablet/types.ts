export interface TabletProps {
  fame?: Status[];
  power?: Status[];
  agility?: Status[];
  wisdom?: Status[];
}

interface StatusContent {
  type: "icon" | "symbSkillol";
  value: string;
}

export interface Status {
  index: number;
  content?: StatusContent;
  border?: boolean;
}
