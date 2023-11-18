import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PostModule } from './post/post.module';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nome-do-banco-de-dados'),
    // ...
    TypeOrmModule.forRoot(),
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' }, // Defina o tempo de expiração do token
    }),
    PostModule,

  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}