import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configs } from './configs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configs.DB_HOST,
      port: configs.DB_PORT,
      username: configs.DB_USERNAME,
      password: configs.DB_PASSWORD,
      database: configs.DB_NAME, 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
