import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Exclude } from "class-transformer";
import Schedules from "./schedules.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 150 })
  @Exclude()
  password: string;

  @Column()
  isAdm: boolean;

  @Column("boolean", { default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules;
}

export default User;
