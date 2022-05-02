import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { NewsResponseApi } from './dto/news.dto';


@Injectable()
export class NewsService {
    base_url: string = process.env.API_HOST
    api_key: string = process.env.API_KEY

    constructor(
        private httpService: HttpService,
    ){
    }
    async getAllNews(query: any, isEverything: boolean)  {
        const _query = Object.keys(query)
            .map((key) => key + "=" + query[key])
            .join("&")
        
        const path = isEverything ? 'everything' : 'top-headlines'

        const url = `${this.base_url}${path}?${_query}`

        const headers = {
            'X-Api-Key': this.api_key,
            "Access-Control-Allow-Origin": "*"
        }

        try {
            const response = await firstValueFrom(this.httpService.get<NewsResponseApi>(url, { headers, }))
            return {
                status: 200,
                data: response.data
            }
        } catch (error) {
            return {
                status: error.status,
                message:  error.message,
                data: error.data
            }
        }
    }
}
