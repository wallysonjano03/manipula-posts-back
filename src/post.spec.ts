import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post, PostSchema } from './post.model';
import { mongooseTestingModule } from './testing-utils';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [
        PostService,
        {
          provide: getModelToken(Post.name),
          useValue: PostSchema,
        },
      ],
      imports: [mongooseTestingModule],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a post', async () => {
    const post: Post = { title: 'Test Post', content: 'Lorem ipsum', author: 'John Doe' };
    jest.spyOn(service, 'create').mockResolvedValue(post);

    expect(await controller.create(post)).toBe(post);
  });

  // Add more test cases for findAll, findOne, update, and remove methods
});

// testing-utils.ts
import { Test } from '@nestjs/testing';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const mongooseTestingModule = async (options?: MongooseModuleOptions) => {
  const mongod = new MongoMemoryServer();
  const mongoUri = await mongod.getUri();
  
  return Test.createTestingModule({
    imports: [
      MongooseModule.forRoot(mongoUri, {
        ...options,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    ],
  }).compile();
};
