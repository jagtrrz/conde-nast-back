import { Controller, Get, Query } from '@nestjs/common';
import { ResponseNews } from './dto/news.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {

    constructor(
        private readonly newsService: NewsService,
    ){}
    
    @Get('/everything')
    async getAllNews(@Query() query): Promise<ResponseNews> {
        return this.newsService.getAllNews(query, true)
    }

    @Get('/top-headlines')
    async getTopHeadlinesNews(@Query() query): Promise<ResponseNews> {
        return this.newsService.getAllNews(query, false)
    }
}
