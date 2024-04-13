import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { userDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAllUsers() {
    return this.userRepository.find();
  }

  createUser(user: userDTO) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUser(email: string) {
    return this.userRepository.findOne({
      where: { email }
    })
  }

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: { id }
    })
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }
}