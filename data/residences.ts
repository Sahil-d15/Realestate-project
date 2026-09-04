export interface Residence {
  id: string;
  number: string;
  name: string;
  plotAreaSqFt: string;
  plotAreaSqM: string | null;
  plotAreaNote?: string;
  builtUpAreaSqFt: string;
  builtUpAreaSqM: string;
  description: string;
  groundPlan: string;
  firstPlan: string;
  render: string;
}

export const residences: Residence[] = [
  {
    id: "residence-1",
    number: "01",
    name: "Residence 01",
    plotAreaSqFt: "3,468.35",
    plotAreaSqM: "322.22",
    builtUpAreaSqFt: "2,502.86",
    builtUpAreaSqM: "232.52",
    description:
      "A generous corner residence with an expansive plot, thoughtful room planning and private outdoor space — designed to balance privacy with natural light.",
    groundPlan: "/images/plans/residence-1-ground.jpg",
    firstPlan: "/images/plans/residence-1-first.jpg",
    render: "/images/hero/hero.jpg",
  },
  {
    id: "residence-2",
    number: "02",
    name: "Residence 02",
    plotAreaSqFt: "3,823.41",
    plotAreaSqM: "355.20",
    builtUpAreaSqFt: "2,502.86",
    builtUpAreaSqM: "232.52",
    description:
      "The largest plot in the collection, offering exceptional outdoor space, dedicated parking and well-proportioned living areas across two floors.",
    groundPlan: "/images/plans/residence-2-ground.jpg",
    firstPlan: "/images/plans/residence-2-first.jpg",
    render: "/images/hero/hero.jpg",
  },
  {
    id: "residence-3",
    number: "03",
    name: "Residence 03",
    plotAreaSqFt: "2,288.34",
    plotAreaSqM: null,
    plotAreaNote: "Metric area subject to owner verification before launch.",
    builtUpAreaSqFt: "2,256.03",
    builtUpAreaSqM: "209.59",
    description:
      "A well-proportioned residence with a private compound wall, modern kitchen and calm residential setting — practical comfort at every level.",
    groundPlan: "/images/plans/residence-3-ground.jpg",
    firstPlan: "/images/plans/residence-3-first.jpg",
    render: "/images/hero/hero.jpg",
  },
  {
    id: "residence-4",
    number: "04",
    name: "Residence 04",
    plotAreaSqFt: "2,240.34",
    plotAreaSqM: "208.13",
    builtUpAreaSqFt: "2,294.03",
    builtUpAreaSqM: "213.12",
    description:
      "A compact and efficient independent home, delivering quality finishes, private parking and generous built-up area across ground and first floor.",
    groundPlan: "/images/plans/residence-4-ground.jpg",
    firstPlan: "/images/plans/residence-4-first.jpg",
    render: "/images/hero/hero.jpg",
  },
  {
    id: "residence-5",
    number: "05",
    name: "Residence 05",
    plotAreaSqFt: "3,005.12",
    plotAreaSqM: "279.18",
    builtUpAreaSqFt: "2,294.03",
    builtUpAreaSqM: "213.12",
    description:
      "A spacious independent residence with a generous plot, private outdoor boundary and thoughtfully arranged living spaces — peace and privacy in equal measure.",
    groundPlan: "/images/plans/residence-5-ground.jpg",
    firstPlan: "/images/plans/residence-5-first.jpg",
    render: "/images/hero/hero.jpg",
  },
];
