export const Breakpoint = {
  OldPhone: "@media (max-width: 320px)",
  Phone: "@media (max-width: 500px)",
  IosTablet: "@supports (-webkit-overflow-scrolling: touch)",
  PhonePortait:
    "@media only screen and (orientation: portrait) and (max-width: 500px)",
  Tablet: "@media (min-width: 501px) and (max-width: 812px)",
  Laptop: "@media (min-width: 813px) and (max-width: 1100px)",
  TabletOrLarger: "@media (min-width: 501px)",
  LaptopOrLarger: "@media (min-width: 813px)",
  MediumScreenOrLarger: "@media (min-width: 990px)",
  BigScreenOrLarger: "@media (min-width: 1246px)",
  TabletOrSmaller: "@media (max-width: 812px)",
};
