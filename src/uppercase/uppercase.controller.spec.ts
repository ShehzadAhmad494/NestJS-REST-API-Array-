import { Test, TestingModule } from '@nestjs/testing';
import { UppercaseController } from './uppercase.controller';

describe('UppercaseController', () => {
  let controller: UppercaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UppercaseController],
    }).compile();

    controller = module.get<UppercaseController>(UppercaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
