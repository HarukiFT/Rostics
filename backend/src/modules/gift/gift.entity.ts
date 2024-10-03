import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({ default: 0, type: 'bigint' })
  owner: number;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({ default: 0 })
  assignType: number;

  @Column({ type: 'timestamp with time zone', nullable: true })
  updatedAt?: Date;
}
