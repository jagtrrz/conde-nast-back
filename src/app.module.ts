import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NewsModule,
    HttpModule,
  ],
  controllers: [
    AppController, 
    NewsController
  ],
  providers: [
    AppService, 
    NewsService,
  ],
})
export class AppModule {}
