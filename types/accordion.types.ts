export type IAccordionNav = {
  title: string;
  path?: string;
  img?: string;
};

export type IAccordion = {
  title: string;
  path?: string;
  navs: IAccordionNav[];
  img?: string;
};
