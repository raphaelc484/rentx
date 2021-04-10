import { container } from "tsyringe";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DaysjsDateProvider } from "./DateProvider/implementations/DaysjsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";

container.registerSingleton<IDateProvider>(
  "DaysjsDateProvider",
  DaysjsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
