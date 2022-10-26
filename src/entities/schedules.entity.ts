import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Properties from "./properties.entity";
import User from "./user.entity";

@Entity("schedules")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => User, { eager: true })
  user: User;

  @ManyToOne(() => Properties)
  property: Properties;
}

export default Schedules;
