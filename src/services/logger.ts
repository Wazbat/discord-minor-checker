import { createLogger, transports, format } from 'winston';
import  DailyRotateFile from 'winston-daily-rotate-file';

const fileLogs: DailyRotateFile = new DailyRotateFile({
    filename: 'application-%DATE%.log',
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '14d'
});
const fileErrorLogs: DailyRotateFile = new DailyRotateFile({
    level: 'error',
    filename: 'application-error-%DATE%.log',
    dirname: 'logs',
    datePattern: 'YYYY-MM-DD-HH',
    maxSize: '20m',
    maxFiles: '14d',
    handleExceptions: true,
    handleRejections: true
});

const consoleTransport = new transports.Console({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    handleExceptions: true,
    handleRejections: true
});

const logger = createLogger({
    format: format.combine(
        format.errors({ stack: true })
    ),
    defaultMeta: {
        service: 'bot'
    },
    transports: [
        consoleTransport,
        fileLogs,
        fileErrorLogs
    ],
    silent: process.env.NODE_ENV === 'test'
});


export default logger;
