import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';
import { HttpModule } from '@nestjs/axios';

const mock = {
  "status": "ok",
  "totalResults": 12159,
  "articles": [
      {
          "source": {
              "id": "the-verge",
              "name": "The Verge"
          },
          "author": "Jay Peters",
          "title": "Block and Blockstream are partnering with Tesla on an off-grid, solar-powered Bitcoin mine in Texas",
          "description": "Block and Blockstream are partnering with Tesla on an open-source, solar-powered Bitcoin mine, the companies announced Friday. Tesla’s 3.8-megawatt Solar PV array and its 12 megawatt-hour Megapack will power the facility, and construction has started on the p…",
          "url": "https://www.theverge.com/2022/4/8/23016553/block-blockstream-tesla-solar-bitcoin-mine-texas",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/OYrvaaOHBuEpdTeRO55nZnZdexs=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8937281/acastro_170726_1777_0007_v2.jpg",
          "publishedAt": "2022-04-08T16:02:52Z",
          "content": "Its set to open later this year\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by Alex Castro / The Verge\r\nBlock and Blockstream, a … [+1336 chars]"
      },
    ]
}

describe('NewsService', () => {
  let service: NewsService;

  const mockNewsService = {
    getAllNews: jest.fn(() => { return mock }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsService],
      imports: [HttpModule],
    })
      .overrideProvider(NewsService)
      .useValue(mockNewsService)
      .compile();

    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be call to all news endpoint', async () => {
    expect.assertions(1);
    const news = await service.getAllNews('?page=1&pageSize=10&b=bitcoin', true)
    expect(news).toEqual(mock);
  });

  it('should be call to top headlines endpoint', async () => {
    expect.assertions(1);
    const news = await service.getAllNews('?page=1&pageSize=10&b=bitcoin&country=us', false)
    expect(news).toEqual(mock);
  });
});
