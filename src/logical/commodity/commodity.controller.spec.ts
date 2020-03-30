import { Test, TestingModule } from '@nestjs/testing';
import { CommodityController } from './commodity.controller';

describe('Commodity Controller', () => {
  let controller: CommodityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommodityController],
    }).compile();

    controller = module.get<CommodityController>(CommodityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
