import { Test, TestingModule } from '@nestjs/testing';
import { CommodityService } from './commodity.service';

describe('CommodityService', () => {
  let service: CommodityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommodityService],
    }).compile();

    service = module.get<CommodityService>(CommodityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
