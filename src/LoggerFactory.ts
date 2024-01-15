import { transports, format } from 'winston';
import { WinstonModule } from 'nest-winston';

export const LoggerFactory = () => {
  const consoleFormat = format.combine(format.timestamp(), format.ms());

  return WinstonModule.createLogger({
    level: 'info',
    transports: [
      new transports.Console({ format: consoleFormat }),
      new transports.File({ filename: 'teahan.log', format: consoleFormat }),
    ],
  });
};
