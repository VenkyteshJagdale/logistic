import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true, length: 6 })
  issueId: string;

  @Column()
  issueType: string;

  @Column({ length: 100 })
  issueDescription: string;

  @Column({ default: 'pending' })
  issueStatus: string;

  @Column()
  userName: string;

  @CreateDateColumn()
  createdAt: Date;
}
