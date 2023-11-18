// post.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  async findByAuthor(author: string): Promise<Post[]> {
    return this.postRepository.find({ where: { author } });
  }
  addComment(arg0: number, comment: Comment): Promise<Post> {
      throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOne(id);
  }

  create(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }

  async update(id: number, post: Post): Promise<Post> {
    await this.postRepository.update(id, post);
    return this.postRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
  
}
