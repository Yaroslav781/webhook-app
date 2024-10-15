import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';
import { WebhookController } from './webhook/webhook.controller';
import { WebsocketGateway } from './websocket.gateway';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { RowModule } from './row/row.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), RowModule],
  controllers: [AppController, WebhookController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
