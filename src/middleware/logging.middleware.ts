import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggingMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`Incoming Request: ${req.method} ${req.url}`);

    const originalSend = res.send.bind(res);

    res.send = (...args) => {
      this.logger.log(`Outgoing Response: ${res.statusCode}`);
      return originalSend(...args);
    };

    next();
  }
}
