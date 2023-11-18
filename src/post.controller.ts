import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from './post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    findAll(): Promise<PostEntity[]> {
        return this.postService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<PostEntity> {
        return this.postService.findOne(+id);
    }

    @Post()
    create(@Body() post: PostEntity): Promise<PostEntity> {
        return this.postService.create(post);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() post: PostEntity): Promise<PostEntity> {
        return this.postService.update(+id, post);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.postService.remove(+id);
    }
    @Post(':id/comment')
    addComment(@Param('id') id: string, @Body() comment: Comment): Promise<PostEntity> {
    return this.postService.addComment(+id, comment);
  }
  @Get('author/:author')
  findByAuthor(@Param('author') author: string): Promise<Post[]> {
    return this.postService.findByAuthor(author);
  }
}
