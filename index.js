import { EventLogger } from 'node-windows';
import build from 'pino-abstract-transport';

export default function (options) {
  const levelToStatus = (level) => {
    if (level === 40) return 'warning';
    if ([50, 60].includes(level)) return 'error';
    return 'info';
  };
  const logger = new EventLogger(options?.appName || 'app');
  return build(async (source) => {
    for await (const obj of source) {
      const { level, msg } = obj;
      logger[levelToStatus(level)](msg);
    }
  });
}
