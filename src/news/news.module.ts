import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NewsService } from './news.service';

@Module({
    imports: [
        HttpModule,
    ],
    providers: [
        NewsService
    ]
})
export class NewsModule {}
