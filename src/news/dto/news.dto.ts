export class NewsResponseApi {
    status: string;
    totalResults: number;
    articles: Articles[]
}

export class Articles {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string
}

export class Source {
    id: string;
    name: string
}