import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import config from './ormconfig';
import { WebhookController } from './webhook/webhook.controller';
import { WebsocketGateway } from './websocket.gateway';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config)],
  controllers: [AppController, WebhookController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
